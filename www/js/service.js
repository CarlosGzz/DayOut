app.factory('Badges', function(){
    var badges = [
        {
            id: 0,
            name: 'Couch Potatoe',
            description: 'First rank you start with',
            icon: 'icon ion-egg'
        },
        {
            id: 1,
            name: 'Ranger',
            description: 'First 5 trips',
            icon: 'icon ion-bonfire'
        },
        {
            id: 2,
            name: 'Globe Trotter',
            description: 'They have been to trips in 5 different countries',
            icon: 'icon ion-earth'
        },
        {
            id: 3,
            name: 'Foodie',
            description: 'They have been to over 30 food or food clasified trips',
            icon: 'icon ion-close-round'
        },
        {
            id: 4,
            name: 'Sporty',
            description: 'They have over 20 trips related to sports and outdoors',
            icon: 'icon ion-close-round'
        },
        {
            id: 5,
            name: 'Sage',
            description: 'They have over 20 trips related to culture',
            icon: 'icon ion-close-round'
        },
        {
            id: 6,
            name: 'Party God',
            description: 'They have over 20 trips related to nightlife',
            icon: 'icon ion-close-round'
        }
    ];
    
    return{
        all: function(){
            return badges;
        },
        get: function(badgeId){
            for(var i = 0; i < badges.length; i++){
                if(badges[i].id === parseInt(badgeId)){
                    return badges[i];
                }
            }
            return null;
        }
    }
});

app.factory('Places', function(){
    var places = [
        {
            id: 0,
            name: 'Hack MTY',
            lat: '25.649227',
            lon: '-100.289745',
            time: '1 hr',
            rating: '4.7',
            hours: '6:00am - 11:59pm',
            price: '$50'
        },
        {
            id: 1,
            name: 'Estadio Tec',
            lat: '25.652574',
            lon: '-100.286382',
            time: '2 hrs',
            rating: '4.5',
            hours: '7:00pm - 10:00pm',
            price: '$150'
        },
        {
            id: 2,
            name: 'Parque Fundidora',
            lat: '25.678984',
            lon: '-100.284333',
            time: '2 hrs',
            rating: '4.5',
            hours: '8:00am - 9:00pm',
            price: '$50'
        },
        {
            id: 3,
            name: 'Planetario Alfa',
            lat: '25.636696',
            lon: '-100.358562',
            time: '3',
            rating: '4.7',
            hours: '10:00am - 8:00pm',
            price: '$200'
        },
        {
            id: 4,
            name: 'Museo Marco',
            lat: '25.665284',
            lon: '-100.310062',
            time: '2 hrs',
            rating: '4.6',
            hours: '10:00am - 7:00pm',
            price: '$100'
        }
    ];
    
    var routes = [
        {
            id: 0,
            name: 'Route One',
            place: '0 1'
        },
        {
            id: 1,
            name: 'Route Two',
            place: '0 2 4'
        },
        {
            id: 2,
            name: 'Route Three',
            place: '1 4 2'
        },
        {
            id: 3,
            name: 'Route Four',
            place: '3'
        },
    ];
    return{
        allRoutes: function(){
            return routes;
        },
        allPlaces: function(){
            return places;
        },
        getPlace: function(placeId){
            for(var i = 0; i < places.length; i++){
                if(places[i].id === parseInt(placeId)){
                    return places[i];
                }
            }
            return null;
        }
    }
});