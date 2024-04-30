'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './testimonials.module.css';
import TestimonialCard from "./TestimonialCard";
import testimonalObjects from '../../../[assets]/testimonials.json';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonials = () => {
    return (
        <Carousel  
        containerClass={styles.wFull} 
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        responsive={responsive}
        arrows={false}>
            {testimonalObjects.map((testimonalObject) => (
              <TestimonialCard key={testimonalObject.author} writer={testimonalObject.author} testimonial={testimonalObject.text}/>
            ))}
        </Carousel>
    )
};

export default Testimonials;
