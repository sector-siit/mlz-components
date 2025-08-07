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
}
```

## 🎨 Personalización con Variables CSS

La librería utiliza variables CSS que puedes sobrescribir en tu proyecto:

```css
/* En tu archivo CSS global */
:root {
  /* Colores primarios */
  --mlz-primary-500: #10b981;
  --mlz-primary-600: #059669;
  --mlz-primary-700: #047857;
  
  /* Espaciado */
  --mlz-spacing-sm: 0.75rem;
  --mlz-spacing-md: 1.25rem;
  --mlz-spacing-lg: 2rem;
  
  /* Border radius */
  --mlz-border-radius-md: 0.5rem;
  
  /* Tamaños de fuente */
  --mlz-font-size-base: 1.125rem;
}
```

### Variables Disponibles

#### Colores
- `--mlz-primary-[50-950]`: Paleta de colores primarios
- `--mlz-secondary-[50-950]`: Paleta de colores secundarios

#### Espaciado
- `--mlz-spacing-xs`: 0.25rem (por defecto)
- `--mlz-spacing-sm`: 0.5rem (por defecto)
- `--mlz-spacing-md`: 1rem (por defecto)
- `--mlz-spacing-lg`: 1.5rem (por defecto)
- `--mlz-spacing-xl`: 2rem (por defecto)
- `--mlz-spacing-2xl`: 3rem (por defecto)

#### Border Radius
- `--mlz-border-radius-sm`: 0.25rem (por defecto)
- `--mlz-border-radius-md`: 0.375rem (por defecto)
- `--mlz-border-radius-lg`: 0.5rem (por defecto)
- `--mlz-border-radius-xl`: 0.75rem (por defecto)

#### Tamaños de Fuente
- `--mlz-font-size-xs`: 0.75rem (por defecto)
- `--mlz-font-size-sm`: 0.875rem (por defecto)
- `--mlz-font-size-base`: 1rem (por defecto)
- `--mlz-font-size-lg`: 1.125rem (por defecto)
- `--mlz-font-size-xl`: 1.25rem (por defecto)

## 📚 Componentes

### Button

Un componente de botón versatil con múltiples variantes y tamaños.

#### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Variante visual del botón |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del botón |
| `children` | `React.ReactNode` | - | Contenido del botón |
| `disabled` | `boolean` | `false` | Estado deshabilitado |
| `onClick` | `(event: MouseEvent) => void` | - | Función de click |

#### Ejemplos

```tsx
// Variantes
<Button variant="primary">Primario</Button>
<Button variant="secondary">Secundario</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Tamaños
<Button size="sm">Pequeño</Button>
<Button size="md">Mediano</Button>
<Button size="lg">Grande</Button>

// Estados
<Button disabled>Deshabilitado</Button>
```

### Input

Componente de input con validación, estados y personalización completa.

#### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'default' \| 'error' \| 'success'` | `'default'` | Estado visual del input |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del input |
| `label` | `string` | - | Texto del label |
| `helperText` | `string` | - | Texto de ayuda |
| `errorText` | `string` | - | Texto de error (sobrescribe helperText) |
| `fullWidth` | `boolean` | `false` | Si el input ocupa todo el ancho |

#### Ejemplos

```tsx
// Básico
<Input placeholder="Ingresa tu nombre" />

// Con label y ayuda
<Input 
  label="Email"
  placeholder="usuario@ejemplo.com"
  helperText="Te enviaremos notificaciones aquí"
/>

// Con error
<Input 
  label="Password"
  type="password"
  variant="error"
  errorText="La contraseña debe tener al menos 8 caracteres"
/>

// Tamaños
<Input size="sm" placeholder="Input pequeño" />
<Input size="lg" placeholder="Input grande" />

// Ancho completo
<Input fullWidth placeholder="Ocupa todo el ancho" />
```

### DateTimeRange

Componente para seleccionar un rango de fecha y hora con estilo consistente al Input.

#### Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'default' \| 'error' \| 'success'` | `'default'` | Estado visual del componente |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño del componente |
| `type` | `'date' \| 'datetime-local' \| 'time'` | `'datetime-local'` | Tipo de input para fecha/hora |
| `label` | `string` | - | Texto del label |
| `helperText` | `string` | - | Texto de ayuda |
| `errorText` | `string` | - | Texto de error (sobrescribe helperText) |
| `fullWidth` | `boolean` | `false` | Si el componente ocupa todo el ancho |
| `disabled` | `boolean` | `false` | Si el componente está deshabilitado |
| `defaultStartDate` | `string` | `''` | Fecha inicial por defecto |
| `defaultEndDate` | `string` | `''` | Fecha final por defecto |
| `startPlaceholder` | `string` | `'Fecha inicial'` | Placeholder para fecha inicial |
| `endPlaceholder` | `string` | `'Fecha final'` | Placeholder para fecha final |
| `onRangeChange` | `(start: string, end: string) => void` | - | Callback cuando cambia el rango |

#### Ejemplos

```tsx
// Básico con fecha y hora
<DateTimeRange 
  label="Período de trabajo"
  type="datetime-local"
  helperText="Selecciona tu horario"
/>

// Solo fechas
<DateTimeRange 
  label="Vacaciones"
  type="date"
  startPlaceholder="Fecha de salida"
  endPlaceholder="Fecha de regreso"
/>

// Con valores por defecto
<DateTimeRange 
  label="Horario laboral"
  type="datetime-local"
  defaultStartDate="2024-01-15T09:00"
  defaultEndDate="2024-01-15T17:00"
/>

// Con error
<DateTimeRange 
  label="Reserva de sala"
  variant="error"
  errorText="La fecha de inicio debe ser anterior a la fecha de fin"
/>

// Con éxito
<DateTimeRange 
  label="Período seleccionado"
  variant="success"
  helperText="Fechas válidas y disponibles"
/>

// Ancho completo
<DateTimeRange 
  fullWidth
  label="Período completo"
  helperText="Componente de ancho completo"
/>

// Con callback
<DateTimeRange 
  label="Selección interactiva"
  onRangeChange={(start, end) => {
    console.log(`Desde: ${start}, Hasta: ${end}`);
  }}
/>
```

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo con Storybook
npm run storybook

# Build de la librería
npm run build

# Lint
npm run lint

# Type check
npm run typecheck
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
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

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
