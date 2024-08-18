

function digital_clock(){

    let now = new Date()

    let hoursNumber = now.getHours () % 12 || 12;
    let minutNumber = now.getMinutes ();
    let secondNumber = now.getSeconds ();
    let ampmNumber = (now.getHours ()) >= 12 ? "PM" : "AM";

    let hoursElement = document.getElementById('hours') .innerHTML = hoursNumber < 10 ? "0" + hoursNumber : hoursNumber; 
    let minuteElement = document.getElementById('minute').innerHTML = minutNumber < 10 ? "0" + minutNumber : minutNumber;
    let secondElement = document.getElementById('second').innerHTML = secondNumber < 10 ? "0" + secondNumber :secondNumber;
    let ampmElement = document.getElementById('ampm').innerHTML = ampmNumber;
}

setInterval(digital_clock,1000)

