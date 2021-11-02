import { Component } from '@angular/core';
import { Reddit } from './reddit';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RedditLab';

  myReddit?: Reddit;

  constructor(private http: HttpClient){
  }

  loadReddit(){
    this.http.get<Reddit>('https://www.reddit.com/r/aww/.json').subscribe(
    (result:Reddit) => {
      this.myReddit = result;
    }

    );
  }



}
