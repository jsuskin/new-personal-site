import React from "react";

export default function Contact() {
  return (
    <div className='contact'>
      <h1 className='page-header'>Contact</h1>
      <hr />
      <div className='contact-info'>
        <p>
          <span className='contact-type'>Email</span>
          
          <a href='mailto:JSuskin85@gmail.com'>JSuskin85@gmail.com</a>
        </p>
        <p>
          <span className='contact-type'>Phone</span>
          
          <a href='tel:3478605770'>347-860-5770</a>
        </p>
        <p>
          <span className='contact-type'>LinkedIn</span>
          
          <a href='https://www.linkedin.com/in/joshua-suskin/'>
            https://www.linkedin.com/in/joshua-suskin/
          </a>
        </p>
      </div>
    </div>
  );
}
