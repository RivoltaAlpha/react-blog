import './footer.scss';
import { FooterProps } from '../../types/types';

const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Product</h4>
        <ul>
          {links.product.map((link, index) => (
            <a href='#'>
            <li key={index}>{link}</li>
          </a>
          ))}
        </ul>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          {links.company.map((link, index) => (
            <a href='#'>
            <li key={index}>{link}</li>
          </a>
          ))}
        </ul>
      </div>
      <div className="footer-section">
        <h4>Connect</h4>
        <ul>
          {links.connect.map((link, index) => ( 
            <a href='#'>
              <li key={index}>{link}</li>
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};
const footerLinks = {
  product: ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'],
  company: ['About', 'Team', 'Blog', 'Careers'],
  connect: ['Contact', 'Newsletter', 'LinkedIn'],
};
const FooterLinksDisplay = () => {
  return (
    <div className="footer">
      <Footer links={footerLinks} />
    </div>
  );
};

export default FooterLinksDisplay;
