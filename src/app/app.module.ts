import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemsComponent } from './components/items/items.component';
import { AppRoutingModule } from './app-routing.module';
import { PackedItemsComponent } from './components/packed-items/packed-items.component';
import { MainItemsComponent } from './components/main-items/main-items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemFormComponent,
    ItemsComponent,
    PackedItemsComponent,
    MainItemsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
