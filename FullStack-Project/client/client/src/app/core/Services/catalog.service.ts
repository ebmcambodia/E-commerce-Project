import { Injectable } from '@angular/core';
import { ResponseDto } from '../Models/response';
import { BrandResDto, CategoryResDto, ProductFilters, ProductPaginationRes, ProductResDto } from '../Models/catalog';
import { HttpClient } from '@angular/common/http';
import { Pagination } from '../Models/pagination';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http:HttpClient){}

  getCategories(){
   return this.http.get<ResponseDto<CategoryResDto[]>>('Catalog/category/getall')
  }

  getBrands(){
    return this.http.get<ResponseDto<BrandResDto[]>>('Catalog/brand/getall')
  }

  getProducts(filter:ProductFilters){
    return this.http.post<ResponseDto<ProductPaginationRes>>('Catalog/product/getall',filter)
  }
  getProductById(productId:string){
    return this.http.get<ResponseDto<ProductResDto>>('Catalog/'+productId);
  }
}
