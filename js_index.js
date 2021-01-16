
window.onload = function () {
    console.log(i);
}
var i=0
function notifyMe() {
    document.getElementById("ptag").innerHTML += " SUCCESS"
}

window.onunload=function(){
    i+=1
}