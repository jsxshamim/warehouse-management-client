import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const Testimonials = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return <FontAwesomeIcon onClick={onClick} style={{ ...style, display: "block", background: "white", color: "black" }} className={className} icon={faArrowAltCircleRight} />;
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return <FontAwesomeIcon onClick={onClick} style={{ ...style, display: "block", background: "white", color: "black" }} className={className} icon={faArrowAltCircleLeft} />;
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    return (
        <section id="testimonials" className="container mx-auto testimonial py-20">
            <div className="section-top text-center pb-20">
                <h1 className="text-4xl font-bold text-title section-title mb-5">What Our Clients Say?</h1>
                <p>Read what my clients are saying to whom i've helped to make a difference in there life.</p>
            </div>
            <Slider {...settings}>
                <div>
                    <div className="flex lg:flex-row flex-col justify-center items-center gap-10 w-10/12 mx-auto">
                        <img className="w-56 h-56 rounded-full object-cover" src={"https://i.postimg.cc/76N7cp9Y/img1.jpg"} alt="" />
                        <div className="testimonial-text lg:py-20 text-center lg:text-left">
                            <p className="text-2xl mb-5">
                                Keep up the excellent work. I just can't get enough of Inventory Management. I want to get a T-Shirt with Inventory Management on it so I can show it off to everyone. I just can't get enough of Inventory Management.
                            </p>
                            <h4 className="text-paragraph font-bold text-xl">Judith Black</h4>
                            <h4 className="text-secondary text-xl">CEO, Tuple</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex lg:flex-row flex-col justify-center items-center gap-10 w-10/12 mx-auto">
                        <img className="w-56 h-56 rounded-full object-cover" src={"https://i.postimg.cc/76N7cp9Y/img1.jpg"} alt="" />
                        <div className="testimonial-text lg:py-20 text-center lg:text-left">
                            <p className="text-2xl mb-5">
                                Keep up the excellent work. I just can't get enough of Inventory Management. I want to get a T-Shirt with Inventory Management on it so I can show it off to everyone. I just can't get enough of Inventory Management.
                            </p>
                            <h4 className="text-paragraph font-bold text-xl">Judith Black</h4>
                            <h4 className="text-secondary text-xl">CEO, Tuple</h4>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
    );
};

export default Testimonials;
