import './header.scss';
import { HeaderProps, ListProps } from '../../types/types';

export const Navbar = ({ title, product, company, contact, loginButton, signUpButton }: ListProps) => {
  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <ul className='ul'>
        <li>{product}</li>
        <li>{company}</li>
        <li>{contact}</li>
      </ul>
      <span>
      <button className="button-l">{loginButton}</button>
      <button className="button">{signUpButton}</button>
      </span>
      {/* <img src={image} className="image" /> */}
    </nav>
  );
};

export const Header = ({ title, subtitle, buttonText, learnMoreButton }: HeaderProps) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <span>
      <button>{buttonText}</button>
      <button className="button-l">{learnMoreButton}</button>
      </span>
    </header>
  );
};

const MainHeader = () => {
  return (
    <div className="main-header">
      <Navbar 
        title="Blogr" 
        product="Product" 
        company="Company" 
        contact="Contact" 
        loginButton="Login" 
        signUpButton="Sign Up" 
        // image="../../../public/images/bg-pattern-introoo-desktop.svg" 
        
      />
      
      <Header 
        title="A modern publishing platform" 
        subtitle="Grow your audience and build your online brand" 
        buttonText="Start for Free" 
        learnMoreButton="Learn More" 
      />
    </div>
  );
};

export default MainHeader;
