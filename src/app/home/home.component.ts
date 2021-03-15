import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home,  HomesResolved } from './home';
import {HomeService} from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  homes:Home[];
  errorMessage:string='';
  constructor(private homeService: HomeService,private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    // this.homeService.getHomes().subscribe({
    //   next: homes => {
    //     this.homes = homes;
    //   },
    //   error: err => this.errorMessage = err
    // });
    const resolvedData: HomesResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.homes = resolvedData.homes;
  }

}
