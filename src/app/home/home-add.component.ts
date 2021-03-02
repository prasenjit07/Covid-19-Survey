import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-home-add',
  templateUrl: './home-add.component.html',
  styleUrls: ['./home-add.component.css']
})
export class HomeAddComponent implements OnInit {

  houseForm:FormGroup;
  constructor(private fb:FormBuilder){}

  get members(): FormArray {
    return this.houseForm.get('members') as FormArray;
  }

  ngOnInit() {
    this.houseForm = this.fb.group({
      houseNumber: ['', [Validators.required,Validators.pattern("^[0-9]*$")]],
      houseAddress: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(40)]],
      members : this.fb.array([this.buildMember()])
    })
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
}