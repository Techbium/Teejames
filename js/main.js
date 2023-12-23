

var show = document.getElementById("showbtn");

var off = document.getElementById ("offbtn");

var footer =document.getElementById("footer");

show.addEventListener("click", function(){
    show.style.display = "none";
    footer.style.display ="block";

})

off.addEventListener("click", function(){
    show.style.display = "block"
    footer.style.display ="none";


})

var widths = window.innerWidth;

console.log("current window width:" + widths + "pixels")