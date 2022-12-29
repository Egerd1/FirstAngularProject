import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'my-angular-homework';

num: number = 0;

plus(){
  this.num++;
}

minus(){
  this.num--;
}
}
