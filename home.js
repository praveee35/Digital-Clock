//for current time and date
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let hrs = document.getElementById("hrs");
let mins = document.getElementById("min");
let sec = document.getElementById("sec");
let day = document.getElementById("Daate");
let month = document.getElementById("Day");



// console.log(currentTime.getHours());
// console.log(currentTime.getMinutes());



setInterval(()=>{
    let currentTime = new Date();


    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML =(currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
   
    day.innerHTML = days[(currentTime.getDay(3))];

    
    
    
},1000)


//current date deploy  in the html by  using  "innerHTML"