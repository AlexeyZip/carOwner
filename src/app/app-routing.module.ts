
import { CreateComponent } from './create/create.component';
import { OwnerInfoComponent } from './owner-info/owner-info.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarFormComponent } from './owner-info/car-form/car-form.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'owner/:id', component: OwnerInfoComponent},
  {path: 'create', component: CreateComponent},
  {path: 'car', component: CarFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
