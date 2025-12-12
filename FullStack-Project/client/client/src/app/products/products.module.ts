import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { PraginationComponent } from './pragination/pragination.component';

import { FiltersComponent } from './filters/filters.component';
import {MatSliderModule} from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SortHeaderComponent } from './sort-header/sort-header.component'
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ProductCardComponent } from './product-card/product-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {MatTabsModule} from '@angular/material/tabs'



@NgModule({
  declarations: [
    ProductsComponent,
    PraginationComponent,
    FiltersComponent,
    SortHeaderComponent,
    ProductCardComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatSliderModule,
    MatFormFieldModule,
    FormsModule,
    ButtonsModule.forRoot(),

    MatSelectModule,
    MatButtonToggleModule,

    MatGridListModule,
    MatTabsModule,

    HttpClientModule,

    SharedModule

  ],
  exports:[
    ProductCardComponent
  ]
})
export class ProductsModule { }
