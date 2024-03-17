function checkProbabilityTheory(count){
    min = 100
    max = 1000
    paired = 0
    unpaired = 0
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    for (i=0; i <count; i++){
        if (getRandomIntInclusive(min,max)%2){
            unpaired++;
        }
        else paired++;
    }
    console.log(count)
    console.log(paired)
    console.log(unpaired)
    procp = paired/count*100
    procunp = unpaired/count*100
    return(Math.round(procp) + '%' + Math.round(procunp))
}
console.log(checkProbabilityTheory(50))



