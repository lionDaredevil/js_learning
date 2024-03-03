let unit = 'незнаю'
let amount = 18
switch (unit){
    case ('кілометри'):
        console.log(amount + 'км це ' + amount*1000 + 'м');
        break;
    case ('години'):
        console.log(amount + 'г це ' + amount*60 + 'хв');
        break;
    case ('кілограми'):
        console.log(amount + 'кг це ' + amount*1000 + 'грм');
        break;
    default:
        console.log('This option is currently unavailable')              
}