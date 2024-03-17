
let age_fromconsole = parseInt(prompt('Скільки тобі років?'));
if (typeof age_fromconsole !== 'number') {
    alert("Not a number");
}
let age = age_fromconsole % 10
if (age_fromconsole <= 0 || age_fromconsole > 100) {
    alert('Введіть число від 1 до 100')
}
else if (age_fromconsole >= 5 && age_fromconsole <= 20) {
    alert(age_fromconsole + ' років')
}
else {
    switch (age) {
        case (1):
            alert(age_fromconsole + ' рік');
            break;
        case (2):
            alert(age_fromconsole + ' роки');
            break;
        case (3):
            alert(age_fromconsole + ' роки');
            break;
        case (4):
            alert(age_fromconsole + ' роки');
            break;
        default:
            alert(age_fromconsole + ' років');

    }
}
