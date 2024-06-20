import './inf.scss';
import { InfrastructureProps, ImageProps } from '../../types/types';

const Image = ({ image }: ImageProps) => {
  return <img src={image} alt="Middle Image" className="image" />;
};

const Infrastructure = ({ title, content }: InfrastructureProps) => {
  return (
    <section className="infrastructure">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

const MiddlePart = () => {
  return (
    <div className='middle-part'>
      <Image image="/images/illustration-phones.svg" 
      />
    <Infrastructure
    title="State of the Art Infrastructure"
    content="  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
      />
</div>
  );
};

export default MiddlePart;
