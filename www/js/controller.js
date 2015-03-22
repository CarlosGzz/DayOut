app.controller('SettingsControl', function($scope, $state){
    $scope.back = function(){
        $state.go('menu.tab.settings');
    }
    
    $scope.saveExplore = function(){
        $state.go('menu.tab.settings');
    }
    
    $scope.saveTouristMe = function(){
        $state.go('menu.tab.settings');
    }
});

app.controller('ProfileControl', function($scope, $window){
    $scope.back = function(){
        $window.history.back();
    }
});

app.controller('ExploreControl', function($scope, $state){
    $scope.go = function(){
        $state.go('menu.tab.touristMeList');
    }
});

app.controller('BadgesControl', function($scope, $window, Badges, $ionicPopup){
    var alert = function(popTitle, popTemplate, btnText, btnType){
        var alertPopup = $ionicPopup.alert({
            title: popTitle,
            template: popTemplate,
            buttons: [{text: btnText, type: btnType}]
        });
    };
    
    $scope.back = function(){
        $window.history.back();
    }
    
    $scope.badges = Badges.all();
    
    $scope.clickBadge = function(id){
        var badge = Badges.get(id);
        var name = badge.name;
        var description = badge.description;
        alert(name, description, "Ok", "button-assertive");
    }
});

app.controller('TouristMeControl', function($scope, $ionicLoading, Places, $state, $stateParams, $window, $timeout){
    
    $scope.back = function(){
        $window.history.back();
    }
    
    var p = [];
    var ro = function(){
        var r = Places.allRoutes();
        for(var i = 0; i < r.length; i++){
            var places = r[i].place.split(" ");
            var rou = {
                id: r[i].id,
                name: r[i].name,
                number: places.length,
                places: r[i].place
            }
            p.push(rou);
        }
        return p;
    }
    
    $scope.routesComplete = [];
    
    $scope.ini = function(){
        $state.go($state.current, {}, {reload: true});
        $scope.routesComplete = ro();
    }
    
    $scope.detail = function(){
        $state.go('touristMeDetail', {places: $scope.routeIdIn});
    }
    
    $scope.in = function() {
        var r = $stateParams.places;
        var p = ro();
        
        var route = "";
        for(var i = 0; i < p.length; i++){
            if(p[i].id == r){
                route = p[i].places;
            }
        }
        
        var r = route.split(" ");
        var pl = Places.allPlaces();
        var pla = [];
        for(var i = 0; i < r.length; i++){
            for(var j = 0; j < pl.length; j++){
                if(r[i] == pl[j].id){
                    pla.push(pl[j]);
                }
            }
        }
        $scope.placesComplete = pla;
    }
    
    $scope.initialize = function() {
        var routeId = $stateParams.routeId;
        $scope.routeIdIn = routeId;
        var p = [];
        var p = ro();
        
        var route = "";
        for(var i = 0; i < p.length; i++){
            if(p[i].id == routeId){
                route = p[i].places;
            }
        }
        var r = route.split(" ");
        var p = [];
        
        $scope.numPlaces = r.length;
        
        var myLatLng = new google.maps.LatLng(parseFloat(Places.getPlace(r[0]).lat), parseFloat(Places.getPlace(r[0]).lon));

        var mapOptions = {
            center: myLatLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        
        for(var i = 0; i < r.length; i++){
            var pl = Places.getPlace(r[i]);
            var letter = String.fromCharCode("A".charCodeAt(0) + i);
            var placesLatLng = new google.maps.LatLng(parseFloat(pl.lat), parseFloat(pl.lon));
            var marker = new google.maps.Marker({
                position: placesLatLng,
                map: map,
                icon: "http://maps.google.com/mapfiles/marker" + letter + ".png",
                title: pl.name
            });
            $scope.map = map;
        }
    }
});