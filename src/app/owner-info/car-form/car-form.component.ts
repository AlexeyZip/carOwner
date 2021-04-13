import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Owner } from 'src/app/owner';
import { OwnerService } from 'src/owner.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  owner: Owner;
  submitted = false;
  carForm: FormGroup;

  itemCar

  uSub: Subscription
  constructor(private route: ActivatedRoute, private ownerService:OwnerService, private router: Router) { }

  ngOnInit() {
    this.getOwnerById() 
  }

  getOwnerById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ownerService.getOwnerById(id)
      .subscribe((owner: Owner) => {
        this.owner = owner
       for(let item of this.owner.cars) {
        this.carForm = new FormGroup({
          carNumber: new FormControl(item.number, Validators.required),
          carName: new FormControl(item.name, Validators.required),
          carModel: new FormControl(item.model, Validators.required),
          carYear: new FormControl(item.year, Validators.required),
        }) 
       }
        
      })
  }


  del() {

  }

  // save(): void {
  //   this.ownerService.updateOwner(this.owner)
  //   .subscribe(() => this.goBack)
  // }

  save(): void {
    
    if(this.carForm.invalid) {
      return
    }

    this.submitted = true

   this.uSub = this.ownerService.updateOwner({
      ...this.owner,
      cars: [
      {
        number:  this.carForm.value.carNumber,
      name:  this.carForm.value.carName,
      model:  this.carForm.value.carModel,
      year:  this.carForm.value.carYear,
    }
      ]
      
    }).subscribe(() => {
      this.submitted = false
      this.router.navigate([''])
    })
  }

}
