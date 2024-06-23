/**
 *  get input class named flayer
 *  get label class named flay
 *
 *  @author Feras Barahmeh
 * */

function canLabelFlayByInputStatus(input)
{
    if (! input.value)
        return true;
}


function canLabelDownByInputStatus(input)
{
        return input.value == null  || input.value == '';
}


const flayerInputs = document.querySelectorAll('.flayer');
flayerInputs.forEach((flayer) => {
    flayer.addEventListener('focus', () => {
        if (canLabelFlayByInputStatus(flayer)) {
            const label = flayer.parentElement.querySelector('.flay');
            label.style.top = '-15px';
            label.style.fontSize = '10px';
        }
    });


    flayer.addEventListener('blur', () => {
        if (canLabelDownByInputStatus(flayer)) {
            const label = flayer.parentElement.querySelector('.flay');
            label.style.top = '0px';
            label.style.fontSize = 'inherit';
        }
    });
});
