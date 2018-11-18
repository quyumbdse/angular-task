import { Component, OnInit } from '@angular/core';
import { User, Job } from '../_models/index';
import { UserService, JobService } from '../_services/index';


@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[];
    jobs: any[];

    constructor(private userService: UserService,
        private jobService: JobService,
       
        ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllJobs();
    }
    

    deleteJob = (id: number) =>
        this.jobService.delete(id).subscribe(() => {
            this.loadAllUsers(); 
            alert('deleted')
        });
            
      

    private loadAllUsers() {
        this.userService.getAll().subscribe(data => {
            this.users = data;
            //  console.log(data)
        });
       
    }

    private loadAllJobs() {
        this.jobService.getAll().subscribe(data => {
            this.jobs = data;
            console.log(data)
        });
    }
}