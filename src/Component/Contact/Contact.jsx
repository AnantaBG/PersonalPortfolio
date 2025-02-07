import { Card } from "flowbite-react";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiWhatsappLine } from "react-icons/ri";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
console.log(name, email, message)

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    emailjs
      .sendForm('Portfolio', 'template_x5ztkvi', form.current, {
        publicKey: '4p9RWWAptUPgixjFE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    // Basic validation (you can add more robust validation)
    if (!name ||!email ||!message) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      // Here you would typically make an API call to your backend to send the email
      // For this example, we'll just log the data to the console
      console.log('Form submitted:', { name, email, message });

      // Optionally, you can show a success message to the user
      alert('Thank you for your message!');

      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      

    } catch (error) {
      console.error('Error submitting form:', error);
      // Show an error message to the user
      alert('There was an error submitting your message. Please try again later.');
    }
  };
    return (
        <div className="mt-20 lg:w-3/4 mx-auto md:w-10/12 w-11/12" id="contact">
        <div className="flex mb-10 flex-col justify-center mx-auto text-center">
            <h2 className=" text-xl mt-6 ">Get In Touch</h2>
            <h2 className="sm:text-4xl text-3xl mt-4 text-[#4db5ff]">Contact Me</h2>
        </div>
            <div className="grid gap-2 sm:grid-cols-2">
                {/* Contact Options */}
                <div className="bg-[#1f1f38] flex flex-col justify-center mx-auto   transition duration-[600ms] ease-in-out ">
                <div className="hover:brightness-75 items-center flex flex-col max-w-xs  mb-2">
                    <Card className="bg-transparent  min-w-full border-transparent shadow-md shadow-blue-400 ">
                    <MdOutlineEmail className="text-3xl" />
                    <h4 className="text-base">Email</h4>
                    <h5 className="text-sm">anantabanikofficial@gmail.com</h5>
                    <a className="btn" href="https://mail.google.com/mail/?view=cm&fs=1&to=anantabanikofficial@gmail.com" target="_blank">Send Message</a>
                    </Card>
                    
                </div>
                <div className="hover:brightness-75 items-center flex flex-col mb-2 max-w-xs">
                    
                    <Card 
                    className="bg-transparent min-w-full border-transparent shadow-md shadow-blue-400">
                    <RiWhatsappLine className="text-3xl"/>
                    <h4 className="text-base">Whatsapp Messenger</h4>
                    <h5 className="text-sm">Ananta Banik</h5>
                    <a className="btn" href="https://wa.me/01622731790" target="_blank">Send Message</a>
                    </Card>
                    
                </div>
                <div className="hover:brightness-75 items-center flex flex-col mb-2 max-w-xs">
                    
                    <Card 
                    className="bg-transparent min-w-full border-transparent shadow-md shadow-blue-400">
                    <RiMessengerLine className="text-3xl"/>
                    <h4 className="text-base">Facebook Messenger</h4>
                    <h5 className="text-sm">RM Ananta Banik</h5>
                    <a className="btn" href="https://www.m.me/AnantaBanik3x/" target="_blank">Send Message</a>
                    </Card>
                    
                </div>
                </div>
                {/* Contact Form */}

                <div>
            <Card className="bg-transparent border-transparent shadow-md shadow-blue-400 ">
            <form ref={form} onSubmit={handleSubmit} className="min-w-full mx-auto">
      <div className="mb-4 bg-[#1f1f38]">
        <label htmlFor="name" className="block text-white font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-transparent shadow-md shadow-blue-500 appearance-none border rounded w-full py-2 px-3 text-white leading-tight bg-[#1f1f38] focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="border-transparent shadow-md shadow-blue-500 appearance-none border rounded w-full bg-[#1f1f38] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message" name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className=" appearance-none border rounded w-full py-2 px-3 text-white bg-[#1f1f38] leading-tight focus:outline-none border-transparent shadow-md shadow-blue-500 focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
            </Card>
            <div className='md:visible  invisible relative -rotate-90 translate-x-10'>
            <a href="#" className="text-2xl">Scroll Top</a>
            </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;