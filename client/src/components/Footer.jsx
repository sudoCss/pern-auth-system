import { CgMail } from "react-icons/cg";
import {
    FaCodepen,
    FaFacebook,
    FaGithub,
    FaGitlab,
    FaPhone,
    FaReddit,
    FaTelegram,
    FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className="container footer-content">
                <p>Made With ❤️, By Hamza Kalash AKA sudoCss. </p>
                <ul className="links">
                    <li>
                        <a
                            href="mailto:alkalash.hamza@gmail.com"
                            target={"_blank"}
                            title="Mail me"
                        >
                            <CgMail />
                        </a>
                    </li>
                    <li>
                        <a
                            href="tel:00963992636101"
                            target={"_blank"}
                            title="Call me"
                        >
                            <FaPhone />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/sudoCss"
                            target={"_blank"}
                            title="Contact me via Telegram"
                        >
                            <FaTelegram />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/sudoCss_channel"
                            target={"_blank"}
                            title="Take a look at my Telegram channel"
                        >
                            <FaTelegramPlane />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://facebook.com/sudoCss.hamza"
                            target={"_blank"}
                            title="Follow me on Facebook"
                        >
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://reddit.com/u/sudoCss"
                            target={"_blank"}
                            title="I just LOVE Reddit"
                        >
                            <FaReddit />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/sudoCss"
                            target={"_blank"}
                            title="See my Github profile"
                        >
                            <FaGithub />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://gitlab.com/sudoCss"
                            target={"_blank"}
                            title="See my Gitlab Profile"
                        >
                            <FaGitlab />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://codepen.io/sudoCss"
                            target={"_blank"}
                            title="Let's do something crazy together on Codepen"
                        >
                            <FaCodepen />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
