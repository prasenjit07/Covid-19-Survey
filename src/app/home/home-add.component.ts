import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray} from '@angular/forms';
import {Router,ActivatedRoute} from '@angular/router'
import { Observable,Subscription } from 'rxjs';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home-add',
  templateUrl: './home-add.component.html',
  styleUrls: ['./home-add.component.css']
})
export class HomeAddComponent implements OnInit {

  pageTitle = 'Home Edit';
  errorMessage: string;
  home:any;
  private sub: Subscription;
  houseForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private route:ActivatedRoute, private homeService: HomeService){}

  get members(): FormArray {
    return this.houseForm.get('members') as FormArray;
  }

  ngOnInit() {
    this.houseForm = this.fb.group({
      houseNumber: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      houseAddress: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      members : this.fb.array([this.buildMember()])
    });
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getHome(id);
      }
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  

  addMember(): void {
    this.members.push(this.buildMember());
  }

  buildMember():FormGroup{
    return this.fb.group({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(32)]],
      gender:['',[Validators.required]],
      age:['',[Validators.required,Validators.pattern("^[0-9]*$")]]
    })
  }

  save(): void {
    console.log(this.houseForm);
    console.log('Saved: ' + JSON.stringify(this.houseForm.value));
  }

  getHome(id: number): void {
    this.homeService.getHome(id)
      .subscribe({
        next: (home) => this.displayProduct(home),
        error: err => this.errorMessage = err
      });
  }

  displayProduct(home): void {
    if (this.houseForm) {
      this.houseForm.reset();
    }
    this.home = home;

    if (this.home.id === 0) {
      this.pageTitle = 'Add Home';
    } else {
      this.pageTitle = `Edit Home: ${this.home.houseAddress}`;
    }

    // Update the data on the form
    this.houseForm.patchValue({
      productName: this.home.productName,
      productCode: this.home.homeCode,
      starRating: this.home.starRating,
      description: this.home.description
    });
    this.houseForm.setControl('tags', this.fb.array(this.home.tags || []));
  }
}