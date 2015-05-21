var d = new Date();
var hours = d.getHours();
var minutes = d.getMinutes();
console.log(hours);

function timeHours(){
   document.getElementById("hour").innerHTML = hours;
      };

function timeMin(){
    if(minutes <= 9){
        minutes = "0"+minutes;
    }
   document.getElementById("minutes").innerHTML = minutes;
      };




