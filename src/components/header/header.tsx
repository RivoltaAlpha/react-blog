import './header.scss';
import { HeaderProps, ListProps, ImageProps } from '../../types/types';

export const Navbar = ({ title, product, company, contact, loginButton, signUpButton, image }: ListProps & ImageProps) => {
  return (
    <nav className="navbar">
      <h1>{title}</h1>
      <ul className='ul'>
      <li className="dropdown">
          <a href='#'>{product}</a>
          <div className="dropdown-content">
            <a href="#"> Item 1</a>
            <a href="#"> Item 2</a>
            <a href="#"> Item 3</a>
          </div>
        </li>
        <li className="dropdown">
          <a href='#'>{company}</a>
          <div className="dropdown-content">
            <a href="#"> Item 1</a>
            <a href="#"> Item 2</a>
            <a href="#"> Item 3</a>
          </div>
        </li>
        <li className="dropdown">
          <a href='#'>{contact}</a>
          <div className="dropdown-content">
            <a href="#"> Item 1</a>
            <a href="#"> Item 2</a>
            <a href="#"> Item 3</a>
          </div>
        </li>
      </ul>
      <span>
      <button className="button-l">{loginButton}</button>
      <button className="button">{signUpButton}</button>
      </span>
      <img src={image} className="hambuger" />
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
        product="Product " 
        company="Company" 
        contact="Contact" 
        loginButton="Login" 
        signUpButton="Sign Up" 
        image="/images/icon-hamburger.svg" 
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
