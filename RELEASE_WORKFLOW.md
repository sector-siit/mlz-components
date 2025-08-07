# 🚀 Release Workflow Documentation

## Overview

Este proyecto utiliza un sistema automatizado de releases que maneja tanto versiones estables como release candidates.

## 🏗️ Estructura de Ramas

```
main (estable)     ─┬─ v1.0.0 ─┬─ v1.0.1 ─┬─ v1.1.0
                    │          │          │
develop (testing)   ┴─ RC.001 ─┴─ RC.002 ─┴─ RC.003
```

### `main` - Rama de Producción
- ✅ **Versiones estables**
- 📦 **Publicación automática a NPM**
- 🏷️ **Tags automáticos** (`v1.0.0`, `v1.0.1`)
- 📚 **Storybook desplegado** a GitHub Pages
- 🔒 **Solo merges desde develop**

### `develop` - Rama de Desarrollo  
- 🧪 **Release Candidates**
- 🏷️ **Tags con timestamp** (`v1.0.0-rc.202408071234`)
- 📦 **Artifacts para testing** (dist + storybook)
- ⚠️ **NO publicación a NPM**
- 🔄 **Nuevas features van aquí**

## 🚀 Automated Workflows

### 1. Release Stable (main)

**Trigger:** Push to `main` con nueva versión en `package.json`

**Acciones:**
1. 🔍 Build & Test
2. 📦 Publish to NPM (@sector.siit/mlz-components)
3. 🏷️ Create Git Tag (v{version})
4. 📝 Generate Release Notes
5. 🚀 Create GitHub Release
6. 📚 Deploy Storybook to GitHub Pages

**Ejemplo de Tag:** `v1.0.0`, `v1.0.1`, `v2.0.0`

### 2. Release Candidate (develop)

**Trigger:** Push to `develop`

**Acciones:**
1. 🔍 Build & Test
2. 🏷️ Create RC Tag with timestamp
3. 📦 Build artifacts (dist + storybook)
4. 🧪 Create Pre-release on GitHub
5. 📎 Attach build assets

**Ejemplo de Tag:** `v1.0.0-rc.202408071545`

## 🔄 Development Process

### Para nuevas features:

```bash
# 1. Checkout develop
git checkout develop
git pull origin develop

# 2. Crear feature branch
git checkout -b feature/new-component

# 3. Desarrollar y commitear
git add .
git commit -m "feat: add new component"

# 4. Push feature branch
git push origin feature/new-component

# 5. Crear PR hacia develop
# En GitHub: Create Pull Request develop ← feature/new-component

# 6. Al hacer merge a develop
git checkout develop
git pull origin develop  # ✨ Dispara RC automáticamente
```

### Para release estable:

```bash
# 1. Asegurar que develop está listo
git checkout develop
git push origin develop  # ✨ Crea último RC

# 2. Test del RC (descargar artifacts del release)

# 3. Merge a main
git checkout main
git merge develop

# 4. Actualizar versión (IMPORTANTE)
# Editar package.json -> version: "1.0.1"

# 5. Commit y push
git add package.json
git commit -m "chore: bump version to 1.0.1"
git push origin main  # 🚀 Dispara release completo
```

## 📦 NPM Publishing

### Configuración necesaria:

1. **NPM_TOKEN**: Secret en GitHub con permisos para `@sector.siit`
2. **Organization**: Package se publica como `@sector.siit/mlz-components`
3. **Access**: Público (`--access public`)

### Versioning:

- ✅ **Stable**: `1.0.0`, `1.0.1`, `1.1.0`
- 🧪 **RC**: Solo tags, NO se publican a NPM

## 🏷️ Tagging Strategy

### Stable Tags
```
v1.0.0    # Primera release estable
v1.0.1    # Patch release
v1.1.0    # Minor release
v2.0.0    # Major release
```

### RC Tags
```
v1.0.0-rc.202408071545    # RC con timestamp
v1.1.0-rc.202408081200    # RC para siguiente minor
```

## 📝 Release Notes

### Stable Release (auto-generado):
```markdown
## 🚀 Changes in v1.0.1

### ✨ Features
- Updated MLZ Components library

### 📦 Installation
npm install @sector.siit/mlz-components@1.0.1

### 📚 Documentation
- Storybook Documentation
- NPM Package
```

### Release Candidate (auto-generado):
```markdown
## 🧪 Release Candidate v1.0.1-rc.202408071545

### ⚠️ This is a Release Candidate
For testing purposes only. Not recommended for production.

### 🔍 What's being tested
- Component library build
- Storybook documentation
- TypeScript definitions
```

## 🛠️ Troubleshooting

### ❌ Release no se creó
- ✅ Verificar que `package.json` version cambió
- ✅ Verificar NPM_TOKEN en secrets
- ✅ Verificar permisos de GitHub Actions

### ❌ NPM publish falló
- ✅ Verificar permisos en organización @sector.siit
- ✅ Verificar que versión no existe ya
- ✅ Verificar formato del token NPM

### ❌ RC no incluye assets
- ✅ Verificar que build completó exitosamente
- ✅ Verificar que dist/ y storybook-static/ existen

## 🔐 Required Secrets

En GitHub Settings → Secrets and variables → Actions:

- `NPM_TOKEN`: Token de NPM con permisos para @sector.siit
- `GITHUB_TOKEN`: Auto-proveído por GitHub Actions

## 📊 Monitoring

### Ver releases:
- 🌐 **GitHub**: https://github.com/sector-siit/mlz-components/releases
- 📦 **NPM**: https://www.npmjs.com/package/@sector.siit/mlz-components
- 📚 **Storybook**: https://sector-siit.github.io/mlz-components/

### Ver workflows:
- ⚙️ **Actions**: https://github.com/sector-siit/mlz-components/actions
