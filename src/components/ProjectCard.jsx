import "../components/Navbar.css"
import { Link } from 'react-router-dom';


const ProjectCard = ({ image, title, content1, content2, content3, content4, footer, footerimg, link }) => {
    return (
        <Link to={link} target="_blank" rel="noopener noreferrer">
            <div className="project-card xl:w-[1300px] lg:w-[1000px] lg:mx-auto lg:ml-[50%] lg:translate-x-[-50%] mb-4 p-4 transition ease-in-out">
                <div className="border-1 rounded-md shadow-xl flex flex-col md:flex-row items-center justify-center">
                    <img className="max-w-full md:w-6/12 lg:w-5/12 h-auto mb-4  px-3 py-2 md:mb-auto" src={image} alt="cardimg" />
                    <div className="w-full md:w-6/12 lg:w-7/12 px-3 py-4">

                        <h1 className="text-center md:text-left text-[18px] sm:text-lg md:text-xl lg:text-2xl text-textSecondary mb-3">{title}</h1>
                        <div className="text-md text-textDefault text-justify mb-2">{content1}</div>
                        <div className="text-md text-textDefault text-justify mb-2">{content2}</div>
                        <div className="text-md text-textDefault text-justify mb-2">{content3}</div>
                        <div className="text-md text-textDefault text-justify mb-2">{content4}</div>
                        <div className="flex justify-center md:justify-end items-center mt-4 pr-2">
                            <img src={footerimg} alt="footerimg" className="w-12 h-12 object-cover rounded-full" />
                            <span className="text-textDefault ml-2">{footer}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;



