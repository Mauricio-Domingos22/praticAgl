import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MomentService } from 'src/app/services/moment.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environments/environment.development';

import { MessagesService } from 'src/app/services/messages.service';

import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
faTimes= faTimes;
faEdit= faEdit;

  moment?: Moment
  baseApiUrl = environment.baseApiUrl


  constructor(private momentService: MomentService,
    private router: Router,
     private route: ActivatedRoute, 
     private messageService: MessagesService
    ) { }


  ngOnInit(): void {

   const id = Number(this.route.snapshot.paramMap.get("id"))

  //  trazer o serviço 
  this.momentService.getMoment(id).subscribe((item)=> this.moment= item.data)
  }

// Metodo pata remover
 async remoHandler(id:number){

  // trazendo o servico de remocao que esta momentservice
this.momentService.removeMoment(id).subscribe()

 // trazendo o servico de message e colocando o texto
this.messageService.add('Momento excluido com sucesso')

this.router.navigate(['/'])
  }

}
