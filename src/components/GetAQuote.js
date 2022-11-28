import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/GetAQuote.scss';

const GetAQuote = () => {

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_k8lwgll', 'template_ssridh6', form.current, 'jNY0lGrNxSb3KUch9');
    }

    return(
        <div className="getAQuote">
            <h2>Ready to take your business to the next level? Get your <span>free</span> quote today!</h2>
            <form ref={form} onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Full Name' required />
                <input type="email" name='email' placeholder='Email Address' required />
                <textarea name="description" id="description" cols="30" rows="10" placeholder='Message' ></textarea>
                <input id='submitButton' type="submit" />
            </form>
        </div>
    );
}

export default GetAQuote;