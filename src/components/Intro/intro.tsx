
import './intro.scss';
import { IntroProps,ImageProps } from '../../types/types';;

const Image = ({ image }: ImageProps) => {
  return <img src={image} alt="Intro Image" className="image" />;
};


const Intro = ({ editorTitle, editorContent, managementTitle, managementContent }: IntroProps) => {
  return (

    <section className="intro">
      <div className="title">
          <h1>Designed For The future</h1>
       </div>
      <div className="editor">
        <h2>{editorTitle}</h2>
        <p>{editorContent}</p>
      </div>
      <div className="management">
        <h2>{managementTitle}</h2>
        <p>{managementContent}</p>
      </div>
    </section>
  );
};

const Introducing = () => {
  return (
    <div className='introducing'>
  <Intro
  editorTitle="Introducing an extensible editor"
  editorContent="  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
change the looks of a blog."
  managementTitle="Robust content management"
  managementContent="  Flexible content management enables users to easily move through posts. Increase the usability of your blog 
by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
/>
<Image image="../../../public/images/illustration-editor-desktop.svg" 
      />
    </div>

  );
};

export default Introducing;
