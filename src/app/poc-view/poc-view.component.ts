import { Component, OnInit } from '@angular/core';
import { CrmModel } from '../model/crmModel';
import { crmModelList } from '../model/crmData';

@Component({
  selector: 'app-poc-view',
  templateUrl: './poc-view.component.html',
  styleUrls: ['./poc-view.component.css']
})
export class PocViewComponent implements OnInit {
  crmList: Array<CrmModel>;
  constructor() {
    this.crmList = crmModelList;
  }

  ngOnInit() {}
}
