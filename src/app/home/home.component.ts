import { Component, OnInit } from '@angular/core';
import { User, Job } from '../_models/index';
import { UserService, JobService } from '../_services/index';
import { Observable } from 'rxjs';


@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[];
    jobs: Job[];

    constructor(private userService: UserService,
        private jobService: JobService,
       
        ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllJobs();
    }
    
        deleteJob(id: number) {
               if (confirm("Are you sure you want to cancel " +  "?")) {
                this.jobService.delete(id).subscribe(
                    data => {
                      // refresh the list
                      this.loadAllJobs();
                       return true;
                     },
                     error => {
                      console.error("Error canceling job!");
                       return Observable.throw(error);
                     }
                  );
                }
              }


    private loadAllUsers() {
        this.userService.getAll().subscribe(data => {
            this.users = data;
            //  console.log(data)
        });
       
    }

    private loadAllJobs() {
        this.jobService.getAll().subscribe(data => {
            this.jobs = data;
          //  console.log(data)
        });
    }
}