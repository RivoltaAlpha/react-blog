export interface HeaderProps {
    title: string;
    subtitle: string;
    buttonText: string;
    learnMoreButton:string;
  }
  
  export interface ListProps{
    title: string;
    product: string;
    company: string;
    contact: string;
    loginButton: string;
    signUpButton: string;

  }

  export interface IntroProps {
    editorTitle: string;
    editorContent: string;
    managementTitle: string;
    managementContent: string;
  }
  
  export interface ImageProps {
    image: string;
  }

  export interface InfrastructureProps {
    title: string;
    content: string;
  }
  
  export interface ClosingProps {
    title: string;
    content: string;
  }
  
  export interface FooterProps {
    links: Array<{ text: string; href: string }>;
  }
  