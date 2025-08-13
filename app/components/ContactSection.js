import { MapPinIcon, EnvelopeIcon, PhoneIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_lw2ama2';
    const templateID = 'template_co4fljc';
    const publicKey = 'GdzEvJPehKMBxNHVa';

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message sent!',
          text: 'Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', message: '' });
        setStatusMessage('');
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send message. Please try again later.',
        });
        setStatusMessage('');
      });
  };

  return (
    <div className="bg-gray-900 text-gray-100 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* KIRI - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white">Get in touch</h2>
          <p className="text-gray-300 max-w-lg">Feel free to reach out to me via any of the following contact methods. I look forward to hearing from you!</p>

          <ul className="space-y-6">
            <li className="flex items-center space-x-4">
              <MapPinIcon className="h-7 w-7 text-cyan-400" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-gray-400">Jakarta, Indonesia</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <EnvelopeIcon className="h-7 w-7 text-cyan-400" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-gray-400">naufal@example.com</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <PhoneIcon className="h-7 w-7 text-cyan-400" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-gray-400">+62 812-3456-7890</p>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <ChatBubbleBottomCenterIcon className="h-7 w-7 text-cyan-400" aria-hidden="true" />
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  Chat with me on WhatsApp
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* KANAN - Contact Form */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-8">Send your message</h2>
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-md bg-gray-800 px-4 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-md bg-gray-800 px-4 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md bg-gray-800 px-4 py-2 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition">
              Submit
            </button>
            {statusMessage && <p className="mt-4 text-center text-cyan-400">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
