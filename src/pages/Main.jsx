import React from 'react';
import { News } from '../components/common/News';
import { FadeIn } from '../components/animations/FadeIn';
import { PageTop } from '../components/common/PageTop';
import { About } from '../components/common/About';
import { Service } from '../components/common/Service';
import { Access } from '../components/common/Access';

export const Main = () => {
  const TopText = 'THINK\nfor\nRESIDENTS';

  return (
    <>
      <FadeIn>
        <PageTop
          TopText={TopText}
          TopImage={'/images/main/main_image01.webp'}
          TopImage_2={'/images/main/main_image02.webp'}
          TopImage_3={'/images/main/main_image03.webp'}
        />
        <About />
        <Service />
        <News />
        <Access />
      </FadeIn>
    </>
  );
};
