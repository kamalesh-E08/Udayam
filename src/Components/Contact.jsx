import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-intro">For any inquiries, feel free to contact us.</p>

      {/* Contact Details */}
      <div className="contact-details">
        <div className="contact-card">
          <h3>Staff Coordinator</h3>
          <p><strong>Name:</strong> Mr. P. Mathivannan</p>
          <p><strong>Phone:</strong> +91 98949 09566</p>
          <p><strong>Email:</strong> johndoe@email.com</p>
        </div>
        <div className="contact-card">
          <h3>Student Coordinator</h3>
          <p><strong>Name:</strong> V. GokulBharath</p>
          <p><strong>Phone:</strong> +91 99446 99989</p>
          <p><strong>Email:</strong> gokulbharath@gmail.com</p>
        </div>     
        <div className="contact-card">
          <h3>College Address</h3>
          <p>KIT-Kalaignarkarunanidhi Institute of Technology</p>
          <p>Kannampalayam (Post),</p>
          <p>Coimbatore - 641 402,</p>
          <p>Tamil Nadu, India.</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="social-links">
        <h3>Follow Us</h3>
        <a href="https://www.instagram.com/kitcbe_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com/school/kit-kalaignarkarunanidhi-institute-of-technology/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://wa.me/9944699989" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
