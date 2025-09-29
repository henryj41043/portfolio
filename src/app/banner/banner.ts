import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-banner',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner {

}
