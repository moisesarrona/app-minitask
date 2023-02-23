import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
})
export class BaseComponent {

  /**
   * gets the errors from the formControl
   * @param formControl 
   * @returns 
   */
  public getErrorFormControl(formControl: any): string[] | null {
    const control = formControl;
    if (control?.errors) {
      const errorNames = Object.keys(control.errors);
      return errorNames.map(nameError => this.getErrorText(nameError, control.errors![nameError], control._composedAsyncValidatorFn?.name));
    }
    return null;
  }
  
  /**
   * set text to display by mistake
   * @param name 
   * @param error 
   * @param nameFied 
   * @returns 
   */
  private getErrorText(name: string, error: any, nameFied: string): string {
    switch (name) {
      case 'required':
        return `This ${nameFied} is required.`;
      case 'minlength':
        return `This ${nameFied} should have at least ${error.requiredLength} characters.`;
      case 'maxlength':
        return `This ${nameFied} should have at least ${error.requiredLength} characters.`;
      default:
        return `Invalid value for ${name}.`;
    }
  }

}
