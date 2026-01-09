# 🏛️ Arquitectura del Proyecto - Clean Architecture + DI

## 📐 Estructura de Capas

```
src/features/poems/
├── domain/              # ⚪ Capa de Dominio (Core Business)
│   ├── repositories/    # Interfaces (Ports)
│   ├── poem.types.ts    # Entidades y tipos
│   ├── constants.ts     # Constantes de negocio
│   └── index.ts         # Barrel export
│
├── application/         # 🔵 Capa de Aplicación (Use Cases)
│   ├── use-cases/       # Casos de uso (lógica de negocio)
│   ├── use-*.ts         # Hooks de React (adaptadores)
│   └── index.ts         # Barrel export
│
├── infra/              # 🟢 Capa de Infraestructura
│   ├── repositories/    # Implementaciones concretas
│   ├── dependencies.provider.tsx  # DI Container
│   ├── api.ts          # Cliente de API
│   └── index.ts        # Barrel export
│
└── ui/                 # 🟡 Capa de Presentación
    ├── components/      # Componentes React
    ├── pages/           # Páginas
    └── poem/            # Feature-specific UI
```

## 🎯 Principios SOLID Aplicados

### 1. **Single Responsibility Principle (SRP)**
Cada clase/módulo tiene una única responsabilidad:
- `SearchPoemsUseCase`: Solo busca poemas
- `FavoritesRepository`: Solo gestiona favoritos
- `useSearch`: Solo adapta el use case a React

### 2. **Open/Closed Principle (OCP)**
Abierto para extensión, cerrado para modificación:
```typescript
// ✅ Puedes añadir nuevas implementaciones sin modificar el use case
class FavoritesApiRepository implements FavoritesRepository { }
class FavoritesIndexedDBRepository implements FavoritesRepository { }
```

### 3. **Liskov Substitution Principle (LSP)**
Cualquier implementación de `FavoritesRepository` es intercambiable:
```typescript
// Cambias aquí y funciona en toda la app
const favoritesRepository = new FavoritesLocalStorageRepository();
// O
const favoritesRepository = new FavoritesApiRepository();
```

### 4. **Interface Segregation Principle (ISP)**
Interfaces pequeñas y específicas:
```typescript
// ✅ Interfaces segregadas
interface PoemsRepository { getAll, getById, getBySlug }
interface FavoritesRepository { getFavorites, addFavorite, removeFavorite }

// ❌ NO hacemos:
interface Repository { /* 20 métodos diferentes */ }
```

### 5. **Dependency Inversion Principle (DIP)**
Dependemos de abstracciones (interfaces), no de implementaciones:
```typescript
// ✅ Use case depende de la INTERFAZ
class SearchPoemsUseCase {
  constructor(private searchRepository: SearchRepository) {} // ← Interfaz
}

// ❌ NO hacemos:
class SearchPoemsUseCase {
  constructor(private searchRepository: SearchRepositoryImpl) {} // ← Implementación
}
```

## 🔌 Dependency Injection (DI)

### Flujo de Dependencias

```typescript
// 1. Provider crea todas las dependencias
PoemsDependenciesProvider
  ↓
  crea → PoemsRepository
  crea → FavoritesRepository
  crea → SearchRepository
  ↓
  inyecta en → Use Cases
  ↓
  expone a → Hooks de React
  ↓
  consumen → Componentes UI
```

### Uso en Componentes

```typescript
// ❌ ANTES: Singleton global
const searchUseCase = new SearchPoemsUseCase(repo); // Global

export function useSearch() {
  return searchUseCase.execute(); // ← Acoplamiento
}

// ✅ AHORA: DI desde contexto
export function useSearch() {
  const { searchPoemsUseCase } = usePoemsDependencies(); // ← Inyectado
  return searchPoemsUseCase.execute();
}
```

## 🧪 Testing Simplificado

### Test de Use Case (sin React)

```typescript
describe('ToggleFavoriteUseCase', () => {
  it('should add favorite when not present', async () => {
    // Arrange - Mock simple
    const mockRepo: FavoritesRepository = {
      getFavorites: vi.fn().mockResolvedValue([]),
      addFavorite: vi.fn().mockResolvedValue(undefined),
      removeFavorite: vi.fn(),
      isFavorite: vi.fn(),
      toggleFavorite: vi.fn().mockResolvedValue(true),
    };
    
    const useCase = new ToggleFavoriteUseCase(mockRepo);

    // Act
    const result = await useCase.execute('poem-123');

    // Assert
    expect(result).toBe(true);
    expect(mockRepo.toggleFavorite).toHaveBeenCalledWith('poem-123');
  });
});
```

### Test de Repository

