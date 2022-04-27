    function xxx(black,c){
    const abccc = document.createElement("button");
    document.body.appendChild(abccc)
    abccc.style.position="absolute";
    abccc.style.top=`${c}px`;
    abccc.style.backgroundColor=`${black}`;
    abccc.style.borderRadius="50%"
    abccc.style.width="30px";
    abccc.style.height="30px";
    abccc.onclick = function() {
        ctx.fillStyle = `${black}`;
        ctx.strokeStyle = `${black}`;
        ctx.lineWidth = 8;

        }
    }
    xxx("red",100)
    xxx("yellow",150)

// const h = document.createElement("button");
// document.body.appendChild(h)
// h.style.position="absolute";
// h.style.top="50px";
// h.style.backgroundColor="black";
// h.style.borderRadius="50%"
// h.style.width="30px";
// h.style.height="30px";
// h.onclick = function() {
//     ctx.fillStyle = "black";
//     ctx.strokeStyle = "black";
// ctx.lineWidth = 8;

// }
// const b = document.createElement("button");
// document.body.appendChild(b)
// b.style.position="absolute";
// b.style.top="100px";
// b.style.backgroundColor="lightblue";
// b.style.borderRadius="50%"
// b.style.width="30px";
// b.style.height="30px";
// b.onclick = function() {
//     ctx.fillStyle = "lightblue";
//     ctx.strokeStyle = "lightblue";
// ctx.lineWidth = 8;

// }
// const p = document.createElement("button");
// document.body.appendChild(p)
// p.style.position="absolute";
// p.style.top="150px";
// p.style.backgroundColor="pink";
// p.style.borderRadius="50%"
// p.style.width="30px";
// p.style.height="30px";
// p.onclick = function() {
//     ctx.fillStyle = "pink";
//     ctx.strokeStyle = "pink";
// ctx.lineWidth = 8;

// }
// const x = document.createElement("button");
// document.body.appendChild(x)
// x.style.position="absolute";
// x.style.top="200px";
// x.style.backgroundColor="lightyellow";
// x.style.borderRadius="50%"
// x.style.width="30px";
// x.style.height="30px";
// x.onclick = function() {
//     ctx.fillStyle = "lightyellow";
//     ctx.strokeStyle = "lightyellow";
// ctx.lineWidth = 8;

// }
// const c = document.createElement("button");
// document.body.appendChild(c)
// c.innerHTML="clear";
// c.style.position="absolute";
// c.style.top="500px";
// c.style.backgroundColor="white";
// c.style.borderRadius="50%"
// c.style.width="50px";
// c.style.height="50px";
// c.onclick = function() {
//     ctx.fillStyle = "grey";
// ctx.lineWidth = 8;

//     ctx.strokeStyle = "white";
//     ctx.lineWidth=30
// }