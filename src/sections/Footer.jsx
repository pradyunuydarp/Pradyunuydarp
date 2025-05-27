
import {FaGithub, FaInstagram, FaLinkedin, FaGithubSquare} from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            {/*<div className="text-white-500 flex gap-2">*/}
            {/*    <p>Terms & Conditions</p>*/}
            {/*    <p>|</p>*/}
            {/*    <p>Privacy Policy</p>*/}
            {/*</div>*/}

            <div className="flex gap-3">

                    <a
                        href="https://www.linkedin.com/in/pradyun-devarakonda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="inline-block p-3 rounded-md bg-[#1a1a2e]] hover:bg-[#62646C] transition duration-300"
                    >
                        <FaLinkedin size={24} color="#fff" />
                    </a>

                    <a
                        href="https://github.com/pradyunuydarp"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="inline-block p-3 rounded-md bg-[#1a1a2e]] hover:bg-[#62646C] transition duration-300"
                    >
                        <FaGithubSquare size={24} color="#fff" />
                    </a>
                    <a
                        href="https://www.instagram.com/pradyunuydarp/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="inline-block p-3 rounded-md bg-[#1a1a2e]] hover:bg-[#62646C] transition duration-300"
                    >
                        <FaInstagram size={24} color="#fff" />
                    </a>



                {/*<div className="social-icon">*/}
                {/*    <img src="assets/github.svg" alt="github" className="w-1/2 h-1/2" />*/}
                {/*    <a href={"https://github.com/pradyunuydarp"} target={"_blank"} rel={"noreferrer"}></a>*/}
                {/*</div>*/}
                {/*<div className="social-icon">*/}
                {/*    <img src="assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />*/}
                {/*</div>*/}
                {/*<div className="social-icon">*/}
                {/*    <img src="assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />*/}
                {/*    <a href={"https://instagram.com/pradyunuydarp"} target={"_blank"} rel={"noreferrer"}></a>*/}
                {/*</div>*/}
            </div>

            <p className="text-white-500">© 2025 Pradyun Devarakonda. All rights reserved.</p>
        </footer>
    );
};

export default Footer;