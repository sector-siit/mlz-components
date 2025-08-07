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

## 📈 Roadmap

- [x] ✅ Componente Button con variantes y tamaños
- [x] ✅ Componente Input con validación y estados
- [x] ✅ Sistema de CI/CD automatizado
- [x] ✅ Release Candidates con NPM
- [x] ✅ Documentación completa con Storybook
- [ ] 🔄 Componente Card
- [ ] 🔄 Componente Modal
- [ ] 🔄 Componente Dropdown
- [ ] 🔄 Sistema de themes predefinidos
- [ ] 🔄 Componentes de formulario avanzados
- [ ] 🔄 Componentes de navegación
- [ ] 🔄 Componente DatePicker
- [ ] 🔄 Componente DataTable
