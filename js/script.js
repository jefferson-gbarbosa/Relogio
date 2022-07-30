let btnMode = document.querySelector('.toggleClass');
btnMode.addEventListener('click',() => {
        let body = document.querySelector('body');
        body.classList.toggle('light');
    });
setInterval(()=>{
    let deg=6;
    let hr = document.getElementById("hr");
    let mn = document.getElementById("mn");
    let sc = document.getElementById("sc");

    let day = new Date();
    let hh = day.getHours()*30;
    let mm = day.getMinutes()*deg;
    let ss = day.getSeconds()*deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;


    let hours = document.querySelector('.hours');
    let minutes = document.querySelector('.minutes');
    let ampm = document.querySelector(".ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    let am = h >= 12? "PM":"AM";
    // Formatar de 24 horas para 12
    if(h > 12){
        h = h - 12;
    }
    // Adicionar "0" quando for abaixo de "10"
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;


    hours.innerHTML = h;
    minutes.innerHTML = m;
    ampm.innerHTML=am;

});
//Data
let month = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];

let day=new Date();
let d = day.getDate();
let ms = day.getMonth();
let yr = day.getFullYear();

let  nDay = document.getElementById('day');
let  nMonth = document.getElementById('month');
let  year = document.getElementById('year');

nDay.innerHTML=d;
nMonth.innerHTML=month[ms];
year.innerHTML=yr