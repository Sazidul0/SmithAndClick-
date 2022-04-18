import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container container'>

            <h2 className=''>1. What is the difference between authorization and authentication?</h2>
            <div className='ms-3'>
                <p className='mb-0'><b>Authentication:</b></p>
                <p>Authentication verifies who the user is. <br />
                    Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. <br />
                    Authentication is the first step of a good identity and access management process. <br />
                    Authentication is visible to and partially changeable by the user. <br />
                </p>
                <p className='mb-0'><b>Authorization:</b></p>
                <p>Authorization determines what resources a user can access. <br />
                    Authorization works through settings that are implemented and maintained by the organization. <br />
                    Authorization always takes place after authentication. <br />
                    Authorization isn’t visible to or changeable by the user.
                </p>
            </div>

            <h2>2. Why are we using firebase? What other options do we have to implement authentication?</h2>
            <p className='ms-3'>Firebase is a realtime database, which lets us build rich, collaborative applications by allowing secure access to the database directly from client-side code.Firebase provides a seamless way to integrate with Google analytics using which the user behavioral data can be acquired, and insightful information can be generated through it. <br />
                Firebase Alternatives:
                <ul>
                    <li>Parse</li>
                    <li>Back4App</li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                    <li>Couchbase</li>
                    <li>NativeScript</li>
                    <li>RxDB</li>
                    <li>Flutter</li>
                </ul>
            </p>

            <h2>3. What other services does firebase provide other than authentication?</h2>
            <p className='mb-0 ms-3'>There are many services which Firebase provides, Most useful of them are:</p>
            <ul>
                <li>Cloud Firestore.</li>
                <li>Cloud Functions.</li>
                <li>Hosting.</li>
                <li>Cloud Storage.</li>
                <li>Google Analytics.</li>
                <li>Firebase Realtime Database.</li>
                <li>Cloud Messaging.</li>
            </ul>
        </div>
    );
};

export default Blogs;