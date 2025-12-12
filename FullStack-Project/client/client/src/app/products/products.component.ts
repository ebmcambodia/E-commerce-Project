import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrandResDto, CategoryResDto, ProductFilters, ProductResDto } from '../core/Models/catalog';
import { ResponseDto } from '../core/Models/response';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/store';
import { selectBrands } from '../redux/catalog/catalog.selector';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { loadBrands } from '../redux/catalog/catalog.action';
import { CatalogService } from '../core/Services/catalog.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductResDto[] = [];
  
  pageIndex: number=0;
  pageSize:number= 10;
  firstTimeloaded=false;
  pageItems!:number;
  maxPrice!:number;
  minPrice!:number;

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.filters$.subscribe((filter) => {
      this.catalogService.getProducts(filter).subscribe((res) => {
        console.log(res);
        if(res.data?.count!=undefined){
          this.pageItems = res.data?.count;
        }
        if(res.data?.minPrice!=undefined){
          this.minPrice = res.data?.minPrice;
        }
        if(res.data?.maxPrice!=undefined){
          this.maxPrice = res.data?.maxPrice;
        }
        if (res.data?.data !== undefined) {
          this.products = res.data?.data;
        }
      });
    })
  }


  

  initialFilters: ProductFilters = {
    pageIndex: 1,
    pageSize: 10
  };
  filters$ = new BehaviorSubject<ProductFilters>(this.initialFilters);
  get getFilters(){
    return this.filters$.value;
  }

  display(pageIndex: number) {
    this.initialFilters={
      ...this.initialFilters,
      pageIndex: pageIndex
    }
    this.filters$.next(this.initialFilters)
  }
  filtersChanged(filters: any) {
    this.initialFilters={
      ...this.initialFilters,
      categoryIds: filters.categoryId,
      brandIds: filters.brandId,
      ratings : filters.ratings,
      maxPrice: filters.maxPrice,
      minPrice: filters.minPrice,
      inStock: filters.stockType
    }
    this.filters$.next(this.initialFilters)
  }

  sortFiltersChanged(sortFilters: any) {
    this.pageSize = sortFilters.itemsToShow;
    this.initialFilters={
      ...this.initialFilters,
      pageSize: sortFilters.itemsToShow,
      sort: sortFilters.sortBy
    }
    this.filters$.next(this.initialFilters);
  }
}
