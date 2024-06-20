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
    // image:string;

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
    tooling:string;
    toolingContent:string;
  }
export interface FooterProps {
  links: {
    product: string[];
    company: string[];
    connect: string[];
  };
}
  