import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import ourstory from "../images/homepage/Rectangle 30.png";
import AboutusCard from "../components/AboutusCard";
import Aboutusimg1 from "../images/homepage/companyvalues1.png"
import Aboutusimg2 from "../images/homepage/handshake.png"
import Aboutusimg3 from "../images/homepage/high-quality.png"
import Aboutusimg4 from "../images/homepage/idea.png"
import Aboutusimg5 from "../images/homepage/healthcare.png"
import AboutusCard2 from "../components/AboutusCard2";
import Aboutusimg6 from "../images/homepage/aboutusimg6.png"
import Aboutusimg7 from "../images/homepage/aboutusimg7.png"
import AboutusCard3 from "../components/AboutusCard3";
import { SlCalender } from "react-icons/sl";
import { GoProjectRoadmap } from "react-icons/go";
import { GiWireframeGlobe } from "react-icons/gi";
import { SiMaterialdesignicons } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiTestcafe } from "react-icons/si";
import { PiSealCheckFill } from "react-icons/pi";
import { MdModelTraining } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import img1 from "../images/homepage/1.png"
import img2 from "../images/homepage/2.png"
import img3 from "../images/homepage/3.png"
import img4 from "../images/homepage/4.png"
import img5 from "../images/homepage/5.png"
import img6 from "../images/homepage/6.png"
import img7 from "../images/homepage/7.png"
import img8 from "../images/homepage/8.png"
import img9 from "../images/homepage/9.png"
import hsuimg from "../images/homepage/hsu.jpg"
import htzimg from "../images/homepage/hantunzaw.jpg"
import ywineimg from "../images/homepage/ywine.jpg"
import wwmjpg from "../images/homepage/winwinmaw.jpg"
import nnjpg from "../images/homepage/Naw Naw.jpg"
import admjpg from "../images/homepage/adam.jpg"
import hhzjpg from "../images/homepage/heinhtikezaw.jpg"
import nzlimg from "../images/homepage/nayzawlin.jpg"
import Footer from "../components/Footer";

// import Title from "../components/Title";



