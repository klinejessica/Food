import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Item } from '../classes/item';

@Injectable()
export class ItemService{

    constructor(private http: HttpClient) { }

    getItemsSmall() {
        return this.http.get<any>('assets/data/items.json')
        .toPromise()
        .then(res => <Item[]>res.data)
        .then(data => { return data;});
    }


}