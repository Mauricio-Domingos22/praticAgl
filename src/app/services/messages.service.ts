import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  message: string='' ;

  constructor() { }


  // Metodos para adicionar mensagem e fechar a caixa de mensagem 
  // depois de alguns segundos
  add(message:string){
    this.message= message

    setTimeout(()=>{
this.clear()
    }, 4000)
  }

  clear(){
    this.message ='';
  }
}
