const container = document.querySelector('.container');

function renderCountry(data){
    const html = `
    
        <div>
            <h3>${data.name}</h3>
            <img width="400px" height="auto" src="${data.flag}"/>
        </div>
    `;

        container.insertAdjacentHTML('afterend', html);
}



function getCountryData(country='usa') {

    //AJAX request
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        renderCountry(data);
        
    })



}




getCountryData('britain');
