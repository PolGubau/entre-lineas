<div align="center">
  <h1>📖 Entre Líneas</h1>
  <p><em>Análisis literario interactivo de poesía española</em></p>
  
  <p>
    <a href="#-características">Características</a> •
    <a href="#-demo">Demo</a> •
    <a href="#-instalación">Instalación</a> •
    <a href="#-arquitectura">Arquitectura</a> •
    <a href="#-uso">Uso</a>
  </p>

  [![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev/)
  [![TanStack](https://img.shields.io/badge/TanStack-Router%20%7C%20Query-ff4154?style=flat-square)](https://tanstack.com/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)
</div>

---

Una aplicación web moderna para explorar y analizar poesía española de forma interactiva. Inspirada en Genius, pero especializada en análisis literario profundo: figuras retóricas, contexto histórico y anotaciones verso por verso.

## Características

### Análisis Profundo
- **Figuras retóricas**: Identifica y explica metáforas, personificaciones, símbolos y más
- **Contexto histórico**: Movimiento literario, época, influencias y contexto social
- **Métricas**: Análisis de esquema de rima, sílabas y estructura métrica
- **Temáticas**: Identificación y análisis de temas centrales

### Interactividad
- **Hover inteligente**: Muestra anotaciones al pasar sobre los versos
- **Resaltado dinámico**: Click en figuras retóricas para ver todos los versos donde aparecen
- **Navegación por estrofas**: Scroll spy con navegación lateral
- **Modo lectura**: Oculta análisis para lectura inmersiva

### Experiencia de Usuario
- **Diseño minimalista**: Interfaz limpia inspirada en shadcn/ui
- **Responsive**: Optimizado para móvil, tablet y desktop
- **Búsqueda en tiempo real**: Filtra por autor, título o temática
- **Favoritos**: Sistema de marcadores con localStorage
- **Compartir**: Comparte poemas con un click
- **Atajos de teclado**: Navegación rápida (?, N, P, R, L, /)

### Performance
- **SSR con TanStack Start**: Renderizado del lado del servidor
- **Type-safe routing**: Enrutamiento tipado con TanStack Router
- **Optimización de datos**: Índices Map para lookups O(1)
- **Build optimizado**: Vite con code splitting automático

---

## Demo

### Vista Principal
Grid de poemas con búsqueda en tiempo real y filtros por autor/temática.

### Vista de Detalle
Layout de 3 columnas:
- **Izquierda**: Navegación por estrofas con scroll spy
- **Centro**: Poema con anotaciones interactivas
- **Derecha**: Análisis literario y figuras retóricas

### Interacciones
- **Hover sobre versos** → Muestra anotación contextual
- **Click en figura retórica** → Resalta versos relacionados
- **Click en estrofa (sidebar)** → Scroll automático al poema
- **Atajos de teclado** → Navegación rápida entre poemas

---

## Instalación

### Requisitos Previos
- **Node.js** 18+ 
- **pnpm** (recomendado) o npm

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/PolGubau/entre-lineas.git
cd entre-lineas

# Instalar dependencias
pnpm install

# Modo desarrollo (http://localhost:3000)
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm preview
```

### Scripts Disponibles

```bash
pnpm dev       # Servidor de desarrollo
pnpm build     # Build de producción
pnpm preview   # Preview del build
pnpm lint      # Linter (Biome)
pnpm format    # Formatter (Biome)
pnpm check     # Lint + Format
pnpm test      # Tests (Vitest)
```

---

## Arquitectura

### Stack Tecnológico

| Categoría | Tecnología | Propósito |
|-----------|-----------|-----------|
| **Framework** | React 19 | UI library con React Compiler |
| **SSR** | TanStack Start | Server-side rendering y routing |
| **Routing** | TanStack Router | Type-safe, file-based routing |
| **Data Fetching** | TanStack Query | Cache y sincronización de datos |
| **Styling** | Tailwind CSS 4 | Utility-first CSS |
| **UI Components** | Radix UI | Primitivos accesibles |
| **Type Safety** | TypeScript + Zod | Type checking y validación runtime |
| **Build Tool** | Vite 7 | Bundler ultrarrápido |
| **Code Quality** | Biome | Linter + formatter (reemplazo de ESLint/Prettier) |
| **Animation** | Motion | Animaciones fluidas |

### Estructura de Datos

```typescript
Poem {
  id: string
  slug: string  // URL-friendly
  title: string
  author: string
  
  estrofas: Estrofa[] {
    verses: Verso[] {
      id: string
      number: number
      text: string
      syllables?: number
      rhyme?: string
      annotation?: string  // Anotación inline
    }
  }
  
  context: ContextoHistorico {
    period: string
    movement?: string
    originCountry: string
    publicationYear?: number
    socialContext?: string
    influences: string[]
  }
  
  analysis: Analisis {
    themes: string[]
    tone?: string
    meter?: string
    rhymeScheme?: string
    generalSummary: string
    interpretation?: string
  }
  
  rhetoricalFigures: FiguraRetoricaEnPoem[] {
    id: FiguraRetoricaTipo  // "metafora" | "personificacion" | ...
    contextualDescription: string
    verseIds: string[]  // Referencias a versos
  }
  
  shortDescription: string
  imageUrl?: string
  createdAt: Date
  updatedAt: Date
}
```

### Arquitectura de Carpetas

```
entre-lineas/
├── src/
│   ├── features/               # Feature-based architecture
│   │   └── poems/
│   │       ├── application/    # Hooks y lógica de negocio
│   │       │   ├── use-poems.ts
│   │       │   ├── use-poem-by-id.ts
│   │       │   ├── use-favorites.ts
│   │       │   ├── use-filters.ts
│   │       │   └── use-share.ts
│   │       ├── domain/         # Types y schemas
│   │       │   └── poem.types.ts
│   │       ├── infra/          # Data access
│   │       │   └── api.ts
│   │       └── ui/             # Componentes
│   │           ├── pages/
│   │           │   ├── home-page.tsx
│   │           │   └── poem-detail-page.tsx
│   │           └── components/
│   │               ├── poem-grid.tsx
│   │               ├── poem-card.tsx
│   │               ├── poem-section.tsx
│   │               ├── navigation-aside.tsx
│   │               └── summary-aside.tsx
│   ├── data/                   # Data estática
│   │   ├── poems.data.ts
│   │   └── poems/
│   │       ├── caminante.ts
│   │       ├── el-silencio.ts
│   │       └── ...
│   ├── routes/                 # TanStack Router
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   └── poem/
│   │       └── $poemId.tsx
│   ├── shared/                 # Código compartido
│   │   ├── components/
│   │   │   └── Header.tsx
│   │   ├── ui/                 # Design system (shadcn)
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   ├── drawer.tsx
│   │   │   └── ...
│   │   ├── hooks/
│   │   │   └── use-keyboard-shortcuts.ts
│   │   └── lib/
│   │       ├── utils.ts
│   │       └── seo.ts
│   ├── router.tsx              # Router config
│   └── styles.css
├── public/
│   ├── manifest.json
│   └── robots.txt
├── biome.json                  # Biome config
├── components.json             # shadcn config
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```

### Flujo de Datos

```
Usuario → Route → Page Component → Hook (use-poem-by-id)
                                      ↓
                               TanStack Query
                                      ↓
                                API Layer (Map lookups)
                                      ↓
                                Static Data
```

**Ventajas**:
- Sin llamadas HTTP (datos estáticos)
- Lookups O(1) con índices Map
- Cache automático con TanStack Query
- Type-safe end-to-end

- Cache automático con TanStack Query
- Type-safe end-to-end

---

## Uso

### Añadir Nuevos Poemas

#### 1. Crear archivo de poema en `src/data/poems/`

```typescript
// src/data/poems/mi-poema.ts
import type { Poem } from "~/features/poems/domain/poem.types";

export const miPoema: Poem = {
  id: 'mi-poema-id',
  slug: 'mi-poema',
  title: 'Mi Poema',
  author: 'Autor',
  authorSlug: 'autor',
  
  context: {
    period: 'Siglo XX',
    movement: 'Modernismo',
    originCountry: 'España',
    publicationYear: 1920,
    socialContext: 'Contexto histórico y social...',
    influences: ['Autor 1', 'Autor 2']
  },
  
  analysis: {
    themes: ['amor', 'muerte', 'naturaleza'],
    tone: 'melancólico',
    meter: 'endecasílabos',
    rhymeScheme: 'ABBA ABBA CDC DCD',
    generalSummary: 'Resumen del poema...',
    interpretation: 'Interpretación literaria profunda...'
  },
  
  rhetoricalFigures: [
    {
      id: 'metafora',
      contextualDescription: 'La noche representa la muerte inminente',
      verseIds: ['1-v1', '1-v3']  // Formato: estrofa-verso
    },
    {
      id: 'personificacion',
      contextualDescription: 'El viento adquiere características humanas',
      verseIds: ['2-v2']
    }
  ],
  
  estrofas: [
    {
      id: '1',
      number: 1,
      type: 'cuarteto',
      verses: [
        {
          id: '1-v1',
          number: 1,
          text: 'Primer verso del poema aquí',
          syllables: 11,
          rhyme: 'A',
          annotation: 'Explicación contextual del verso'
        },
        {
          id: '1-v2',
          number: 2,
          text: 'Segundo verso continúa',
          syllables: 11,
          rhyme: 'B'
        },
        // ... más versos
      ]
    },
    // ... más estrofas
  ],
  
  shortDescription: 'Descripción breve para el grid de poemas',
  imageUrl: '/images/mi-poema.jpg',  // Opcional
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01')
};
```

#### 2. Registrar en `src/data/poems.data.ts`

```typescript
import { miPoema } from "./poems/mi-poema";

export const poemasData: Poem[] = [
  // ... poemas existentes
  miPoema,
];
```

#### 3. Listo! El poema aparecerá automáticamente

No necesitas reiniciar el servidor en desarrollo. Los cambios se reflejan instantáneamente.

### IDs de Figuras Retóricas Soportadas

```typescript
"metafora" | "simil" | "personificacion" | "hiperbole" | 
"anafora" | "paradoja" | "apostrofe" | "sinestesia" | 
"metonimia" | "sinecdoque" | "oximoron" | "hiperbaton" | 
"aliteracion" | "asindeton" | "polisindeton" | "elipsis" | 
"reticencia" | "epanadiplosis" | "concatenacion" | 
"paralelismo" | "antitesis" | "quiasmo" | "simbolo" | 
"alegoria" | "ironia" | "sarcasmo" | "prosopopeya" | 
"encabalgamiento"
```

### Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `?` | Mostrar ayuda de atajos |
| `N` | Siguiente poema |
| `P` | Poema anterior |
| `R` | Modo lectura |
| `L` | Toggle favorito |
| `/` | Buscar |
| `Esc` | Cerrar modales |

---

## Personalización

### Temas y Colores

El proyecto usa Tailwind CSS 4 con la paleta `neutral`:

```css
/* src/styles.css */
@theme {
  --color-background: neutral-50;
  --color-foreground: neutral-900;
  --color-card: white;
  --color-muted: neutral-100;
  --color-accent: amber-400;  /* Resaltado de versos */
}
```

### Componentes UI (shadcn)

Agregar nuevos componentes del design system:

```bash
npx shadcn@latest add [component-name]
```

Disponibles: `button`, `accordion`, `drawer`, `dialog`, `tooltip`, etc.

---

## Testing

```bash
# Tests unitarios
pnpm test

# Tests con coverage
pnpm test --coverage

# Tests en modo watch
pnpm test --watch

# Linting
pnpm lint

# Format code
pnpm format

# Lint + Format
pnpm check
```

---

## Deployment

### Build de Producción

```bash
pnpm build
```

Los archivos optimizados estarán en `./dist`.

### Plataformas Soportadas

- **Vercel** (recomendado para TanStack Start)
- **Netlify**
- **Cloudflare Pages**
- **Railway**
- **Render**
- Cualquier hosting con soporte Node.js 18+

### Variables de Entorno

No requiere variables de entorno (datos estáticos).

---

## Roadmap

### ✅ Completado
- [x] Análisis de figuras retóricas
- [x] Modo lectura
- [x] Sistema de favoritos
- [x] Compartir poemas
- [x] Búsqueda y filtros
- [x] Atajos de teclado
- [x] Responsive design
- [x] SSR con TanStack Start

### 🚧 En Progreso
- [ ] Más poemas (objetivo: 50+)
- [ ] Tests E2E con Playwright

### 📋 Próximas Features
- [ ] Comparación de poemas lado a lado
- [ ] Filtros avanzados (época, movimiento, métrica)
- [ ] Export a PDF del análisis
- [ ] Timeline histórico de autores/movimientos
- [ ] Sistema de anotaciones personales
- [ ] Audio de recitación
- [ ] Dark mode mejorado

---

## Recursos

### Documentación
- [TanStack Start](https://tanstack.com/start) - Framework SSR
- [TanStack Router](https://tanstack.com/router) - Routing type-safe
- [TanStack Query](https://tanstack.com/query) - Data fetching
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Radix UI](https://radix-ui.com) - UI primitivos
- [shadcn/ui](https://ui.shadcn.com) - Design system
- [Biome](https://biomejs.dev) - Toolchain

### Inspiración
- [Genius](https://genius.com) - Anotaciones interactivas
- [Poetry Foundation](https://www.poetryfoundation.org) - Análisis literario

---

## Contribuir

Las contribuciones son bienvenidas! 

### Cómo Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/nueva-feature`)
3. Commit tus cambios (`git commit -m 'Add: nueva feature'`)
4. Push a la rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

### Áreas de Contribución

- 📖 Agregar nuevos poemas
- 🐛 Reportar o arreglar bugs
- ✨ Proponer nuevas features
- 📝 Mejorar documentación
- 🎨 Mejorar diseño UI/UX
- ♿ Mejoras de accesibilidad

---

## Autor

**Pol Gubau Amores**

- GitHub: [@PolGubau](https://github.com/PolGubau)
- Portfolio: [polgubau.com](https://polgubau.com)

---

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <p>Hecho con ❤️ y ☕ para amantes de la poesía</p>
  <p>⭐ Dale una estrella si te gustó el proyecto</p>
</div>



