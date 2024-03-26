import Link from "next/link";
import { FaBlog } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <aside>
        <FaBlog className="text-6xl"/>
        <p>
          CzBlog
          <br />
          ...your web3 blog
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Home</h6>
        <Link href="#" className="link link-hover">About Us</Link>
        <Link href="#" className="link link-hover">Contact Us</Link>
        <Link href="#" className="link link-hover">FAQ</Link>
        <Link href="#" className="link link-hover">Advertisement</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Blog</h6>
        <Link href="#" className="link link-hover">About us</Link>
        <Link href="#" className="link link-hover">Contact</Link>
        <Link href="#" className="link link-hover">Jobs</Link>
        <Link href="#" className="link link-hover">Press kit</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="#" className="link link-hover">Terms of use</Link>
        <Link href="#" className="link link-hover">Privacy policy</Link>
        <Link href="#" className="link link-hover">Cookie policy</Link>
      </nav>
    </footer>
  );
}

export default Footer