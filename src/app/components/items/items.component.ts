import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  selectedItem: Item;
  loaded: boolean = false;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedItem = {
          id: '',
          text: '',
          date: ''
        }
      }
    })

    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.loaded = true;
    });
  }

  onSelect(item: Item) {
    this.itemService.setFormItem(item);
    this.selectedItem = item;
  }

  onDelete(item: Item) {
    if (confirm(`Confirm that ${item.text} should be deleted?`)) {
      this.itemService.deleteItem(item);
    }
  }

  onPack(item: Item) {
    if (confirm(`Confirm that ${item.text} has been packed?`)) {
      this.itemService.addToPacked(item);
    }
  }

}
