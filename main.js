function initialize() {
    var mp = new BMap.Map("container");
    //var point = new BMap.Point(121.491, 31.233);
    var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
    });
    mp.addControl(navigationControl);
    var points = [
        new BMap.Point(-2.349/*766*/, 53.465/*317*/) 
    ];
    for (let i = 0; i < points.length; i++) {
        var marker = new BMap.Marker(points[i]);
        mp.addOverlay(marker);
        marker.addEventListener("click", route);
    }
    function route(){
        alert("works")
    };
    mp.centerAndZoom(new BMap.Point(-2.349/*766*/, 53.465/*317*/), 11);
    mp.enableScrollWheelZoom();
}

function loadScript() {
    var script = document.createElement("script");
    script.src = "https://api.map.baidu.com/api?v=2.0&ak=S3EPllWD7Z9ZfxknQ8QImWSopvsMUjMz&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript; 




