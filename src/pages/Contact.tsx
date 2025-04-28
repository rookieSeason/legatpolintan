// src/components/ContactPage.tsx

import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    // Sending email using EmailJS
    emailjs
      .sendForm(
        "service_bmj47pu",
        "template_z2wr1ib",
        e.target as HTMLFormElement,
        "RzerK8Yrri2R8RhRI"
      )
      .then((result) => {
        console.log(result.text);
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.log(error.text);
        setFormStatus("There was an error sending your message.");
      });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#18181b] flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-slate-50 dark:bg-zinc-800/90 p-8 rounded-3xl shadow-lg border border-solid border-gray-200 dark:border-none">
        <h2 className="text-2xl font-semibold text-center text-teal-600 dark:text-teal-500">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>

          {formStatus && (
            <div className="text-center text-sm font-medium text-gray-500 mt-4">
              {formStatus}
            </div>
          )}

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="w-full bg-teal-600 dark:bg-teal-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 hover:bg-teal-700 dark:hover:bg-teal-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
