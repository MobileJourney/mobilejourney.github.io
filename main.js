function initialize() {
    var map = new BMap.Map("container");
    /* var navigationControl = new BMap.NavigationControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE
    });
    map.addControl(navigationControl); */

    var opts = { type: BMAP_NAVIGATION_CONTROL_LARGE }
    map.addControl(new BMap.NavigationControl(opts));

    /* function ZoomControl() {
        this.defaultAnchor = BMap_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMap.Size(10, 10);
    }
    ZoomControl.prototype = new.BMap.Control();

    ZoomControl.prototype.initialize = function (map) {
        var div = document.createElement("div");
        div.appendChild(document.createTextNode("Zooom"));
        div.style.cursor = "pointer";
        div.style.border = "1px solid gray";
        div.style.backgroundColor = "white";
        // 绑定事件，点击一次放大两级    
        div.onclick = function (e) {
            map.zoomTo(map.getZoom() + 2);
        }    
        map.getContainer().appendChild(div);
        // 将DOM元素返回  
        return div; 
    } */
    
    var p1 = new BMap.Point(-2.349/*766*/, 53.465/*317*/);
    var p2 = new BMap.Point(-1.892/*766*/, 52.477/*317*/);

    var marker1 = new BMap.Marker(p1);
    var marker2 = new BMap.Marker(p2);

    map.addOverlay(marker1);
    map.addOverlay(marker2);

    marker1.onclick = function(e){
        modalInfo.classList.remove("closed-info");
        document.getElementById("close-btn").classList.remove("closed-info");
        document.getElementById("store-address-first").innerHTML = "The Trafford Centre";
        document.getElementById("store-address-second").innerHTML = "M17 8DA Stretford, Manchester";
        var link = document.getElementById("link-baidu");
        var p = e.target;
        link.setAttribute("href", "http://map.baidu.com/?latlng=" + p.getPosition().lat + "," + p.getPosition().lng + "&title=The Trafford Centre&content=M17 8DA Stretford, Manchester&autoOpen=true&l");
        modalInfo.classList.add("opened");
    }
    marker2.onclick = function(e){
        modalInfo.classList.remove("closed-info");
        document.getElementById("close-btn").classList.remove("closed-info");
        document.getElementById("store-address-first").innerHTML = "The Bullring Upper Mall East, Park St";
        document.getElementById("store-address-second").innerHTML = "B5 4BP Digbeth, Birmingham";
        var link = document.getElementById("link-baidu");
        var p = e.target;
        link.setAttribute("href", "http://map.baidu.com/?latlng=" + p.getPosition().lat + "," + p.getPosition().lng + "&title=The Bullring Upper Mall East, Park St&content=B5 4BP Digbeth, Birmingham&autoOpen=true&l");
        modalInfo.classList.add("opened");
    }

   
    function modalWindow(){
        modal.classList.remove("closed");
        modalOverlay.classList.remove("closed");
    };

    function modalWindowWithInfo(){
        modalInfo.classList.remove("closed-info");
    };

    document.querySelector(".modal-info__button").addEventListener("click", modalWindow);

    function hideModalInfo(){
        modalInfo.classList.add("closed-info");
        document.getElementById("close-btn").classList.add("closed-info")
    }

    /*map.addEventListener("click", hideModalInfo);  */
    document.getElementById("close-btn").addEventListener("click", hideModalInfo);

    
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
    openButton = document.querySelector("#open-button"),
    modalInfo = document.querySelector("#modal-info");

    closeButton.addEventListener("click", function(){
        modal.classList.add("closed");
        modalOverlay.classList.add("closed");
    });