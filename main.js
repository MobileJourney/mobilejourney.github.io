/*var map = new BMap.Map("container");
var point = new BMap.Point(116.404, 39.915);
map.centerAndZoom(point, 15);
window.setTimeout(function () {
    map.panTo(new BMap.Point(116.409, 39.918));
}, 2000);*/

function initialize() {
    var mp = new BMap.Map("container");
    mp.centerAndZoom(new BMap.Point(121.491, 31.233), 11);
}

function loadScript() {
    var script = document.createElement("script");
    script.src = "http://api.map.baidu.com/api?v=2.0&ak=S3EPllWD7Z9ZfxknQ8QImWSopvsMUjMz&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;

//personal code

var banner = document.getElementById("banner");
var container = document.getElementById("container");
var button = document.getElementsByClassName("pano_close")[0];

//button.style.display = "block";

banner.onclick = function(){
    container.style.display = "block";
    banner.style.display = "none"
}

/*button.onclick = function(){
    container.style.display = "none";
    banner.style.display = "block"
}*/


