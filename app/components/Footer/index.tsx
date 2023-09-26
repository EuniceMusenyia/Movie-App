import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 gap-16">
      <div className="container mx-auto py-10 px-25 gap-8">
        <div className="flex justify-between gap-8">
          <div className="">
            <h4 className="text-3xl font-bold text-white">Download Our App</h4>
            <h4 className="text-3xl font-semibold">
              M<span className="text-yellow-400 text-4xl">oo</span>vie
            </h4>
          </div>

          <div className="footer-div-3">
            <h4 className="text-3xl text-white font-bold">Navigation</h4>
            <li className="list-none">Home</li>
            <li className="list-none">My List</li>
            <li className="list-none">About Us</li>
          </div>

          <div className="footer-div-3">
            <h4 className="text-3xl text-white font-bold">Legal</h4>
            <li className="list-none">General Terms</li>
            <li className="list-none">Privacy Policy</li>
            <li className="list-none">Cookie Policy</li>
          </div>

          <div className="footer-div-">
            <h4 className="text-3xl text-white font-bold">Contact Us:</h4>
            <li className="list-none"> support@movie.com</li>
            <li className="list-none"> +1 254-710-378-890</li>
            <li className="list-none">OR By Using:</li>
            <div className="flex">
              <a href="#" className="">
                <i className="fab fa-facebook-f px-2 py-2 text-4xl"></i>
              </a>
              <a href="#" className="">
                <i className="fab fa-instagram "></i>
              </a>
              <a
                href="https://www.instagram.com/your-instagram-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />{" "}
              </a>
              <a
                href="https://www.facebook.com/your-facebook-page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="footer-div-3">
            <h3 className="text-3xl text-white">Share Website Via:</h3>
            <p>Facebook</p>
            Instagram
          </div>

        </div>
        <hr className="my-6 w-200 ml-60 mr-60" style={{ width: "" }} />
        <p className="text-center text-gray-500 text-sm">
          &copy; 2023 Movies. All rights reserved.
        </p>
      </div>

    </footer>
  );
};
export default Footer;
