var options1 = {
    width: 400,
    zoomWidth: 500,
    offset: { vertical: 0, horizontal: 10 }
};
var options2 = {
    fillContainer: true,
    offset: { vertical: 0, horizontal: 10 }
};
new ImageZoom(document.getElementById("img-zoom"), options2);
var options5 = {
    width: 400,
    zoomWidth: 500,
    offset: { vertical: 0, horizontal: 10 }
};
var options6 = {
    fillContainer: true,
    offset: { vertical: 0, horizontal: 10 }
};
new ImageZoom(document.getElementById("img-zoommm"), options6);
// ////////////////////////////////////////////////////

// document.querySelectorAll('.zoomm').forEach(elem =>{
//     let x,y,width,height;
//     elem.onmouseenter= () => {
//         const size= elem.getBoundingClientRect();

//         x=size.x;
//         y=size.y;
//         width=size.width;
//         height=size.height;
//     };
//     elem.onmousemove= e => {
//         const horizontal= (e.clientX -x) / width*100;
//         const vertical= (e.clientY -y) / height*100;

//         elem.style.setProperty('--x', horizontal + '%');
//         elem.style.setProperty('--y', vertical + '%');
//     };
// });
