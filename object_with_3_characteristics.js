var person = {
    name:"Eddard",
    sName:"Stark",
    house: "Starks",
    getinfo: function (){
    for (let key in this){
        if (key !== 'getinfo')
        {
        console.log(key + ': ' + this[key]);
        }
    }
}
}
person.survived = 'false'
person.slogan = "Winter is coming"
person.getinfo()

