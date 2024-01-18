import {Component, EventEmitter, Input, Output} from '@angular/core';

export enum ButtonType {
  success,
  warning,
  fail,
  message
}

const buttonType = {
  [ButtonType.warning]: "warning",
  [ButtonType.fail]: "fail",
  [ButtonType.success]: "success",
  [ButtonType.message]: "message"
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() type = "button";
  @Input() disabled = false;
  @Input() buttonType!: ButtonType;
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }

  getButtonStyle(): string {
    return buttonType[this.buttonType]
  }
}
