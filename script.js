const Xvar = Math.random() * (-100 - (-200)) + (-200) ;
// console.log(Xvar);
const X = document.querySelector('#circles');
X.style.setProperty('--animation-X', Xvar +'px');


const Yvar = Math.random() * (-100 - (-200)) + (-200) ;
// console.log(Yvar);
const Y = document.querySelector('#circles');
Y.style.setProperty('--animation-Y', Yvar +'px');


function containsSpecialChars(str) {
    const specialChars =
          /[`¡¢£¤¥¦§¨©ª«¬®¯±µ¼À×÷Λ′″‾⁄∼≤≥⌈&<>€%^*()_+\-=\[\]{};:\\|,\/?]/;
    return specialChars.test(str);
  }


function checkForm() {
    nam = document.getElementById("name").value;
    tel = document.getElementById("phone").value;
    mail = document.getElementById("email").value;
    mes = document.getElementById("message").value;
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
        document.getElementById("messageSend").style.display = "block"
        console.log("Wysłano!")
        console.log(numerator)

    }
    
}


function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };
    const serviceID = "service_mtln5ab";
    const templateID = "template_0836kc3";

    emailjs.send(serviceID, templateID, params)
    .then(
        res=>{
            document.getElementById("name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("phone").value = '';
            document.getElementById("message").value = '';
            console.log(res);
            document.getElementById("messageSend").style.display = "block"
            // alert("Wiadomość została wysłana!");
        })
        .catch(err=>console.log(err));
}