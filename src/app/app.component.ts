import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipe Demo';
  isFinish: boolean = false;
  today = new Date();
  file = { name: 'logo.svg', size: 2120109, type: 'image/svg' };

  finish(){
    this.isFinish = !this.isFinish 
  }
}
