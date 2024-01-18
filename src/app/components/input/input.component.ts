import {ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";


export enum InputStyle {
  default,
  error
}
export enum InputType {
  login,
  password,
  text
}

const inputStyle = {
  [InputStyle.default]: "default",
  [InputStyle.error]: "error",

}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],

})
export class InputComponent implements ControlValueAccessor {
  @Input() hasError = false;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() inputStyle!: InputStyle;
  @Input() inputType: InputType = InputType.text;

  showPassword = false;
  value: string = '';

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: any): void {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  getInputStyle() {
    return inputStyle[this.inputStyle]
  }

  onClick() {
    if (this.type === 'password') {
      this.type = 'text';
      this.showPassword = true;
    } else {
      this.type = 'password';
      this.showPassword = false;
    }
  }

  protected readonly InputType = InputType;
}
