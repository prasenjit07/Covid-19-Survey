import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home-threat',
  templateUrl: './home-threat.component.html',
  styleUrls: ['./home-threat.component.css']
})
export class HomeThreatComponent implements OnInit {

  homes:any[];
  errorMessage:string='';
  total:number=0;
  totalHome:number=0;
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
          flag=0;
          this.totalHome=homes.length
        }
      },
      error: err => this.errorMessage = err
    });
  }

}
