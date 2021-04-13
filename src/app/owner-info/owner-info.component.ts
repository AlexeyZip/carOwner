import { OwnerService } from './../../owner.service';
import { Owner } from './../owner';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.scss']
})
export class OwnerInfoComponent implements OnInit {

  owner: Owner;
  form: FormGroup;
  submitted = false;
  carForm: FormGroup;

  itemCar

  uSub: Subscription
  constructor(private route: ActivatedRoute, private ownerService:OwnerService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.getOwnerById() 
  }

  getOwnerById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwnerById(id)
      .subscribe((owner: Owner) => {
        this.owner = owner
       for(let item of this.owner.cars) {
        this.form = new FormGroup({
          firstName: new FormControl(this.owner.firstName, Validators.required),
          lastName: new FormControl(this.owner.lastName, Validators.required),
          middleName: new FormControl(this.owner.middleName, Validators.required),
          carNumber: new FormControl(item.number, Validators.required),
          carName: new FormControl(item.name, Validators.required),
          carModel: new FormControl(item.model, Validators.required),
          carYear: new FormControl(item.year, Validators.required),
        }) 
       }
        
      })
  }

  goBack(): void {
    this.location.back();
  }

  del() {

  }

  // save(): void {
  //   this.ownerService.updateOwner(this.owner)
  //   .subscribe(() => this.goBack)
  // }

  save(): void {
    
    if(this.form.invalid) {
      return
    }

    this.submitted = true

   this.uSub = this.ownerService.updateOwner({
      ...this.owner,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      middleName: this.form.value.middleName,
      cars: [
      {
        number:  this.form.value.carNumber,
      name:  this.form.value.carName,
      model:  this.form.value.carModel,
      year:  this.form.value.carYear,
    }
      ]
      
    }).subscribe(() => {
      this.submitted = false
      this.router.navigate([''])
    })
  }
}
