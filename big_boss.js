    const company = {
        name: 'Велика Компанія',
        type: 'Головна компанія',
        platform: 'Платформа для продажу квитків',
        sellsSolution: 'Рішення для продажу квитків',
        clients: [
            {
                name: 'Клієнт 1',
                type: 'subCompany',
                uses: 'ПО для продажу квитків',
                sells: 'Рішення для продажу квитків',
                partners: [
                    {
                        name: 'Клієнт 1.1',
                        type: 'subSubCompany',
                        uses: 'Рішення для продажу квитків',
                        sells: 'Рішення для продажу квитків',
                    },
                    {
                        name: 'Клієнт 1.2',
                        type: 'subSubCompany',
                        uses: 'Рішення для продажу квитків',
                        sells: 'Рішення для продажу квитків',
                        partners: [
                            {
                                name: 'Клієнт 1.2.3',
                                type: 'subSubCompany',
                                uses: 'Рішення для продажу квитків',
                                sells: 'Рішення для продажу квитків',
                                partners: [
                                    {
                                        name: 'Клієнт 1.2.3.4',
                                        type: 'subSubCompany',
                                        uses: 'Рішення для продажу квитків',
                                        sells: 'Рішення для продажу квитків',
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Клієнт 2',
                type: 'subCompany',
                uses: 'ПО для продажу квитків',
                sells: 'Рішення для продажу квитків'
            }
        ]
    };
    function x(company, companyName) {
        let res = [];
        company.forEach(function (client) {
            if (companyName === client.name) {         
                return res.push(client)
            }
            
            if (client.hasOwnProperty('partners')) {
                res = res.concat(x(client.partners, companyName))
            }
        })

        return typeof res[0] === 'undefined' ? null : res[0];
    }

    let targetCompany = x(company.clients, 'Клієнт 1.1');

    console.log(targetCompany);

    // console.log(x(company,'Клієнт 1.2.3'))










