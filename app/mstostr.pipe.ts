import {Pipe, PipeTransform} from 'angular2/core';

/*
 * Transforms time in ms to hh:mm:ss string
 * Usage:
 *   time | msToStr
 *
 */

@Pipe({name: 'msToStr'})

export class MsToStrPipe implements PipeTransform {

    transform(time: number):String {
        var seconds = Math.floor(time / 1000);
        var h = 3600;
        var m = 60;
        var hours : any = Math.floor(seconds/h);
        var minutes : any = Math.floor( (seconds % h)/m );
        var scnds : any = Math.floor( (seconds % m) );
        var timeString = '';
        if(scnds < 10) scnds = "0"+scnds;
        if(hours < 10) hours = "0"+hours;
        if(minutes < 10) minutes = "0"+minutes;
        timeString = hours +":"+ minutes +":"+scnds;
        return timeString;
    }
}
