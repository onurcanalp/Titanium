/**
 * 
 * Author: Onur CANALP <onurcanalp@siyyah.com>
 *
 * map_myway.js draw your walking path on the map
 */

var locations = [];
function addRoute(mapView, geo)
{
    locations.push({latitude: geo.coords.latitude,longitude: geo.coords.longitude});
 
    var length = locations.length;
    if (length > 1)
    {
        var routelocations = [locations[length-2],locations[length-1]];
        var newRoute = { 	name: 'Route-' + length,
                 			color: '#000000',
			                width: 5,
        	                locations: routelocations };
 
        mapView.addRoute(newRoute);
    }
}