import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name: string = '';
  setIndex: number = 0;
  foodList: string[] = [];
  show: boolean = false;

  handleEvent({ target }: any) {
    let { value } = target;
    if (this.show) {
      this.foodList[this.setIndex] = value
      this.show = false
    } else {
      this.foodList.push(value)
    }
  }
  getDataFromChild(event: any) {
    this.foodList = this.foodList.filter((item, index) => index != event)
  }
  getDataFromChildUpdate(event: any) {
    this.show = true
    this.setIndex = event
    this.name = this.foodList[event]
  }
}
