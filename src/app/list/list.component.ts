import { OwnerService } from './../../owner.service';
import { Owner } from './../owner';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  owners: Owner[] = []
  pSub: Subscription;
  dSub: Subscription;

  constructor(private ownerService:OwnerService) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'middleName', 'cars', 'action'];
  // dataSource = this.owners;

  ngOnInit() {
    this.pSub = this.ownerService.getOwners().subscribe(owners => {
      this.owners = owners
    })
  }

  // delete(owner: Owner): void {
  //   this.owners = this.owners.filter(h => h !== owner);
  //   this.ownerService.deleteOwner(owner.id).subscribe();
  // }
  delete(id: number) {
    this.dSub = this.ownerService.deleteOwner(id).subscribe(() => {
      this.owners = this.owners.filter(owner => owner.id !== id)
    })
  }

  // add(firstName: string, lastName: string, middleName: string, id:number, cars: []): void {
  //   firstName = firstName.trim();
  //   lastName = lastName.trim();
  //   middleName = middleName.trim();
  //   id = id;
  //   cars = cars
  //   if (!firstName) { return; }
  //   this.ownerService.addOwner({ owner } as Owner)
  //     .subscribe(hero => {
  //       this.owners.push(hero);
  //     });
  // }

  // getOwners(): void {
  //   this.ownerService.getOwners()
  //     .subscribe(owners => this.owners = owners.slice());
  // }

}
