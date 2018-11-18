import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';


@Injectable()
export class UserService {

    private resourceUrl = SERVER_API_URL + 'api/users'; 
   
    constructor(private http: HttpClient) {}

    getAll(): Observable<any> {
        return this.http.get<User>(this.resourceUrl);
    } 
    

    getById(id: number) {
        return this.http.get(this.resourceUrl + id);
    }

    create(user: User) {
        return this.http.post(this.resourceUrl, user);
    }

    update(user: User) {
        return this.http.put(this.resourceUrl + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(this.resourceUrl + id);
    }
}