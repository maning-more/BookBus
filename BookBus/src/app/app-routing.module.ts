// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TrainbookingComponent } from '../app/core/trainbooking/trainbooking.component';

const routes: Routes = [
  // { path: 'trainbooking', component: TrainbookingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

