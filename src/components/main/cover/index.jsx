import './styles.css'

const Cover = () => {

    return (
        <section className='carousel'>
            <div id="carouselExampleRide" className='carousel-container' data-bs-ride="carousel">
                <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner carousel-transition">
                        <div class="carousel-item active carousel-transition" data-bs-interval="5500">
                            <img src="../../image-cover-1.png" class="d-block w-100" alt="Imagen-carrusel-1" />
                        </div>
                        <div class="carousel-item carousel-transition" data-bs-interval="5500">
                            <img src="../../image-cover-2.png" class="d-block w-100" alt="Imagen-carrusel-2" />
                        </div>
                        <div class="carousel-item carousel-transition" data-bs-interval="5500">
                            <img src="../../image-cover-3.png" class="d-block w-100" alt="Imagen-carrusel-3"/>
                        </div>
                    </div>
                </div>
            </div>                  
        </section>
    )
}

export default Cover;