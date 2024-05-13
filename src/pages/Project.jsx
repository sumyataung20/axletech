import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/Navbar.css"
import ProjectCard from "../components/ProjectCard";
import img1 from "../images/homepage/smtmockup.png"
import img2 from "../images/homepage/safepropertymockup.png"
import logo from "../images/homepage/axletechlogowhite.png"
// import Title from "../components/Title"

const Project = () => {
    return (
        <>

            <section className="background-gradient w-full h-full pb-20">
            {/* <Title title="Project" /> */}
                <section>
                    <Navbar />


                    <section className="max-w-4xl mx-auto items-center justify-center ">

                        <div className="xs:text-[20px] text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-[28px] font-medium text-textDefault tracking-wide xs:mb-6 sm:mb-8 md:mb-10 mb-12 xs:pt-[120px] lg:pt-[150px]">Our <span className="text-textSecondary"> Projects </span></div>
                        <section className="">
                            <div className="mb-[30px] lg:mb-[30px]">
                                <ProjectCard image={img1}
                                    title="Sun Myat Tun Construction"
                                    content1="Introducing Sun Myat Tun, the dynamic force that has been shaping its economic landscape since its inception in 2009. In a strategic move to enhance their online presence in Myanmar, the esteemed company chose Axle Tech to spearhead the design, development, and management of their website.
                                    "
                                    content2="At Axle Tech, we took pride in delivering a comprehensive suite of services to Sun Myat Tun. From cutting-edge UI/UX design and seamless website development to SEO optimizations, hosting & maintenance, and robust digital security measures – we left no stone unturned to ensure a top-notch digital experience."
                                    content3="The website we crafted for Sun Myat Tun serves a multifaceted purpose. It's not just a digital presence; it's a virtual showcase of their rich company history, a testament to their achievements, and a dynamic platform to highlight both current and upcoming projects. Our commitment extends beyond the ordinary – we've integrated a captivating gallery feature for customers to browse through, providing real-time updates on the progress of their purchased projects."
                                    content4="Experience the synergy of Sun Myat Tun and Axle Tech – where innovation meets digital excellence, and your journey through their portfolio becomes a captivating exploration."
                                    footer="Powered by aXLe Tech"
                                    footerimg={logo}
                                    link="https://www.sunmyattun.com/" />
                            </div>
                            <div className="mb-[30px] lg:mb-[30px]">
                                <ProjectCard image={img2}
                                    title="Safe Property"
                                    content1="Welcome to Safe Property – your trusted partner in real estate since 2020. To enhance your experience, Safe Property has collaborated with Axle Tech, a leading tech agency specializing in website design and development."
                                    content2="At Axle Tech, we've crafted a user-centric platform for Safe Property, combining cutting-edge UI/UX design with seamless website functionality. Our dedication to excellence extends to SEO optimizations, ensuring your property search is both convenient and easily discoverable."
                                    content3="Beyond aesthetics, our website serves as a dynamic marketplace where all agents and vendors can showcase their projects. This inclusive platform allows for a diverse range of properties to be featured, providing you with a comprehensive selection. We prioritize transparency, keeping you informed at every stage of your property journey.
                                    "
                                    content4="Experience the innovation and digital excellence of Safe Property and Axle Tech. Trust us to be your reliable companion in the world of real estate, where your property aspirations find a secure and engaging home."

                                    footer="Powered by aXLe Tech"
                                    footerimg={logo}
                                    link="https://www.safepropertymm.com" />
                            </div>

                        </section>
                    </section>
                </section>
            </section>


            <Footer />
        </>
    )
}

export default Project;