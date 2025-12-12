import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CatalogState } from './catalog.reducer';

// Get complete state of the catalog in application
export const selectCatalogState = createFeatureSelector<CatalogState>('catalogStore');

// get All Categories
export const selectCategories = createSelector(
    selectCatalogState,
    (state: CatalogState) => state.categories
);

// get All Brand
export const selectBrands = createSelector(
    selectCatalogState,
    (state: CatalogState) => state.brands
);


// // Select the selected product based on the selectedProductId
// export const selectSelectedProduct = createSelector(
//     selectAllProducts,
//     selectSelectedProductId,
//     (products, selectedProductId) => products.find((product) => product.id === selectedProductId)
//   );