var i=0;

var text=("Hi! Am RawBot, This is how you can make an automated text in html using JavaScript.!");

var speed=75;
function coding() {
  if (i<text.length) {
    document.getElementById("text1").innerHTML+=text.charAt(i);
    i++;
    setTimeout(coding,speed);
  }
}