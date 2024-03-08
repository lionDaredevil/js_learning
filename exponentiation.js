function pow(x,y){
    let exponenta = 1;
    for (let i = 1; i <= y; i++)
    {
        exponenta = exponenta * x;
    }
    console.log(exponenta)
}
pow(2,3)
