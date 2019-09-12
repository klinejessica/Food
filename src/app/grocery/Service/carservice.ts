import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from '../classes/car';

@Injectable()
export class CarService{

    constructor(private http: HttpClient) { }

    getCarsSmall() {
        return this.http.get<any>('assets/showcase/data/cars-small.json')
        .toPromise()
        .then(res => <Car[]>res.data)
        .then(data => { return data;});
    }


}