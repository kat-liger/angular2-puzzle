import {Pipe, PipeTransform} from 'angular2/core';

/*
 * Transform data into array, sort it by time in ascending order and trim
 * Takes an Observable argument
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
        var hours = Math.floor(seconds/h);
        var minutes = Math.floor( (seconds % h)/m );
        var scnds = Math.floor( (seconds % m) );
        var timeString = '';
        if(scnds < 10) scnds = "0"+scnds;
        if(hours < 10) hours = "0"+hours;
        if(minutes < 10) minutes = "0"+minutes;
        timeString = hours +":"+ minutes +":"+scnds;
        return timeString;
    }
}
