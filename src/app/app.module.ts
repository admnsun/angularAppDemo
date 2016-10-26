import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { provideStore, Store } from '@ngrx/store';
import reducers from './reducers';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { GetComponent } from './components/get/get.component';
import { CarActions } from './actions/car.action';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    GetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [provideStore(reducers),CarActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
