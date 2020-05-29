import { Component, OnInit } from '@angular/core';
import { REST_URL_TRECHOS } from 'src/app/shared/REST_API_URLs';
import { DAOService } from 'src/app/shared/dao.service';
import { Trechos } from 'src/app/shared/models/trechos';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  lista : Trechos[];
  nome : string;
  email : string;
  v_iniciar : boolean = false;

  constructor(private dao : DAOService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();
    this.email= this.activatedRoute.snapshot.paramMap.get('parametro');
    this.nome= this.activatedRoute.snapshot.paramMap.get('parametro2');
  }

  getAll = () => {
    this.dao.getAll(REST_URL_TRECHOS).subscribe(
      data => {
        this.lista = data;
        console.log('Dados');
        console.log(data);
        console.log('Lista');
        console.log(this.lista);
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    )
  };

  iniciar(){
    this.v_iniciar = true;
  }

}
