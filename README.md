# MLZ Components

Una librería moderna de componentes React con Tailwind CSS y variables CSS customizables.

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
import { Button } from '@sector.siit/mlz-components';

function App() {
  return (
    <Button variant="primary" size="md">
      ¡Hola Mundo!
    </Button>
  );
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

## 🚀 Despliegue

El proyecto incluye GitHub Actions para:

1. **Despliegue automático a NPM** cuando cambia la versión en `package.json`
2. **Despliegue de Storybook a GitHub Pages** en cada push a main

### Configuración necesaria:

1. **NPM Token**: Añade `NPM_TOKEN` a los secrets de GitHub
2. **GitHub Pages**: Habilita GitHub Pages en la configuración del repositorio

## 📄 Licencia

MIT

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📈 Roadmap

- [ ] Componente Input
- [ ] Componente Card
- [ ] Componente Modal
- [ ] Componente Dropdown
- [ ] Sistema de themes predefenidos
- [ ] Componentes de formulario
- [ ] Componentes de navegación
