# 🏷️ Badges & Status Indicators

Esta documentación explica todos los badges de estado que aparecen en el README del proyecto y qué significan.

## 📊 Badges de Estado

### 🔄 CI/CD & Build

| Badge | Descripción | Estado |
|-------|-------------|--------|
| ![CI/CD Pipeline](https://github.com/sector-siit/mlz-components/actions/workflows/ci-cd.yml/badge.svg) | Estado general del pipeline CI/CD | Automático |
| ![Build Status](https://github.com/sector-siit/mlz-components/actions/workflows/build.yml/badge.svg) | Estado específico del build | Automático |

**Colores:**
- 🟢 **Verde (passing)**: Todo funciona correctamente
- 🔴 **Rojo (failing)**: Hay errores que necesitan atención
- 🟡 **Amarillo (pending)**: Pipeline ejecutándose

### 📦 Package Information

| Badge | Descripción | Actualización |
|-------|-------------|---------------|
| ![NPM Version](https://img.shields.io/npm/v/@sector.siit/mlz-components.svg) | Última versión publicada en NPM | Automática con releases |
| ![NPM Downloads](https://img.shields.io/npm/dm/@sector.siit/mlz-components.svg) | Descargas mensuales del package | Automática (NPM API) |
| ![Bundle Size](https://img.shields.io/bundlephobia/minzip/@sector.siit/mlz-components) | Tamaño del bundle minificado + gzip | Automática con nuevas versiones |

### 🛠️ Technology Stack

| Badge | Descripción | Información |
|-------|-------------|-------------|
| ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg) | Soporte completo de TypeScript | Manual |
| ![Storybook](https://img.shields.io/badge/Storybook-Available-ff69b4.svg) | Documentación interactiva disponible | Manual |
| ![License](https://img.shields.io/npm/l/@sector.siit/mlz-components.svg) | Licencia del proyecto | Automática desde package.json |

### 👥 Community

| Badge | Descripción | Actualización |
|-------|-------------|---------------|
| ![Contributors](https://img.shields.io/github/contributors/sector-siit/mlz-components.svg) | Número de contributors únicos | Automática |
| ![GitHub Stars](https://img.shields.io/github/stars/sector-siit/mlz-components.svg) | Estrellas del repositorio | Automática |
| ![Last Commit](https://img.shields.io/github/last-commit/sector-siit/mlz-components.svg) | Último commit al repositorio | Automática |

### 🚀 Project Status

| Badge | Descripción | Actualización |
|-------|-------------|---------------|
| ![Release Candidate](https://img.shields.io/badge/RC-Available-yellow.svg) | Release Candidates disponibles | Manual |
| ![Production](https://img.shields.io/badge/Status-Production%20Ready-green.svg) | Estado de producción | Manual |
| ![Maintenance](https://img.shields.io/badge/Maintained-Yes-green.svg) | Proyecto activamente mantenido | Manual |

## 🎨 Personalización de Badges

### Badges Dinámicos

Los badges que se actualizan automáticamente:

```markdown
<!-- Workflow status -->
![CI/CD](https://github.com/sector-siit/mlz-components/actions/workflows/ci-cd.yml/badge.svg)

<!-- NPM info -->
![Version](https://img.shields.io/npm/v/@sector.siit/mlz-components.svg)
![Downloads](https://img.shields.io/npm/dm/@sector.siit/mlz-components.svg)

<!-- GitHub stats -->
![Contributors](https://img.shields.io/github/contributors/sector-siit/mlz-components.svg)
![Stars](https://img.shields.io/github/stars/sector-siit/mlz-components.svg)
```

### Badges Estáticos

Para información que no cambia frecuentemente:

```markdown
<!-- Technology -->
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)
![Storybook](https://img.shields.io/badge/Storybook-Available-ff69b4.svg)

<!-- Status -->
![Production](https://img.shields.io/badge/Status-Production%20Ready-green.svg)
![Maintenance](https://img.shields.io/badge/Maintained-Yes-green.svg)
```

## 🔧 Configuración de Badges

### Para Agregar Nuevos Badges

1. **Workflow Status**: Usar el patrón de GitHub Actions
   ```
   https://github.com/{owner}/{repo}/actions/workflows/{workflow-file}/badge.svg
   ```

2. **NPM Information**: Usar shields.io
   ```
   https://img.shields.io/npm/{metric}/@sector.siit/mlz-components.svg
   ```

3. **Custom Badges**: Crear en shields.io
   ```
   https://img.shields.io/badge/{label}-{message}-{color}.svg
   ```

### Colores Recomendados

- 🟢 **green**: Success, Production Ready, Passing
- 🔴 **red**: Error, Failing, Critical
- 🟡 **yellow**: Warning, Pending, RC
- 🔵 **blue**: Information, Technology
- 🟣 **purple**: Special features
- 🟠 **orange**: Beta, Experimental

## 📊 Monitoreo de Status

### Verificación Manual

```bash
# Verificar status de workflows
curl -s https://api.github.com/repos/sector-siit/mlz-components/actions/workflows

# Verificar información de NPM
npm view @sector.siit/mlz-components

# Verificar stats de GitHub
curl -s https://api.github.com/repos/sector-siit/mlz-components
```

### Alertas Automáticas

Los badges cambian automáticamente cuando:
- ❌ Un workflow falla
- 📦 Se publica una nueva versión
- 👥 Se agrega un nuevo contributor
- ⭐ Cambian las estrellas del repo

## 🎯 Best Practices

### Organización
- Agrupar badges por categoría
- Más importantes arriba
- Máximo 3-4 badges por línea

### Mantenimiento
- Revisar badges rotos mensualmente
- Actualizar badges estáticos cuando sea necesario
- Remover badges obsoletos

### Legibilidad
- Usar colores consistentes
- Labels claros y concisos
- Links funcionales a recursos relevantes

---

**Nota**: Los badges se actualizan automáticamente. No es necesario intervención manual para la mayoría de ellos.
