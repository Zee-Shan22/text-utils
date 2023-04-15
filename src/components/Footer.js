import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { rgba } from 'polished';
import React from 'react'


function Footer(props) {
  return (
    <footer className={`bg-${props.mode === 'light' ? 'light' : 'dark'} text-center text-white my-5 `}>
      <div className="container p-3 pb-0 ">
        <section className="mb-2 h-10">
          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#3b5998" }} href="https://www.facebook.com/profile.php?id=100009220766187" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#55acee" }} href="https://twitter.com/Zee_Shan722" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#dd4b39" }} href="mailto:zeeshan22062001@gmail.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} href="https://www.instagram.com/zee__shan722/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#0082ca" }} href="https://www.linkedin.com/in/muhammad-zeeshan-ned-university" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: props.mode === 'light' ? rgba(0, 0, 0, 0.2) : 'dark', color: props.mode === 'light' ? 'gray' : 'dark' }} >
        Designed and developed by <b>Muhammad Zeeshan</b>
      </div>
    </footer>
  );
}

export default Footer;
