import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  name = 'srinithi';
  num1 =5;
  num2 =6;
  displayDate = function(){
    return new Date();
  }
}
