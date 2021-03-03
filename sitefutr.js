// CONTENT

const modal = document.getElementById('contentone');
const modaltwo = document.getElementById('contenttwo');
const modalthree = document.getElementById('contentthree');
const modalfour = document.getElementById('contentfour');
const modalfive = document.getElementById('contentfive');
const modalsix = document.getElementById('contentsix');
const modalseven = document.getElementById('contentseven');
const modaleight = document.getElementById('contenteight');
const modalnine = document.getElementById('contentnine');
const modalten = document.getElementById('contentten');

// BUTTON

const modalBtn = document.getElementById('modalone');
const modalBtntwo = document.getElementById('modaltwo');
const modalBtnthree = document.getElementById('modalthree');
const modalBtnfour = document.getElementById('modalfour');
const modalBtnfive = document.getElementById('modalfive');
const modalBtnsix = document.getElementById('modalsix');
const modalBtnseven = document.getElementById('modalseven');
const modalBtneight = document.getElementById('modaleight');
const modalBtnnine = document.getElementById('modalnine');
const modalBtnten = document.getElementById('modalten');

const closeBtn = document.getElementsByClassName('closeBtn')[0];
const closeBtntwo = document.getElementsByClassName('closeBtntwo')[0];
const closeBtnthree = document.getElementsByClassName('closeBtnthree')[0];
const closeBtnfour = document.getElementsByClassName('closeBtnfour')[0];
const closeBtnfive = document.getElementsByClassName('closeBtnfive')[0];
const closeBtnsix = document.getElementsByClassName('closeBtnsix')[0];
const closeBtnseven = document.getElementsByClassName('closeBtnseven')[0];
const closeBtneight = document.getElementsByClassName('closeBtneight')[0];
const closeBtnnine = document.getElementsByClassName('closeBtnnine')[0];
const closeBtnten = document.getElementsByClassName('closeBtnten')[0];


// CLICK

modalBtn.addEventListener('click', openModal);
modalBtntwo.addEventListener('click', openModaltwo);
modalBtnthree.addEventListener('click', openModalthree);
modalBtnfour.addEventListener('click', openModalfour);
modalBtnfive.addEventListener('click', openModalfive);
modalBtnsix.addEventListener('click', openModalsix);
modalBtnseven.addEventListener('click', openModalseven);
modalBtneight.addEventListener('click', openModaleight);
modalBtnnine.addEventListener('click', openModalnine);
modalBtnten.addEventListener('click', openModalten);


// FUNCTION

function openModal(){
    modal.style.display = 'block';
}

function openModaltwo(){
    modaltwo.style.display = 'block';
}

function openModalthree(){
    modalthree.style.display = 'block';
}

function openModalfour(){
    modalfour.style.display = 'block';
}

function openModalfive(){
    modalfive.style.display = 'block';
}

function openModalsix(){
    modalsix.style.display = 'block';
}

function openModalseven(){
    modalseven.style.display = 'block';
}

function openModaleight(){
    modaleight.style.display = 'block';
}

function openModalnine(){
    modalnine.style.display = 'block';
}

function openModalten(){
    modalten.style.display = 'block';
}

//  CLOSE

closeBtn.addEventListener('click', closeModal);
closeBtntwo.addEventListener('click', closeModaltwo);
closeBtnthree.addEventListener('click', closeModalthree);
closeBtnfour.addEventListener('click', closeModalfour);
closeBtnfive.addEventListener('click', closeModalfive);
closeBtnsix.addEventListener('click', closeModalsix);
closeBtnseven.addEventListener('click', closeModalseven);
closeBtneight.addEventListener('click', closeModaleight);
closeBtnnine.addEventListener('click', closeModalnine);
closeBtnten.addEventListener('click', closeModalten);

function closeModal(){
    modal.style.display = 'none';
}

function closeModaltwo(){
    modaltwo.style.display = 'none';
}

function closeModalthree(){
    modalthree.style.display = 'none';
}

function closeModalfour(){
    modalfour.style.display = 'none'
}

function closeModalfive(){
    modalfive.style.display = 'none';
}

function closeModalsix(){
    modalsix.style.display = 'none';
}

function closeModalseven(){
    modalseven.style.display = 'none';
}

function closeModaleight(){
    modaleight.style.display = 'none'
}

function closeModalnine(){
    modalnine.style.display = 'none';
}

function closeModalten(){
    modalten.style.display = 'none'
}

function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}

