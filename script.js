const btn = document.querySelector('#mybutton');
btn.addEventListener('click', function (e) {
    alert("button clicked");
    console.log(e);
})


const backg = document.querySelector('#changebg');
const blue = document.querySelector('.blue-background');

backg.addEventListener('click', function (j) {
    blue.classList.toggle('red-background');
    console.log(j);
})