```typescript
describe('FavoritesLocalStorageRepository', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save and retrieve favorites', async () => {
    const repo = new FavoritesLocalStorageRepository();
    
    await repo.addFavorite('poem-1');
    const favorites = await repo.getFavorites();
    
    expect(favorites).toEqual(['poem-1']);
  });
});
```

## 🔄 Flujo de Datos Completo

### Ejemplo: Usuario hace clic en "favorito"

```
1. UI (PoemCard.tsx)
   ↓
   onClick={() => toggleFavorite(poemId)}

2. Hook (use-favorites.ts)
   ↓
   const { toggleFavoriteUseCase } = usePoemsDependencies()
   await toggleFavoriteUseCase.execute(poemId)

3. Use Case (toggle-favorite.use-case.ts)
   ↓
   await this.favoritesRepository.toggleFavorite(poemId)

4. Repository (favorites-localstorage.repository.ts)
   ↓
   localStorage.setItem('favorites', JSON.stringify([...]))

5. TanStack Query
   ↓
   queryClient.invalidateQueries(['favorites'])

6. UI actualizada automáticamente ✅
```

## 📚 Patrones de Diseño Utilizados

### 1. **Repository Pattern**
Abstrae el acceso a datos:
```typescript
interface PoemsRepository {
  getAll(): Promise<Poem[]>;
  getById(id: string): Promise<Poem | undefined>;
}
```

### 2. **Use Case Pattern (Command)**
Encapsula lógica de negocio:
```typescript
class SearchPoemsUseCase {
  execute(poems: Poem[], query: SearchQuery): SearchResult[] {
    // Lógica pura
  }
}
```

### 3. **Dependency Injection (IoC)**
Control de inversión mediante Context:
```typescript
<PoemsDependenciesProvider>
  <App />
</PoemsDependenciesProvider>
```

### 4. **Factory Pattern**
Creación centralizada de instancias:
```typescript
useMemo(() => {
  const repo = new PoemsInMemoryRepository();
  return new GetPoemsUseCase(repo);
}, []);
```

### 5. **Adapter Pattern**
Hooks adaptan use cases a React:
```typescript
// Use Case (framework-agnostic)
class GetPoemsUseCase { }

// Adapter (React-specific)
function usePoems() {
  const { getPoemsUseCase } = usePoemsDependencies();
  return useQuery(() => getPoemsUseCase.execute());
}
```

## 🎓 Ventajas de esta Arquitectura

### ✅ Testabilidad
- Tests unitarios sin React
- Mocks simples
- Rápidos de ejecutar

### ✅ Mantenibilidad
- Cambios aislados por capa
- Refactors seguros
- Código autodocumentado

### ✅ Escalabilidad
- Fácil añadir features
- Reutilización de lógica
- Trabajo en equipo sin conflictos

### ✅ Flexibilidad
- Cambiar implementaciones sin tocar lógica
- Migrar a otro framework (Vue, Solid, etc.)
- Multi-plataforma (Web + Mobile)

## 🔄 Cómo Extender la Arquitectura

### Añadir un nuevo Use Case

```typescript
// 1. Crear el use case
export class ExportPoemUseCase {
  constructor(
    private poemsRepository: PoemsRepository,
    private exportService: ExportService
  ) {}

  async execute(poemId: string, format: 'pdf' | 'txt'): Promise<Blob> {
    const poem = await this.poemsRepository.getById(poemId);
    return this.exportService.export(poem, format);
  }
}

// 2. Registrar en el Provider
export function PoemsDependenciesProvider({ children }) {
  const dependencies = useMemo(() => {
    // ... otros
    const exportPoemUseCase = new ExportPoemUseCase(
      poemsRepository,
      new ExportService()
    );
    
    return { ...otros, exportPoemUseCase };
  }, []);
}

// 3. Usar en un hook
export function useExportPoem() {
  const { exportPoemUseCase } = usePoemsDependencies();
  
  return useMutation({
    mutationFn: (params) => exportPoemUseCase.execute(params.id, params.format)
  });
}
```

### Añadir una nueva implementación de Repository

```typescript
// 1. Implementar la interfaz
export class FavoritesApiRepository implements FavoritesRepository {
  constructor(private httpClient: HttpClient) {}
  
  async getFavorites(): Promise<string[]> {
    const response = await this.httpClient.get('/favorites');
    return response.data;
  }
  
  // ... resto de métodos
}

// 2. Cambiar en el Provider (un solo lugar)
const favoritesRepository = new FavoritesApiRepository(httpClient);
// En lugar de:
// const favoritesRepository = new FavoritesLocalStorageRepository();
```

## 📖 Recursos

- [Clean Architecture (Robert C. Martin)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Dependency Injection in React](https://kentcdodds.com/blog/application-state-management-with-react)
- [Repository Pattern](https://martinfowler.com/eaaCatalog/repository.html)
