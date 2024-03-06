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
  @Input() placeholder: string = 'Please select...';
  @Input() labelText: string = 'Label'; // New input property for the label text
  @Input() settings!: IDropdownSettings;
  @Input() data: any[] = [];
  @Input() formControlName: string = '';
  @Input() disabled: boolean = false;
  @Output() selectionChange = new EventEmitter<any>();

  onSelectionChange(selection: any) {
    this.selectionChange.emit(selection);
  }
  onChange: any = () => {};
  onTouch: any = () => {};

  // Implement writeValue method
  writeValue(value: any): void {
    // Logic to write value to the component
  }

  // Implement registerOnChange method
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Implement registerOnTouched method
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
