
var Place = function(place) {
  this.name = ko.observable(place.name);
  this.vicinity = ko.observable(place.vicinity);
  this.position = ko.observable(place.geometry.location)
}

var getplaceList = [];

var ViewModel = function () {
  
    var self = this;
    // getplaceList = this.placeList; 
    this.placeList = ko.observableArray([]);
    getplaceList.forEach(function(place) {
      self.placeList.push( new Place(place));
      alert('The first element is ' + this.placeList()[0]);
    });
};

ko.applyBindings(new ViewModel());