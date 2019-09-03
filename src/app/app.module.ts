import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocViewComponent } from './poc-view/poc-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecDescComponent } from './rec-desc/rec-desc.component';
@NgModule({
   declarations: [
      AppComponent,
      PocViewComponent,
      RecDescComponent
   ],
   imports: [
      BrowserModule,
      NgbModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
