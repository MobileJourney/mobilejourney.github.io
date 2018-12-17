function initialize() {
    var map = new BMap.Map("container");
    var navigationControl = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_ZOOM
    });
    map.addControl(navigationControl);
    function myPos(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        var points = [
            new BMap.Point(-2.349/*766*/, 53.465/*317*/)
        ];
        points.push(new BMap.Point(position.coords.longitude.toFixed(3), position.coords.latitude.toFixed(3)));
        for (let i = 0; i < points.length; i++) {
            var marker = new BMap.Marker(points[i]);
            map.addOverlay(marker);
            marker.addEventListener("click", route);
        }
        var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true } });
        driving.search(points[0], points[1]);
    }
    navigator.geolocation.getCurrentPosition(myPos);
   
    function route(){
        alert("http://map.baidu.com/?latlng=53.465317,-2.349766&title=%E6%88%91%E7%9A%84%E4%BD%8D%E7%BD%AE&content=%E7%99%BE%E5%BA%A6%E5%A5%8E%E7%A7%91%E5%A4%A7%E5%8E%A6&autoOpen=true&l")
    };
    
    map.centerAndZoom(new BMap.Point(-2.349/*766*/, 53.465/*317*/), 11);
    map.enableScrollWheelZoom();
}

function loadScript() {
    var script = document.createElement("script");
    script.src = "https://api.map.baidu.com/api?v=3.0&ak=S3EPllWD7Z9ZfxknQ8QImWSopvsMUjMz&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript; 




