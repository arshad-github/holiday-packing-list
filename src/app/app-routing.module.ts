import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { PackedItemsComponent } from './components/packed-items/packed-items.component';
import { MainItemsComponent } from './components/main-items/main-items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MainItemsComponent },
  { path: 'packed', component: PackedItemsComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
