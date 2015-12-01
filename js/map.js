var map;
var infowindow;

function initMap() {
  var petionville = {lat: 18.5128958, lng: -72.2939841};

  map = new google.maps.Map(document.getElementById('map'), {
    center: petionville,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: petionville,
    radius: 500,
    types: ['store']
  }, callback);
}

function callback(results, status) {
  ViewModel;

  if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.forEach(function(place) {
      getplaceList.push({name: place.name, vicinity: place.vicinity, position: place.geometry.location});
      console.log(getplaceList);
      createMarker(place);
      })
  }
}
function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location,
      name: place.name,
      vicinity: place.vicinity
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
}  
