import { Component } from '@angular/core';
import { crmModelList } from './model/crmData';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // console.table(crmModelList);
  }
}
