var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porhov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

function trustedEmails(array) {
    var trusted = []
    for (let user of arr) {
        if (/[\w\.\w]@gmail.com|@yahoo.com/.test(user.email)) {
            trusted.push(user.email)
        }
    }
    return trusted;
}
console.log(trustedEmails(arr))
