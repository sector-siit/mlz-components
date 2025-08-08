# Git Tag Format with Build Numbers

Este documento describe los cambios realizados para incluir el build number en los tags de Git.

## Formato de Tags

### Antes
- **Release normal**: `v1.0.0`
- **Release Candidate**: `v1.0.0-rc.202408081234`

### Después
- **Release normal**: `v1.0.0.123` (versión del package + build number)
- **Release Candidate**: `v1.0.0.123-rc.202408081234` (versión del package + build number + timestamp)

## Workflows Modificados

### 1. `create-release.yml`
- **Cambio**: El tag ahora incluye el build number de GitHub Actions
- **Formato**: `v{package_version}.{build_number}`
- **Ejemplo**: `v1.0.0.123`

### 2. `quick-release.yml`
- **Cambio**: El tag ahora incluye el build number de GitHub Actions
- **Formato**: `v{package_version}.{build_number}`
- **Ejemplo**: `v1.0.0.123`

### 3. `release-candidate.yml`
- **Cambio**: El tag ahora incluye el build number antes del sufijo RC
- **Formato**: `v{package_version}.{build_number}-rc.{timestamp}`
- **Ejemplo**: `v1.0.0.123-rc.202408081234`

## Build Number

El build number se obtiene de `github.run_number`, que es un número único e incremental para cada ejecución del workflow en el repositorio.

### Ventajas:
- **Único**: Cada ejecución tiene un número diferente
- **Incremental**: Los números siempre aumentan
- **Automático**: Se genera automáticamente por GitHub Actions
- **Trazabilidad**: Permite identificar la ejecución exacta que generó el release

## Información Adicional en Releases

Los releases ahora incluyen una sección de "Build Information" que muestra:
- Package Version
- Build Number
- Full Tag
- Para RC: también incluye el timestamp

## Ejemplos de Uso

```bash
# Instalar una versión específica con build number
npm install @sector.siit/mlz-components@1.0.0

# El tag en Git será:
git tag v1.0.0.123

# Para Release Candidates:
git tag v1.0.0.123-rc.202408081234
```

## Compatibilidad

- **NPM**: El package.json mantiene el formato estándar (ej: `1.0.0`) para compatibilidad con NPM
- **Git Tags**: Solo los tags de Git incluyen el build number
- **Releases**: Los releases de GitHub muestran la información completa de build

Esta implementación mantiene la compatibilidad con NPM mientras proporciona trazabilidad completa a través de los tags de Git.
