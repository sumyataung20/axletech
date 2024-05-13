import Navbar from "../components/Navbar";
import Button from "../components/Button";
import landingimage from "../images/homepage/landingpage.png";
import aboutus from "../images/homepage/aboutus.png"
import { IoIosRocket } from "react-icons/io";
import Card from "../components/IconCard";
import ImageCard from "../components/ImageCard";
import safeproperty from "../images/homepage/safeproperty.png";
import smt from "../images/homepage/smt.png";
import icon1 from "../images/homepage/icon1(home).png";
import icon2 from "../images/homepage/icon2(home).png";
import icon3 from "../images/homepage/icon3(home).png"
import icon4 from "../images/homepage/hosting.png"
import Carousel from "../components/Carousel";
import Officestaff from "../images/homepage/Group 151.png"
import Footer from "../components/Footer";
// import Title from "../components/Title";

import "../components/Navbar.css"
const Home = () => {


  return (
    <>
      <section className="homesection">
      {/* <Title title="" /> */}
        <section className="w-full h-full xs:pb-[80px] sm:pb-[80px] md:pb-[120px] lg:pb-[200px] lg:pt-[80px] background-gradient">

          <Navbar />
          {/* Landing Page  */}
          <section>
            <div className="lg:max-w-7xl mx-auto p-4 ">
              <div className="lg:flex md:flex mt-[120px] xs:mt-[150px] sm:mt-[150px] md:mt-[150px] lg:mt-[120px]">
                {/* Left Side (Text) */}

                <div className="sm:block lg:w-1/2 md:mt-[60px] lg:mt-[80px]">
                  <h1 className="xs:text-[20px] xs:text-center sm:text-center md:text-justify sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 text-textDefault mx-auto">Creative Solution For Your
                    <span className="text-textSecondary lg:block md:block sm:text-2xl md:text-4xl lg:py-3 lg:text-6xl xl:text-7xl"> Business</span>
                  </h1>
                  <p className="text-textDefault my-3 xl:max-w-[550px] lg:max-w-[450px] md:max-w-[350px] font-normal text-md sm:text-md md:text-lg lg:text-[20px] xl:text-[22px] xs:text-center sm:text-center md:text-left xs:my-8">
                    We have committed to the best
                    solutions to grow your digital presence.
                  </p>
                  <p className="my-5 md:my-6 lg:my-8 text-center xs:text-sm md:text-start text-textSecondary1 text-shadow drop-shadow-[5_5px_10px_rgba(252,252,252,1)] font-medium text-md lg:text-lg tracking-wide">ENGINEERED FOR EXCELLENCE</p>
                  <div className="flex justify-center items-center md:justify-start xs:my-8 sm:my-5 md:my-5 lg:my-5 xl:my-7">
                    <Button to="/contact" className="text-textDefault border rounded-md border-textSecondary">
                      <IoIosRocket size={22} className="me-1" />Get Started
                    </Button>
                  </div>
                </div>

                {/* Right Side (Image) */}
                <div className="md:justify-normal sm:block xs:w-10/12 sm:w-9/12 md:w-6/12 lg:w-1/2 lg:mt-6 mx-auto xs:mt-[80px] sm:mt-[40px] text-center">
                  <img src={landingimage} alt="axletech" className="w-full h-full rounded-md" />
                </div>

              </div>
            </div>
          </section>
        </section>
        <section className="bg-background1">

          {/* About us  */}
          <div className="max-w-7xl mx-auto p-4 ">
            <div className="lg:flex md:flex ">

              <div className="md:justify-normal sm:block xs:w-10/12 sm:w-9/12 md:w-6/12 lg:w-1/2 lg:mt-6 mx-auto xs:mt-[40px] sm:mt-[40px] text-center">
                <img src={aboutus} alt="axletech" className="w-full h-full rounded-md" />
              </div>

              <div className="sm:block lg:w-1/2 md:mt-[60px] lg:mt-[150px]">
                <h1 className="xs:text-[20px] xs:text-center sm:text-center md:text-justify sm:text-lg md:text-lg lg:text-3xl font-medium mb-6 text-textDefault mx-auto tracking-wide">About <span className="text-textSecondary">Our Company</span></h1>
                <p className="text-textDefault my-3 xl:max-w-[550px] lg:max-w-[450px] md:max-w-[420px] font-normal text-sm md:text-md lg:text-lg xs:text-center sm:text-center md:text-justify">
                  Our  company develop software applications, including mobile apps, web apps, desktop software, and enterprise-level software solutions. They may create custom software tailored to the specific needs of their clients or develop commercial software products for wider distribution. <br /> <br />Many IT companies focus on web development and design, creating websites, e-commerce platforms, and web-based applications. They may offer services related to user experience (UX) and user interface (UI) design.
                </p>
                <div className="flex justify-center items-center md:justify-start xs:my-8 sm:my-5 md:my-5 lg:my-5 xl:my-7">
                  <Button to="/about" className="text-textDefault border rounded-md border-textSecondary">
                    <IoIosRocket size={22} className="me-1" />Find Out More
                  </Button>
                </div>
              </div>
            </div>
          </div>


        </section>

        {/* Services  */}

        <section className="bg-background2">
          <div className="py-[120px] xs:py-[80px] sm:py-[100px]">
            <h1 className="xs:text-[20px] text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-[28px] font-medium  text-textDefault tracking-wide mb-[60px] lg:mb-[120px]">What <span className="text-textSecondary">Services</span> We Offer You</h1>
            <div className="max-w-[1500px] mx-auto">
              <div className="flex flex-wrap items-center justify-center">
                <div className="w-full  sm:w-1/2 md:w-1/2 lg:w-1/4 p-4">
                  <Card
                    icon={icon1}
                    title="UI/UX Designs"
                    content="Create wireframes and prototypes to visualize the user interface
                    Develop the final visual design, including colors, typography, and graphics. "
                  />
                </div>

                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4">
                  <Card
                    icon={icon2}
                    title="Web Development"
                    content="Depending on the project, follow a web development process that includes planning, design, development, testing, deployment, and maintenance. "
                  />
                </div>               <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 p-4">
                  <Card
                    icon={icon3}
                    title="Digital Solutions"
                    content="Create a strong brand identity and messaging that conveys the value of your digital solutions to meet each client's specific needs."
                  />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4  p-4">
                  <Card
                    icon={icon4}
                    title="Web Hosting and Maintenance"
                    content="Offering ongoing maintenance and support services to ensure websites and applications remain secure, up-to-date, and optimized."
                  />
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* They trust us */}

        <section className="bg-background3 xs:py-[50px] sm:py-[80px] md:py-[80px] lg:py-[120px]">
          <h1 className="xs:text-[20px] text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-[28px] font-medium  text-textDefault tracking-wide mb-[60px] lg:mb-[120px]">They<span className="text-textSecondary"> Trust </span>Us</h1>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center justify-center">
              <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/4 p-4" >
                <ImageCard image={safeproperty} link="https://www.safepropertymm.com" />
              </div>
              <div className="w-full xs:w-1/2 sm:w-1/2 md:w-1/4 p-4">
                <ImageCard image={smt} link="https://www.sunmyattun.com" />
              </div>


            </div>
          </div>
        </section>

        {/* Honest Feedback  */}



        <section className="bg-background2 xs:py-[50px] sm:py-[60px] md:py-[80px] lg:py-[80px]">
          <h1 className="xs:text-[20px] text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-[28px] font-medium  text-textDefault tracking-wide mb-[60px] lg:mb-[120px] mt-[80px] xs:mt-[30px] sm:mt-[40px]">Clients'<span className="text-textSecondary"> Honest </span>Feedback</h1>
          <div className="max-w-7xl mx-auto">
            <Carousel />
          </div>
        </section>

        {/* Our Team of Experts  */}

        <section className="bg-background1 xs:py-[50px] sm:py-[60px] md:py-[80px] lg:py-[80px]">
          <h1 className="xs:text-[20px] text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-[28px] font-medium  text-textDefault tracking-wide mb-[60px] lg:mb-[80px] mt-[80px] xs:mt-[30px] sm:mt-[40px]">Our Team of<span className="text-textSecondary"> Experts </span></h1>
         
          <div className="xl:ml-[50%] xl:translate-x-[-50%] mx-auto">
  <div className="flex flex-wrap justify-center items-center mx-auto md:justify-between lg:justify-between">
    
    <div className="mb-4 w-full sm:w-1/2 lg:w-1/2 p-4 md:pr-4 ">
      <h1 className="text-xl md:text-2xl lg:text-2xl font-medium text-textSecondary tracking-wide mb-3">Experienced Designer</h1>
      <p className="text-textDefault mb-4 md:max-w-[420px] lg:max-w-[450px] xl:max-w-[550px] text-sm md:text-md lg:text-lg ">
        Elevate your brand with our experienced designers. From brand identity to user experience, we craft visuals that speak volumes. Experience design excellence with us.
      </p>
    </div>

    <div className="mb-4 w-full sm:w-1/2 lg:w-1/2 p-4 md:ps-4">
      <h1 className="text-xl md:text-2xl lg:text-2xl font-medium text-textSecondary tracking-wide mb-3">Well-trained Developers</h1>
      <p className="text-textDefault mb-4 md:max-w-[420px] lg:max-w-[450px] xl:max-w-[550px] text-sm md:text-md lg:text-lg ">
        Elevate your digital presence with our frontend and backend experts. From pixel-perfect interfaces to robust server-side architecture, we deliver comprehensive web development services.
      </p>
    </div>

    <div className="mb-4 w-full sm:w-full lg:w-1/2 p-4 md:pr-4 ">
      <h1 className="text-xl md:text-2xl lg:text-2xl font-medium text-textSecondary tracking-wide mb-3">Comprehensive Web Services</h1>
      <p className="text-textDefault mb-4 md:max-w-[420px] lg:max-w-[450px] xl:max-w-[550px] text-sm md:text-md lg:text-lg ">
        Elevate your digital presence with our comprehensive web services. From design innovation to full-stack development, we're your partner in achieving digital excellence.
      </p>
    </div>

    <div className="mb-4 w-full sm:w-full lg:w-1/2 p-4 md:ps-4">
      <h1 className="text-xl md:text-2xl lg:text-2xl font-medium text-textSecondary tracking-wide mb-3">Trusted Partners in Digital Excellence</h1>
      <p className="text-textDefault mb-4 md:max-w-[420px] lg:max-w-[450px] xl:max-w-[550px] text-sm md:text-md lg:text-lg">
        Building on a foundation of client trust, we are your reliable partner in digital excellence. Our track record speaks for itself – where visions meet results.
      </p>
    </div>
    
  </div>
</div>



          <div className="flex justify-center items-center mx-auto w-6/12 max-w-6/12 lg:mt-6">
            <img src={Officestaff} alt="officestaff" className=" object-cover rounded-md" />

          </div>
        </section>

        <Footer />
      </section>


    </>
  )
}

export default Home;