      window.onload = function () {
            var days =14;
            var hours = 24;
            var minutes = 60;
            var seconds = 60;
            setInterval(function () {
               document.querySelector(".days").innerHTML=days;
               document.querySelector(".hours").innerHTML=hours;
               document.querySelector(".minutes").innerHTML=minutes;
               document.querySelector(".seconds").innerHTML=seconds;
               seconds--;
               if (seconds == 00) {
                  minutes--;
                  seconds = 60;
                  if (minutes == 00) {
                     hours--;
                     minutes = 60;
                     if (hours ==00){
                        days--;
                        hours =24;
                        if(days==00){
                           days=14;
                        }
                     }
                  }
               }
            }, 1000);
         };
      

