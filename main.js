function initialize() {
    var map = new BMap.Map("container");
    var navigationControl = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_ZOOM
    });
    map.addControl(navigationControl);
    function myPos() {
        var points = [
            new BMap.Point(-2.349/*766*/, 53.465/*317*/),
            new BMap.Point(-2.549/*766*/, 54.665/*317*/),
            new BMap.Point(-2.549/*766*/, 52.665/*317*/)
        ];

        for (let i = 0; i < points.length; i++) {
            var marker = new BMap.Marker(points[i]);
            map.addOverlay(marker);
            marker.addEventListener("click", modalWindow);
            marker.onclick = function (e) {
                var link = document.getElementById("link-baidu");
                var p = e.target;
                if ((navigator.platform.indexOf("iPhone") != -1) ||
                    (navigator.platform.indexOf("iPod") != -1) ||
                    (navigator.platform.indexOf("iPad") != -1)) {
                    link.setAttribute("href", "baidumap://map/marker?location=" + p.getPosition().lat + "," + p.getPosition().lng + "&title=我的位置&content=百度奎科大厦&src=ios.baidu.openAPIdemo");
                    link.innerHTML = "Open in iOS app"
                }else if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
                    link.setAttribute("href", "bdapp://map/marker?location=" + p.getPosition().lat + "," + p.getPosition().lng + "&title=Marker&content=makeamarker&traffic=on&src=andr.baidu.openAPIdemo")
                } else {link.setAttribute("href", "http://map.baidu.com/?latlng=" + p.getPosition().lat + "," + p.getPosition().lng + "&title=%E6%88%91%E7%9A%84%E4%BD%8D%E7%BD%AE&content=%E7%99%BE%E5%BA%A6%E5%A5%8E%E7%A7%91%E5%A4%A7%E5%8E%A6&autoOpen=true&l");}
            } //http://api.map.baidu.com/marker?location=40.047669,116.313082&title=我的位置&content=百度奎科大厦&output=html&src=webapp.baidu.openAPIdemo
        }
    }
    myPos();
    

   
    function modalWindow(){
        modal.classList.remove("closed");
        modalOverlay.classList.remove("closed");
    };
    
    map.centerAndZoom(new BMap.Point(-2.349766, 53.465317), 8);
    
    map.enableScrollWheelZoom();
    
    if(!navigator.geolocation){
        console.log("Geolocation not supported");
        return
    }
    function succes(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude, longitude);
        var myLocation = new BMap.Point(longitude, latitude);
        var myMarker = new BMap.Marker(myLocation);
        myMarker.setAnimation(BMAP_ANIMATION_BOUNCE)

        map.addOverlay(myMarker)
    }
    function error(){
        console.log("Unable to get your location")
    }
    navigator.geolocation.getCurrentPosition(succes, error);
}

function loadScript() {
    var script = document.createElement("script");
    script.src = "https://api.map.baidu.com/api?v=3.0&ak=S3EPllWD7Z9ZfxknQ8QImWSopvsMUjMz&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript; 

//modal window
var modal = document.querySelector("#modal"),
    modalOverlay = document.querySelector("#modal-overlay"),
    closeButton = document.querySelector("#close-button"),
    openButton = document.querySelector("#open-button");

    closeButton.addEventListener("click", function(){
        modal.classList.add("closed");
        modalOverlay.classList.add("closed");
    });