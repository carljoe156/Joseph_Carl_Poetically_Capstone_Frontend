import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-r from-gray-100 via-sky-100 to-gray-100 relative bottom-0 left-0 w-full">
      <div className="footer-container max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8 flex justify-between items-center text-sm text-gray-600">
        {/* Our Left Section */}
        <div className="footer-left">
          <p>
            &copy; {new Date().getFullYear()} Poetically, A ServeSpoon Company.
            All rights reserved.
          </p>
        </div>

        {/* Our Center Section */}
        <div className="footer-center text-center">
          <p>Follow me on:</p>
          <div className="social-links flex justify-center gap-4 mt-2">
            <a
              href="https://github.com/carljoe156"
              className="social-link hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://linkedin.com/in/carljoseph156"
              className="social-link hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://linkedin.com/in/carljoseph156"
              className="social-link hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Personal Website
            </a>
          </div>
        </div>

        {/* Our Right Section */}
        <div className="footer-right flex gap-4">
          <a href="/guestbook" className="footer-link hover:underline">
            GuestBook
          </a>
          <a href="/privacy" className="footer-link hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="footer-link hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
