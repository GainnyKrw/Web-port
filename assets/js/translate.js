const aboutIntro = ["Hello, my name is Gain, and I am a student at KPN. I am currently studying in Mathayom 6 in the Arts-Mathematics program. I enjoy spending most of my free time playing computer games and watching new technology clips. My dream is to become wealthy. Thank you.","สวัสดีครับ ผมชื่อเกน เป็นนักเรียนจาก KPN ตอนนี้ผมศึกษาอยู่ชั้นมัธยมศึกษาปีที่ 6 แผนการศึกษา ศิลป์-คณิตศาสตร์ ผมชอบใช้เวลาว่างส่วนใหญ่ไปกับการเล่นคอมพิวเตอร์ เช่น เล่นเกม ดูคลิปเทคโนโลยีใหม่ๆ ความฝันที่อยากให้เป็นจริงคืออยากรวย ขอบคุณครับ"];
const aboutName = ["Gainny","เกนนี่"];
const aboutSchool = ["Kanchanapisek Wittayalai Nakhonpathom School","โรงเรียนกาญจนาภิเษกวิทยาลัย นครปฐม"];
const aboutProgram = ["English-Mathematics","อังกฤษ-คณิตศาสตร์"];
const aboutAge = ["17 years","สิบเจ็ด ปี"];
const aboutHobby = ["I like to watch 9arm's videos and listen to videos about new technologies, but sometimes I also want to play sports, and I can play many types of sports.","ผมชอบนั่งดูคลิปของ 9arm และฟังคลิปเกี่ยวกับเทคโนโลยีใหม่ๆ แต่ในบางเวลาผมก็ชอบเล่นกีฬา และผมสามารถเล่นกีฬาได้หลายประเภท"];


 
 const LANGUAGE = {
    "EN":0,
    "TH":1
    
};
let myLanguage = LANGUAGE.EN;
    
function changeMessage()
{ // Open
    // Variable declaration
    var aboutIntroElement = document.getElementById('about-intro-p');
    var aboutNameElement = document.getElementById('about-intro-name');
    var aboutSchoolElement = document.getElementById('about-intro-school');
    var aboutProgramElement = document.getElementById('about-intro-program');
    var aboutAgeElement = document.getElementById('about-intro-age');
    var aboutHobbyElement = document.getElementById('about-intro-hobby');
    //ตรวจสอบว่าเป็นภาษาไทยไหม ?
    if( myLanguage === LANGUAGE.EN)
        {
            //เปลี่ยนเป็นภาษาeng
            myLanguage = LANGUAGE.TH;
        }else{
               
            myLanguage = LANGUAGE.EN;
        }
        aboutIntroElement.innerText = aboutIntro[myLanguage];
        aboutNameElement.innerText = aboutName[myLanguage];
        aboutSchoolElement.innerText = aboutSchool[myLanguage];
        aboutProgramElement.innerText = aboutProgram[myLanguage];
        aboutAgeElement.innerText = aboutAge[myLanguage];
        aboutHobbyElement.innerText = aboutHobby[myLanguage];

}