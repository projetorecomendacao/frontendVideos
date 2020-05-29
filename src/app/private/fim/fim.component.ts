import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/security/auth.guard';

@Component({
  selector: 'app-fim',
  templateUrl: './fim.component.html'
})
export class FimComponent implements OnInit {

  constructor(private authGuard : AuthGuard) { }

  ngOnInit(): void {
    this.authGuard.setCanLoad(false);
  }

}
