import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValueConverter } from 'exHttpdb/node_modules/@angular/compiler/src/render3/view/template';

//custom class for parameterized constructor for doing operations on data by converting it to array
class Book{

  id:number;
  title:string;
  year:number;
  author:string;

  constructor(id:number,title:string,year:number,author:string){
    this.id=id;
    this.title=title;
    this.year=year;
    this.author=author;
  }
}

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  
  url:string="../assets/assetfile.json";
  books:Array<Book>=[];
  book:any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get<Book[]>(this.url).subscribe(
      (response)=>{
      console.log(response)
      this.books=response
      console.log(this.books)
      },
      (error:string)=>{
        console.log("not")
      }
      )
    }
    isClicked: boolean=false;
add(value:any){
  this.books.push(new Book(value.id, value.title, value.year, value.author))
}

deleteBook(id:number){
  console.log(this.books)
  this.books.splice(id,1);
}
index: number;

updateBookData(id:number){
   this.isClicked=true;
   this.index=id;
   this.book=this.books[id];

}
test(value:any){
  
 this.books.splice(this.index,1,new Book(value.id, value.title, value.year, value.author))
}

}
