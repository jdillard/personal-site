---
layout: post
title: "Managing Sphinx with CMake"
date: 2025-11-11
published: false
popularity: 17
comment_issue_id: 11
type: ssg
categories:
  - docs-as-code
---

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

1. **CMake Configuration**: When you run `cmake --preset documentation`, the `SetupSphinx.cmake` module:
   - Checks for Python 3
   - Creates a virtual environment in `.docs-venv/`
   - Installs Sphinx and dependencies from `docs/requirements.txt`
   - Sets up Sphinx executables for use by targets

2. **Documentation Targets**: Each module gets two targets:
   - `modules-<name>_html`: Build HTML documentation once
   - `modules-<name>_auto`: Start live-reload server for development

3. **Build Output**: Generated documentation is placed in `build/modules/<module-name>/`

