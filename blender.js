function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}
arrtest = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
console.log(arrtest)
function myBlend(arr){
    for (i = 0; i<arr.length; i++){
        x = arr[i];
        y = getRandomIntInclusive(0,(arr.length-1));
        arr[i] = arr[y];
        arr[y] = x;
    }
    return arr;
}
console.log(myBlend(arrtest))