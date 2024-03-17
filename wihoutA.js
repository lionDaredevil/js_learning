let lidatest1 =  /[^aA]{6,}/.test("gdлроо9wAhhf") // включая символы латинского алфавита, кирилицы, цифры и пробельные символы 
console.log(lidatest1)

let lidatest2 =  /[b-z,B-Z]{6,}/.test("gdsdsjwAhhf") // только буквенные символы латиннского алфавита
console.log(lidatest2)

