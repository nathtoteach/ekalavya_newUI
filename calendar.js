const date=new Date();
const renderCalendar=()=>{
//   date.setDate(1);
const monthDays = document.querySelector(".days");
 const lastDay=new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
 const prevLastDay=new Date(date.getFullYear(),date.getMonth(),0).getDate();
 


 const firstDayIndex=date.getDay();
 const lastDayIndex= new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

 const nextDays = 7-lastDayIndex-1;
 const months=[
     
     "january",
     "february",
     "March",
     "April",
     "may",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December",
     
 ];
 document.querySelector(".date h1").innerHTML=months[date.getMonth()];
 document.querySelector(".date p").innerHTML=date.toDateString();
  
 let days="";
 for(let x=firstDayIndex;x>0;x--){
     days +=`<div class="prev-day">${prevLastDay-x+1}</div>`
 }
 for(let i=1;i<=lastDay;i++){
     days +=` <div>${i}</div>`;
     monthDays.innerHTML=days;
     
 }
 
}
 document.querySelector('.prev').addEventListener('click',()=>{
     date.setMonth(date.getMonth()-1);
     renderCalendar();
 })

 document.querySelector('.next').addEventListener('click',()=>{
    date.setMonth(date.getMonth()+1);
    renderCalendar();
 })



