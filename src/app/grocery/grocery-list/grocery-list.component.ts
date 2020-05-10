import { Component, OnInit } from '@angular/core';
import { Item } from '../classes/item';


import { ItemService } from '../Service/itemservice';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {


  availableItems: Item[];

  selectedItems: Item[];

  draggedItem: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.selectedItems = [];
        this.itemService.getItemsSmall().then(items => this.availableItems = items);
  }
dragStart(event,item: Item) {
        this.draggedItem = item;
    }

    drop(event) {
        if(this.draggedItem) {
            let draggedItemIndex = this.findIndex(this.draggedItem);
            this.selectedItems = [...this.selectedItems, this.draggedItem];
            this.availableItems = this.availableItems.filter((val,i) => i!=draggedItemIndex);
            this.draggedItem = null;
        }
    }

    dragEnd(event) {
        this.draggedItem = null;
    }

    findIndex(item: Item) {
        let index = -1;
        for(let i = 0; i < this.availableItems.length; i++) {
            if(item.inSeason === this.availableItems[i].inSeason) {
                index = i;
                break;
            }
        }
        return index;
    }

}