bubble.onclick = function(){
 floatBot.style.display =
  floatBot.style.display=="none"?"block":"none";
}

// kéo bong bóng
let isDrag=false,dx,dy;

bubble.onmousedown = e=>{
 isDrag=true;
 dx=e.clientX-bubble.offsetLeft;
 dy=e.clientY-bubble.offsetTop;
};

document.onmousemove = e=>{
 if(!isDrag) return;
 bubble.style.left=e.clientX-dx+"px";
 bubble.style.top =e.clientY-dy+"px";
};

document.onmouseup = ()=>isDrag=false;
