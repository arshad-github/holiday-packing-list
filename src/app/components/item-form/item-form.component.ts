import { Component, OnInit } from '@angular/core';

import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.selectedItem.subscribe(item => {
      if (item.id !== null) {
        this.isNew = false;
        this.id = item.id;
        this.text = item.text;
        this.date = item.date;
      }
    });
  }

  onSubmit() {
    if(this.isNew) {
      const newItem = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      }
      this.itemService.addItem(newItem);
    } else {
      const updItem = {
        id: this.id,
        text: this.text,
        date: new Date()
      }
      this.itemService.updateItem(updItem);
    }
    this.clearState();
  }

  clearState() {
    this.isNew = true;
    this.id = '';
    this.text = '';
    this.date = '';
    this.itemService.clearState();
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
