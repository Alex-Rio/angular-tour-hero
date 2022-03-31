import { Component, Pipe , PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'ddMmYYYYDate',
})
export class DdMmYYYYDatePipe extends DatePipe implements PipeTransform{
  override: any; transform(value: any , args?: any): any{
    return super.transform(value, 'dd/MM/yyyy');
  }
}
