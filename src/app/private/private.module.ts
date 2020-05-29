import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PrivateRoutingModule } from './private-routing.module';
import { UserService } from 'src/security/user.service';
import { VideoModule } from '../video/video.module';
import { FimComponent } from './fim/fim.component';


@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent,
    FimComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule,
    VideoModule
  ],
  providers: [
    UserService
  ]
})
export class PrivateModule { }
