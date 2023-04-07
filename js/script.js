let action = prompt ('What do you want to do? \n add | sub | mult | div');
const x1 = prompt ('Enter first number');
const x2 = prompt ('Enter second number');
switch (action) {
    case 'add' :
        alert (x1 + '+' + x2 + '=' + (Number(x1) + Number(x2)))
        break;
    case 'sub' :
        alert (x1 + '-' + x2 + '=' + (x1 - x2));
        break;
    case 'mult' :
        alert (x1 + '*' + x2 + '=' + (x1 * x2));
        break;
    case 'div' :
        alert (x1 + '/' + x2 + '=' + (x1 / x2));
        break;
    default :
        alert ('Error, re-enter the value!');
}