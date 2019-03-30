import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exforms',
  templateUrl: './exforms.component.html',
  styleUrls: ['./exforms.component.css']
})
export class ExformsComponent implements OnInit {

model:any={};
isLoggedIn: boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
  alert("submitted");
//alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  this.isLoggedIn=true;
  }

}
