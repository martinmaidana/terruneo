/* const DATA_BANNERS = [
    {
        id:1,
        title: 'Ámbito urbano',
        description: 'Detección de construcciones no declaradas.<br/> Actualización del parcelario catastral. <br/> Clasificación de coberturas y usos del suelo.',
        img_main: './assets/carousel/ambito-urbano.webp',
        img_mineature: './assets/carousel/ambito-urbano-mineatura.webp'
    },
    {
        id:2,
        title: 'Campo',
        description: 'Cultivos: identificación, análisis y predicción. <br/> Identificación de plagas. <br/> Seguimiento de daños climáticos.',
        img_main: './assets/carousel/campo-b.webp',
        img_mineature: './assets/carousel/campo-b.webp'
    },
    {
        id:3,
        title: 'Medio ambiente',
        description: 'Gestión de Cuencos y Humedales. <br/> Erosión del suelo. <br/>Mapeo de hábitats.',
        img_main: './assets/carousel/medio-ambiente.webp',
        img_mineature: './assets/carousel/medio-ambiente.webp'
    },
    {
        id:4,
        title: 'Cartografia',
        description: 'Mapas catastrales. <br/> Mapas viales y de infraestructuras. <br/> Modelos digitales de elevación.',
        img_main: './assets/carousel/cartografia.webp',
        img_mineature: './assets/carousel/cartografia.webp'
    }, 
    {
        id:5,
        title: 'Suelo',
        description: 'Monitoreo de actividad sísmica. <br/> Variaciones del campo geomagnético. <br/> Clasificación del suelo.',
        img_main: './assets/carousel/suelo.webp',
        img_mineature: './assets/carousel/suelo.webp'
    },    
    {
        id:6,
        title: 'Atmósfera',
        description: 'Calidad del aire. <br/> Gestión y predicción de catástrofes. <br/> Estudio de cambio climático.',
        img_main: './assets/carousel/atmosfera.webp',
        img_mineature: './assets/carousel/atmosfera.webp'
    },
    {
        id:7,
        title: 'Gestión de riesgo',
        description: 'Manejo de zonas inundables. <br/> Mapas de permeabilidad. <br/> Temperaturas de volcanes.',
        img_main: './assets/carousel/gestion-riesgo.webp',
        img_mineature: './assets/carousel/gestion-riesgo.webp'
    },
]

const banner_container = document.getElementById('banner_container')
const text_container = document.getElementById('text_container')
const mineatures_container = document.getElementById('mineatures_container')

const render_mineaturas = async () => 
{
    const html = DATA_BANNERS.map((banner)=>{
        return `
            <div class="mineature" data-id="${banner.id}">
                <img src="${banner.img_mineature}" alt="mineatura ${banner.title}" /> 
                <button> ${banner.title} </button>                
            </div>
        `
    }).join('')

    mineatures_container.innerHTML = html
}

const render_banners = async () => 
{
    const html = DATA_BANNERS.map((banner)=>{
        return `
            <div class="container_img_banner" data-id="${banner.id}" data-active="${banner.id == banner_active}">
                <img src="${banner.img_main}" alt="Banner ${banner.title}" />       
            </div>
        `
    }).join('')

    banner_container.innerHTML = html
}

const render_text = async () => 
    {
        const html = DATA_BANNERS.map((banner)=>{
            return `
                <div>
                    <h2> ${banner.title} </h2>
                    <p> ${banner.description} </p>            
                </div>
            `
        }).join('')
    
        text_container.innerHTML = html
    }

render_mineaturas();
render_banners();
 */

let banner_active = 1 
let banners_length = document.querySelectorAll('#container_img_banner').length
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
    }, 5000);
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