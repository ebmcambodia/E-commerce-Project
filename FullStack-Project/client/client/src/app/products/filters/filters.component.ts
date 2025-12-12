import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { BrandResDto, CategoryResDto } from 'src/app/core/Models/catalog';
import { loadBrands } from 'src/app/redux/catalog/catalog.action';
import { selectBrands, selectCategories } from 'src/app/redux/catalog/catalog.selector';
import { AppState } from 'src/app/redux/store';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  categories$: Observable<CategoryResDto[]>;
  brands$:Observable<BrandResDto[]>;
  constructor(private store: Store<AppState>) {
    this.categories$ = this.store.select(selectCategories);
    this.brands$=this.store.select(selectBrands);
  }


  ngOnInit(): void {
    this.brands$.pipe(
      tap(brands=>{
        if(brands.length===0){
          this.store.dispatch(loadBrands());
        }
      })
    )
    .subscribe()
  }




  // Sample filter values
  @Input() selectedCategoryIds: number[]=[];
  @Input() selectedBrandIds: number[]=[];
  @Input() selectedStockType: boolean = true;
  @Input() selectedRating: number[]=[];
 
  @Input() minPrice: number=0;
  @Input() maxPrice: number=30000;
  @Input() selectedMinPrice: number=this.minPrice;
  @Input() selectedMaxPrice: number=this.maxPrice;

  @Output() filtersChanged = new EventEmitter<any>();
 // Slider values


 // Star ratings filter
 ratings = [
   { value: 5, selected: false },
   { value: 4, selected: false },
   { value: 3, selected: false },
   { value: 2, selected: false },
   { value: 1, selected: false }
 ];

 // Update the selected price range
 minPriceChange(priceData:any){
  this.selectedMinPrice=priceData.value;
  this.applyFilters();
 }
 maxPriceChange(priceData:any){
  this.selectedMaxPrice=priceData.value;
  this.applyFilters();
 }

 // Toggle rating selection
 toggleRating(ratingValue: number) {
  const index = this.selectedRating.indexOf(ratingValue);
  if (index === -1) {
    this.selectedRating.push(ratingValue);
  } else {
    this.selectedRating.splice(index, 1);
  }
  this.applyFilters();
 }

 toggleCategory(categoryId:number){
  debugger
  const index = this.selectedCategoryIds.indexOf(categoryId);
  if (index === -1) {
    this.selectedCategoryIds.push(categoryId);
  } else {
    this.selectedCategoryIds.splice(index, 1);
  }
  this.applyFilters();
 }

 toggleBrand(brandId:number){
  const index = this.selectedBrandIds.indexOf(brandId);
  if (index === -1) {
    this.selectedBrandIds.push(brandId);
  } else {
    this.selectedBrandIds.splice(index, 1);
  }
  this.applyFilters();
 }
 
 toggleStock(value:boolean){
  this.selectedStockType=value;
  this.applyFilters();
 }

   // Method to emit the filter data
   applyFilters() {
    const selectedFilters = {
      categoryId: this.selectedCategoryIds,
      brandId: this.selectedBrandIds,
      minPrice: this.selectedMinPrice,
      maxPrice: this.selectedMaxPrice,
      stockType:this.selectedStockType,
      ratings:this.selectedRating
    };

    this.filtersChanged.emit(selectedFilters);
  }
}
