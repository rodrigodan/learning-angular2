import { Component, OnInit } from '@angular/core';

interface Post{
  author: string;
  content:string;
  date:string;
  title:string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  post: Post = {
    author:'',
    content:'',
    date:'',
    title:''
  }

  constructor() {
    this.retrievingSessionStorage();
  }

  retrievingSessionStorage(){
    let i = 0;

    setInterval(()=>{
      console.log('testeeee:' + localStorage.getItem('1'));

    },1000)
    // this.post =JSON.parse('1', JSON.stringify());
  }

  ngOnInit(): void {
  }

}
