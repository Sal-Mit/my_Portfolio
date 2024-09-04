"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

    const [state, handleSubmit] = useForm("xgvwlyqn");
    if (state.succeeded) {
        return <p>Thanks for contacting!</p>;
    }

    return (
        <div>
            <div className='justify-center py-5 px-10'>
                <div className="text-center py-10 ">
                    <h4 className='text-center font-bold'> Get in Touch!</h4>
                    <p className='text-sm'>Have a sweet project in mind or just want to say hi? Feel free to send me a message!</p>
                </div>
                
                <div className='flex justify-center'>
                    <form className=" max-w-lg w-4/5 p-4" onSubmit={handleSubmit}>
                        {/* <div class="relative z-0">
                            <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Floating standard</label>
                        </div> */}
                        <div class="form-label-div">
                            <input id="name" type="text" name="name" className="form-input peer"/>
                            <label htmlFor="name" className="form-label peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
                        </div>
                        
                        <div class="form-label-div">
                            <label htmlFor="email" className="form-label peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email Address</label>
                            <input id="email" type="email" name="email" className="form-input peer"/>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/> 
                        </div>
                        <div class="form-label-div">
                            <label htmlFor="subject" className="form-label peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Subject </label>
                            <input id="subject" type="text" name="subject" className="form-input peer"/>
                        </div>
                        <div class="form-label-div">
                            <label htmlFor="message" className="form-label peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Message</label>
                            <input id="message" name="message" type="text" className="form-input peer"/>
                            <ValidationError prefix="Message" field="message"errors={state.errors}/>
                        </div>
                        <div className="flex justify-center">
                            <button className="form-button" type="submit" disabled={state.submitting}>Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        
            );
        }
