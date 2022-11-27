import React from 'react';
import '../styles/PrivacyPolicy.scss';
import Layout from "../components/Layout";

const PrivacyPolicy = () => {

    return(
        <Layout>
            <div className="privacyPolicy">
                <h6>Privacy Policy</h6>
                <p>We only collect and use the information you provide to us voluntarily through the contact form. This includes your name, email, and any other information you choose to provide. Your information will only be used to help us understand why you choose to reach out and how we can help you or respond to you. We will not sell your information and it will only be used to help us work with you and stay in contact.</p>
            </div>
        </Layout>
    );
}

export default PrivacyPolicy;