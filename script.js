// For background animations
// const Xvar = Math.random() * (-100 - (-200)) + (-200) ;
// // console.log(Xvar);
// const X = document.querySelector('#circles');
// X.style.setProperty('--animation-X', Xvar +'px');


// const Yvar = Math.random() * (-100 - (-200)) + (-200) ;
// // console.log(Yvar);
// const Y = document.querySelector('#circles');
// Y.style.setProperty('--animation-Y', Yvar +'px');


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
        // sendMail();
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


//  Wysyłanie maili za pomocą smptjs.com (100 na dzień)
// function sendMail(){
//     let ebody = `
//     <b>Name: </b>${Name.value}
//     <br>
//     <b>Email: </b>${email.value}
//     <br>
//     <b>Phone: </b>${phone.value}
//     <br>
//     <br>
//     <b>Message:</b>${message.value}
//     `
//     const sub = "smtp.js webDeveloper - "

//     Email.send({
//         SecureToken : "602e71cf-de3c-4a73-a18a-21bf392e8bf8",
//         To : 'wladekskaj17@gmail.com',
//         From : "wladekskaj17@gmail.com",
//         Subject : sub + email.value,
//         Body : ebody
//     }).then(
//       message => console.log(message)
//     );

// }

let box0 = document.querySelector("#InstartTitle");
let box1 = document.querySelector("#LeftInstartdown");
let box2 = document.querySelector("#SibUnderH3");
let box3 = document.querySelector("#ContactH3");
let box4 = document.querySelector(".contactPics")
let box5 = document.querySelector(".formula")



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
