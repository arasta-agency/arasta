/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'


import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

//icons
import { RiInstagramFill, RiFacebookFill, RiTwitterFill, RiYoutubeFill,RiTiktokFill,RiWhatsappFill } from 'react-icons/ri';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Connect = () => {
    const [agreed, setAgreed] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        country: 'IQ',
        phone: '',
        message: '',
      });
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault(); // 🚨 stops POST
      
        const whatsappNumber = "9647510615254"; // change to your number
      
        const message = `
      New Contact Request
      Name: ${formData.firstName} ${formData.lastName}
      Company: ${formData.company}
      Email: ${formData.email}
      Phone: ${formData.country} ${formData.phone}
      
      Message:
      ${formData.message}
        `;
      
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      
        window.open(url, "_blank");
      };

    return (
        // <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8"> --original
        <div className="isolate mt-44 mb-36 p-6 mx-auto max-w-sm sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            {/* <div role="main" className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold tracking-tight text-center text-primary sm:text-5xl">News & Blogs</h1>
                <p className="text-sm lg:text-base font-medium text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">Stay updated with our news and blog for valuable insights and resources. Join our community and access the latest trends and opportunities in education.</p>
            </div> */}

            {/* <div className="mx-auto max-w-2xl text-center mt-28 "> --original */}
            <div className="mx-auto text-center">
                <h2 className="title">Contact Us</h2>
                <p className="mt-2 subdesc">
                    We are here to assist you on your study abroad journey.
                </p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    {/* First Name */}
                        <div>
                        <label className="block text-sm font-semibold leading-6 text-gray-600">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                            required
                            />
                        </div>
                        </div>

                        {/* Last Name */}
                        <div>
                        <label className="block text-sm font-semibold leading-6 text-gray-600">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                            required
                            />
                        </div>
                        </div>

                        {/* Company */}
                        <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-600">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>
                        </div>

                        {/* Email */}
                        <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-600">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                            required
                            />
                        </div>
                        </div>

                        {/* Phone */}
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold leading-6 text-gray-600">
                                Phone number
                            </label>

                            <div className="relative mt-2.5">
                                {/* Country selector */}
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                <select
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="h-full rounded-md border-0 bg-transparent py-0 pl-4 pr-9 text-gray-400
                                            focus:ring-2 focus:ring-indigo-600 sm:text-sm appearance-none"
                                >
                                    <option value="IQ">IQ</option>
                                    <option value="US">US</option>
                                    <option value="EU">EU</option>
                                </select>

                               
                                </div>

                                {/* Phone input */}
                                <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-800
                                            shadow-sm ring-1 ring-inset ring-gray-300
                                            focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                                required
                                />
                            </div>
                            </div>

                        {/* Message */}
                        <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold leading-6 text-gray-600">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>
                        </div>
                    <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2 justify-center">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? 'bg-primary' : 'bg-gray-200',
                                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                )}
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-gray-700">
                            By selecting this, you agree to allow us to contact you via phone
                        </Switch.Label>
                    </Switch.Group>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-xl bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xl hover:bg-primary-hover focus:bg-primary-hover duration-300 transition-colors"
                    >
                        Let's talk in WhatsApp
                    </button>
                    
                </div>
            </form>

            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a href="mailto:arasta.agency1@gmail.com" className="text-primary font-semibold hover:text-gray-500 duration-300 transition-colors">arasta.agency1@gmail.com</a>
                <p className="leading-normal my-5 text-gray-700 ">
                    <a href="https://maps.app.goo.gl/xztiEixiHA5riuMG6" className='hover:text-gray-500 duration-300 transition-colors'>
                        Ranya bazar,talari dawan, Beside Hama azhy Caffe
                    </a>
                </p>
                <span className="inline-flex">
                <a
                    href="https://www.facebook.com/arasta.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#3b5998] cursor-pointer text-2xl duration-300 transition-colors"
                >
                    <RiFacebookFill />
                </a>

                <a
                    href="https://wa.me/9647510615254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-gray-500 hover:text-[#25D366] cursor-pointer text-2xl duration-300 transition-colors"
                    >
                    <RiWhatsappFill />
                    </a>

                <a
                    href="https://www.instagram.com/arasta.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-gray-500 hover:text-[#e2457a] cursor-pointer text-2xl duration-300 transition-colors"
                >
                    <RiInstagramFill />
                </a>

                <a
                    href="https://www.tiktok.com/@arasta.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-gray-500 hover:text-[#CD201F] cursor-pointer text-2xl duration-300 transition-colors"
                >
                    <RiTiktokFill />
                </a>
                </span>
            </div>

        </div>
    )
}

export default Connect