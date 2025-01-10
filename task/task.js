var tInput = document.getElementById('title');
var AInput = document.getElementById('author');

var price = document.getElementById('price');

var TError = document.getElementById('t-error');
var aError = document.getElementById('a-error');

var priceError = document.getElementById('p-error');

var addButton = document.getElementById('add-book-button');
addButton.addEventListener('click', function() {
    TError.textContent = '';
    aError.textContent = '';
    priceError.textContent = '';

    

    
    var name = tInput.value.trim();
    var ashor = AInput.value.trim();

    var price = price.value.trim();


    const regex = /[a-zA-Z]/g;
    
    if (!name ||!regex.test(name) ) {
        TError.innerHTML= '<p style="color: brown;>title is required or not correct</p>';
    }
    if (!ashor ||!regex.test(ashor) ) {
        aError.innerHTML= '<pstyle="color: brown;>aushor is required or not correct</p>';
    }
 
    if (!price || isNaN(price) || price <= 0) {
        priceError.textContent = 'Please enter a valid price.';
    }


   
   
});
