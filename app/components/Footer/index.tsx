import { FaFacebook, FaInstagram } from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="bg-black text-white gap-8">
        <div className="container mx-auto py-10 px-25 gap-8">

          <div className="flex justify-between gap-8">
            <div className="">
              <h3 className="text-3xl">Download Our App</h3>
              <h1 className="text-5xl font-bold">M<span className="text-yellow-400">oo</span>vie</h1>
            </div>

            <div className="footer-div-3">
              <h3 className="text-3xl">Navigation</h3>
              <li className="list-none">Home</li>
              <li className="list-none">My List</li>
              <li className="list-none">About Us</li>
            </div>

            <div className="footer-div-3">
              <h3 className="text-3xl">Legal</h3>
              <li className="list-none">General Terms</li>
              <li className="list-none">Privacy Policy</li>
              <li className="list-none">Cookie Policy</li>
            </div>

            <div className="footer-div-3">
              <h3 className="text-3xl">Contact Us:</h3>
              <li className="list-none"> support@movie.com</li>
              <li className="list-none"> +1 123-456-7890</li>
              <div className="flex">
                <a href="#" className="mr-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="mr-2">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
        <FaInstagram />  </a> 
        <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
             <FaFacebook />
            </a>
              </div>
            </div>

            <div className="footer-div-3">
              <h3 className="text-3xl">Share Website Via:</h3>
              <p>
            Facebook</p>
                Instagram 
            </div>

          </div>
          <hr className="my-6 w-full" style={{ width: '100%' }} />
          <p className="text-center text-gray-500 text-sm">
            &copy; 2023 Movies. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  export default Footer;