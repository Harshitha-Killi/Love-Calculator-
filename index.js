prompt("Enter the name of the girl:");
prompt("Enter the name of the boy:");

    var lovePercent= Math.random();
    lovePercent= lovePercent*100;
    lovePercent= Math.floor(n);
    lovePercent=lovePercent+1;

    if(lovePercent===100){
        alert("Your love percentage is "+lovePercent+" %. You are a match made in heaven.");
    }

    else if(n>70 && n<100){
        alert("Your love percentage is "+lovePercent+" %. You are an ideal couple.");
    }

     else if(n>40 && n<70){
        alert("Your love percentage is "+lovePercent+" %.  You are too close and could make a perfect couple.");
    }

     else{
         alert("Your love percentage is "+lovePercent+" %. You should work more on your realtionship.");
     }
