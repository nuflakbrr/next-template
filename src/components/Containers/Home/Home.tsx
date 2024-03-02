import { FC } from 'react';

import Hero from './components/Hero';
import Features from './components/Features';

const ContainerHome: FC = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

export default ContainerHome;
