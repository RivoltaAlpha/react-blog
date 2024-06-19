import React from 'react';
import './closing.scss';
import { ClosingProps } from '../../types/types';

const Closing: React.FC<ClosingProps> = ({ title, content }) => {
  return (
    <section className="closing">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Closing;
