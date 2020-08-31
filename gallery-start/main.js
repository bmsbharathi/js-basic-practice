const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i <= 5; i++) {

    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/pic${i}.jpg`);
    thumbBar.appendChild(newImage);
    // newImage.addEventListener('click', function(evt) {

    //     displayedImage.setAttribute('src', newImage.getAttribute('src'));
    // });
}

thumbBar.addEventListener('click', function(evt) {

    displayedImage.src = evt.target.getAttribute('src');
});

btn.onclick = function() {

    let btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.textContent = 'Lighten';
        btn.setAttribute('class', 'light');
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.textContent = 'Darken';
        btn.setAttribute('class', 'dark');
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

/* Wiring up the Darken/Lighten button */