import Staffcard from "../components/Staffcard";
import Staffcard2 from "../components/Staffcard2";
import { CgDesignmodo } from "react-icons/cg";
const Aboutus = () => {
    return (
        <>
            <section>
            {/* <Title title="Aboutus" /> */}
                <div className="aboutusheader">
                    <Navbar />
                    <h1
                        className="text-center pt-[150px] md:pt-[120px] xs:text-[20px] sm:text-xl md:text-2xl lg:text-2xl xl:text-[28px] font-medium text-textDefault tracking-wide mb-3">
                        About <span className="text-textSecondary">Us</span>
                    </h1>
                </div>

            <section className="background-gradient w-full h-full xs:py-4 md:py-8">
                    <div className="max-w-7xl mx-auto p-4 ">
                        <div className="lg:flex md:flex ">
                            <div className="sm:block lg:w-1/2 md:mt-[60px] lg:mt-[150px]">
                                <h1 className="xs:text-[20px] xs:text-center sm:text-center md:text-justify sm:text-lg md:text-lg lg:text-3xl font-medium mb-6 text-textDefault mx-auto tracking-wide">Our <span className="text-textSecondary"> Story </span></h1>
                                <p className="text-textDefault  my-3 xl:max-w-[550px] lg:max-w-[450px] md:max-w-[420px] font-normal text-sm md:text-md lg:text-lg xs:text-center sm:text-center md:text-justify tracking-tight">
                                The name "Axle" is formed by a fusion between two words: "Excel" and "XL." It articulates the company’s drive to be at the forefront of being excellent at Digital Innovation, and it expresses our commitment to deliver well-designed, custom Digital Solutions with operational excellence in mind.

Since we started our journey in 2022, AxleTech has achieved exponential growth in terms of business, industry insight, contribution to client’s businesses, and employee professionalism. The company offers high-quality Digital Solutions, consulting, and establishing Digital Presence, and Mobile App Development. We combine smart and relevant data with an agile approach to address the entire spectrum of customer’s complex challenges, thus accelerating the digital impact across any industry.

                                </p>

                            </div>

                            <div className="md:justify-normal sm:block xs:w-8/12 sm:w-6/12 md:w-4/12 lg:w-5/12 lg:mt-[220px] mx-auto xs:mt-[40px] sm:mt-[40px] md:mt-[100px] max-w-[500px] max-h-[300px] text-center">
    

                                <img src={ourstory} className="w-full h-full rounded-md object-cover fade-in-image" alt="ourstory"/>
                           
                            </div>
                        </div>
                    </div>


                    <div className="max-w-7xl mx-auto py-[100px] md:py-[150px] lg:py-[180px]">
                        <div className="flex flex-col sm:flex-row justify-center items-center">
                            <div className="w-full mx-auto sm:w-1/2 xs:w-1/2 mb-12 max-w-[400px] ">
                                <img src={Aboutusimg1} alt="aboutusimg" className="w-full h-full" />
                            </div>
                            <div className="w-full mx-auto sm:w-1/2">
                                <div className="flex flex-wrap">
                                    <div className="w-full sm:w-1/2">
                                        <AboutusCard image={Aboutusimg5} title="Customer-centric" content="Stands on uiniting minds to build digital-enabled products that exceeds goals." />
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <AboutusCard image={Aboutusimg4} title="Technology" content="Stands on integrating the latest technology tools to  strengthen the Business. " />
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <AboutusCard image={Aboutusimg3} title="Quality-driven" content="Stands on striving for performance in the workflow and upon each project delivery stage." />
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <AboutusCard image={Aboutusimg2} title="Impact-focused" content="Stands on integrating the design thinking mindset to find a solution for customer’s challenges. " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="max-w-7xl mx-auto pb-[100px] md:pb-[150px] lg:pb-[200px]">
                        <div className="text-textDefault font-semibold mb-8 xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-center tracking-wide">Our <span className="text-textSecondary"> Mission </span></div>
                        <AboutusCard2 image={Aboutusimg6}
                        content="The concept of 'Excellence' lies at the heart of Axle Tech’s mission. With a deep passion for digital progress and holistic solutions, we engage in pioneering work in the field of IT, adopting a customer-centric approach. Our ultimate goal is the long-term business success of each customer, which we support and elevate through our delivered services."/>

                            </div>


                    <div className="max-w-7xl mx-auto pb-[100px] md:pb-[150px] lg:pb-[200px]">
                        <div className="text-textDefault font-semibold mb-8 xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-center tracking-wide">Our <span className="text-textSecondary"> Vision </span></div>
                        <AboutusCard2 image={Aboutusimg7}
                        content="We have a clear vision of how we aim to make positive changes to enhance our customers' digital solutions needs by designing and building customer-centric digital solutions. We believe that technology should make life easier, unleash creativity, and foster thriving businesses." />
                    </div>



                    <div className="max-w-6xl mx-auto pb-[80px]">
                        <h1 className="xs:text-[20px] text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-[28px] font-medoum  text-textDefault tracking-wide mb-[20px]">Our<span className="text-textSecondary"> Process </span></h1>
                        <p className="text-center max-w-5xl  mx-auto px-3 text-md md:text-[18px] text-textDefault">
                            "Our Company, we specialize in harnessing the power of information to empower your decision-making and business growth. Our services encompass data analytics, market research, competitive intelligence, and strategic insights.
                        </p>


                        <div className="my-16 max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                <div className="md:w-7/12">
                                    <AboutusCard3 icon={<SlCalender size={22} className="text-textSecondary"/>} title="1 | Kick Off meeting" content="Let's start your project by aligning on your website objectives with your dedicated designer." />
                                </div>
                                <div className="md:w-5/12 md:ml-20 order-first md:order-last mb-8 md:mb-0  ">
                            
                                        <img src={img1} alt="image1" className="w-36 h-36 animateicon1" />
                                    
                                </div>
                            </div>
                        </div>


                        <div className="my-16 max-w-3xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                <div className="md:w-4/12 ">
                                 
                                        <img src={img2} alt="image1" className="w-40 h-auto mb-8 md:mb-0 animateicon2" />
                         
                                </div>

                                <div className=" md:w-8/12">
                                    <AboutusCard3 icon={<GoProjectRoadmap size={22} className="text-textSecondary"/>} title="2 | Site map" content="We define a clear hierarchy for your website's content to keep the design, development and SEO coordinated." />
                                </div>

                            </div>
                        </div>

                        <div className="my-16 max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-center items-center">


                                <div className="md:w-6/12">
                                    <AboutusCard3 icon={<GiWireframeGlobe size={22} className="text-textSecondary"/>} title="3 | Wireframes" content="We create a coherent structure for each page, using the power of the site building blocks." />
                                </div>
                                <div className="md:w-6/12 order-first md:order-last">
                            
                                        <img src={img3} alt="image1" className="w-40 h-auto mb-8 md:mb-0 animateicon1" />
                                   
                                </div>
                            </div>
                        </div>

                        <div className="my-16 max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                <div className="md:w-4/12 md:mr-20">
                                   
                                        <img src={img4} alt="image1" className="w-40 h-auto mb-8 md:mb-0 animateicon2" />
                               
                                </div>

                                <div className=" md:w-8/2">
                                    <AboutusCard3 icon={<SiMaterialdesignicons size={22} className="text-textSecondary"/>} title="4 | Designs" content="Our designers will conceive a stunning and unique design for your website, reflecting your brand identity." />
                                </div>


                            </div>
                        </div>

                        <div className="my-16 max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-center items-center">


                                <div className="md:w-7/12 md:mr-8">
                                    <AboutusCard3 icon={<MdOutlineDeveloperMode size={22} className="text-textSecondary"/>} title="5 | Development"
                                        content="We develop a custom website using Laravel, Reactjs, Nodejs, etc." />
                                </div>
                                <div className="md:w-5/12 order-first md:order-last">
                        
                                        <img src={img5} alt="image1" className="w-36 h-auto mb-8 md:mb-0 animateicon1" />
                               
                                </div>
                            </div>
                        </div>

                        <div className="my-16 max-w-3xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                <div className="md:w-5/12 ">
                                
                                        <img src={img6} alt="image1" className="w-40 h-auto mb-8 md:mb-0 animateicon2" />
                                  
                                </div>

                                <div className=" md:w-7/2">
                                    <AboutusCard3 icon={<SiTestcafe size={22} className="text-textSecondary"/>} title="6 | Testing"
                                        content="Together we make sure your website works on every platforms and that everything is working as it should." />
                                </div>


                            </div>
                        </div>

                        <div className="my-16 max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-center items-center">


                                <div className="md:w-7/12 md:mr-8">
                                    <AboutusCard3 icon={<PiSealCheckFill size={22} className="text-textSecondary"/>} title="7 | Implementation "
                                        content="Our functional experts can help you setting-up your online store with your products, pricelists and variants." />
                                </div>
                                <div className="md:w-5/12 order-first md:order-last">
                               
                                        <img src={img7} alt="image1" className="w-40 h-auto mb-8 md:mb-0 animateicon1" />
                                   
                                </div>
                            </div>
                        </div>

                        <div className="my-16 max-w-3xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                <div className="md:w-5/12 ">
                                
                                        <img src={img8} alt="image1" className="w-40 h-auto mb-8 md:mb-0 animateicon2" />
                                  
                                </div>

                                <div className=" md:w-7/2">
                                    <AboutusCard3 icon={<MdModelTraining size={22} className="text-textSecondary"/>} title="8 | Training "
                                        content="Once your theme is finalised, we will train you to use the website builder. This way, you can easily update you website content." />
                                </div>


                            </div>
                        </div>


                        <div className="my-16 max-w-4xl mx-auto">
                            <div className="flex flex-col md:flex-row justify-center items-center">


                                <div className="md:w-6/12 md:mr-8">
                                    <AboutusCard3 icon={<MdContactSupport size={22} className="text-textSecondary"/>} title="9 | Support"
                                        content="We are always ready to help you if you have any question." />
                                </div>
                                <div className="md:w-6/12 order-first md:order-last">
                                  
                                        <img src={img9} alt="image1" className="w-40 h-40 mb-8 md:mb-0 animateicon1" />
                                  
                                </div>
                            </div>
                        </div>
                    </div>


                    <section className=" max-w-6xl mx-auto">
                        <h1 className="xs:text-[22px] text-center sm:text-xl md:text-2xl lg:text-3xl xl:text-[28px] font-medoum  text-textDefault tracking-wide mb-12">Our
                        <span className="text-textSecondary"> Team </span> of <span className="text-textSecondary"> Experts </span>
                        </h1>

                        <div className="mb-3 md:mb-12">
                            <Staffcard2 image={htzimg} name="U Han Tun Zaw" title="CEO & Executive Director" content='"As the CEO of our innovative IT company, I am committed to driving technological advancements, fostering a culture of creativity and collaboration, and delivering cutting-edge solutions that empower our clients to thrive in the digital landscape."' icon1="https://www.facebook.com/hantun.zaw.543?mibextid=LQQJ4d" icon2="https://instagram.com" icon3="https://github.com/Htzaxletech" icon4="ed@axletechmm.com" />
                        </div>

                        <section className="py-8 md:py-16 flex flex-wrap justify-center items-center">
                            <div className="w-full md:w-1/2 lg:w-4/12 p-3 md:mb-9">
                                <Staffcard image={admjpg} name="Adam" title="Senior Backend Developer" content='"As a senior backend developer, I design resilient systems and optimize performance for seamless application functionality."' icon1="https://www.facebook.com/sithuthetnaing1992?mibextid=LQQJ4d" icon2="https://instagram.com" icon3="https://github.com/AdamNyi" icon4="mohd.adamsw@gmail.com" />
                            </div>

                            <div className="w-full md:w-1/2 lg:w-4/12 p-3 md:mb-9">
                                <Staffcard image={ywineimg} name="Ywine" title="Junior Backend Developer" content='"In the backend realm, I am focused on crafting efficient and secure solutions for robust application functionality."' icon1="https://www.facebook.com/profile.php?id=100088159596032&mibextid=ZbWKwL" icon2="https://instagram.com" icon3="https://github.com/ywine20" icon4="ywine381@gmail.com" />
                            </div>

                            <div className="w-full md:w-1/2 lg:w-4/12 p-3 md:mb-9">
                                <Staffcard image={hhzjpg} name="Hein Htike Zaw" title="Junior Backend Developer" content='"In backend development, I craft resilient solutions for optimal application performance."' icon1="https://www.facebook.com/profile.php?id=100055211060210" icon2="https://instagram.com" icon3="https://github.com/heinhtikezaw123" icon4="htz@axletechmm.com" />
                            </div>

                            <div className="w-full md:w-1/2 lg:w-4/12 p-3 md:mb-9">
                                <Staffcard image={nzlimg} name="Nay Zaw Linn" title="Senior Frontend Developer" content='"As a senior frontend developer, I create captivating user experiences with innovative technologies and precise design."' icon1="https://www.facebook.com/linnz.me?mibextid=LQQJ4d" icon2="https://instagram.com" icon3="https://github.com/nayzawlin" icon4="nzl@axletechmm.com" />
                            </div>

                            <div className="w-full md:w-1/2 lg:w-4/12 p-3 md:mb-9">
                                <Staffcard image={wwmjpg} name="Win Win Maw" title="Frontend Developer" content='"I am enthusiastic to learn and contribute to user-friendly interfaces with a focus on design and interactivity."' icon1="https://www.facebook.com/winwinmaw4?mibextid=JRoKGi" icon2="https://www.instagram.com/winwinmaw01" icon3="https://github.com/WinWinMaw4" icon4="mawinwinmaw4@gmail.com" />
                            </div>

                            <div className="w-full md:w-1/2 lg:w-4/12 p-3 md:mb-9">
                                <Staffcard image={hsuimg} name="Su Myat Aung" title="Junior Frontend Developer" content='"I thoroughly enjoy crafting seamless and visually engaging user interfaces that enhance the overall user experience."' icon1="https://www.facebook.com/solohbsjud7?mibextid=LQQJ4d" icon2="https://www.instagram.com/h_s_u_______?igsh=MXEydGQ4NGYxM3hmdA%3D%3D&utm_source=qr" icon3="https://github.com/sumyataung20" icon4="myathsu703@gmail.com" />
                            </div>

                            <div className="w-full md:w-1/2 lg:w-4/12 p-3 md:mb-9">
                                <Staffcard image={nnjpg} name="T Dau Naw Naw " title="Mobile Developer" content='"As a mobile developer, craft elegant and user-friendly applications tailored for smartphones and tablets, ensuring seamless design, development, and maintenance."' icon1="https://www.facebook.com/profile.php?id=100006207499088&mibextid=LQQJ4d" icon2="https://www.instagram.com/cade019?igsh=cDdkNjhpYXFqNHZx&utm_source=qr" icon3="https://github.com/tdnaw" icon4="tdaunawnaw09@gmail.com" />
                            </div>
                        </section>


                    </section>

                </section>
            </section >
            <Footer />
        </>
    )
}
export default Aboutus;

