(function(){
    "use strict";

    var mapOptions = {
        zoom: 13,

        center:{
            lat:48.4840955,
            lng:-92.8270873
        }
    };
    var coffeeSpot = {
        lat: 48.5946307,
        lng: -93.4117715
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var marker = new google.maps.Marker({postion:coffeeSpot, map: map});
})();