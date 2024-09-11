//console.log("Early Access")
//changeColor();

//Global Scope
//var myAge = 26;
//console.log("My age = " + myAge)

//Array
//var data = ["Hello,ฮาโหล,你好"]
//console.log(data);
//console.log(data.length);
//console.log(data[0]);
//console.log(data[1]);
//console.log(data[2]);

//Object
const aboutIntro = ["Hello I am Gain. A student from kpn I have study in Grade 12 Education plan Art-Math. I really like to play a computer like playgames,watching technology video clips.My dreams I want to be rich.","สวัสดี ฉันชื่อเกน. นักเรียนจาก kpn ฉันเรียนอยู่ชั้นประถมศึกษาปีที่ 12 แผนการศึกษา ศิลป์-คณิตศาสตร์ ฉันชอบเล่นคอมพิวเตอร์มาก เช่น เล่นเกม ดูคลิปเทคโนโลยี ความฝันฉันอยากรวย"];
const aboutName = ["Gainny","เกนนี่"];
const aboutSchool = ["Kanchanapisek Wittayalai Nakhonpathom","กาญจนาภิเษกวิทยาลัย นครปฐม"];
const aboutProgram = ["English-Mathematics","อังกฤษ-คณิตศาสตร์"];
const aboutAge = ["17","สิบเจ็ด"];
const aboutHobby = ["Watching 9arm and listen clips about new technologies like podcasts.","ดู 9arm และฟังคลิปเกี่ยวกับเทคโนโลยีใหม่ๆ เช่น พอดแคสต์"];


 
 const LANGUAGE = {
    "EN":0,
    "TH":1
    
};
let myLanguage = LANGUAGE.EN;
console.log(aboutIntro[myLanguage]);
    
function changeMessage()
{ // Open
    // Variable declaration
    var messageElement = document.getElementById( 'about-intro-p' );

    //ตรวจสอบว่าเป็นภาษาไทยไหม ?
    if( myLanguage === LANGUAGE.TH)
        {
            //เปลี่ยนเป็นภาษาอังกฤษ
            myLanguage === LANGUAGE.EN;
        }else{
                //ถ้าไม่ใช่อังกฤษแน่อน 
            myLanguage = LANGUAGE.TH;
        }


} // Close
function changeColor() 
{
 //Getref to the id
 // Change color of the css
     

}
var messageElement = document.getElementById( 'message' );
     var currentColor = messageElement.style.color;

    messageElement.style.color = 'red';
    
    //messageElement.innerText = 'Realllllll';
    messageElement.innerHTML = '</b>Realllllll</b>';


    console.log ( messageElement );
    console.log ( currentColor );


messageElement.innerText = myMessage1
var myName; 
// Variable assignment
myName = "Korawit"
var myAge = 17; //Number
var yourAge = 50; //""=Text

var yourName = "Dawongsri";

console.log("Korawit is here");
console.log( myName );
console.log( yourName );
console.log(
    
    " My name is "  + myName 
    + " and your name is " + yourName
    + " My age is " + myAge
);
console.log(myAge+yourAge);