console.log("JS loaded");

var from = document.getElementById("from").value;
console.log(from);

document.getElementById("validateForm").addEventListener("click",validateForm);
function validateForm() {
var from = document.getElementById("from").value;
var to = document.getElementById("to").value;
console.log(from);

if((from == "275 Yorkland Blvd") && (to == "CN Tower")) {
// location.href = "file:///C:/mad/SagarSaini_C0736242_MADT4103_MT/www/page2.html"

document.getElementById("frm").innerHTML = from;
document.getElementById("too").innerHTML = to;
console.log("hiii");

var baseFare = "2.50";
var serviceFees = "1.75";


var totalPrice = 2.50 + 0.81*22.9 + 1.75;
document.getElementById("total").innerHTML = totalPrice;

} else if
else {
  alert("Invalid locations");
}
}
