
let banner_active = 1 
const container_banner = document.getElementById('banners_container')
let banners_length = document.querySelectorAll('#container_img_banner').length
let timeTransition = 6000 // Cada 6 segundos
let timeOut

const change_banner_active = (id=1) => 
{
    if(id !== banner_active){
        clearTimeout(timeOut)

        const current_mineature_active= document.querySelector('#mineature[data-active="true"]')
        const current_img_active = document.querySelector('#container_img_banner[data-active="true"]')
    
        const mineature_to_active= document.querySelector(`#mineature[data-id="${id}"]`)
        const img_to_active = document.querySelector(`#container_img_banner[data-id="${id}"]`)
    
        current_img_active.dataset.active = false
        img_to_active.dataset.active = true
        current_mineature_active.dataset.active = false
        mineature_to_active.dataset.active = true  

        banner_active = id

        scroll_to_mineature()
        start_timeOut()
    }
 
}

const next_banner = () => 
{
    if(banner_active === banners_length){
        change_banner_active(1)
    }else{
        change_banner_active(banner_active + 1)
    }
}

const previous_banner = () => 
{
    if(banner_active === 1){
        change_banner_active(banners_length)
    }else{
        change_banner_active(banner_active - 1)
    }
}

const start_timeOut = () => 
{
    timeOut = setTimeout(() => {
        next_banner()
    }, timeTransition);
}
start_timeOut()

/* MINEATURA FUNCTIONS */

const scroll_to_mineature = () => 
{
    const container = document.getElementById('mineatures_container')
    const target = document.querySelector('#mineature[data-active="true"]')

    const containerRect = container.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const scrollLeft = targetRect.left - containerRect.left + container.scrollLeft - (container.clientWidth / 2) + (targetRect.width / 2);

    container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
    });
}


const scroll_container_mineatures = (action="+") =>
{
    const container = document.getElementById('mineatures_container')   
    const scroll_value = 250 
    if(action === '+'){
        container.scrollLeft += scroll_value
        return
    }
    container.scrollLeft -= scroll_value
}


// Mobile functions
let startX = 0;
let endX = 0;

container_banner.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

container_banner.addEventListener('touchmove', (event) => {
    endX = event.touches[0].clientX;
});

container_banner.addEventListener('touchend', (event) => {
    if(endX > 0){
        if(startX > endX){
            next_banner()
        }else{
            previous_banner()
        }
    }
    startX = 0;
    endX = 0;
});