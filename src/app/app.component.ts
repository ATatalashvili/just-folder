import { Component } from "@angular/core";
import { FormBuilder, FormGroup, formGroup, Validators } from "@angular/forms";
@Component({
    selector: 'app-root',
    templateUrl:'./app/component.html',
    styleUrls:['./app.component.css']
})
export class AppComponent{
//     onSubmit(formData:any){
//         console.log(FormData)
//     }
// }
myForm!:FormGroup;
constructor(private,formBuilder:FormBuilder){

}
ngOnInit(){
    this.myForm=this.formBuilder.group{
        name:['',Validators.required],
    }
    onsubmit(){
        if(this.myForm.valid){}
    }
}