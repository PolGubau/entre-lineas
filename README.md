# Poesía - Análisis Interactivo

Una aplicación web moderna para explorar y analizar poesía de forma interactiva, al estilo de "Genius" pero especializada en poesía clásica y contemporánea.

## Características

- **Análisis profundo**: Figuras retóricas, métricas, temáticas y contexto histórico
- **Interactividad**: Hover sobre versos para ver anotaciones, click en figuras retóricas para resaltarlas
- **UX Minimalista**: Diseño limpio y elegante al estilo shadcn
- **Responsive**: Optimizado para todos los dispositivos
- **Performance**: Build con Vite y TanStack Router
- **Búsqueda**: Filtrado por título, autor o temática
- **Navegación intuitiva**: Layout de 3 columnas con navegación contextual

## Arquitectura

### Stack Tecnológico

- **Framework**: React 19 + TanStack Start
- **Routing**: TanStack Router (type-safe)
- **State Management**: TanStack Query + React DB
- **Styling**: Tailwind CSS 4
- **Type Safety**: TypeScript + Zod schemas
- **Build Tool**: Vite
- **Code Quality**: Biome (linter + formatter)

### Estructura de Datos

```typescript
Poem
├── metadata (título, autor, descripción)
├── contexto (histórico, movimiento, influencias)
├── analisis (temática, tono, métrica, interpretación)
├── estrofas[]
│   └── versos[]
│       ├── texto
│       ├── figuras[] (referencias a figuras retóricas)
│       └── anotacion (opcional)
└── figurasRetoricas[] (catálogo de figuras del poema)
```

### Arquitectura de Archivos

```
src/
├── types/
│   └── poem.types.ts          # Schemas Zod + TypeScript types
├── data/
│   └── poems.data.ts          # Datos de poemas (mock/seed)
├── db-collections/
│   ├── index.ts
│   └── poems.collection.ts    # TanStack React DB collection
├── routes/
│   ├── __root.tsx             # Layout principal
│   ├── index.tsx              # Home con grid de poemas
│   └── poemas/
│       └── $slug.tsx          # Página de detalle del poema
└── components/
    └── Header.tsx             # Navegación global
```

## Cómo Empezar

### Prerequisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Instalación

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview
```

La aplicación estará disponible en `http://localhost:3000`

## Añadir Nuevos Poemas

### 1. Definir el poema en `src/data/poems.data.ts`

```typescript
{
  id: 'unique-id',
  slug: 'titulo-del-poema',
  titulo: 'Título del Poema',
  autor: 'Nombre del Autor',
  descripcionCorta: 'Descripción breve...',
  
  contexto: {
    epoca: 'Siglo XX',
    movimiento: 'Modernismo',
    paisOrigen: 'España',
    añoPublicacion: 1920,
    contextoSocial: 'Contexto histórico...',
    influencias: ['Autor 1', 'Autor 2']
  },
  
  analisis: {
    tematica: ['amor', 'muerte'],
    tono: 'melancólico',
    metrica: 'endecasílabos',
    resumenGeneral: 'Resumen del análisis...',
    interpretacion: 'Interpretación detallada...'
  },
  
  figurasRetoricas: [
    {
      id: 'fig-1',
      tipo: 'metafora',
      nombre: 'Nombre de la figura',
      descripcion: 'Descripción y contexto...'
    }
  ],
  
  estrofas: [
    {
      id: 'estrofa-1',
      numero: 1,
      tipo: 'cuarteto',
      versos: [
        {
          id: 'v1',
          numero: 1,
          texto: 'Primer verso del poema',
          figuras: ['fig-1'], // Referencias a IDs de figuras
          anotacion: 'Explicación opcional del verso',
          silabas: 11,
          rima: 'A'
        }
      ]
    }
  ]
}
```

### 2. Los cambios se reflejarán automáticamente

La base de datos en memoria se inicializa automáticamente al cargar la app.

## Personalización de Estilos

El proyecto usa Tailwind CSS 4 con la paleta `neutral` para un look minimalista.

### Colores principales

- **Fondo**: `neutral-50` (light) / `neutral-950` (dark)
- **Cards**: `white` / `neutral-900`
- **Bordes**: `neutral-200` / `neutral-800`
- **Texto**: `neutral-900` / `neutral-50`
- **Acentos**: `amber-400` (highlighting)

## 🔍 Funcionalidades de UX

### Home (/)
- Grid responsive de tarjetas de poemas
- Búsqueda en tiempo real por título, autor o temática
- Preview de información: título, autor, descripción, tags

### Detalle (/poemas/:slug)

**Layout de 3 columnas**:

1. **Izquierda - Navegación**:
   - Info básica del poema
   - Navegación por estrofas con scroll spy
   
2. **Centro - Poema**:
   - Texto del poema formateado
   - Hover en versos muestra anotaciones
   - Click en figuras retóricas resalta versos relacionados
   - Indicadores visuales de contenido adicional
   
3. **Derecha - Análisis**:
   - Catálogo de figuras retóricas (clickeables)
   - Temáticas
   - Análisis literario
   - Contexto histórico

### Interacciones

- **Hover sobre versos**: Tooltip con anotación (si existe)
- **Click en figura retórica**: Resalta todos los versos que la contienen
- **Indicadores**:
  - ✨ Icono: El verso contiene figuras retóricas
  - 🔵 Punto: El verso tiene anotación

## Testing

```bash
# Ejecutar tests
pnpm test

# Linting
pnpm lint

# Formateo
pnpm format
```

## Deploy

El proyecto puede desplegarse en cualquier plataforma que soporte Node.js:

- Vercel
- Netlify
- Cloudflare Pages
- Railway
- Render

```bash
pnpm build
# Los archivos estarán en ./dist
```

## Próximas Mejoras

- [ ] Sistema de favoritos (localStorage)
- [ ] Comparación de poemas lado a lado
- [ ] Filtros avanzados (época, movimiento, métrica)
- [ ] Modo de lectura (solo poema, sin análisis)
- [ ] Compartir versos específicos
- [ ] Export a PDF del análisis
- [ ] API backend para poemas dinámicos
- [ ] Sistema de usuarios y anotaciones personales
- [ ] Audio de recitación
- [ ] Timeline histórico de autores/movimientos

## 📚 Recursos

- [TanStack Start Docs](https://tanstack.com/start)
- [TanStack Router Docs](https://tanstack.com/router)
- [TanStack Query Docs](https://tanstack.com/query)
- [Tailwind CSS Docs](https://tailwindcss.com)

## 📄 Licencia

MIT



