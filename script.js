var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1; 
var day = date.getDate();
var fecha1 = `${year}-${month}-${day}`;
if (!localStorage.getItem('fecha')) {
 localStorage.setItem('fecha', fecha1);
}
var fechaGuardada = localStorage.getItem('fecha');
if (fecha1 !== fechaGuardada) {
 localStorage.setItem('number', '1');
 localStorage.setItem('fecha', fecha1);
} else {
 var num = parseInt(localStorage.getItem('number')) || 0;
 num++;
 localStorage.setItem('number', num);
}

var intentos = parseInt(localStorage.getItem('number')) || 0;
if (intentos >= 6) {
location.href = 'https://access0denied.vercel.app/';
} 

function error1(){
const rst = document.querySelector("#results");
const divx = document.querySelector("#container");
const sup = document.querySelector("#support");
const btn = document.querySelector("#btn");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");

rst.style.background = "rgba(204, 0, 0, 0.82)";
divx.style.border = "1px dashed rgba(204, 0, 0, 0.82)";
email.style.border = "1px dashed rgba(204, 0, 0, 0.82)";
msg.style.border = "1px dashed rgba(204, 0, 0, 0.82)";
sup.style.color = "rgba(204, 0, 0, 0.82)";
btn.style.background = "rgba(204, 0, 0, 0.82)";
btn.style.border = "1px solid #fff";

setTimeout(() => {
 rst.style.background = ""; 
 divx.style.border = ""; 
 sup.style.color = ""; 
 btn.style.background = ""; 
 btn.style.border = ""; 
 email.style.border = ""; 
 msg.style.border = ""; 
}, 5000); 
document.getElementById('results').innerHTML = 'CAMPOS INVALIDOS';
setTimeout(() => {
document.getElementById('results').innerHTML = '';
}, 3000); 
};
function send(){
const emailx = document.getElementById('email').value;
const msgx = document.getElementById('msg').value;

 if (!(emailx.includes('@gmail.com') || emailx.includes('@hotmail.com')) || 
 msgx.length <= 15 || 
 emailx.split('@')[0].length < 5) {
	error1();
	return
} else {
const data = {
email: emailx,
msg: msgx
};

fetch('http://localhost:9011/msg', {
method: 'POST', 
headers: {
'Content-Type': 'application/json' 
},
body: JSON.stringify(data) 
})
.then(response => {
if (!response.ok) {
throw new Error('ERROR');
}
return response.json(); 
})
.then(data => {
document.getElementById('results').innerHTML = 'CORREO ENVIADO';
setTimeout(() => {
document.getElementById('results').innerHTML = '';
}, 3000); 
})
.catch((error) => {
error1();
});
}
}