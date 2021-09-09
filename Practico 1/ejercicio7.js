"use strict";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width=500;
let height=500;

let image = new Image();
image.src="img/icono_instagram.png";

image.onload = function (){
    myDrawImageMethod(this);
}

function myDrawImageMethod(image){
    ctx.drawImage(image,width,height);
}