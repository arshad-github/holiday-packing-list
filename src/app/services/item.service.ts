import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Item[];

  private itemSource = new BehaviorSubject<Item>({
    id: null,
    text: null,
    date: null
  });

  selectedItem = this.itemSource.asObservable();

  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() { 
    this.items = [];
  }

  getItems(): Observable<Item[]> {
    if (localStorage.getItem('items') === null) {
      this.items = [];
    } else {
      this.items = JSON.parse(localStorage.getItem('items'));
    }
    return of(this.items.sort((a, b) => {
      return b.date - a.date;
    }))
  }

  setFormItem(item: Item) {
    this.itemSource.next(item);
  }

  addItem(item: Item) {
    this.items.unshift(item);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  updateItem(item: Item) {
    this.items.forEach((cur, index) => {
      if (item.id = cur.id) {
        this.items.splice(index, 1);
      }
    });
    this.items.unshift(item);
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  deleteItem(item: Item) {
    this.items.forEach((cur, index) => {
      if (item.id == cur.id) {
        this.items.splice(index, 1);
      }
    });
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  clearState() {
    this.stateSource.next(true);
  }
}
