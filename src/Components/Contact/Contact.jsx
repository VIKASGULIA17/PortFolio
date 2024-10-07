import React, { useState } from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const data = {
        Name: name,
        Email: email,
        Phone: phone,
        Address: address,
        Subject: subject,
        Message: message,
      };
      await axios
        .post(
          "https://sheet.best/api/sheets/019c92f7-c225-4c7b-97f4-88eff6cbd63a",
          data
        )
        .then((response) => {
          console.log(response);
        });
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div
      id="Contact"
      className="w-full h-auto bg-black px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 3xl:px-24 3xl:py-28 md:text-center lg:text-left hd:h-[40vh]"
    >
      <div className="w-full h-full flex flex-col lg:flex-row bg-[#292929] text-zinc-50">
        {/* Contact Info */}
        <div className="lg:w-1/2 h-full lg:pl-20 lg:pr-10 lg:pt-24 hidden md:block lg:block">
          <h1 className="text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl pt-5 pb-6 hd:text-[100px]">
            Get In Touch
          </h1>
          <h4 className="text-lg md:text-xl lg:text-2xl pb-4 md:pb-6 hd:text-[60px] hd:my-10">
            Uttam Nagar, New Delhi, 110059
          </h4>
          <p className="text-base md:text-lg lg:text-xl text-white font-medium hd:text-[40px]">
            Email: vikasgulia17@gmail.com
          </p>
          <div className="flex text-lg md:text-xl gap-3 pt-8 md:pt-10 items-center justify-center lg:justify-start hd:my-10 hd:gap-6">
            <a
              href="https://www.instagram.com/vikasgulia17?igsh=bXFoMXNrMnM2dXdq"
              aria-label="Instagram Profile"
              target="_blank"
              rel="noopener noreferrer"
              
              className="border-2 rounded-full hd:text-3xl border-white p-2"
            >
              <BsInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-gulia-b28255298"
              aria-label="LinkedIn Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 rounded-full hd:text-3xl border-white p-2"
            >
              <GrLinkedinOption />
            </a>
            <a
              href="https://github.com/VIKASGULIA17"
              aria-label="GitHub Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 rounded-full hd:text-3xl border-white p-2"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <h1 className="text-4xl text-center pt-4 text-zinc-100 font-semibold md:hidden lg:hidden">
          Contact Us
        </h1>
        {/* Contact Form */}
        <div className="lg:w-1/2 h-full pt-8 lg:pt-24">
          <form
            onSubmit={handleSubmit}
            className="px-4 lg:px-8 xl:px-12 3xl:px-24"
          >
            <div className="flex flex-col gap-4">
              {/* Name and Email */}
              <div className="flex flex-col md:flex-row md:gap-4">
                <input
                  className="capitalize bg-transparent focus:outline-none py-2 pl-4 border-b-2 border-zinc-400 placeholder:text-white text-lg md:text-xl w-full md:w-1/2 hd:text-[37px]"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="capitalize bg-transparent focus:outline-none py-2 pl-4 border-b-2 border-zinc-400 placeholder:text-white text-lg md:text-xl w-full md:w-1/2 mt-4 md:mt-0 hd:text-[37px]"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {/* Phone and Address */}
              <div className="flex flex-col md:flex-row md:gap-4">
                <input
                  className="capitalize bg-transparent focus:outline-none py-2 pl-4 border-b-2 border-zinc-400 placeholder:text-white text-lg md:text-xl w-full md:w-1/2 hd:text-[37px]"
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  className="capitalize bg-transparent focus:outline-none py-2 pl-4 border-b-2 border-zinc-400 placeholder:text-white text-lg md:text-xl w-full md:w-1/2 mt-4 md:mt-0 hd:text-[37px]"
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              {/* Subject */}
              <div className="w-full">
                <input
                  className="capitalize bg-transparent focus:outline-none py-2 pl-4 border-b-2 border-zinc-400 placeholder:text-white text-lg md:text-xl w-full hd:text-[37px]"
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>
              {/* Message */}
              <div className="w-full">
                <textarea
                  name="message"
                  placeholder="Type your message"
                  className="hd:text-[37px] capitalize bg-transparent focus:outline-none py-2 pl-4 border-b-2 border-zinc-400 placeholder:text-white text-lg md:text-xl w-full h-32 md:h-40 lg:h-48"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              {/* Submit Button */}
              <div className="w-full flex justify-start">
                <button
                  type="submit"
                  className="duration-500 bg-[#E6C7EB] border-2 border-[#E6C7EB] font-extralight w-full md:w-full lg:w-full h-10 mt-4 text-lg text-black hover:bg-transparent hover:text-[#E6C7EB] mb-5 hd:text-[37px] hd:h-16"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
