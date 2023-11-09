import React from 'react';
import { Carousel } from 'flowbite-react';
const Banner = () => {
    return (
        <div className="my-10">
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <img src="https://i0.wp.com/erraticus.co/wp-content/uploads/2021/10/This-Is-Technopoly-Technocracy-Erraticus.png?zoom=2&resize=800%2C445&ssl=1" alt="..." />
        <img src="https://st2.depositphotos.com/3114403/12021/v/950/depositphotos_120213906-stock-illustration-vector-creative-illustration-of-technology.jpg" alt="..." />
        <img src="https://static3.bigstockphoto.com/9/0/2/large1500/209736862.jpg" alt="..." />
        <img src="https://www.shutterstock.com/image-illustration/creative-illustration-technology-word-lettering-600w-1305630892.jpg" alt="..." />
        <img src="https://thumbs.dreamstime.com/b/high-technology-background-17573839.jpg" alt="..." />
      </Carousel>
    </div>
        </div>
    );
};

export default Banner;