import { Component, Inject, inject, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselModule as owlCarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { ProductsModule } from 'src/app/products/products.module';
import { CategoryResDto, ProductResDto } from 'src/app/core/Models/catalog';
import { AppState } from 'src/app/redux/store';
import { BASE_IMAGE_API } from 'src/app/core/token/baseUrl.token';
import { CatalogService } from 'src/app/core/Services/catalog.service';
import { selectCategories } from 'src/app/redux/catalog/catalog.selector';



@Component({
  standalone:true,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports:[
    CommonModule,
    CarouselModule,
    owlCarouselModule,
    MatCardModule,
    ProductsModule
  ]
})
export class HomePageComponent implements OnInit {
  categories$: Observable<CategoryResDto[]>;
  products$:Observable<ProductResDto[]>;


  constructor(
    private store: Store<AppState>,
    @Inject(BASE_IMAGE_API) public serveApi:string,
    private catalogService: CatalogService
  ) {
    this.categories$ = this.store.select(selectCategories);
    this.products$= this.catalogService.getProducts({pageSize:8,pageIndex:1,sort:'rating'}).pipe(
      map((res)=>res.data?.data!==undefined? res.data?.data:[])
    );
  }

  ngOnInit(): void {
    
  }

  bannerOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
    autoplay:true,
    autoplaySpeed:2500
  }
  bannerStore:any[]=[
    {
      id:'1',
      src:'assets/Banner_1.png'
    },
    {
      id:'2',
      src:'assets/Banner_2.png'
    },
    {
      id:'3',
      src:'assets/Banner_3.png'
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false,
    autoplay:true,
    autoplaySpeed:1000
  }
  slidesStore:any[]=[
    {
      id:'1',
      src:'assets/Audio & Home Theater.png',
      alt:'Audio & Home Theater',
      title:'Audio & Home Theater'
    },
    {
      id:'2',
      src:'assets/Camera.png',
      alt:'Camera',
      title:'Camera'
    },
    {
      id:'3',
      src:'assets/Computers.png',
      alt:'Computers',
      title:'Computers'
    },
    {
      id:'4',
      src:'assets/mobile.png',
      alt:'Mobile',
      title:'Mobile'
    },
    {
      id:'5',
      src:'assets/TV & Video.png',
      alt:'TV & Video',
      title:'TV & Video'
    },
    {
      id:'6',
      src:'assets/Wearable Technology.png',
      alt:'Wearable Technology',
      title:'Wearable Technology'
    }
  ]
}
