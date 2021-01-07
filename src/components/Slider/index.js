import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useSelector } from "react-redux";

import { selectEstateUrl } from '../../redux/estateSlice'

const SliderEstate = () => {

    const estateItemUrls = useSelector(selectEstateUrl)

    let slides
    if (estateItemUrls) {
        slides = estateItemUrls.map((url,i) => <Slide index={i}><img className='slide-img' src={url} alt="flat"/></Slide>)
    }

    return  <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={6}
    >
        <Slider>
            {slides}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
}

export { SliderEstate }