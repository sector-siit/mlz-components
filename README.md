# MLZ Components

Una librería moderna de componentes React con Tailwind CSS y variables CSS customizables.

<!-- Badges -->
[![CI/CD Pipeline](https://github.com/sector-siit/mlz-components/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/sector-siit/mlz-components/actions/workflows/ci-cd.yml)
[![Build Status](https://github.com/sector-siit/mlz-components/actions/workflows/build.yml/badge.svg)](https://github.com/sector-siit/mlz-components/actions/workflows/build.yml)
[![NPM Version](https://img.shields.io/npm/v/@sector.siit/mlz-components.svg)](https://www.npmjs.com/package/@sector.siit/mlz-components)
[![NPM Downloads](https://img.shields.io/npm/dm/@sector.siit/mlz-components.svg)](https://www.npmjs.com/package/@sector.siit/mlz-components)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@sector.siit/mlz-components)](https://bundlephobia.com/package/@sector.siit/mlz-components)

[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-Available-ff69b4.svg)](https://sector-siit.github.io/mlz-components/)
[![License](https://img.shields.io/npm/l/@sector.siit/mlz-components.svg)](https://github.com/sector-siit/mlz-components/blob/main/LICENSE)
[![Contributors](https://img.shields.io/github/contributors/sector-siit/mlz-components.svg)](https://github.com/sector-siit/mlz-components/graphs/contributors)
[![GitHub Stars](https://img.shields.io/github/stars/sector-siit/mlz-components.svg)](https://github.com/sector-siit/mlz-components/stargazers)

[![Release Candidate](https://img.shields.io/badge/RC-Available-yellow.svg)](https://github.com/sector-siit/mlz-components/releases)
[![Production](https://img.shields.io/badge/Status-Production%20Ready-green.svg)](https://www.npmjs.com/package/@sector.siit/mlz-components)
[![Components](https://img.shields.io/badge/Components-3%20Available-brightgreen.svg)](#-componentes)
[![Maintenance](https://img.shields.io/badge/Maintained-Yes-green.svg)](https://github.com/sector-siit/mlz-components)
[![Last Commit](https://img.shields.io/github/last-commit/sector-siit/mlz-components.svg)](https://github.com/sector-siit/mlz-components/commits/main)

## 🚀 Características

- ⚛️ **React 18** - Componentes modernos con TypeScript
- 🎨 **Tailwind CSS** - Sistema de diseño utility-first
- 🎯 **Variables CSS** - Personalización completa desde tu proyecto
- 📚 **Storybook** - Documentación interactiva
- 📦 **Tree-shakeable** - Importa solo lo que necesitas
- 🔧 **TypeScript** - Tipado completo
- ✅ **Probado** - Tests unitarios incluidos

## 📦 Instalación

```bash
npm install @sector.siit/mlz-components
# o
yarn add @sector.siit/mlz-components
# o
bun add @sector.siit/mlz-components
```

## 🎯 Uso Básico

```tsx
import { Button, Input, DateTimeRange } from '@sector.siit/mlz-components';

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        ¡Hola Mundo!
      </Button>
      
      <Input 
        label="Email"
        placeholder="usuario@ejemplo.com"
      />
      
      <DateTimeRange 
        label="Período"
        type="datetime-local"
        helperText="Selecciona desde y hasta"
      />
    </div>
  );
}
```

## 📚 Documentación

- � **[Quick Start: Commits](./QUICK_START.md)** - Guía rápida para usar conventional commits
- �📖 **[Guía de Componentes](./docs/COMPONENTS.md)** - Documentación completa de todos los componentes
- 🎨 **[Personalización](./docs/CUSTOMIZATION.md)** - Variables CSS y temas personalizados
- 🛠️ **[Guía de Desarrollo](./docs/DEVELOPER.md)** - Información para contribuidores
- 🚀 **[CI/CD](./docs/CI-CD.md)** - Sistema de deployments automatizados
- 📊 **[Sistema de Badges](./docs/BADGES.md)** - Información sobre badges y estados
- 📝 **[Conventional Commits](./docs/CONVENTIONAL_COMMITS.md)** - Formato de commits y versionado automático

## 🎨 Personalización Rápida

```css
/* En tu archivo CSS global */
:root {
  --mlz-primary-500: #10b981;  /* Color primario */
  --mlz-border-radius-md: 0.5rem;  /* Border radius */
  --mlz-font-size-base: 1rem;  /* Tamaño de fuente base */
}
```

Ver la [guía completa de personalización](./docs/CUSTOMIZATION.md) para más opciones.

## 🛠️ Desarrollo

```bash
# Instalar dependencias
bun install

# Desarrollo con Storybook
bun run storybook

# Build de la librería
bun run build

# Lint y type check
bun run lint
bun run typecheck
```

## 🚀 CI/CD & Deployments

El proyecto incluye un sistema completo de CI/CD automatizado:

### 📦 Releases Automáticos

#### Production Releases (main)
- **Trigger**: Push a `main` con cambio de versión en `package.json`
- **Outputs**: 
  - 📦 NPM package publicado
  - 📚 Storybook actualizado en GitHub Pages
  - 🚀 GitHub Release con changelog
  - 🏷️ Git tag automático

#### Release Candidates (develop)
- **Trigger**: Cualquier push a `develop`
- **Outputs**:
  - 🧪 NPM package con tag `@rc`
  - 📋 GitHub Prerelease
  - 📊 Assets descargables (build + storybook)

### 🎯 Instalación de Versiones

```bash
# Última versión estable
npm install @sector.siit/mlz-components

# Última release candidate
npm install @sector.siit/mlz-components@rc

# Versión específica de RC
npm install @sector.siit/mlz-components@1.0.0-rc.202508071430
```

### ⚡ Quick Releases

Para cambios solo de documentación, el sistema detecta automáticamente y ejecuta un pipeline optimizado de ~2 minutos.

### 📋 Configuración Requerida

1. **NPM Token**: Agregar `NPM_TOKEN` a GitHub Secrets
2. **GitHub Pages**: Habilitar en configuración del repositorio

Ver [documentación completa de CI/CD](./docs/CI-CD.md) para más detalles.

## 📄 Licencia

MIT

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commits usando [Conventional Commits](./docs/CONVENTIONAL_COMMITS.md) (`git commit -m 'feat: add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### 📝 Commits

Este proyecto usa **Conventional Commits** para versionado automático:

```bash
# Usar el asistente interactivo (recomendado)
bun run commit

# O formato manual
git commit -m "feat: add new component"
git commit -m "fix: resolve button issue"
git commit -m "docs: update README"
```

Ver la [guía completa de Conventional Commits](./docs/CONVENTIONAL_COMMITS.md) para más detalles.

### 📋 Guías de Contribución

- [🛠️ Developer Guide](./docs/DEVELOPER.md) - Guía completa para desarrolladores
- [🚀 CI/CD Documentation](./docs/CI-CD.md) - Sistema de deployments automatizados

## 👥 Contributors

¡Gracias a todas las personas que han contribuido a este proyecto!

<!-- CONTRIBUTORS:START -->
<!-- CONTRIBUTORS:END -->

### 📊 Estadísticas de Contribuciones

Para ver estadísticas detalladas de contribuciones, consulta [CONTRIBUTORS_STATS.md](./docs/CONTRIBUTORS_STATS.md).

## 📈 Roadmap

- [x] ✅ Componente Button con variantes y tamaños
- [x] ✅ Componente Input con validación y estados
- [x] ✅ Componente DateTimeRange para rangos de fecha/hora
- [x] ✅ Sistema de CI/CD automatizado
- [x] ✅ Release Candidates con NPM
- [x] ✅ Documentación completa con Storybook
- [ ] 🔄 Componente Card
- [ ] 🔄 Componente Modal
- [ ] 🔄 Componente Dropdown
- [ ] 🔄 Sistema de themes predefinidos
- [ ] 🔄 Componentes de formulario avanzados
- [ ] 🔄 Componentes de navegación
- [ ] 🔄 Componente DataTable
