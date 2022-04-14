document.addEventListener('click', e => {
    let handler;
    if(e.target.matches('.handler')){
        handler = e.target
    }else{
        handler = e.target.closest('.handler')
    }

    if(handler){
        slideHandler(handler);
    }
})

function slideHandler(handler){
    const slider = document.querySelector('.slider');
    const images = document.querySelectorAll('img');
    const section = parseInt(images.length / 4);
    console.log(section) 
    const index = parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));

    if(handler.classList.contains('left-handler')){
        if(index === 0){
            slider.style.setProperty("--slider-index", section)
        }else{
            slider.style.setProperty("--slider-index", index - 1)
        }
    }
    if(handler.classList.contains("right-handler")){
        if(section <= index){
            slider.style.setProperty("--slider-index", 0)    
        }else{
            slider.style.setProperty("--slider-index", index + 1)
        }
    }

}
