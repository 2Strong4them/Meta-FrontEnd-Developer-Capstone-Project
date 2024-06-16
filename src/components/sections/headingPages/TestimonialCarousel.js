import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './CardInfo/TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showStatus={false}>
            <TestimonialCard name="Liam Smith" description="The flavors at Little Lemon are out of this world! Best Mediterranean food ever!"/>
            <TestimonialCard name="Emma Johnson" description="My Golden Retriever, Max, loved the cozy ambiance and tasty treats here."/>
            <TestimonialCard name="Olivia Brown" description="I've enjoyed Mediterranean cuisine before, but nothing compares to the richness at Little Lemon."/>
            <TestimonialCard name="Noah Davis" description="Amazing food, friendly staff, and a warm atmosphere. Perfect spot for family meals."/>
            <TestimonialCard name="Ethan Wilson" description="After a long night shift, the food here was exactly what I needed to recharge."/>
            <TestimonialCard name="Sophia Martinez" description="After a 5-hour flight from the East Coast, the delicious food at Little Lemon was a lifesaver."/>
            <TestimonialCard name="Ava Lopez" description="The dishes here are fantastic! Every Chicagoan should dine here at least once."/>
            <TestimonialCard name="Mason Gonzalez" description="This was the perfect dinner after a tough study session. I'll definitely be back!"/>
        </Carousel>

    )
}