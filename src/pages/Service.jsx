import Navbar from "../components/Navbar";
import ServiceCard from "../components/ServiceCard";
import img1 from "../images/homepage/1(service).jpg";
import img2 from "../images/homepage/2(service).jpg";
import img3 from "../images/homepage/4(service).png";
import icon1 from "../images/homepage/figma.png";
import icon2 from "../images/homepage/adobexd.png"
import icon3 from "../images/homepage/react.png";
import icon4 from "../images/homepage/laravel.png";
import icon5 from "../images/homepage/aws.png";

import whychooseus from "../images/homepage/8629-[Converted].png"
import Mobileapp from "../images/homepage/mobile-app-development-1.png"
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import "../components/Navbar.css";
import { IoIosRocket } from "react-icons/io";
import Button from "../components/Button";
import servicepng from "../images/homepage/trustedservice.png"
import Footer from "../components/Footer";

import flutter from "../images/homepage/flutter.png"
import reactnative from "../images/homepage/reactnative.png"
import googleseo from "../images/homepage/googleseo.png"
import nodejs from "../images/homepage/nodejs.png"
// import Title from "../components/Title"

const Service = () => {

    const cardListItems = ['Our UI service offers a wide range of design tools, including a drag-and-drop interface builder, a rich library of components, and powerful customization options.', 'Collaborate seamlessly with our team members by sharing projects and designs in real-time. Leave comments, track changes, and work together effortlessly.', "We gurantee that our designs are unique"];
    const cardImages = [icon1, icon2];
    // const cardImages = ['../images/homepage/figma.png', '../images/homepage/adobe.png'];
    const cardListItems1 = ["Our team of expert designers will create a unique website that reflects your brand identity and engages your target audience.", "We prioritize user-friendly interfaces and mobile responsiveness to ensure a seamless user experience.", "From MVPs to complex web applications, we develop powerful and scalable solutions that streamline your operations.", "We offer resonable price as well."]
    const cardImages1 = [icon3, icon4, icon5, nodejs]

    const cardListItems2 = ["We employ the latest SEO techniques to enhance your rankings and attract organic traffic.", "Boost your online sales with our e-commerce website development services.", "We integrate secure payment gateways and easy-to-navigate product catalogs to maximize conversions.", "Our team is ready to give you our best services."]

    const cardImages3 = [flutter, reactnative]
    const cardImages4 = [googleseo]
    
    const cardListItems3 = ["Our development team ensures that your website is designed and optimized for mobile users from the ground up. ", "We recognize the diversity of web browsers and devices used by your audience ensuring  your online presence remains consistent and reliable", "We prioritize performance optimization to guarantee that your website loads swiftly on mobile devices with unique UI/UX designs."]


    return (
        <>
            <section className="background-gradient w-full h-full">
            {/* <Title title="Service" /> */}
                <section className="py-8">
                    <Navbar />

                    <section className="lg:max-w-[1600px] mx-auto p-4 w-full h-full">
                        <div className="py-[80px]">
                            <h1 className="xs:text-[20px] text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-[28px] font-medoum  text-textDefault tracking-wide mb-[20px]">What <span className="text-textSecondary">We </span>Do</h1>
                            <p className="text-center max-w-7xl  mx-auto text-md md:text-[18px] text-textDefault">
                                "Our Company, we specialize in harnessing the power of information to empower your decision-making and business growth. Our services encompass data analytics, market research, competitive intelligence, and strategic insights.
                            </p>
                        </div>

                        <div className=" mx-auto">
                            <div className="flex flex-wrap flex-row justify-center">
                                <div className="w-full  sm:w-8/12 md:w-10/12 lg:w-2/4 xl:w-1/4 p-4 my-3">
                                    <ServiceCard
                                        imageUrl={img1}
                                        title="UI, UX Design"
                                        listItems={cardListItems}
                                        images={cardImages}
                                    />
                                </div>

                                <div className="w-full  sm:w-10/12 md:w-10/12 lg:w-2/4 xl:w-1/4 p-4 my-3">
                                    <ServiceCard
                                        imageUrl={img2}
                                        title="Web Development Services"
                                        listItems={cardListItems1}
                                        images={cardImages1}
                                    />
                                </div>

                                <div className="w-full  sm:w-10/12 md:w-10/12 lg:w-2/4 xl:w-1/4 p-4 my-3">
                                    <ServiceCard
                                        imageUrl={Mobileapp}
                                        title="Mobile App Development Services"
                                        listItems={cardListItems3}
                                        images={cardImages3}

                                    />
                                </div>

                                <div className="w-full  sm:w-10/12 md:w-10/12 lg:w-2/4 xl:w-1/4 p-4 my-3">
                                    <ServiceCard
                                        imageUrl={img3}
                                        title="Digital Solutions and SEO Optimization"
                                        listItems={cardListItems2}
                                        images={cardImages4}


                                    />
                                </div>



                            </div>
                        </div>
                    </section>


                    <section className="py-8">


                        <div className="max-w-7xl mx-auto p-4 ">
                            <div className="lg:flex md:flex ">



                                <div className="sm:block lg:w-1/2 md:mt-[60px] lg:mt-[150px]">
                                    <h1 className="xs:text-[20px] xs:text-center sm:text-center md:text-justify sm:text-lg md:text-lg lg:text-3xl font-medium mb-6 text-textDefault mx-auto tracking-wide">Why<span className="text-textSecondary"> Choose </span> Us</h1>

                                    <ul className="text-textDefault my-3 xl:max-w-[550px] lg:max-w-[450px] md:max-w-[350px] font-normal text-sm md:text-md lg:text-lg  md:text-left list-disc  xs:px-8 sm:px-2 md:px-5">
                                        <li className="mb-2">
                                            Affordable Pricing: We understand the budget constraints of small businesses and offer competitive pricing without compromising on quality.
                                        </li>
                                        <li className="mb-2">
                                            Proven Results: Our portfolio includes successful projects for small businesses across various industries. Check out our case studies.
                                        </li>
                                        <li className="mb-2">
                                            Client Testimonials: Don't take our word for it. Read what our satisfied clients have to say about our services.
                                        </li>
                                    </ul>


                                </div>
                                <div

                                    className="md:justify-normal sm:block xs:w-10/12 sm:w-9/12 md:w-1/2 lg:w-5/12 xl:w-5/12 lg:pt-12 mx-auto xs:mt-[30px] sm:mt-[40px] max-w-2xl"
                                >

                                    <img src={whychooseus} alt="axletech" className="w-full h-auto rounded-md" />

                                </div>
                            </div>
                        </div>


                    </section>

                    <div className="mt-10 text-md xs:block sm:block md:hidden  text-center text-textDefault italic">"Our team is ready to give the best service to our beloved clients."</div>

                    <section className="mb-8 sm:my-12 md:my-[100px] lg:my-[120px]">
                        <div className="max-w-7xl mx-auto p-4 ">
                            <div className="lg:flex md:flex ">

                                <div className="md:justify-normal sm:block xs:w-10/12 sm:w-9/12 md:w-6/12 lg:w-6/12 lg:pt-12 mx-auto xs:mt-[40px] sm:mt-[40px] text-center">
                                    <img src={servicepng} alt="axletech" className="w-full h-full rounded-md" />
                                </div>

                                <div className="sm:block lg:w-6/12 md:mt-[60px] lg:mt-[150px] lg:px-[30px]">
                                    <h1 className="xs:text-[20px] xs:text-center sm:text-center md:text-justify sm:text-lg md:text-lg lg:text-3xl font-medium mb-6 text-textDefault mx-auto tracking-wide mt-5 md:mt-0">We Provide <span className="text-textSecondary">Trusted Service</span> For You</h1>
                                    <p className="text-textDefault my-3 xl:max-w-[550px] lg:max-w-[450px] md:max-w-[420px] font-normal text-sm md:text-md lg:text-lg xs:text-center sm:text-center md:text-left">
                                        Customers trust companies that consistently deliver high-quality products or services. When a company consistently meets or exceeds customer expectations, it builds a reputation for reliability and trustworthiness.
                                    </p>
                                    <div className="flex justify-center items-center md:justify-start xs:my-8 sm:my-5 md:my-5 lg:my-5 xl:my-7">
                                        <Button to="/contact" className="text-textDefault border rounded-md border-textSecondary">
                                            <IoIosRocket size={22} className="me-1" />Contact Us
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>



                </section>
            </section>
            <Footer />
        </>

    )
}

export default Service;