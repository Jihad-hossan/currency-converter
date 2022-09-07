// get elements
const currency_form = document.getElementById('currency-form');
const msg = document.querySelector('.msg');
const details = document.querySelector('.msg-details');

// Form Submit
currency_form.onsubmit = (event) => {
    event.preventDefault();

    let amount = currency_form.querySelector('input[name="amount"]');
    let currency = currency_form.querySelector('select[name="select-currency"]');

    if( amount.value == '' || currency.value == ''){
        msg.innerHTML = setAlert('All fields are required');
    }else{

        let rate = 0;
        switch(currency.value){
            case 'USD' :
                rate = 98;
                break;
            case 'CAD' :
                rate = 68;
                break;
            case 'Pound' :
                rate = 70;
                break;
            case 'Euro' :
                rate = 94;
                break;
            case 'Rupee' :
                rate = 1.2;
                break;
        }
        let totalAmount = amount.value * rate;
        details.innerHTML =  `${ amount.value} ${ currency.value } = ${ totalAmount.toFixed(2) } Tk`, 'success';
    }
}