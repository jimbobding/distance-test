let originInput = 'origin-input';
let destinationInput = 'destination-input';

$(document).ready(function () {
    let autocomplete;
    autocomplete = new google.maps.places.Autocomplete((document.getElementById(originInput)), {
        types: ['geocode'],

    }),
        autocomplete = new google.maps.places.Autocomplete((document.getElementById(destinationInput)), {
            types: ['geocode'],
        });


    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var near_place = autocomplete.getPlace();
        document.getElementById('loc_lat').value = near_place.geometry.location.lat();
        document.getElementById('loc_long').value = near_place.geometry.location.lng();

        document.getElementById('latitude_view').innerHTML = near_place.geometry.location.lat();
        document.getElementById('longitude_view').innerHTML = near_place.geometry.location.lng();
    });
});

$(document).on('change', '#' + searchInput, function () {
    document.getElementById('loc_lat').value = '';
    document.getElementById('loc_long').value = '';

    document.getElementById('latitude_view').innerHTML = '';
    document.getElementById('longitude_view').innerHTML = '';
});
