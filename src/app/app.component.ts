import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = '';
  handleEvent(event: any) {
    let a = event.target.value;
    console.log(a);
  }
}
