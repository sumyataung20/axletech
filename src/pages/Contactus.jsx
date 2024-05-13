import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import contactus from '../images/homepage/contactus1.png';
import { FaPhone, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// import Title from '../components/Title';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';

const Contact = () => {

  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!captchaValue) {
      toast.error("Please complete the reCAPTCHA challenge.", {
        theme: "dark",
      });

      setLoading(false);
      return;
    }

    emailjs.sendForm('service_bnmpus9', 'template_srorw2t', form.current, 'ff15yZ7g_usKsYOlz')
      .then((result) => {
        if (result.text === "OK") {
          setLoading(false);
          console.log(result.text);
          toast.success("Thanks for your Message. Email sent successfully!", {
            theme: "dark",
            autoClose: 2000
          });
          form.current.reset();
        }
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <section className="background-gradient w-full h-full">
        {/* <Title title="Contactus" /> */}
        <section className="xs:py-12 sm:py-[80px] md:py-[120px] lg:py-[20px]">
          <Navbar />
          <section className="max-w-6xl mx-auto flex flex-col justify-center items-center xs:p-8 sm:p-8 md:p-12 lg:p-16">
            <div className="text-center mt-10 w-full sm:w-1/2">
              <h1 className="xs:text-[20px] sm:text-xl md:text-2xl lg:text-2xl xl:text-[28px] font-medium text-textSecondary tracking-wide mb-3">
                Contact Us
              </h1>
              <p className="text-center text-textDefault px-3">
                We are always here to help out whatever way we can
              </p>
              <img src={contactus} alt="contactus" className="mx-auto mt-4 h-auto w-4/6 " />
            </div>
            <form
              ref={form}
              className="w-full sm:w-1/2 mt-8 sm:mt-0"
              onSubmit={sendEmail}
            >
              {/* ... Input and Textarea components ... */}
              <div className="mb-4 sm:mb-8">
<Input
  type="text"
  icon={<FaUser color="#fff" />}
  placeholder="Name"
  name="name"
 
/>
</div><div className="mb-4 sm:mb-8">
<Input
  type="text"
  icon={<FaPhone color="#fff" />}
  placeholder="Phone"
  name="phone"
  
/>
</div>
<div className="mb-4 sm:mb-8">
<Input
  type="email"
  icon={<MdEmail color="#fff" />}
  placeholder="Email"
  name="email"
  
/>
</div>
<div className="mb-4 sm:mb-8">
<Textarea
  placeholder="Write your message"
  name="message"
 
/>
</div>


              <div className="g-recaptcha mb-4 sm:mb-6 w-full">
                <ReCAPTCHA
                  sitekey="6Lc_hz8pAAAAALWUxSEEauIyVkMwJHSv6eHIE2XN"
                  onChange={handleCaptchaChange}
                  size='normal'
                />
              </div>

              <div className="mb-4 sm:mb-8">
                <button
                  type="submit"
                  className="bg-textSecondary hover:bg-textSecondary3 text-background3 w-full py-4 rounded-md"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Submit'}
                </button>
              </div>
            </form>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
