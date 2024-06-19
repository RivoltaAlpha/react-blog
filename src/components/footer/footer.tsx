
import './footer.scss';
import { FooterProps } from '../../types/types';

const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="footer">
      {links.map((link, index) => (
        <a key={index} href={link.href}>{link.text}</a>
      ))}
    </footer>
  );
};

export default Footer;
