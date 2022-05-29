var secDiv=document.getElementById('sec');
var minDiv=document.getElementById('min');
var hourDiv=document.getElementById('hour');
function myFunction() {
    let date=new Date();   // Date() boshqa bir ozgaruvchiga ya'ni date ga  Obekt olayapmiz. Keyin uning
    //ichidagi mahsulotlarini ishlatayapmiz
    let sec=date.getSeconds()/60;
    let min=(date.getMinutes()+sec)/60;
    let hour=(date.getHours()+min)/12;
    secDiv.style.transform="rotate(" + (sec*360)+"deg)";
    minDiv.style.transform="rotate(" + (min*360)+"deg)";
    hourDiv.style.transform="rotate(" + (hour*360)+"deg)";
    setInterval(myFunction,1000);
    //Bu har bir sekundda sekund strilkasi bir yurishi intervalini bildiradi agar uni 2000 ms qilib qoysangiz
    // har 2 sekundda 2 birlikka siljiydi. Soatda 1 sekundda 1 birlik siljigani uchun 1000 ms qoyiladi
    // 1s=1000 ms ga teng

}
myFunction();  //Funksiyani chaqirib qoyishimiz kerak