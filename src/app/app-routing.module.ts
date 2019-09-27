import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecDescComponent } from './rec-desc/rec-desc.component';
//import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path: 'rec/:id',
    component: RecDescComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule {}
