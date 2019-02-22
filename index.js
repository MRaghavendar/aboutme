var quotes = new XMLHttpRequest();
quotes.open('GET', 'https://codepen.io/MRaghavendar/pen/JxQzKG.html');
quotes.onreadystatechange = function () { 
    if (quotes.readyState === 4) {
        document.getElementById('ajax').innerHTML = quotes.responseText;
    }
};

function sendTheAJAX() {
    quotes.send();
document.getElementById('GoodQuotes').style.display = 'none';
}
