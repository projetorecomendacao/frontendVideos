import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { SecurityModule } from 'src/security/security.module';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    SecurityModule,
  ]
})
export class IndexModule { }
