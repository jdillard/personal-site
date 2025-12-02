---
layout: post
description: "Learn how to automate Sphinx documentation builds with CMake for reproducible, parallel builds and better dependency management."
title: "Managing Sphinx with CMake"
date: 2025-11-11
published: false
popularity: 17
comment_issue_id: 11
type: ssg
categories:
  - docs-as-code
  - sphinx
  - cmake
---

If you're managing multiple Sphinx documentation projects with multiple contributors, you've likely encountered the pain of keeping Python environments consistent, running repetitive build commands, and troubleshooting CI.
CMake can help simplify this workflow, giving you the same benefits for documentation that you get for code builds: reproducibility, dependency management, and replication of your CI system.

This post demonstrates how to use CMake to manage multiple Sphinx documentation modules in a single project.
All the code shown here comes from my [cmake-sphinx-example](https://github.com/yourusername/cmake-sphinx-example) repository, which you can use as a inspiration for your own projects.


## Why CMake for Documentation?

Here are the key benefits:

1. **Automated Environment Setup**: CMake automatically creates and manages a Python virtual environment, installing Sphinx and dependencies without manual intervention.
2. **Parallel Builds**: Build multiple documentation modules simultaneously using CMake's parallel build capabilities.
3. **Preset Configuration**: CMake presets provide simple, memorable commands for common documentation workflows.

## Basic Usage

### Adding a New Module

1. Create a new directory under `docs/modules/`:

   ```bash
   mkdir docs/modules/mymodule
   ```

2. Add Sphinx documentation files (conf.py, index.rst, etc.)

3. Create `docs/modules/mymodule/CMakeLists.txt`:

   ```cmake
   project(mymodule LANGUAGES NONE)
   add_sphinx_module(${PROJECT_NAME} modules)
   ```

4. Add the subdirectory to `docs/modules/CMakeLists.txt`:

   ```cmake
   add_subdirectory(mymodule)
   ```

5. Reconfigure and build:

   ```bash
   cmake --preset documentation
   cmake --build build --target modules-mymodule_html
   ```

## Project Structure

```
.
├── cmake/
│   ├── AddSphinxModule.cmake    # Reusable function for adding doc modules
│   └── SetupSphinx.cmake        # Virtual environment and Sphinx setup
├── docs/
│   ├── modules/                 # Documentation modules
│   │   ├── module1/
│   │   ├── module2/
│   │   └── module3/
│   ├── requirements.txt         # Python dependencies
│   └── CMakeLists.txt
├── build/                       # Built documentation (git-ignored)
├── .docs-venv/                  # Python virtual environment (git-ignored)
├── CMakeLists.txt              # Root CMake configuration
└── CMakePresets.json           # CMake presets
```

## How It Works

The system is built around two key CMake modules that handle environment setup and module creation.

### 1. Environment Setup

When you run `cmake --preset documentation`, the `setup_sphinx_environment()` function in `SetupSphinx.cmake` executes:

1. **Python Detection**: Locates Python 3 on your system
2. **Virtual Environment**: Creates `.docs-venv/` if it doesn't exist, or reuses the existing one
3. **Dependency Management**:
   - Checks if `docs/requirements.txt` has changed since last install
   - Only reinstalls dependencies when needed (tracked via `requirements.stamp`)
   - Upgrades pip and installs Sphinx and all dependencies
4. **Verification**: Confirms Sphinx installation and exports executables (`SPHINX_EXECUTABLE`, `SPHINX_AUTOBUILD_EXECUTABLE`) for use by build targets

This smart caching means subsequent CMake configurations are fast and dependencies are only reinstalled when `requirements.txt` changes.

### 2. Module Creation

The `add_sphinx_module()` function in `AddSphinxModule.cmake` creates standardized build targets for each documentation module.
For a module named `module1`, you get:

- **`modules-module1_html`**: Builds HTML documentation once using `sphinx-build`
- **`modules-module1_auto`**: Starts `sphinx-autobuild` for development
- **`modules-module1_inventory`**: For cross-project references
- **`modules-module1_markdown`**: Builds markdown output

Each target is created using the `_add_sphinx_target` macro in `AddSphinxModule.cmake`, which properly configures the Sphinx command with source and build directories.

### 4. CMake Presets

The project includes several useful presets in `CMakePresets.json`:

- **Configure preset**: `cmake --preset documentation` - Sets up the environment
- **Build presets**:
  - `--preset documentation` - Builds all modules
  - `--preset build-modules-parallel` - Builds multiple output formats in parallel
- **Workflow preset**: `documentation-workflow` - Combines configure and build steps for CI

These presets simplify the command-line interface and make it easy to remember common operations.

## Advanced Features

### Live Documentation Development

One of the most useful targets is the auto-build variant. Instead of manually rebuilding after each change, use:

```bash
cmake --build build --target modules-module1_auto
```

This starts `sphinx-autobuild`, which watches for file changes and automatically rebuilds the documentation, refreshing your browser in real-time.
Perfect for iterative documentation writing.

### Parallel Builds

CMake can build multiple targets in parallel. To build all HTML documentation simultaneously:

```bash
cmake --build build --parallel
```

Or use the preset for building specific combinations:

```bash
cmake --build --preset build-modules-parallel
```

## Conclusion

Using CMake to manage Sphinx documentation brings software engineering discipline to documentation workflows.
You get automated environment setup, dependency tracking, and powerful build orchestration—all with familiar CMake commands and patterns.

The approach demonstrated here scales from simple single-module documentation to complex multi-project setups.

To get started with your own project, check out the complete [cmake-sphinx-example repository](https://github.com/yourusername/cmake-sphinx-example) on GitHub.
You can clone it, explore the structure, and adapt it to your documentation needs.

