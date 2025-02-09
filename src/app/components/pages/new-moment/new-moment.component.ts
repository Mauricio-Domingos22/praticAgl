import { Component } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})

export class NewMomentComponent {

  btnText = 'Compartilhar!'

  constructor(private momentServive: MomentService,
     private messageService: MessagesService,
    private router: Router) {

  }

  // Executando o evento para adicionar os 
  // serviços de adiçao e mensagem de adiçao devem 
  // estar dentro desse metodo

  async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("discription", moment.discription)

    if (moment.image) {
      formData.append("image", moment.image)
    }

    // Trazendo o serviço
    await this.momentServive.createMoment(formData).subscribe()


// Exibir mensagem atraves do ou vindo mensage service
this.messageService.add('Momento adicionado com sucesso')


// Usamos o router para direcionar a outra 
// pagina depois de adicionar usando a propriedade navigate

this.router.navigate(['/']);

  }


}
