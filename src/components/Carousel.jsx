
import Slider from "react-slick";


import img1 from "../images/homepage/kto.jpg"
import img2 from "../images/homepage/esther.jpg"
import img3 from "../images/homepage/eiset.jpg"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Carousel = () => {
 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };



    return (
        <div className="">
            <Slider {...settings} >
                <div className="shadow-lg pb-6 ">
                    <div className="w-[100px] mx-auto object-cover mb-3">
                        <img src={img1} alt="jb photo" className="rounded-full" />
                    </div>
                    <h1 className="text-center text-textDefault my-2 font-medium text-lg">Mrs. K Thwe Oo </h1>
                    <h1 className="text-center text-textSecondary mb-2 font-light text-lg">(Senior Sales Consultant)</h1>

                    <p className="text-center text-textDefault italic max-w-[600px] mx-auto px-3">
                        "Fantastic experience with your web development team! The website design exceeded our expectations, and the development process was seamless. Thank you for your professionalism and timely delivery."
                    </p>
                </div>

                <div className="shadow-lg pb-6">
                    <div className="w-[100px] mx-auto object-cover mb-3">
                        <img src={img2} alt="jb photo" className="rounded-full" />
                    </div>
                    <h1 className="text-center text-textDefault my-2 font-medium text-lg">Ms.Esther Nuk Chyit</h1>
                    <h1 className="text-center text-textSecondary mb-2 font-light text-lg">(Sales Consultant)</h1>
                    <p className="text-center text-textDefault max-w-[600px] mx-auto px-3">
                        "Impressed with the responsiveness and creativity of your web development team. Our new site is user-friendly, visually stunning, and perfectly reflects our brand. Great job!"
                    </p>
                </div>



                <div className="shadow-lg pb-6">
                    <div className="w-[100px] mx-auto object-cover mb-3">
                        <img src={img3} alt="jb photo" className="rounded-full" />
                    </div>
                    <h1 className="text-center text-textDefault my-2 font-medium text-lg">Ms.Su Thiri Myo</h1>
                    <h1 className="text-center text-textSecondary mb-2 font-light text-lg">(Senior Sales Manager)</h1>
                    <p className="text-center text-textDefault max-w-[600px] mx-auto px-3">
                        "Kudos to your web development company for the exceptional work! The attention to detail, quick turnaround, and effective communication made the entire process enjoyable. Looking forward to future collaborations!"
                    </p>
                </div>






            </Slider>
        </div>
    )
}

export default Carousel;