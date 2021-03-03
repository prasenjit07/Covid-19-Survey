import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HomeService} from './home.service'

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  errorMessage = '';
  home: any | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private homeService: HomeService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getHome(id);
    }
  }

  getHome(id: number): void {
    this.homeService.getHome(id).subscribe({
      next: home => this.home = home,
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/home']);
  }

}
