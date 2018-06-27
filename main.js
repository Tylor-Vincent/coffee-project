"use strict";

function renderCoffee(coffee) {
    var html = '<div class="col-2 m-2 coffee">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p class="text-white-50">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees() {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var searchedCoffees = [];
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
    } else {
        filteredCoffees.forEach(function (coffee) {
            if (coffee.name.toLowerCase().search(searchName.value.toLowerCase()) > -1) {
                searchedCoffees.push(coffee);
            }
        });
        rendDiv.innerHTML = renderCoffees(searchedCoffees);
    }
}

function updateList(){
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var newCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName.value,
        roast: newRoastName.value
    };
    console.log(newCoffee);
    coffees.push(newCoffee);
    console.log(coffees);
    updateCoffees();
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


var newCoffeeName = document.querySelector('#add-coffee-name');
var newRoastName = document.querySelector('#add-coffee-roast');

var searchName = document.querySelector('#search-coffee');

var rendDiv = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit_search');
var roastSelection = document.querySelector('#roast-selection');

var submitCoffee = document.querySelector('#submit_addCoffee');

rendDiv.innerHTML = renderCoffees(coffees);
searchName.addEventListener('keyup', updateCoffees);
roastSelection.addEventListener('change', updateCoffees);
submitButton.addEventListener('click', updateCoffees);

submitCoffee.addEventListener('click', updateList);
