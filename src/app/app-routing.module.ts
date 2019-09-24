import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecDescComponent } from './rec-desc/rec-desc.component';

const routes: Routes = [
  {
    path: 'rec/:id',
    component: RecDescComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
