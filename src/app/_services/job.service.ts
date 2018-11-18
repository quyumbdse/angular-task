import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../_models/index';
import { SERVER_API_URL } from '../app.constants';
import { Observable } from 'rxjs';


@Injectable()
export class JobService {

    private resourceUrl = SERVER_API_URL + 'api/jobs';
   
    constructor(private http: HttpClient) {}


    create(job: Job) {
        return this.http.post(this.resourceUrl, job);
    }

    getAll(): Observable<any> {
        return this.http.get<Job>(this.resourceUrl);
    } 

    getById(id: number) {
        return this.http.get(`${this.resourceUrl}/${id}`);
    }

    update(job: Job) {
        return this.http.put(this.resourceUrl + job.id, job);
    }

    delete(id: number) {
        return this.http.delete(`${this.resourceUrl}/${id}`);
    }
}