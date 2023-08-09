import React, { useEffect } from 'react';
import './styles.css'

const Covers = () => {
    
    useEffect(() => {
        const carousel = document.getElementById('carouselExampleRide'); 
        const carouselInstance = new bootstrap.Carousel(carousel, {
            interval: 5500, 
        });
    
        carousel.addEventListener('slide.bs.carousel', (event) => {
            const { from, to } = event;
            const items = carousel.querySelectorAll('.carousel-item');

            items[to].classList.add('carousel-fade-in');
            items[from].classList.add('carousel-fade-out');

            items[to].addEventListener('animationend', () => {
                items[to].classList.remove('carousel-fade-in');
                items[from].classList.remove('carousel-fade-out');
            });
        });

        return () => {
            carouselInstance.dispose();
        };
    }, []);

    
    return (
        <section className='carousel'>
            <div id="carouselExampleRide" className='carousel-container'  data-bs-ride="carousel">
                <div id="carouselExampleIndicators" class="carousel slide">
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

export default Covers;