import { Component, Input, OnInit } from '@angular/core';
import { OneRedditItem } from '../reddit';

@Component({
  selector: 'app-one-reddit',
  templateUrl: './one-reddit.component.html',
  styleUrls: ['./one-reddit.component.css']
})
export class OneRedditComponent implements OnInit {

  @Input() redditItem?: OneRedditItem;

  constructor() { }

  ngOnInit(): void {
  }

}
