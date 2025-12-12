import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CatalogService } from 'src/app/core/Services/catalog.service';
import { loadBrands, loadBrandsFailure, loadBrandSuccess, loadCategories, loadCategoriesFailure, loadCategoriesSuccess } from './catalog.action';

@Injectable()
export class CatalogEffects {
    constructor(private actions$: Actions, private catalogService: CatalogService) { }

    loadCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCategories),
            mergeMap(() =>
                this.catalogService.getCategories().pipe(
                    map((res) => { 
                       return res.isSuccessed === true ? loadCategoriesSuccess({ categories: res.data ? res.data : [] }) : loadCategoriesFailure({ error: res.message }) 
                    }),
                    catchError((error) => of(loadCategoriesFailure({ error })))
                )
            )
        )
    );

    
    loadBrands$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadBrands),
            mergeMap(() =>
                this.catalogService.getBrands().pipe(
                    map((res) => { 
                       return res.isSuccessed === true ? loadBrandSuccess({ brands: res.data ? res.data : [] }) : loadBrandsFailure({ error: res.message }) 
                    }),
                    catchError((error) => of(loadBrandsFailure({ error })))
                )
            )
        )
    );
}
