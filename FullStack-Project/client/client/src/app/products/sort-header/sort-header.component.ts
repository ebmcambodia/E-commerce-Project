import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-sort-header',
  templateUrl: './sort-header.component.html',
  styleUrls: ['./sort-header.component.css']
})
export class SortHeaderComponent {
  readonly showOptions: number[] = [10, 20, 30, 50, 100];
  readonly sortOptions = [
    {
      sortName:'Featured',
      sortCode:'featured'
    },
    {
      sortName:'Price: Low to High',
      sortCode:'price_lth'
    },
    {
      sortName:'Price: High to Low',
      sortCode:'price_htl'
    },
    {
      sortName:'Rating',
      sortCode:'rating'
    },
    {
      sortName:'Newest',
      sortCode:'newest'
    }
];

  @Input() itemsToShow:number=10;
  @Input() sortBy: string = 'featured';

  @Output() sortHeaderChanges = new EventEmitter<any>();

  // itemsToShowChange(obj:MatSelectChange){
  //  this.itemsToShow=obj.value;
  //  this.applyChanges();
  // }

  itemsToShowChange(){
    this.applyChanges();
   }

  // sortByChange(obj:MatSelectChange){
  //   this.sortBy=obj.value;
  //   this.applyChanges();
  // }
  sortByChange(){
    this.applyChanges();
  }
  
  applyChanges(){
    const sortFilter = {
      itemsToShow:this.itemsToShow,
      sortBy:this.sortBy
    }

    this.sortHeaderChanges.emit(sortFilter);
  }

}
