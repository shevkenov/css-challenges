const images = document.querySelectorAll('img');
const bar = document.querySelector('.bar');
const slider = document.querySelector('.slider');

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
});

function getIndex(){
    return parseInt(getComputedStyle(slider).getPropertyValue('--slider-index'));
}

function getItemsCount(){
    return getComputedStyle(slider).getPropertyValue('--items-per-screen')
}

function calculateProgressBar(){
    
    const barsCount = (images.length / getItemsCount())
    bar.innerHTML = ""
    
    for (let i = 0; i < barsCount; i++) {
        const dash = document.createElement('div');
        dash.classList.add('dash');
        bar.append(dash);

        if(getIndex() === i){
            dash.classList.add('active')
        }
    }
}

calculateProgressBar()


function slideHandler(handler){
    const index = getIndex();
    const itemsPerScreen = getItemsCount();
    const section = parseInt(images.length / itemsPerScreen);
    console.log(section)
    
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
    calculateProgressBar()

}
