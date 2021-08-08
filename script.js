const frames = document.querySelectorAll('.panel'); 

frames.forEach(currFrame => {
    currFrame.addEventListener('mouseenter', () => {
        removeActive();
        currFrame.classList.add('active');
    });
});

frames.forEach(currFrame => {
    currFrame.addEventListener('mouseover', () => {
        currFrame.classList.remove('active'); 
    });
}); 

function removeActive() {
    frames.forEach(currFrame => {
        currFrame.classList.remove('active');
    });
}