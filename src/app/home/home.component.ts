import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  homes:any[];
  errorMessage:string='';

  constructor(private homeService: HomeService) {}
  
  ngOnInit(): void {
    this.homeService.getHomes().subscribe({
      next: homes => {
        this.homes = homes;
        console.log(homes);
      },
      error: err => this.errorMessage = err
    });
  }

}
