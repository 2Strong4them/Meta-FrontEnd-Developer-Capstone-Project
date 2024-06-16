import Carousel from './TestimonialCarousel'
import TestimonialCard from './CardInfo/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Liam Smith" description="Absolutely loved the Mediterranean flavors here! A must-try spot."/>
                <TestimonialCard name="Emma Johnson" description="My Cocker Spaniel, Bella, enjoyed the relaxing ambiance and tasty dishes."/>
                <TestimonialCard name="Olivia Brown" description="I've had my fair share of Mediterranean food, but Little Lemon tops them all."/>
                <TestimonialCard name="Noah Davis" description="Delicious food, friendly staff, and a warm, inviting atmosphere. Perfect for families."/>
                <TestimonialCard name="Ethan Wilson" description="After a long workday, the food here was exactly what I needed to recharge."/>
                <TestimonialCard name="Sophia Martinez" description="After a long flight, Little Lemon's delicious food was a delightful welcome."/>
                <TestimonialCard name="Ava Lopez" description="The dishes here are fantastic! Every local should visit at least once."/>
                <TestimonialCard name="Mason Gonzalez" description="Perfect dinner spot after a night of studying. I'll definitely be back!"/>
            </section>


            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}