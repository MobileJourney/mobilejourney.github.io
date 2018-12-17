function initialize() {
    var mp = new BMap.Map("container");
    var navigationControl = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_ZOOM
    });
    mp.addControl(navigationControl);
    function myPos(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        var points = [
            new BMap.Point(-2.349/*766*/, 53.465/*317*/)
        ];
        points.push(new BMap.Point(position.coords.longitude.toFixed(3), position.coords.latitude.toFixed(3)));
        for (let i = 0; i < points.length; i++) {
            var marker = new BMap.Marker(points[i]);
            map.addOverlay(marker);
        }
        var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true } });
        driving.search(points[0], points[1]);
    }
    navigator.geolocation.getCurrentPosition(myPos);
   
    mp.centerAndZoom(new BMap.Point(-2.349/*766*/, 53.465/*317*/), 11);
    mp.enableScrollWheelZoom();
}

function loadScript() {
    var script = document.createElement("script");
    script.src = "https://api.map.baidu.com/api?v=2.0&ak=S3EPllWD7Z9ZfxknQ8QImWSopvsMUjMz&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript; 




