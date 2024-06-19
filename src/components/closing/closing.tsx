import "./closing.scss";
import { ClosingProps, ImageProps } from "../../types/types";

const Image = ({ image }: ImageProps) => {
  return <img src={image} alt="Intro Image" className="image" />;
};

const Closing = ({ title, content, tooling, toolingContent }: ClosingProps) => {
  return (
    <section className="closing">
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{tooling}</p>
      <p>{toolingContent}</p>
    </section>
  );
};

const ClosingTag = () => {
  return (
    <div className="closing-tag">
      <Image image="../../../public/images/illustration-laptop-desktop.svg" />
      <Closing
        title="Free, open, simple"
        content="  Blogr is a free and open source application backed by a large community of helpful developers. It supports 
features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
        tooling="Powerful Tooling"
        toolingContent="  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
    capable of producing even the most complicated sites."
      />
    </div>
  );
};
export default ClosingTag;
