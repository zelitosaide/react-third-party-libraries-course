import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

import image1 from "../images/image-1.jpeg"; 
import image2 from "../images/image-2.jpg"; 
import image3 from "../images/image-3.jpeg"; 
import image4 from "../images/image-4.jpg"; 
import image5 from "../images/image-5.jpg"; 
import image6 from "../images/image-6.jpeg"; 
import image7 from "../images/image-7.jpg"; 
import image8 from "../images/image-8.jpeg"; 
import image9 from "../images/image-9.jpg"; 

export default function Page() {
  return (
    <Swiper navigation={true} modules={[Navigation]}>
      <SwiperSlide>
        <img src={image1} />
        <p>
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image2} />
        <p>
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image3} />
        <p>
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image4} />
        <p>
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image5} />
        <p>
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image6} />
        <p>
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image7} />
        <p>
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image8} />
        <p>
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={image9} />
        <p>
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.
        </p>
      </SwiperSlide>
    </Swiper>
  );
}