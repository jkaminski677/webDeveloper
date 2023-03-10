// For background animations
// const Xvar = Math.random() * (-100 - (-200)) + (-200) ;
// // console.log(Xvar);
// const X = document.querySelector('#circles');
// X.style.setProperty('--animation-X', Xvar +'px');


// const Yvar = Math.random() * (-100 - (-200)) + (-200) ;
// // console.log(Yvar);
// const Y = document.querySelector('#circles');
// Y.style.setProperty('--animation-Y', Yvar +'px');


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


function containsSpecialChars(str) {
    const specialChars =
          /[`¡¢£¤¥¦§¨©ª«¬®¯±µ¼À×÷Λ′″‾⁄∼≤≥⌈&<>€%^*()_+\-=\[\]{};:\\|,\/?]/;
    return specialChars.test(str);
  }


function checkForm() {
    nam = document.getElementById("Name").value;
    tel = document.getElementById("phone").value;
    mail = document.getElementById("email").value;
    mes = document.getElementById("message").value;
    let myForm = document.getElementById("my_form");
    monkey = "@";
    let numerator = 0

    if (nam.length == 0 && mail.length == 0 && mes.length == 0) {
        document.getElementById("validMail").style.display = "block";
        document.getElementById("validMessage").style.display = "block";
        document.getElementById("validName").style.display = "block";
    } else {
        document.getElementById("validMail").style.display = "none";
        document.getElementById("validMessage").style.display = "none";
        document.getElementById("validName").style.display = "none";
        numerator = numerator + 1;
    }
    
    if(nam.length < 2){
        document.getElementById("validName").style.display = "block";
    } else {
        document.getElementById("validName").style.display = "none";
        numerator = numerator + 1;
    }
    
    if (mail.length == 0 || containsSpecialChars(mail) || !mail.includes(monkey)) {
        document.getElementById("validMail").style.display = "block";
    } else {
        document.getElementById("validMail").style.display = "none";
        numerator = numerator + 1;
    }
    
    if (mes.length == 0) {
        document.getElementById("validMessage").style.display = "block";
    } else {
        document.getElementById("validMessage").style.display = "none";
        numerator = numerator + 1;
    } 

    
    if(tel.length > 0 && tel.length < 9 || isNaN(tel)){
        document.getElementById("validPhone").style.display = "block";
    } else {
        document.getElementById("validPhone").style.display = "none";
        numerator = numerator + 1;
    }

    if (numerator == 5) {
        sendMail();
        myForm.reset();
        document.getElementById("messageSend").style.display = "block"
        console.log("Wysłano!")
    }
    else{
        document.getElementById("messageSend").style.display = "none"
    }
    
}


// Wysyłanie maili za pomocą https://www.emailjs.com/ (200 na miesiąc)
// function sendMail() {
//     var params = {
//         name: document.getElementById("Name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         message: document.getElementById("message").value
//     };
//     const serviceID = "service_mtln5ab";
//     const templateID = "template_0836kc3";

//     emailjs.send(serviceID, templateID, params)
//     .then(
//         res=>{
//             document.getElementById("Name").value = '';
//             document.getElementById("email").value = '';
//             document.getElementById("phone").value = '';
//             document.getElementById("message").value = '';
//             console.log(res);
//             document.getElementById("messageSend").style.display = "block"
//             // alert("Wiadomość została wysłana!");
//         })
//         .catch(err=>console.log(err));
// }


//  Wysyłanie maili za pomocą smtpjs.com (100 na dzień) (app.elasticemail.com)
function sendMail(){
    let ebody = `
    <b>Name: </b>${Name.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>Phone: </b>${phone.value}
    <br>
    <br>
    <b>Message:</b>${message.value}
    `
    const sub = " - smtp.js webDeveloper "

    Email.send({
        SecureToken : "602e71cf-de3c-4a73-a18a-21bf392e8bf8",
        To : 'wladekskaj17@gmail.com',
        From : "wladekskaj17@gmail.com",
        Subject : email.value + sub,
        Body : ebody
    }).then(
      message => console.log(message)
    );

}

let box0 = document.querySelector("#InstartTitle");
let box1 = document.querySelector("#LeftInstartdown");
let box2 = document.querySelector("#SibUnderH3");
let box3 = document.querySelector("#ContactH3");
let box4 = document.querySelector(".contactPics")
let box5 = document.querySelector(".formula")

window.onscroll = function() {scrollFunction()};

if (window.screen.width > 1000) {
    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".nav-link").style.width = "100px";
        document.querySelector(".header").style.padding = "15px 2px";
        document.querySelector(".header").style.height = "30px";
        

    } else {
        document.querySelector(".header").style.padding = "20px 10px";
        document.querySelector(".header").style.height = "30px";
        document.querySelector(".nav-link").style.width = "130px";
    }
    }
}


if (window.screen.width < 1000) {
    let interval11 = setInterval(() => {
        box0.getBoundingClientRect().bottom <= 600 ? changeClass11() : null;
    }, 400);
    
    function changeClass11() {
        WebDevView();
        clearInterval(interval11);
        ViewQuestBox();
    }

    let interval12 = setInterval(() => {
        box2.getBoundingClientRect().bottom <= 800 ? changeClass12() : null;
    }, 400);
    
    function changeClass12() {
        clearInterval(interval12);
        box2.style.animation = "animateleft 1.0s ease-out";
        box2.style.left = "0"; 
    }

    let interval13 = setInterval(() => {
        box1.getBoundingClientRect().bottom <= 950 ? changeClass13() : null;
        // console.log(box1.getBoundingClientRect().bottom);
    }, 400);
    
    function changeClass13() {
        clearInterval(interval13);
        box1.style.animation = "animateright 1.0s ease-out";
        box1.style.right = "0"; 
    }

 }
 else {
    ViewQuestBox();
    WebDevView();
    LeftInstartDownView();
    SieUnH3View();    
    
 }



 
// ///  Contact slider

let interval = setInterval(() => {box3.getBoundingClientRect().bottom <= 900 ? changeClass() : null;}, 400);

function changeClass() {
    box3.style.animation = "animateleft .8s ease-out";
    box3.style.left = "0"; 
    clearInterval(interval);
}

let interval1 = setInterval(() => {box4.getBoundingClientRect().bottom <= 900 ? changeClass1() : null;}, 400);

function changeClass1() {
    box4.style.animation = "animateleft .8s ease-out";
    box4.style.left = "0"; 
    clearInterval(interval1);
}

let interval2 = setInterval(() => {box5.getBoundingClientRect().bottom <= 1200 ? changeClass2() : null;}, 400);

function changeClass2() {
    box5.style.animation = "animateright .8s ease-out";
    box5.style.right = "0"; 
    clearInterval(interval2);
}


// /// END Contact slider

function ViewQuestBox() {
    let scrollElements = document.querySelectorAll(".LeftIcons");
    setTimeout(() => { 
        scrollElements.forEach((el, i) => {
            setTimeout(() => {
                el.style.animation = "animateleft .7s ease-out"; 
                el.style.left = "0";
            }, i* 700)
        })
    }, 900)
}

function WebDevView() {
    setTimeout(function() {
        box0.style.animation = "animateleft 1.0s ease-out";
        box0.style.left = "0"; 
    }, 350);
}
function SieUnH3View() {
    setTimeout(function() {
        box2.style.animation = "animateleft 1.0s ease-out";
        box2.style.left = "0"; 
    }, 2850);
}
function LeftInstartDownView() {
    setTimeout(function() {
        box1.style.animation = "animateright 1.0s ease-out";
        box1.style.right = "0"; 
    }, 3450);
}











// @media screen and (min-width: 1401px) {
//     label {
//         /* border: 2px solid peru; */
//         width: 100%;
//         height: 70px;
//         display: flex;
//         flex-direction: row;
//         justify-content:space-between;
//         align-items: center;
//         position: fixed;
//         top: 0;
//         overflow: hidden;
//         z-index: 999;
//     }

//     label ul {
//         display: inline;
//         margin-right: 40px;
//         display: flex;
//         flex-direction: row;
//         justify-content:center;
//         align-items: center;
//         width: auto;
//         padding-left: 30px;
//         width: auto;
//         /* border: 2px solid peru; */
//         list-style-type: none;
//         height: 100%;
//     }
//     label ul li {
//         margin-right: 40px;
//         /* border: 2px solid peru; */
//         height: 100%;
//         display: flex;
//         justify-content:center;
//         align-items: center;
//     }

//     label a {
//         text-decoration: none;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         color: black;
        // background-image: url("img/blob-haikei.png");
        // background-repeat: no-repeat;
        // background-position: center;
        // background-size: 100% 100%;
//         width: 120px;
//         height: 80%;
//         letter-spacing: 4px;
//         /* border: 2px solid peru; */

//     }

//     label a:hover{
//         transform: scale(1.1);
//         animation-name: ani-float;
//         animation-duration: 1.2s;
//         animation-iteration-count: infinite;
//         animation-timing-function: ease-in-out; 
//     }
    // @keyframes ani-float {
    //     0% { transform: translate(0,  0px); scale: 1; }
    //     50% { transform: translate(0, 6px); scale: 0.98;}
    //     100% { transform: translate(0, 0px); scale: 1;}    
    // }
    
//     label input { display: none; }

// }


// @media screen and (max-width: 1400px) {
//     label .menu {
//     position: fixed;
//     right: -100px;
//     top: -100px;
//     z-index: 100;
//     width: 200px;
//     height: 200px;
//     background: #FFF;
//     border-radius: 50% 50% 50% 50%;
//     -webkit-transition: .5s ease-in-out;
//     transition: .5s ease-in-out;
//     box-shadow: 0 0 0 0 #FFF, 0 0 0 0 #FFF;
//     cursor: pointer;
//     }

//     label .hamburger {
//     position: absolute;
//     top: 135px;
//     left: 50px;
//     width: 30px;
//     height: 2px;
//     /* background: #69D2e7; */
//     background: #c0c0c0;
//     display: block;
//     -webkit-transform-origin: center;
//     transform-origin: center;
//     -webkit-transition: .5s ease-in-out;
//     transition: .5s ease-in-out;
//     }

//     label .hamburger:after, label .hamburger:before {
//         -webkit-transition: .5s ease-in-out;
//         transition: .5s ease-in-out;
//         content: "";
//         position: absolute;
//         display: block;
//         width: 100%;
//         height: 100%;
//         background: #c0c0c0;
//     }

//     label .hamburger:before { top: -10px; }

//     label .hamburger:after { bottom: -10px; }

//     label input { display: none;}

//     label input:checked + .menu {
//     box-shadow: 0 0 0 100vw #FFF, 0 0 0 100vh #FFF;
//     border-radius: 50%;
//     }

//     label input:checked + .menu .hamburger {
//         -webkit-transform: rotate(45deg);
//         transform: rotate(45deg);
    
//     }

//     label input:checked + .menu .hamburger:after {
//     -webkit-transform: rotate(0deg);
//     transform: rotate(90deg);
//     bottom: 0;
//     }

//     label input:checked + .menu .hamburger:before {
//     -webkit-transform: rotate(90deg);
//     transform: rotate(90deg);
//     top: 0;
//     }

        

//     label input:checked + .menu + ul { 
//         /* display: block;  */
//         opacity: 1; 
//         top: 40%;  
//         left: 50%;  
//     }


//     label ul {
//     z-index: 200;
//     position: fixed;
//     top: -50%;
//     left: 150%;
//     -webkit-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//     /* -webkit-transition: .25s 0s ease-in-out; */
//     transition: .45s 0s ease-in-out;
//     font-size: 1.6em;
//     line-height: 1.26;
//     /* display: none; */
//     opacity: 0;
//     }

//     label a {
//     margin-bottom: 1em;
//     display: block;
//     color: #f38630;
//     text-decoration: none;
//     }


// }