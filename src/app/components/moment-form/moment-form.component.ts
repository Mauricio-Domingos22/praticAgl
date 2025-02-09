import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit{
@Input() btnText!:string
@Output() onSubmit = new EventEmitter<Moment>()

// o moment data foi criado no componente de edicao
@Input() momentData: Moment | null = null
momentForm!:FormGroup

// iniciaizu se o momentForm no ngOnInit em seguida 
// colocou-se os atributos no formcontrol para podermos controlar
//  e definiu-se validators e os obrigatorio

ngOnInit():void{
  this.momentForm= new FormGroup({
    id: new FormControl(this.momentData ? this.momentData.id :''),
    title: new FormControl(this.momentData ? this.momentData.title :'', [Validators.required]),
    discription: new FormControl(this.momentData ? this.momentData.discription :'',[Validators.required]),
    image: new FormControl('')
 
  })
}

get title(){
return this.momentForm.get('title')!;
}
get discription(){
  return this.momentForm.get('discription')!;
  }

  onFileSelected(event:any){
const file: File= event.target.files[0]
this.momentForm.patchValue({ image: file })
  }

submit(){
  if(this.momentForm.invalid){
    return
  }
  console.log(this.momentForm.value)

  this.onSubmit.emit(this.momentForm.value)
}

}
