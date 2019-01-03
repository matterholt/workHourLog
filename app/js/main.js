//Define funciton to calculate minute Snap
function flexTime (dayTime) {
    // pass the clock time
    let hrMin = dayTime.split(/[.:]/);
    //console.log(hrMin);
    //obtain hour values and return number
    let hrs = parseInt(hrMin[0], 10); //???? what does "10" mean
    //console.log(hrs);
    //index minute, apply flex time return number
    let flexing = Math.round(parseInt(hrMin[1], 10) / 6) / 10;
    //console.log(flexing);
    //combine minute with the hours
    let flextTime = hrs + flexing;
    console.log(flextTime);
    return flextTime;
}
// look into creating nodelist

const addHr = document.getElementById("addHr")
const pto = document.getElementById("pto")
const lunch = document.getElementById("lunch")



const punchIn = document.getElementsByClassName("punchIn")[0].value
const punchOut = document.getElementsByClassName("punchOut")[0].value
const total = document.getElementsByClassName("total")[0].innerHTML

/*/there are multiple and do not want to write all values out
const punchIn = document.getElementById("punchIn")
const punchOut = document.getElementById("punchOut")
const total = document.getElementById("total")


addHr.addEventListener('click',function (event) {
    inTime = flexTime(punchIn.value)
    outTime = flexTime(punchOut.value)
    total.innerText = (outTime - inTime) - lunch.value
});
*/