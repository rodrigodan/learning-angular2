import { Component, OnInit } from '@angular/core';

// contrato:
interface Article{
  author: string;
  content:string;
  date:string;
  title:string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  // user instances:
  article: Article = {
    author:'',
    content:'',
    date:'',
    title:''
  }

  articleId:number = 1;



  constructor() { }

  onSubmit(){

    console.log(this.article);

    window.sessionStorage.setItem(''+this.articleId, JSON.stringify(this.article));

    this.articleId+=1;
  }

  ngOnInit(): void {
  }

}
