app.controller("CenterController", [ "$scope", "leafletMapEvents","LeafletUtil", function($scope, leafletMapEvents, LeafletUtil) {

    var zoom = 12,
        height = 0,
        width = 0,
        local_icons = {
            markers_icon: {
                iconUrl: 'marker.svg',
                iconSize:     [100, 95],
                iconAnchor:   [45, 75],
                shadowAnchor: [4, 62]
            },
            defaultIcon: {}
        },
        latL = 56.29,
        latR = 56.33,
        lngL = 44.00,
        lngR = 44.06,
        coords = [
            {
                lat: LeafletUtil.randomNumber(latL,latR),
                lng: LeafletUtil.randomNumber(lngL,lngR)
            },
            {
                lat: LeafletUtil.randomNumber(latL,latR),
                lng: LeafletUtil.randomNumber(lngL,lngR)
            },
            {
                lat: LeafletUtil.randomNumber(latL,latR),
                lng: LeafletUtil.randomNumber(lngL,lngR)
            },
            {
                lat: LeafletUtil.randomNumber(latL,latR),
                lng: LeafletUtil.randomNumber(lngL,lngR)
            }
        ];


    var mapEvents = leafletMapEvents.getAvailableMapEvents();
    for (var k in mapEvents){
        var eventName = 'leafletDirectiveMap.' + mapEvents[k];
        $scope.$on(eventName, function(event){
            var zoomRaz = zoom - $scope.center.zoom;
            width = 100 + (100 * zoomRaz/10);
            height = 95 + (95 * zoomRaz/10);
            for (var key in $scope.markers){
                $scope.markers[key].icon.iconSize[0] = height;
                $scope.markers[key].icon.iconSize[1] = width;
            }
        });
    }

    /*
     function rotateMarkers(coords) {
     var gr = 0;
     for (var i = 0; i <= coords.length; i++) {
     if (coords[i].lat < coords[i + 1].lat) {
     coords[i].rotate = 90;
     } else if (coords[i].lat > coords[i + 1].lat) {
     coords[i].rotate = 270;
     }
     if (coords[i].lat < coords[i + 1].lat)
     }
     return gr;
     }*/



    angular.extend($scope, {
        center: {
            lat: 56.30896724327281,
            lng: 43.99566829204559,
            zoom: zoom
        },
        defaults: {
            scrollWheelZoom: false
        },
        paths: {
            p1: {
                color: '#008000',
                weight: 8,
                latlngs: [
                    { lat: coords[0].lat, lng: coords[0].lng },
                    { lat: coords[1].lat, lng: coords[1].lng },
                    { lat: coords[2].lat, lng: coords[2].lng },
                    { lat: coords[3].lat, lng: coords[3].lng }
                ]

            }
        },
        markers: {
            oneMarker: {
                lat: coords[0].lat,
                lng: coords[0].lng,
                message: "I want to travel here!",
                focus: false,
                draggable: false,
                icon:  local_icons.markers_icon,
                iconAngle: 90
            },
            twoMarker: {
                lat: coords[1].lat,
                lng: coords[1].lng,
                message: "I want to travel here!",
                focus: false,
                draggable: false,
                icon:  local_icons.markers_icon,
                iconAngle: 0

            },
            freeMarker: {
                lat: coords[2].lat,
                lng: coords[2].lng,
                message: "I want to travel here!",
                focus: false,
                draggable: false,
                icon:  local_icons.markers_icon,
                iconAngle: 270
            },
            fourMarker: {
                lat: coords[3].lat,
                lng: coords[3].lng,
                message: "I want to travel here!",
                focus: false,
                draggable: false,
                icon: local_icons.markers_icon,
                iconAngle: 270
            }
        }
    });
}]);
