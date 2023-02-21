const Xvar = Math.random() * (-100 - (-200)) + (-200) ;

console.log(Xvar);

const X = document.querySelector('#circles');
X.style.setProperty('--animation-X', Xvar +'px');


const Yvar = Math.random() * (-100 - (-200)) + (-200) ;

console.log(Yvar);

const Y = document.querySelector('#circles');
Y.style.setProperty('--animation-Y', Yvar +'px');
