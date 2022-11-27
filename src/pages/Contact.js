import React, { useRef, useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import emailjs from '@emailjs/browser';
import '../styles/Contact.scss';

const Contact = () => {
    const [isForm, setIsForm] = useState(true);

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_k8lwgll', 'template_1cbqcrt', form.current, 'jNY0lGrNxSb3KUch9');
        setIsForm(false);
    }

    const ContactForm = () => {

        return(
            <div className="contactForm">
                <h6>Contact form</h6>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className="nameInputs">
                        <input type="text" name="firstName" placeholder='First Name' required />
                        <input type="text" name="lastName" placeholder='Last Name' />
                    </div>
                    <input name="email" id="emailInput" type="email" placeholder='Email' />
                    <select name='reason'>
                        <option value="" hidden>Why are you reaching out?</option>
                        <option value="quote">Get a quote</option>
                        <option value="review">Leave a review</option>
                        <option value="question">Ask a question</option>
                        <option value="other">Other</option>
                    </select>
                    <textarea name="description" id="description" cols="30" rows="10" placeholder='Short Description' ></textarea>
                    <input id='submitButton' type="submit" />
                </form>
            </div>
        );
    }

    const SubmitMessage = () => {

        return(
            <div className="contactForm">
                <div className="submitMessage">
                    <StaticImage src='../imgs/circleCheck.png' alt='Circled check mark' placeholder='blurred' quality={100} />
                    <p>Thanks for your submission! I will get back to you shortly so keep an eye on your email!</p>
                </div>
            </div>
        )
    }

    const formCheck = () => {
        if(isForm === true){
            return <ContactForm />
        }else{
            return <SubmitMessage />
        }
    }

    return(
        <Layout>
            <div className="contact">
                <div className="contactInformation">
                    <h5>Contact me</h5>
                    <p>Reach out to get a quote, commission a website, or for any other general inquiries. Fill out the form with a short description and your email or give me a call, email, or text and I will get back to you within 48 hours.</p>
                    <div className="otherFormsOfContactContainer">
                        <h6>Other forms of contact:</h6>
                        <div className="otherFormsOfContact">
                            <div>
                                <p>Email:</p>
                                <p>Phone Number:</p>
                            </div>
                            <div className="right">
                                <p>falk.travis@falkwebdesign.com</p>
                                <p>(860) 924-7316</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contactFormContainer">
                    {formCheck()}
                </div>
            </div>
        </Layout>
    );
}

export default Contact;
