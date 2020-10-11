import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button [disabled]="value">{{ value }}</button>
  `,
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input() value: 'X' | 'O'
}
