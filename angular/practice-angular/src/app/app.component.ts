import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is the way we handle event binding';
  json={
    a:'abdul',
    b:'bull'
  }
  hEvent(){
    console.log('button clicked',this.title)
  }
}