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
  total:number=0;
  constructor(private homeService: HomeService) {}
  
  ngOnInit(): void {
    this.homeService.getHomes().subscribe({
      next: homes => {
        this.homes = homes;
        console.log(homes);
        var flag=0;
        for (var i = 0; i < homes.length; i++) {
          for (var j = 0; j <homes[i].members.length; j++) {
               if(homes[i].members[j].age>60)
                      flag=1;
          }
          this.total+=flag;
          flag=0
        }
      },
      error: err => this.errorMessage = err
    });
  }

}
