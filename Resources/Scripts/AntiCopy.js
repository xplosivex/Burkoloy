function AntiCopy(){
var z = 0;
document.addEventListener('copy', function(e) {
var x = z++;
console.log(x)
if (x == 0) {var Copy = "Please Don't Copy Or Reproduce This Content";}
if (x == 1) {var Copy = "Please Do Not Copy This Material";}
if (x == 2) {var Copy = "Don't Make Me Ask Again.";}
if (x == 3) {var Copy = "Joe Will Smite You";}
if (x == 3) {var Copy = "STOP FUCKING COPYING THIS";}
if (x == 4) {var Copy = "You're Not Gonna Copy It Stop Trying";}
if (x == 5) {var Copy = "stop actually like for real. eeee"; z = 0;}
  console.log(Copy)
  e.clipboardData.setData('text/plain', Copy);
  e.preventDefault();
});
}
