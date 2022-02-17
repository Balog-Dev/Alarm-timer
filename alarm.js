let sound = document.getElementById('music');
let veiw1 = document.getElementById('show1');
let veiw2 = document.getElementById('show2');
let veiw3 = document.getElementById('show3');
let view4 = document.getElementById('few1');
let view5 = document.getElementById('few2');
let view6 = document.getElementById('rem1');
let view7 = document.getElementById('rem2');
let view8 = document.getElementById('watch');
let view9 = document.getElementById('end');







function my1() {
    let  hourt = new Date()
    veiw1.innerHTML= hourt.getHours()

    let minutet = new Date()
    veiw2.innerHTML=minutet.getMinutes()

    let secondst = new Date()
    veiw3.innerHTML= secondst.getSeconds()

    if (view6.value == veiw1.innerHTML && view7.value == veiw2.innerHTML) {
        sound.play()
        console.log(33);
        view8.innerHTML=view9.value
    }
    if (view7.value < veiw2.innerHTML){
        sound.pause()
    }
    // if (view7.value == veiw2.innerHTML ) {
    //     console.log(33);
    // }
};

my1()
setInterval(my1, 1000)

function click1(params) {
    view6.disabled=true;
    view7.disabled=true;
    view4.disabled=true;
    view9.disabled=true;


    console.log(33);
}

function click2(params) {
    view6.disabled=false;
    view7.disabled=false;
    view4.disabled=false;
    view9.disabled=false;


    console.log(33);
}


function name(params) {
    
}
// function my2( ) {
//     let minutet = new Date()
//     veiw2.innerHTML=minutet.getMinutes()
//     if (view7.value == veiw2.innerHTML) {
//         sound.play()
//     }
// }
// my2()
// setInterval=(my2, 1000);



// function my3( ) {
//     let secondst = new Date()
//     veiw3.innerHTML= secondst.getSeconds()
// }
// my3()
// setInterval(my3, 1000)

// function click1(veiw1=10) {
//     setInterval(time)
// }

