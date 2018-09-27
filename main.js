//OPTIONS: create an option for if the values are under 40 = red, over = green, etc
const weeklyInHrs = ["monIn", "tuesIn"];
const weeklyOutHrs = ["monOut", "tuesOue"];
const weeklyTotals = ["monTotal", "tuesTotal"];

//Hour Calculations
function dailyHr(inTime, outTime) {
  const inHour = hr(inTime);
  const outHour = hr(outTime);
  const minInSnap = snap(inTime);
  const minOutSnap = snap(outTime);

  //Define funciton to calculate Hours
  function hr(val){
    const hours = Number(val.slice(0,2));
    return hours
  };
  
  //Define funciton to calculate minute Snap
  function snap(val){
    const truMin = Number(val.slice(-2)/60);
    const timeSnap = (Math.max(Math.round(truMin*10)/10).toFixed(1));
    return timeSnap
  };

  const hrTotal = (Number(outHour) + Number(minOutSnap)) - (Number(inHour) + Number(minInSnap));
  const valueTotal = (hrTotal - 0.5).toFixed(1);

  return valueTotal
};
function calculateTime(){
  const monTotalResults = document.getElementById("monTotal");
  
  const monIn = document.getElementById("monIn").value;
  const monOut = document.getElementById("monOut").value;

  dailyResults = dailyHr(monIn, monOut);
  console.log(monIn)

  monTotalResults.innerHTML = dailyResults 
};
