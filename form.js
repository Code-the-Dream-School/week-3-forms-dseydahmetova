let options="";
let option;
const string = `something ${1 + 2 + 3}`;

let myOption=document.querySelector('#person');
for(let i=1; i<=20; i++) {
    if(i===1) {
option=`<option value="${i}">${i} person</option>`;
    }
    else {
        option= `<option value="${i}">${i} people</option>`;
    }
    options += option;
}
myOption.innerHTML=options;