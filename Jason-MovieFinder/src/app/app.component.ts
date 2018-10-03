import { Component } from '@angular/core';

interface ManuItem {
  id: number;
  name: string;
}

const ManuItems: ManuItem[] =[
  {id:1, name:'Action'},
  {id:2, name:'Adventure'},
  {id:3, name:'Animation'},
  {id:4, name:'Comedy'}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jason-MovieFinder';
  genres= ManuItems;
}
