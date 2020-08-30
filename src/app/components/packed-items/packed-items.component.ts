import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/Item';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packed-items',
  templateUrl: './packed-items.component.html',
  styleUrls: ['./packed-items.component.css']
})
export class PackedItemsComponent implements OnInit {

  packedItems: Item[];

  constructor(
    private itemService: ItemService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.itemService.getPackedItems().subscribe(items => {
      this.packedItems = items;
    });
  }

  clearPacked(): void {
    if (confirm(`Confirm clearing all packed items?`)) {
      this.itemService.clearPackedItems();
      this.router.navigate(['/']);
    }
  }
}
