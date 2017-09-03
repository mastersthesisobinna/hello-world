import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "numberFormat"
})
export class NumberFormatter implements PipeTransform{
    transform = (value: number, ...args: any[]) =>{
        return value.toPrecision(5)+" years old";
    }
}