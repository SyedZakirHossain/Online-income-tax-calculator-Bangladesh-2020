var c = document.getElementById('n4c').value;
function kk3(){
var a = document.getElementById('n4a').value;
var b = document.getElementById('n4b').value;
var c = document.getElementById('n4c').value;
var c=parseInt(a);
var re=0;

if (a>=30001){
re=parseInt(a)-30000;
}
if (!isNaN(re)) {
document.getElementById('n4c').value = re;
}
}
