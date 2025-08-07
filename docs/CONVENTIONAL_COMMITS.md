# Conventional Commits y Semantic Release

Este proyecto utiliza **Conventional Commits** y **Semantic Release** para automatizar completamente el versionado y los releases.

## 🚀 ¿Qué significa esto?

- ✅ **Nunca más te olvides de actualizar versiones**
- ✅ **Changelog automático**
- ✅ **Releases automáticos**
- ✅ **Versionado semántico inteligente**

## 📝 Formato de Commits Requerido

Todos los commits **DEBEN** seguir este formato:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Tipos Válidos

| Tipo | Descripción | Incremento de Versión |
|------|-------------|----------------------|
| `feat` | Nueva funcionalidad | **MINOR** (1.1.0) |
| `fix` | Corrección de bug | **PATCH** (1.0.1) |
| `docs` | Solo documentación | **PATCH** (1.0.1) |
| `style` | Cambios de formato | **PATCH** (1.0.1) |
| `refactor` | Refactorización | **PATCH** (1.0.1) |
| `perf` | Mejoras de performance | **PATCH** (1.0.1) |
| `test` | Agregar/actualizar tests | **PATCH** (1.0.1) |
| `chore` | Cambios de build/tools | **PATCH** (1.0.1) |
| `ci` | Cambios de CI/CD | **PATCH** (1.0.1) |

### Breaking Changes

Para cambios que rompen compatibilidad (incremento **MAJOR**):

```bash
# Opción 1: Usar ! después del tipo
feat!: remove deprecated API

# Opción 2: Agregar en el footer
feat: add new component

BREAKING CHANGE: removes support for old prop format
```

## ✅ Ejemplos de Commits Válidos

```bash
# Nueva funcionalidad (minor bump)
feat: add DateTimeRange component
feat(input): add validation support
feat(button): add new variant styles

# Correcciones (patch bump)
fix: resolve button click handler issue
fix(input): correct error message display
fix: update dependency to fix security issue

# Documentación (patch bump)
docs: update README with installation instructions
docs(components): add usage examples for Button

# Refactoring (patch bump)
refactor: improve component prop handling
refactor(utils): optimize validation functions

# Breaking change (major bump)
feat!: redesign API structure

feat: update component props

BREAKING CHANGE: prop names have changed from camelCase to kebab-case
```

## 🚫 Ejemplos de Commits Inválidos

```bash
❌ Add new component          # Falta tipo
❌ feat Add new component     # Falta :
❌ FEAT: add component        # Tipo en mayúsculas
❌ feat: Add new component.   # No debe terminar en punto
❌ feat:add new component     # Falta espacio después de :
```

## 🛠️ Herramientas Disponibles

### 1. Commit Interactivo (Recomendado)

```bash
bun run commit
# o
npx git-cz
```

Esto abrirá un asistente interactivo para crear commits válidos.

### 2. Commit Manual

```bash
git commit -m "feat: add new DateTimeRange component"
```

### 3. Validación Local

```bash
# Verificar el último commit
echo "feat: add new component" | bun exec commitlint

# Verificar commits en un rango
bun exec commitlint --from=HEAD~1 --to=HEAD
```

## 🚀 Sistema de Releases

### Automático en `main`

Cuando haces push a `main` con commits válidos:

1. 🔍 **Semantic Release analiza** los commits desde el último release
2. 📊 **Calcula la nueva versión** según los tipos de commit
3. 📦 **Publica automáticamente** a NPM
4. 📚 **Despliega Storybook** a GitHub Pages
5. 🏷️ **Crea Git tag** y GitHub Release
6. 📋 **Genera changelog** automático

### Release Candidates en `develop`

Cuando haces push a `develop`:

1. 🧪 **Crea Release Candidate** (ej: `1.2.0-rc.1`)
2. 📦 **Publica a NPM** con tag `@rc`
3. 📋 **Crea GitHub Prerelease**

## 📋 Flujo de Trabajo

### Para Features Nuevas

```bash
# 1. Crear rama
git checkout -b feature/new-component

# 2. Hacer cambios y commits (pueden ser normales)
git commit -m "wip: working on new component"
git commit -m "wip: add tests"

# 3. Al hacer PR, squash a commit convencional
# En el merge, usar commit message como:
feat: add new component with validation

# 4. Push a develop (RC automático)
# 5. Cuando esté listo, merge a main (release automático)
```

### Para Bug Fixes

```bash
# 1. Crear rama
git checkout -b fix/button-issue

# 2. Fix y commit convencional
git commit -m "fix: resolve button click handler issue"

# 3. PR y merge (trigger automático de patch release)
```

## 🔧 Configuración del Proyecto

### Validación Automática

- ✅ **Pull Requests**: Valida todos los commits en el PR
- ✅ **Push**: Valida el commit antes de procesar
- ✅ **Comentarios automáticos**: Si falla, comenta en el PR con ejemplos

### Configuración de Semantic Release

```json
// .releaserc.json
{
  "branches": [
    "main",                    // Releases estables
    {
      "name": "develop",       // Release candidates
      "prerelease": "rc"
    }
  ]
}
```

## 🚨 Resolución de Problemas

### "Commit message validation failed"

```bash
# Ver qué está mal
bun exec commitlint --from=HEAD~1 --to=HEAD --verbose

# Usar el asistente
bun run commit
```

### "No release triggered"

Posibles causas:
- No hay commits que requieran release (`docs`, `test`, etc. no crean releases)
- Commits no siguen conventional format
- Ya existe una versión con esos cambios

### Forzar Release (Solo en emergencias)

```bash
# Commit vacío que fuerza patch
git commit --allow-empty -m "chore: force release"
```

## 📊 Monitoreo

- 🏷️ **Badges**: Muestran estado de releases automáticamente
- 📋 **Actions**: Ve el progreso en GitHub Actions
- 📦 **NPM**: Verifica publicación en npmjs.com
- 📚 **Storybook**: Actualización automática en GitHub Pages

## 🎯 Beneficios

1. **Consistencia**: Todos los commits siguen el mismo formato
2. **Automatización**: Cero intervención manual para releases
3. **Claridad**: Changelog y releases notes generados automáticamente
4. **Confiabilidad**: No más errores de versioning manual
5. **Productividad**: Enfócate en código, no en procesos de release

¡Ahora puedes olvidarte completamente del versionado manual! 🎉
