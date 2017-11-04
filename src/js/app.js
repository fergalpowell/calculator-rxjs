import {Observable} from 'rxjs/Rx';

import '../css/style.css';

const btns = document.getElementsByClassName("flex-item");
const text = document.getElementById("text");
const stream$ = Observable.from(btns)
    .map(btn => Observable.fromEvent(btn, 'click')
        .mapTo(btn.textContent))
    .mergeAll()
    .merge(Observable.fromEvent(document, 'keypress')
        .pluck('key'));

stream$.subscribe(key => {
    if(key == 'C'){
        text.value = '';
    }
    else if(key == '='){
        text.value = eval(text.value);
    }
    else if( key == '±'){
        text.value = text.value * -1;
    }
    else{
        text.value += key;
    }
});
