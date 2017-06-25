//alert('Hello world!');


//document.write('hello world');
console.log('Hello world');


var userName = prompt('enter your name');

document.write('Hello '+ userName);

var userAge = Number(prompt('Enter your age'));
document.write('<br>');
//document.write('Your age is '+ userAge +' years');
document.write('Your age is: ' + userAge);

//userAge + 1;
var newAge = sumThree(userAge, 1, 1);

document.write('<br>');
document.write('After year u will be: ' + newAge);


document.write('<br>');
document.write('You are: ' + checkAge(userAge));


function sum (a, b) {
    var result = a + b;
    return result;
}



function sumThree (a, b, c){
    var result = a + b + c;
    return result;
}

function checkAge(userAge) {
    if (userAge <= 20) {
        return 'Young';
    } else {
     return 'Not young';
    }
}
document.write ('<br>')
document.write('Square of 4 will be ' + (Math.sqrt(4)));