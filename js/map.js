var chicago = new google.maps.LatLng(59.9386651,30.3205833);
function initialize() {

    var roadAtlasStyles = [
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {"saturation": -100},
                {"lightness": -8},
                {"gamma": 1.18}
            ]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {"saturation": -100},
                {"gamma": 1},
                {"lightness": -24}
            ]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {"saturation": -100}
            ]
        }, {
            "featureType": "administrative",
            "stylers": [
                {"saturation": -100}
            ]
        }, {
            "featureType": "transit",
            "stylers": [
                {"saturation": -100}
            ]
        }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {"saturation": -100}
            ]
        }, {
            "featureType": "road",
            "stylers": [
                {"saturation": -100}
            ]
        }, {
            "featureType": "administrative",
            "stylers": [
                {"saturation": -100}
            ]
        }, {
            "featureType": "landscape",
            "stylers": [
                {"saturation": -100}
            ]
        }, {
            "featureType": "poi",
            "stylers": [
                {"saturation": -100}
            ]
        }, {}
    ]

    var mapOptions = {
        zoom: 17,
        center: chicago,
        scrollwheel: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
        },


        panControl: true,
        panControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        }


    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    var marker1 = new google.maps.LatLng(59.9386651,30.3205833);
    var image = 'img/map-marker.png';
    var beachMarker = new google.maps.Marker({
        position: marker1,
        map: map,
        icon: image
    });
    var styledMapOptions = {};

    var usRoadMapType = new google.maps.StyledMapType(
        roadAtlasStyles, styledMapOptions);

    // map.mapTypes.set('usroadatlas', usRoadMapType);
    // map.setMapTypeId('usroadatlas');
}
google.maps.event.addDomListener(window, 'load', initialize);