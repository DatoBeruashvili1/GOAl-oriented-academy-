let arr = [];
for(let i = 0; i < 100; i++){
    arr.push(i)
}

let evenSum = 0;
for(let i = 0; i < evenSum.length; i++){
    if(i % 2 === 0){
        evenSum += i;
    }
}



function manualSlice(arr,start,end){
    let slicedArr = new Array();
    for(let i = start; i < end; i++){
        slicedArr.push(arr[i]);
    }

    console.log(slicedArr);
}


let array = [];
for(let i = 0; i < 100; i++){
    arr.push(i)
}

let evenSum2 = 0;
for(let i = 0; i < evenSum.length; i++){
    if(i % 2 === 0){
        evenSum += i;
    }
}


function manualReverse(arr){
    const reversedArr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i]);
    }
}
function manualIndexOf(arr,value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}