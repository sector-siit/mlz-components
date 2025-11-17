# Guía de Uso en Next.js

Esta guía te ayudará a integrar `@sector.siit/mlz-components` en tu proyecto Next.js 13+ con App Router.

## 📋 Requisitos Previos

- Next.js 13 o superior
- React 18 o superior
- Node.js 16 o superior

## 🚀 Instalación

```bash
npm install @sector.siit/mlz-components react-hot-toast
# o
yarn add @sector.siit/mlz-components react-hot-toast
# o
pnpm add @sector.siit/mlz-components react-hot-toast
```

## ⚙️ Configuración

### 1. Configurar Tailwind CSS

Si aún no tienes Tailwind CSS configurado en tu proyecto Next.js:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Actualiza tu `tailwind.config.js` para incluir los componentes de la librería:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    // ⚠️ Importante: Incluir los componentes de mlz-components
    './node_modules/@sector.siit/mlz-components/dist/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. Importar Estilos en el Layout Principal

En tu archivo `app/layout.tsx` (o `pages/_app.tsx` si usas Pages Router):

```tsx
// app/layout.tsx
import '@sector.siit/mlz-components/styles.css';
import '@sector.siit/mlz-components/variables.css';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
```

## 💡 Uso de Componentes

### Componentes Básicos

Los componentes están marcados con `"use client"` y funcionan directamente en Next.js:

```tsx
// app/page.tsx
import { Button, Input } from '@sector.siit/mlz-components';

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Mi App Next.js</h1>
      
      <Button variant="primary" size="md">
        Botón Primario
      </Button>
      
      <Input
        label="Email"
        type="email"
        placeholder="tu@email.com"
      />
    </main>
  );
}
```

### Componentes Interactivos con Estado

Para componentes que manejan estado, crea un Client Component:

```tsx
// app/components/MyForm.tsx
'use client';

import { useState } from 'react';
import { Button, Input } from '@sector.siit/mlz-components';

export default function MyForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
      />
      
      <Button type="submit" variant="primary">
        Enviar
      </Button>
    </form>
  );
}
```

### Sistema de Toast

Para usar el sistema de Toast, necesitas configurar el `ToastProvider`:

```tsx
// app/providers.tsx
'use client';

import { ToastProvider } from '@sector.siit/mlz-components';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
```

```tsx
// app/layout.tsx
import { Providers } from './providers';
import '@sector.siit/mlz-components/styles.css';
import '@sector.siit/mlz-components/variables.css';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

Luego puedes usar los toast helpers:

```tsx
// app/components/ToastExample.tsx
'use client';

import { showSuccessToast, showErrorToast } from '@sector.siit/mlz-components';

export default function ToastExample() {
  return (
    <div className="space-x-2">
      <button onClick={() => showSuccessToast('¡Operación exitosa!')}>
        Mostrar éxito
      </button>
      
      <button onClick={() => showErrorToast('Ocurrió un error')}>
        Mostrar error
      </button>
    </div>
  );
}
```

## 🎨 Personalización

### Personalizar Variables CSS

Crea un archivo CSS global y sobrescribe las variables:

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Colores primarios personalizados */
  --mlz-primary-500: #3b82f6;
  --mlz-primary-600: #2563eb;
  --mlz-primary-700: #1d4ed8;
  
  /* Espaciado personalizado */
  --mlz-spacing-md: 1.5rem;
  --mlz-spacing-lg: 2.5rem;
  
  /* Border radius personalizado */
  --mlz-border-radius-md: 0.75rem;
}
```

### Modo Oscuro

Los componentes respetan las variables CSS, por lo que puedes implementar modo oscuro:

```css
/* app/globals.css */
:root {
  --mlz-primary-500: #3b82f6;
  --mlz-bg-color: #ffffff;
  --mlz-text-color: #000000;
}

@media (prefers-color-scheme: dark) {
  :root {
    --mlz-primary-500: #60a5fa;
    --mlz-bg-color: #1f2937;
    --mlz-text-color: #f9fafb;
  }
}
```

## 🔧 Configuración Avanzada

### Tree Shaking

Los componentes soportan tree-shaking automático. Solo importa lo que necesitas:

```tsx
// ✅ Recomendado: Importaciones específicas
import { Button, Input } from '@sector.siit/mlz-components';

// ❌ Evitar: Importación completa
import * as MLZ from '@sector.siit/mlz-components';
```

### Server Components vs Client Components

Los componentes de `mlz-components` son Client Components (usan `"use client"`), pero puedes usarlos dentro de Server Components sin problemas:

```tsx
// app/page.tsx (Server Component)
import { Button } from '@sector.siit/mlz-components';

export default function Page() {
  return (
    <div>
      <h1>Este es un Server Component</h1>
      {/* El Button es un Client Component pero funciona aquí */}
      <Button variant="primary">Click me</Button>
    </div>
  );
}
```

### Optimización de Bundle

Next.js automáticamente optimiza el bundle, pero puedes configurar más opciones en `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@sector.siit/mlz-components'],
}

module.exports = nextConfig
```

## 📝 Ejemplos Completos

### Formulario de Login

```tsx
'use client';

import { useState } from 'react';
import { Button, Input } from '@sector.siit/mlz-components';
import { showSuccessToast, showErrorToast } from '@sector.siit/mlz-components';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Tu lógica de login
      await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      
      showSuccessToast('¡Login exitoso!');
    } catch (error) {
      showErrorToast('Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com"
        required
      />
      
      <Input
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        required
      />
      
      <Button 
        type="submit" 
        variant="primary"
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Iniciar Sesión'}
      </Button>
    </form>
  );
}
```

## 🐛 Solución de Problemas

### Error: "Module not found"

Asegúrate de que has instalado todas las peer dependencies:

```bash
npm install react react-dom react-hot-toast tailwindcss
```

### Los estilos no se aplican

1. Verifica que has importado los CSS en tu layout:
```tsx
import '@sector.siit/mlz-components/styles.css';
```

2. Verifica que tu `tailwind.config.js` incluye la ruta a los componentes:
```js
content: [
  './node_modules/@sector.siit/mlz-components/dist/**/*.{js,jsx}',
]
```

### Error de hidratación

Si ves errores de hidratación, asegúrate de que el componente que usa mlz-components sea un Client Component:

```tsx
'use client';

import { Button } from '@sector.siit/mlz-components';
```

## 📚 Recursos Adicionales

- [Documentación Principal](../README.md)
- [Storybook - Ejemplos Interactivos](https://sector-siit.github.io/mlz-components/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🆘 Soporte

Si encuentras algún problema o tienes preguntas:

- [Crear un Issue](https://github.com/sector-siit/mlz-components/issues)
- [Ver Ejemplos en Storybook](https://sector-siit.github.io/mlz-components/)
