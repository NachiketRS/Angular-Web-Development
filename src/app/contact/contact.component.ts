import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  title = 'src';

  RegisterStudent(studentForm: NgForm): void {

    var first_name=studentForm.controls['firstName'].value;
    var last_name=studentForm.controls['lastName'].value;
    var email=studentForm.controls['Email'].value;
    var ContactNo=studentForm.controls['ContactNo'].value;

    console.log(first_name);
    console.log(last_name);
    console.log(email);
    console.log(ContactNo);

    console.log(studentForm.value);
    //console.log(studentForm.valid);
    //console.log(studentForm.touched);
  }
}

/*
H3{
  background-color: rgb(193, 250, 160);
  position:static;
  text-align: center;
  left: auto;
  transform: translate(-50%,-50%);
}
/*
h2{
  color: red;
  left: auto;
  position:static;
  top: 25%;
  transform: translate(-50%,-50%);
}

p{
  left: auto;
  position:static;
  top: 25%;
  transform: translate(-50%,-50%);
}

.contact img
{
  width: 95%;
  height: 250px;
  object-position: center;
  object-fit: contain ;
  position: static;

}

.contactcontent
{
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%,-50%);

}
.contactcontent h1
{
  color:black;
  font-size: 35px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%,-50%);
  

}
.homecontent h2
{
  margin-top: 20px;
  
}

@media screen and (max-width:400px){
  .home img
{
  
  height: 1200px;
}  
.homecontent h1
{
  font-size: 30px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%,-50%);
}   
}


div{
  text-align: center;
}
*/




