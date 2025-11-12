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
---

If you're managing multiple Sphinx documentation projects, you've likely encountered the pain of keeping Python environments consistent, running repetitive build commands, and manually wiring up dependencies. CMake can help automate this workflow, giving you the same benefits for documentation that you get for code builds: reproducibility, dependency management, and integration with your existing build system.

This post demonstrates how to use CMake to manage multiple Sphinx documentation modules in a single project. All the code shown here comes from my [cmake-sphinx-example](https://github.com/yourusername/cmake-sphinx-example) repository, which you can use as a template for your own projects.

## Why CMake for Documentation?

You might be wondering: "Why add CMake to my documentation workflow?" Here are the key benefits:

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

### 1. Environment Setup (`SetupSphinx.cmake`)

When you run `cmake --preset documentation`, the `setup_sphinx_environment()` function from `SetupSphinx.cmake` executes:

1. **Python Detection**: Locates Python 3 on your system
2. **Virtual Environment**: Creates `.docs-venv/` if it doesn't exist, or reuses the existing one
3. **Dependency Management**:
   - Checks if `docs/requirements.txt` has changed since last install
   - Only reinstalls dependencies when needed (tracked via `requirements.stamp`)
   - Upgrades pip and installs Sphinx and all dependencies
4. **Verification**: Confirms Sphinx installation and exports executables (`SPHINX_EXECUTABLE`, `SPHINX_AUTOBUILD_EXECUTABLE`) for use by build targets

This smart caching means subsequent CMake configurations are fast—dependencies are only reinstalled when `requirements.txt` actually changes.

### 2. Module Creation (`AddSphinxModule.cmake`)

The `add_sphinx_module()` function creates standardized build targets for each documentation module. For a module named `module1`, you get:

- **`modules-module1_html`**: Builds HTML documentation once using `sphinx-build`
- **`modules-module1_auto`**: Starts `sphinx-autobuild` for development
- **`modules-module1_inventory`**: For cross-project references
- **`modules-module1_markdown`**: Builds markdown output

Each target is created using the `_add_sphinx_target` macro from `AddSphinxModule.cmake`:4, which properly configures the Sphinx command with source and build directories.

### 4. CMake Presets

The project includes several useful presets in `CMakePresets.json`:

- **Configure preset**: `cmake --preset documentation` - Sets up the environment
- **Build presets**:
  - `--preset documentation` - Builds all modules
  - `--preset build-modules-parallel` - Builds multiple output formats in parallel
- **Workflow preset**: `documentation-workflow` - Combines configure and build steps

These presets simplify the command-line interface and make it easy to remember common operations.

## Advanced Features

### Live Documentation Development

One of the most useful targets is the auto-build variant. Instead of manually rebuilding after each change, use:

```bash
cmake --build build --target modules-module1_auto
```

This starts `sphinx-autobuild`, which watches for file changes and automatically rebuilds the documentation, refreshing your browser in real-time. Perfect for iterative documentation writing.

### Building Multiple Formats

Each module can generate multiple output formats. The example repository demonstrates four builders:

- **html**: Standard HTML output (most common)
- **inventory**: Sphinx inventory files for `intersphinx` cross-references
- **markdown**: Markdown output for use in other systems

You can add additional formats by modifying the `add_sphinx_module()` function in `AddSphinxModule.cmake`:21 to include more `_add_sphinx_target` calls with different builders (e.g., `latex`, `epub`, `linkcheck`).

### Parallel Builds

CMake can build multiple targets in parallel. To build all HTML documentation simultaneously:

```bash
cmake --build build --parallel
```

Or use the preset for building specific combinations:

```bash
cmake --build --preset build-modules-parallel
```

## Troubleshooting

### CMake Can't Find Python

If CMake fails with "Python not found", ensure Python 3 is installed and available as `python3`:

```bash
python3 --version
```

You can modify `SetupSphinx.cmake`:9 to change the expected Python executable name if needed.

## Real-World Use Cases

This approach works particularly well for:

- **Multi-component projects**: When you have separate documentation for different modules, libraries, or services
- **Monorepos**: Managing documentation alongside code in a single repository
- **CI/CD pipelines**: Automated documentation builds integrate naturally with CMake-based build systems
- **Cross-referenced docs**: Using Sphinx inventory files to link between related documentation projects

## Conclusion

Using CMake to manage Sphinx documentation brings software engineering discipline to documentation workflows. You get automated environment setup, dependency tracking, and powerful build orchestration—all with familiar CMake commands and patterns.

The approach demonstrated here scales from simple single-module documentation to complex multi-project setups. The reusable CMake modules (`SetupSphinx.cmake` and `AddSphinxModule.cmake`) can be dropped into any project and customized to your needs.

To get started with your own project, check out the complete [cmake-sphinx-example repository](https://github.com/yourusername/cmake-sphinx-example) on GitHub. You can clone it, explore the structure, and adapt it to your documentation needs.

Happy documenting!

