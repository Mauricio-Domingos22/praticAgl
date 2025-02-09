import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edi-moment',
  templateUrl: './edi-moment.component.html',
  styleUrls: ['./edi-moment.component.css']
})
export class EdiMomentComponent implements OnInit{
  btnText = 'Editar'
  moment!: Moment



  ngOnInit():void{
// Pegando o id atraves do AtivatedRoute
const id=Number(this.route.snapshot.paramMap.get("id"))

// trazendo o servico que pega o momento especifico

this.momentService.getMoment(id).subscribe((item) => {
  this.moment = item.data
})
  }


  constructor(private momentService: MomentService, 
    private router: Router,
  private route: ActivatedRoute,private messaSevice:MessagesService){}

 async editHandler(momentData: Moment){
    const id = this.moment.id
    const formData = new FormData()

    formData.append('title', momentData.title)
    formData.append('discription', momentData.discription)

    if(momentData.image){
      formData.append('image', momentData.image)

    }

    await this.momentService.updateMoment(id!,formData).subscribe()


    this.messaSevice.add('Momento Editado com sucesso')

    this.router.navigate(['/'])
  }
}
