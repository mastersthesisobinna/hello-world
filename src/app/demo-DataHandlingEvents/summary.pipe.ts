import { Pipe, PipeTransform, Injectable } from '@angular/core'

@Pipe({
    name: "summary"
})
@Injectable() //only needed if you intend implementing dependency injection
export class SummaryPipe implements PipeTransform{
    transform(value: string, ...args: any[]){
        return value.substr(1, 20) + "...";
    }
}