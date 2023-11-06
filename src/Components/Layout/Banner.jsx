import React from 'react';
import { Carousel } from 'flowbite-react';
const Banner = () => {
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIE5NMZzEczgzVRG3-sAugvXF5IZ9H6Br6H8qAgfJv4Iz_DiLSg-VaeARpSZs7s3GO4s&usqp=CAU" alt="..." />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3d5ClnhdHHQ1aQoSma52TEMTTKbmXZrfTyrwLnNfY-dzYwdna8K1ae6UqgOa5ob4qtkA&usqp=CAU" alt="..." />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpggb6vV_Od2nADHr8kHDThx0oTzXLA4ugm1U5_EaGxtN4e00DXCg1A6djbquTAK11tR4&usqp=CAU" alt="..." />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMg7i5m83PrHZdKTnJ-yTxYo3TcG6zT2u8dmM7wA0ji03fR0kkxOLEBY7EExX8gf6idmk&usqp=CAU" alt="..." />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuClPgtVgWad0bkR2nP5mBVjWMOPJosaLISo900x5GhdinZipUGvxRI6KvObZK4WhJvh0&usqp=CAU" alt="..." />
      </Carousel>
    </div>
        </div>
    );
};

export default Banner;