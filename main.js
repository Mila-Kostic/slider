//alert("Happy codinig!");
//var x = document.querySelectorAll("src");
// console.log("X" + x);

let img = document.querySelector('.img');
        let counter = 0;
        let loop = setInterval(function () {
            counter++
            if (counter === 4) {
                counter = 1;
            }
            img.setAttribute('src','img/slika'+counter+'.jpg');
        },2000)