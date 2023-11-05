import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = '';
  foodList: string[] = [];

  handleEvent({ target }: any) {
    let { value } = target;
    this.foodList.push(value)
  }
  getDataFromChild(event: any) {
    this.foodList = this.foodList.filter((item, index) => index != event)
  }
}
