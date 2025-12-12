import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './components/rating/rating.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MatCardModule } from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { RenderimgPipe } from './pipes/renderimg.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import {MatChipsModule} from '@angular/material/chips';




@NgModule({
  declarations: [
    RatingComponent,
    NotfoundComponent,
    RenderimgPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatMenuModule,
    MatChipsModule
  ],
  exports:[
    RenderimgPipe,
    RatingComponent,
    RouterModule,
    NotfoundComponent,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatCardModule,
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatMenuModule,
    MatChipsModule
  ]
})
export class SharedModule { }
