import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {
  @Output('del') deleteData = new EventEmitter<number>()
  @Output('update') updateData = new EventEmitter<number>()
  @Input('foods') foodList: string[] = [];

  sendDataToParent(index: number) {
    this.deleteData.emit(index)
  }
  updateDataToParent(index: number) {
    this.updateData.emit(index)
  }
}
