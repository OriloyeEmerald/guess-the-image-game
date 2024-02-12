
alert('CLICK ON AN IMAGE \uD83D\uDC47 TO MAKE A GUESS')
let imgs = document.getElementsByClassName('image');
let inputs = document.getElementsByTagName('input');
let p = document.getElementsByTagName('p');

function imgFunc(event) {
    let tag = event.target;
    let overlay = tag.nextElementSibling;
    let input = overlay.nextElementSibling;
    let p = input.nextElementSibling

    if (overlay.style.display === 'block' &&input.style.display === 'block' &&  p.style.display === 'block') {
        overlay.style.display = 'none'
        input.style.display = 'none';
        p.style.display = 'none';
    } else {
        overlay.style.display = 'block'
        input.style.display = 'block';
        p.style.display = 'block';
    }
     

}

for(let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', imgFunc)
    
}


// Function to handle input change event
function handleChange(event) {
    let tag = event.target;
    let overlay = tag.previousElementSibling;
    let img = overlay.previousElementSibling;
    let name = img.id + '.jpg';
    let p = tag.nextElementSibling;

    function handleCorrectGuess() {
        img.src = `/images/${name}`;
        tag.value = '';
        tag.style.display = 'none';
        p.style.display = 'none';
        overlay.style.display = 'none';

        img.classList.add('image-unblurred');
        
        img.removeEventListener('click', imgFunc);
        alert('HURRAY\uD83C\uDF89 YOU GUESSED RIGHT!')

       
    }

    switch (tag.value.toLowerCase()) {
        case 'monalisa':
        case 'saturn':
        case 'pangolin':
        case 'r9':
        case 'nazario':
        case 'vector':
        case 'mauritania':
            handleCorrectGuess();
            break;
        default:
            alert('WRONG GUESS\uD83D\uDE41, TRY AGAIN..');
            tag.value = '';
    }
}


// Function to handle keydown event
function handleKeydown(event) {
    if (event.key === 'Enter') {
        handleChange(event); // Call handleChange for Enter key only
    }
}

// Add event listeners for input change event
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', handleChange);
}

// Add event listeners for input keydown event
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keydown', handleKeydown);
}
