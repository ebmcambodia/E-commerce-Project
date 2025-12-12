import { createReducer, on } from '@ngrx/store';
import { loadCategories, loadCategoriesSuccess, loadCategoriesFailure, loadBrands, loadBrandSuccess, loadBrandsFailure } from './catalog.action';
import { BrandResDto, CategoryResDto } from 'src/app/core/Models/catalog';

export interface CatalogState {
    categories: CategoryResDto[];
    brands: BrandResDto[],
    error: any;
}

const initialState: CatalogState = {
    categories: [],
    brands: [],
    error: null,
};

export const catalogReducer = createReducer(
    initialState,
    on(loadCategories, (state) => ({ ...state })),
    on(loadCategoriesSuccess, (state, { categories }) => ({
        ...state,
        categories,
        error: null,
    })),
    on(loadCategoriesFailure, (state, { error }) => ({
        ...state,
        error,
    })),
    on(loadBrands, (state) => ({ ...state })),
    on(loadBrandSuccess, (state, { brands }) => ({
        ...state,
        brands,
        error: null,
    })),
    on(loadBrandsFailure, (state, { error }) => ({
        ...state,
        error,
    }))
);
