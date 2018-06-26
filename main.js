"use strict";

// var newCoffeeName = document.getElementById('add-coffee-name');
// var newRoastName = document.getElementById('add-coffee-roast');
var searchName = document.querySelector('#search-coffee');
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
// function updateList(){
//     var newCoffee = {
//         coffeeId: coffees.length,
//         coffeeName: newCoffeeName.value,
//         coffeeRoast: newRoastName.value
//     };
//     coffees.push(newCoffee);
// }
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    if (selectedRoast === "all") {
        filteredCoffees = coffees;
    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }

    if (searchName.value === ""){
        rendDiv.innerHTML = renderCoffees(filteredCoffees);
    }else {
        filteredCoffees.forEach(function (coffee, index) {
            if (coffee.name.toLowerCase().search(searchName.value.toLowerCase()) > -1) {
                rendDiv.innerHTML = renderCoffee(coffee);
            }
        });
    }
    // rendDiv.innerHTML = renderCoffees(filteredCoffees);
    //
    // var input, filter, i;
    // input = document.getElementById('search-coffee');
    // filter = input.value.toLowerCase();
    //
    // // Loop through all list items, and hide those who don't match the search query
    // for (i = 0; i < coffees.length; i++) {
    //     if (coffees[i].name.innerHTML.toLowerCase().indexOf(filter) > -1) {
    //         coffees[i].name.style.display = "";
    //     } else {
    //         coffees[i].name.style.display = "none";
    //     }
    // }
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var rendDiv = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit_search');
var roastSelection = document.querySelector('#roast-selection');
// var submitCoffee = document.querySelector('#submit_addCoffee');

rendDiv.innerHTML = renderCoffees(coffees);
// submitCoffee.addEventListener('click',updateList);
searchName.addEventListener('keyup',updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
submitButton.addEventListener('click', updateCoffees);
