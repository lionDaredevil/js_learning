function pad(word,symbol,amount,place){
    n = amount - word.length
    for (i=0; i < n; i++){
        if (place)
        word = symbol + word
    else word = word + symbol
    }
    return(word)
}
console.log(pad('test1234', '*', 10, true))



