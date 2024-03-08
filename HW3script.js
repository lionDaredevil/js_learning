'number' + 3 + 3 //result: number33  - concatenation will be prformed (becouse + it does to strings) and 3(number) will be converted to string

null + 3 // result: 3 - null will be converted to 0, 0+3 = 3

5 && "qwerty" // result: qwerty - 5 (true) and "qwerty"(true) -> true && true -> will be returned the last true

+'40' + +'2' + "hillel"; // result: 42hillel - unary plus converts string into number, so it'll be 42 + "hillel" -> number and string will be concatenated -> 42hillel

'10' - 5 === 6; // result: false - '10' will be converted to number, so 10 - 5 = 5, 5 === 6 -> false (same types, diff values)

true + false // result: 1 , true to number = 1, false to number = 0, 1+0=1

'4px' - 3 // result: NaN - 4px can't be converted to number

'4' - 3 // result: 1 , '4' string to number will be 4, 4-3=1

'6' + 3 ** 0; // result: 61, - the first will be ** operation, 3**0 = 1, then '6' and 1 will be concatenated -> 61

12 / '6' // result: 2, string '6' will be converted to number

'10' + (5 === 6); // result: 10false, - first will be performed 5 === 6 - false (same formats, diff values), then + will performe concatenation

null == '' // result: false, - due to strict equality

3 ** (9 / 3); // result: 27, - first 9/3 = 3, then 3**3 = 27

!!'false' == !!'true' // result: true, - !! will turn string values (both) into true, so true == true -> true

0 || '0' && 1 // result: 1, - first will be '0'&& 1 which is 1, because '0' - string value, is true and 1 is true (will be returned the last true), then 0 || 1 -> 1

(+null == false) < 1; // result: false, - result: false, - +null -> 0, 0 -> false, false == false -> true, true < 1 -> true is converted to number -> 1 < 1 -> false

false && true || true // result: true, - false && true -> false, then false || true -> true

false && (false || true); // result: false, - false || true -> true, then false && true -> false

(+null == false) < 1 ** 5; // result: false, - +null -> 0, 0 -> false, false == false -> true, 1**5 = 1, true < 1 -> true is converted to number -> 1 < 1 -> false
