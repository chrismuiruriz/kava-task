import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong className="mb-1">Karibu Kava</strong>
      <p>Created by Chris M. N.</p>
    </div>
  );
};

export default ExploreContainer;
