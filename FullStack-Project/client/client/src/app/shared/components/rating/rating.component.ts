import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 's-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: number = 0
  ngOnInit(): void {
    if (this.rating > 5) this.rating = 5;
  }

}