/*

//elements

let modal = document.getElementById('simpleModal');
let modaltwo = document.getElementById('simpleModaltwo');
let modalthree = document.getElementById('simpleModalthree');
let modalfour = document.getElementById('simpleModalfour');
let modalfive = document.getElementById('simpleModalfive');
let modalsix = document.getElementById('simpleModalsix');
let modalseven = document.getElementById('simpleModalseven');
let modaleight = document.getElementById('simpleModaleight');
let modalnine = document.getElementById('simpleModalnine');
let modalten = document.getElementById('simpleModalten');

let modalBtn = document.getElementById('modalBtn');
let modalBtntwo = document.getElementById('modalBtntwo');
let modalBtnthree = document.getElementById('modalBtnthree');
let modalBtnfour = document.getElementById('modalBtnfour');
let modalBtnfive = document.getElementById('modalBtnfive');
let modalBtnsix = document.getElementById('modalBtnsix');
let modalBtnseven = document.getElementById('modalBtnseven');
let modalBtneight = document.getElementById('modalBtneight');
let modalBtnnine = document.getElementById('modalBtnnine');
let modalBtnten = document.getElementById('modalBtnten');

let closeBtn = document.getElementsByClassName('closeBtn')[0];
let closeBtntwo = document.getElementsByClassName('closeBtntwo')[0];
let closeBtnthree = document.getElementsByClassName('closeBtnthree')[0];
let closeBtnfour = document.getElementsByClassName('closeBtnfour')[0];
let closeBtnfive = document.getElementsByClassName('closeBtnfive')[0];
let closeBtnsix = document.getElementsByClassName('closeBtnsix')[0];
let closeBtnseven = document.getElementsByClassName('closeBtnseven')[0];
let closeBtneight = document.getElementsByClassName('closeBtneight')[0];
let closeBtnnine = document.getElementsByClassName('closeBtnnine')[0];
let closeBtnten = document.getElementsByClassName('closeBtnten')[0];


//click event

modalBtn.addEventListener('click', openModal);
modalBtntwo.addEventListener('click', openModaltwo);
modalBtnthree.addEventListener('click', openModalthree);
modalBtnfour.addEventListener('click', openModalfour);
modalBtnfive.addEventListener('click', openModalfive);
modalBtnsix.addEventListener('click', openModalsix);
modalBtnseven.addEventListener('click', openModalseven);
modalBtneight.addEventListener('click', openModaleight);
modalBtnnine.addEventListener('click', openModalnine);
modalBtnten.addEventListener('click', openModalten);

closeBtn.addEventListener('click', closeModal);
closeBtntwo.addEventListener('click', closeModaltwo);
closeBtnthree.addEventListener('click', closeModalthree);
closeBtnfour.addEventListener('click', closeModalfour);
closeBtnfive.addEventListener('click', closeModalfive);
closeBtnsix.addEventListener('click', closeModalsix);
closeBtnseven.addEventListener('click', closeModalseven);
closeBtneight.addEventListener('click', closeModaleight);
closeBtnnine.addEventListener('click', closeModalnine);
closeBtnten.addEventListener('click', closeModalten);

window.addEventListener('click', outsideClick);

//function

function openModal(){
    modal.style.display = 'block';
}
function openModaltwo(){
    modaltwo.style.display = 'block';
}
function openModalthree(){
    modalthree.style.display = 'block';
}
function openModalfour(){
    modalfour.style.display = 'block';
}
function openModalfive(){
    modalfive.style.display = 'block';
}
function openModalsix(){
    modalsix.style.display = 'block';
}
function openModalseven(){
    modalseven.style.display = 'block';
}
function openModaleight(){
    modaleight.style.display = 'block';
}
function openModalnine(){
    modalnine.style.display = 'block';
}
function openModalten(){
    modalten.style.display = 'block';
}


function closeModal(){
    modal.style.display = 'none';
}
function closeModaltwo(){
    modaltwo.style.display = 'none';
}
function closeModalthree(){
    modalthree.style.display = 'none';
}
function closeModalfour(){
    modalfour.style.display = 'none';
}
function closeModalfive(){
    modalfive.style.display = 'none';
}
function closeModalsix(){
    modalsix.style.display = 'none';
}
function closeModalseven(){
    modalseven.style.display = 'none';
}
function closeModaleight(){
    modaleight.style.display = 'none';
}
function closeModalnine(){
    modalnine.style.display = 'none';
}
function closeModalten(){
    modalten.style.display = 'none';
}


function outsideClick(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}

*/