var services = {
    haircut: "60 грн",
    shaving: "80 грн",
    washHead: "100 грн",
    price: function () {
        let summ = 0
        for (let key in this) {
            if (key !== 'price' && key !== 'minprice' && key !== 'maxprice') {
                summ = summ + Number(this[key].replace('грн',''));
            }
        }
        console.log(summ)
    },
    minprice: function () {
        let min = this.haircut.replace('грн','')
        for (let key in this){
            if (key !== 'price' && key !== 'minprice' && key !== 'maxprice'){
                if (Number(this[key].replace('грн','')) < min){
                    min = Number(this[key].replace('грн',''))
                }
            }
       }
        console.log(min)
    },
    maxprice: function () {
        let max = this.haircut.replace('грн','')
        for (let key in this){
            if (key !== 'price' && key !== 'minprice' && key !== 'maxprice'){
                if (Number(this[key].replace('грн','')) > max){
                    max = Number(this[key].replace('грн',''))
                }
            }
       }
        console.log(max)
    }
}
services.brakeGlass = '200 грн'
services.price()
services.minprice()
services.maxprice()

