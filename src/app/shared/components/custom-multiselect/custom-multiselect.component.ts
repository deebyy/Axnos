import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-custom-multiselect',
  templateUrl: './custom-multiselect.component.html',
  styleUrls: ['./custom-multiselect.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomMultiselectComponent),
      multi: true
    }
  ]

})
export class CustomMultiselectComponent {
  //@Input() placeholder: string = 'Please select...';
  // @Input() labelText: string = 'Label'; // New input property for the label text
  // @Input() settings!: IDropdownSettings;
  // @Input() data: any[] = [];
  // @Input() formControlName: string = '';
  // @Input() disabled: boolean = false;
  // @Output() selectionChange = new EventEmitter<any>();

  // onSelectionChange(selection: any) {
  //   this.selectionChange.emit(selection);
  // }
  // onChange: any = () => {};
  // onTouch: any = () => {};

  // // Implement writeValue method
  // writeValue(value: any): void {
  //   // Logic to write value to the component
  // }

  // // Implement registerOnChange method
  // registerOnChange(fn: any): void {
  //   this.onChange = fn;
  // }

  // // Implement registerOnTouched method
  // registerOnTouched(fn: any): void {
  //   this.onTouch = fn;
  // }




  @Input() label!: string;
  @Input() options!: any[];
  @Input() selectedOption: any;
  @Input() placeholder!: string;
  // @Input() controlName!: string;
  // ControlValueAccessor methods
  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() { }

  // Implement writeValue method from ControlValueAccessor
  writeValue(value: any): void {
    this.selectedOption = value;
  }

  // Implement registerOnChange method from ControlValueAccessor
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Implement registerOnTouched method from ControlValueAccessor
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Implement setDisabledState method from ControlValueAccessor
  setDisabledState(isDisabled: boolean): void {
    // You can implement logic here if your custom control supports disabling
  }
}
