import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivateComponent } from './private.component';
import { HomeComponent } from './home/home.component';
import { FimComponent } from './fim/fim.component';



const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: 'home/:parametro/:parametro2', component: HomeComponent },
      { path: 'fim', component: FimComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
