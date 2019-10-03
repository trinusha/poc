import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecDescComponent } from './rec-desc/rec-desc.component';
import { PocViewComponent } from './poc-view/poc-view.component';
import {TestComponent} from './test/test.component';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  
  {
    path: 'rec/:seqIds',
    component: RecDescComponent
  },
   
  {
    path: 'rec',
    component: PocViewComponent
  },
  {
    path: '',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule {}
