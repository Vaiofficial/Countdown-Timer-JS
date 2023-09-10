const endDate = "04 September 2024 01:30 PM"

document.getElementById("end-date").innerText = endDate
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate) //converted into mili seconds 
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff<0) {
        return;
    }

    // console.log(diff);

    //Days
    inputs[0].value = Math.floor(diff / 3600 / 24)
    //Hours
    inputs[1].value = Math.floor(diff / 3600) % 24
    //Minutes
    inputs[2].value = Math.floor(diff / 60) % 60
    //Seconds
    inputs[3].value = Math.floor(diff) % 60


}



//called the function
clock()

setInterval(() => {
    // console.log('Hello Interval!')
    clock()
 }, 1000);