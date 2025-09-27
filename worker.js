onmessage = function(val){
    let value = val.data;//get value from main Thread
    let total = 0;
    let init = 0;
    for(init; init< value; init++){
        total += init;
    }
    postMessage(total)//Send data/ return
}