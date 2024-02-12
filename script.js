let counter1=0;
document.getElementById('plus-btn1').addEventListener('click',function(){
    counter1 +=1;
    let countNum=counter1;
    document.getElementById('count1').innerText=countNum;
    if(countNum===33){
        alert('Complete the target of 33times Subhan Allah')
    }
})
document.getElementById('minus-btn1').addEventListener('click', function() {
    if (counter1 > 0) {
        counter1 -= 1;
        let countNum = counter1;
        document.getElementById('count1').innerText = countNum;
    } else {
        alert('Please start the Increment Count Again');
    }
});
let counter2=0;
document.getElementById('plus-btn2').addEventListener('click',function(){
    counter2 +=1;
    let countNum=counter2;
    document.getElementById('count2').innerText=countNum;
    if(countNum===33){
        alert('Complete the target of 33times Subhan Allah')
    }
})
document.getElementById('minus-btn2').addEventListener('click', function() {
    if (counter2 > 0) {
        counter2 -= 1;
        let countNum = counter2;
        document.getElementById('count2').innerText = countNum;
    } else {
        alert('Please start the Increment Count Again');
    }
});

let counter3=0;
document.getElementById('plus-btn3').addEventListener('click',function(){
    counter3 +=1;
    let countNum=counter3;
    document.getElementById('count3').innerText=countNum;
    if(countNum===33){
        alert('Complete the target of 33times Subhan Allah')
    }
})
document.getElementById('minus-btn3').addEventListener('click', function() {
    if (counter3 > 0) {
        counter3 -= 1;
        let countNum = counter3;
        document.getElementById('count3').innerText = countNum;
    } else {
        alert('Please start the Increment Count Again');
    }
});

document.getElementById('btn-reset').addEventListener('click',function(){
    document.getElementById('count1').innerText=0;
    document.getElementById('count2').innerText=0;
    document.getElementById('count3').innerText=0;

    counter1=0;
    counter2=0;
    counter3=0;
})