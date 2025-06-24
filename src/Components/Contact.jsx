
import { useForm, ValidationError } from '@formspree/react';
//import axios from "axios";
const Contact = () => {

  // ******************* formspree.io****************************//
  const [state, handleSubmit] = useForm("mvganlon");
  if (state.succeeded) {
      return (
  <p className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-medium rounded-xl p-4 mt-4 shadow-md animate-pulse text-center">
    🎉 Thanks for joining!
  </p>
);

  }

  

  return (
   <div className="contact-container py-20 bg-gray-200 px-4" id="contacts">
  <h2 className="text-4xl font-bold text-center">Contact Me</h2>
  <h3 className="text-center pb-16">___ get in touch ___</h3>

  {/* Responsive Container */}
  <div className="container mx-auto flex flex-col  md:flex-row md:space-x-8 space-y-8 md:space-y-0">
    
    {/* Contact Details */}
    <div className="w-full md:w-1/2 space-y-4 bg-gray-200 hover:bg-gray-300 p-6 rounded-lg shadow-md text-center">
      <div className="flex flex-col items-center gap-1">
        <i className="fa-solid fa-user text-orange-500 text-3xl"></i>
        <span className="text-lg font-medium">Rishav Kumar</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <i className="fa-solid fa-location-dot text-orange-500 text-3xl"></i>
        <span className="text-lg font-medium">Patna, Bihar, India, 800020</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <i className="fa-solid fa-envelope text-orange-500 text-3xl"></i>
        <span className="text-lg font-medium">rishavkumar8507@example.com</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <i className="fa-solid fa-phone text-orange-500 text-3xl"></i>
        <span className="text-lg font-medium">+91-8578828905</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <i className="fa-brands fa-linkedin-in text-orange-500 text-3xl"></i>
        <a href="https://www.linkedin.com/in/rishav-kumar-4b15b6197/" className="text-lg font-medium">Linkedin</a>
      </div>
      <div className="flex flex-col items-center gap-1">
        <i className="fa-brands fa-github text-orange-500 text-3xl"></i>
        <a href="https://github.com/RishavKumar8578" className="text-lg font-medium">Github</a>
      </div>
    </div>

    {/* Message Form */}
    <div className="w-full md:w-1/2 bg-gray-200 hover:bg-gray-300 p-6 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-semibold mb-6">Message Me</h3>
      <form className="space-y-2 bg-gray-200 hover:bg-gray-300" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded text-center"
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded text-center"
          required
        />
          <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
    
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="5"
          
          className="w-full p-2 border rounded text-center"
          required
        ></textarea>
          <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button
          type="submit" disabled={state.submitting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded transition"
        >
          Send Message
        </button>
        
      </form>

     


      {/* *********************************************** */}
    </div>
  </div>
</div>

  );
};

export default Contact;
