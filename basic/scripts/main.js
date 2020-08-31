const myHeading = document.querySelector('H1');
const myButton = document.querySelector('button');
myHeading.textContent = "hello JS World";

myHeading.onclick = function() {
    alert('onClick() Event raised');
}

myImg = document.querySelector('IMG');
myImg.onclick = function() {

    if (myImg.getAttribute('src') == '/Users/bmsbharathi/Pictures/Photos Library.photoslibrary/originals/0/017FB250-3D6E-4D7A-AA60-D2D8F092090C.jpeg') {
        myImg.setAttribute('src', '/Users/bmsbharathi/Pictures/Photos Library.photoslibrary/originals/3/3FD4F1DE-F8AB-4FB0-9002-D1A45AE0F70F.jpeg');
    } else {
        myImg.setAttribute('src', '/Users/bmsbharathi/Pictures/Photos Library.photoslibrary/originals/0/017FB250-3D6E-4D7A-AA60-D2D8F092090C.jpeg');
    }

}

function setName() {

    let name = prompt('Enter your Name: ');
    if (!name) {
        setName();
    } else {
        localStorage.setItem('name', name);
        myHeading.textContent = "hello JS World from:  " + name;
    }

}

if (!localStorage.getItem('name')) {
    setName();
} else {

    let name = localStorage.getItem('name');
    myHeading.textContent = "hello JS World from:  " + name;
}


myButton.onclick = function() {
    setName();
}