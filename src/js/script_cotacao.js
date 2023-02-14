const url = 'https://economia.awesomeapi.com.br/last/';
const coins = 'USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL';
const selectElement = document.querySelector('#coins');
let estadata;

fetch(url + coins).then(function (response) {
    return response.json()
}).then(function (data) {

    const btcReal = data.BTCBRL

    //variavel para formatar data para o pais local
    estadata = new Date(btcReal.create_date)

    document.getElementById('title').innerHTML = btcReal.name
    document.getElementById('thisdate').innerHTML = estadata.toLocaleString()
    document.getElementById('maxvalue').innerHTML = parseFloat(btcReal.high).toLocaleString(
        'pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
    document.getElementById('minvalue').innerHTML = parseFloat(btcReal.low).toLocaleString(
        'pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
    document.querySelector('#compra').innerHTML = parseFloat(btcReal.bid).toLocaleString(
        'pt-br', {
            style: 'currency',
            currency: 'BRL'
        }
    )
    document.querySelector('#venda').innerHTML = parseFloat(btcReal.ask).toLocaleString(
        'pt-br', {
            style: 'currency',
            currency: 'BRL'
        }
    )
    document.querySelector('#pctVariacao').innerHTML = parseFloat(btcReal.pctChange).toLocaleString()

})


selectElement.addEventListener('change', function(){
    const selectdValue = this.value;
    let coinSelectd = selectdValue.replace("-","")
    const urls = `https://economia.awesomeapi.com.br/last/${selectdValue}`;

    fetch(urls).then(function(response){
        return response.json();
    }).then(function(data){

        const dados = data[coinSelectd];
        
        estadata = new Date(dados.create_date);

        document.querySelector('#title').innerHTML = dados.name;
        document.querySelector('#thisdate').innerHTML = estadata.toLocaleString();
        document.querySelector('#maxvalue').innerHTML = parseFloat(dados.high).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            })
        document.querySelector('#minvalue').innerHTML = parseFloat(dados.low).toLocaleString(
            'pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        document.querySelector('#compra').innerHTML = parseFloat(dados.bid).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            }
        )
        document.querySelector('#venda').innerHTML = parseFloat(dados.ask).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            }
        )
        document.querySelector('#pctVariacao').innerHTML = parseFloat(dados.pctChange).toLocaleString()
    
    }).catch(e => {
        console.log("Deu errado "+e);
    })

})

function cotacao_EUR_BRL (){
 
    fetch(url + coins).then(function(response){
        return response.json();
    }).then(function(data){
        const euroReal = data.EURBRL;

        estadata = new Date(euroReal.create_date);

        document.querySelector('#title').innerHTML = euroReal.name;
        document.querySelector('#thisdate').innerHTML = estadata.toLocaleString();
        document.querySelector('#maxvalue').innerHTML = parseFloat(euroReal.high).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            })
        document.querySelector('#minvalue').innerHTML = parseFloat(euroReal.low).toLocaleString(
            'pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        document.querySelector('#compra').innerHTML = parseFloat(euroReal.bid).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            }
        )
        document.querySelector('#venda').innerHTML = parseFloat(euroReal.ask).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            }
        )
        document.querySelector('#pctVariacao').innerHTML = parseFloat(euroReal.pctChange).toLocaleString()
    
    })
    //setInterval(cotacao_EUR_USD, 30000)
}
function cotacao_USD_BRL(){
    fetch(url + coins).then(function(response){
        return response.json();
    }).then(function(data){
        const usdBRL = data.USDBRL;

        estadata = new Date(usdBRL.create_date);

        document.querySelector('#title').innerHTML = usdBRL.name;
        document.querySelector('#thisdate').innerHTML = estadata.toLocaleString();
        document.querySelector('#maxvalue').innerHTML = parseFloat(usdBRL.high).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            }
        )
        document.querySelector('#minvalue').innerHTML = parseFloat(usdBRL.low).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            }
        )
        document.querySelector('#compra').innerHTML = parseFloat(usdBRL.bid).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            }
        )
        document.querySelector('#venda').innerHTML = parseFloat(usdBRL.ask).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            }
        )
        document.querySelector('#pctVariacao').innerHTML = parseFloat(usdBRL.pctChange).toLocaleString()
    
    })
}
function cotacao_BTC_BRL(){

    fetch(url + coins).then(function (response) {
        return response.json()
    }).then(function (data) {
    
        const btcReal = data.BTCBRL
    
        //variavel para formatar data para o pais local
        let estadata = new Date(btcReal.create_date)
    
        document.getElementById('title').innerHTML = btcReal.name
        document.getElementById('thisdate').innerHTML = estadata.toLocaleString()
        document.getElementById('maxvalue').innerHTML = parseFloat(btcReal.high).toLocaleString(
            'pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        document.getElementById('minvalue').innerHTML = parseFloat(btcReal.low).toLocaleString(
            'pt-br', {
            style: 'currency',
            currency: 'BRL'
        })
        document.querySelector('#compra').innerHTML = parseFloat(btcReal.bid).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            }
        )
        document.querySelector('#venda').innerHTML = parseFloat(btcReal.ask).toLocaleString(
            'pt-br', {
                style: 'currency',
                currency: 'BRL'
            }
        )
        document.querySelector('#pctVariacao').innerHTML = parseFloat(btcReal.pctChange).toLocaleString()
    })
}