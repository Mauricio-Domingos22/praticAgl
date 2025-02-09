import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment.development';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // icone de procurar e a string que vai receber o valor
  faSearch = faSearch;
  searchterm:string='';


allMoments: Moment[]=[]

moments: Moment[]=[]


// essa baseApi vai ajudar a acessar as 
// imagens que estao no bancode dados
baseApiUrl = environment.baseApiUrl


// trazendo o servico de exibir todos momentos neste componente
ngOnInit(){
  this.momentService.getMoments().subscribe((items)=> {
    const data = items.data

    // formatação de data
    // data.map(item)=>{
    //   item.created_at= new Date(item.created_at!).toLocaleDateString('pt-BR')
    // }

   this.allMoments = data;
    this.moments= data;
  })
}

constructor(private momentService: MomentService){}


// apesar de ter colocad um event no 
// .html aqui nao se inicializou como any mais sim como Event
search(e:Event):void{
const target = e.target as HTMLInputElement
const value = target.value

this.moments = this.allMoments.filter((moment) =>{
 return moment.title.toLowerCase().includes(value)
})
}
}
