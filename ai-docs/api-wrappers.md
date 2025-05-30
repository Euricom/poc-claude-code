# API Wrapper Guidelines

- **API Wrapper Structure**
  - Place API wrappers in `src/api/{resource}/{resource}.ts`
  - Group related endpoints by resource (e.g., products, users)
  - Export all types in a separate `types.ts` file
  - Use TypeScript for full type safety

- **Type Definitions**
  - **DTO Types**:
    - Define DTO types based on the API schema to represent the raw data received from the API.
    - Import types directly from the generated schema file (e.g., `components["schemas"]["product"]`).
  - **Entity Types**:
    - Create entity types that represent the domain model of the data.
    - These types should map the DTO types to more suitable formats, such as converting date strings to `Date` objects.
    ```typescript
    // ✅ DO: Define DTO types based on the API schema
    import { components } from "../schema";
    type ProductDTO = components["schemas"]["product"];

    // ✅ DO: Define mapped domain types
    export type Product = Omit<ProductDTO, "createdAt" | "updatedAt"> & {
      createdAt: Date;
      updatedAt: Date;
    };
    ```
    
  - **Benefits**:
    - Ensures type safety by using the API schema as the source of truth for DTO types.
    - Allows for data transformation and adaptation to the domain model through entity types.

- **Function Naming & Parameters**
  - Use clear, action-based names: `getProduct`, `createUser`, `updateOrder`
  - Accept `ApiInstance` as first parameter
  - Group query parameters in a params object
  ```typescript
  // ✅ DO: Use clear parameter interfaces
  interface GetProductsParams {
    page?: number;
    pageSize?: number;
    sortBy?: string;
    filter?: string;
  }

  // ✅ DO: Export typed functions
  export const getProducts = async (
    api: ApiInstance,
    params: GetProductsParams = {}
  ): Promise<Product[]> => {
    // Implementation
  };

  // ❌ DON'T: Use untyped parameters
  export const getProducts = async (api, params) => {
    // Implementation
  };
  ```

- **Data Mapping**
  - Create mapper functions to transform DTO to domain models
  - Handle date conversions and data transformations
  ```typescript
  // ✅ DO: Create explicit mappers
  const productMapper = (dto: ProductDTO): Product => ({
    ...dto,
    createdAt: new Date(dto.createdAt),
  });

  // ❌ DON'T: Return raw DTO data
  const getProduct = async (id: string) => {
    return await api.get(`/products/${id}`);
  };
  ```

- **Error Handling**
  - Let the ApiInstance handle common errors (401, 403, 500)
  - Handle specific business errors in the wrapper
  - Document expected errors in JSDoc comments

- **Documentation**
  - Add JSDoc comments for all exported functions
  - Include links to API documentation when available
  - Document expected errors and edge cases
  ```typescript
  /**
   * Fetches a product by ID
   * @param api - API instance
   * @param id - Product ID
   * @throws {NotFoundError} When product doesn't exist
   * @returns Promise<Product>
   */
  export const getProduct = async (
    api: ApiInstance,
    id: string
  ): Promise<Product> => {
    // Implementation
  };
  ```

- **Testing**
  - Create separate test files: `{resource}.test.ts`
  - Mock API responses using MSW or similar
  - Test both success and error scenarios
  - Verify data mapping and transformations

- **Best Practices**
  - Keep functions small and focused
  - Use consistent error handling patterns
  - Implement proper TypeScript types
  - Follow REST conventions for endpoint naming
  - Use query parameters for filtering and pagination
  - Document rate limits and pagination details

