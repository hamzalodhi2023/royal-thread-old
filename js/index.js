let cursor = document.querySelector("#cursor");
let body = document.querySelector("body");

body.addEventListener("mousemove", function(e){
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});
