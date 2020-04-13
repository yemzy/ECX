var date = new Date();

function dateTime(){
  
    const DaysOfTheWeek = ["Sunday","Monday","Tuesday", "Wednesday", "Friday","Saturday"];
    
    let theDay = DaysOfTheWeek[date.getDay()];
    let thehour = date.getHours();
     thehour>12?thehour=thehour-12:thehour;

     let theMin = date.getMinutes();
     let theSec = date.getSeconds();
     const when = ()=> (thehour>12?"PM":"AM");
    console.log("Today is "+ theDay);
    console.log("Cuurrent time is "+ thehour+":"+theMin+":"+theSec+" "+when());
   
}
dateTime();