const Footer = () => {
  return (
    <div className="footer-containt py-5 border bg-gray-100 px-4 md:px-20 lg:px-72">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        
        {/* Left Section (Links) */}
        <div className="space-x-5">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="/about" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/about" className="hover:underline">
            Licensing
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div>
          <p>
            Created By <b>Rishav Kumar</b> <span>@2025 All Rights Reserved</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
