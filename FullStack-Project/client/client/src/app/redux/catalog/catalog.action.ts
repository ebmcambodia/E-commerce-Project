import { createAction, props } from '@ngrx/store';
import { BrandResDto, CategoryResDto } from 'src/app/core/Models/catalog';


// Load categories
export const loadCategories = createAction('[Category] Load Categories');

// Load categories Success
export const loadCategoriesSuccess = createAction(
  '[Category] Load Categories Success',
  props<{ categories: CategoryResDto[] }>()
);

// Load categories Failure
export const loadCategoriesFailure = createAction(
  '[Category] Load Categories Failure',
  props<{ error: any }>()
);

//Load Brand
export const loadBrands = createAction('[Brand] Load Brands');

// Load Brand Success
export const loadBrandSuccess = createAction(
    '[Category] Load Brands Success',
    props<{ brands: BrandResDto[] }>()
  );
  
  // Load Brand Failure
  export const loadBrandsFailure = createAction(
    '[Category] Load Brands Failure',
    props<{ error: any }>()
  );