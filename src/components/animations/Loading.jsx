import React from 'react';
import ReactLoading from 'react-loading';

export const Loading = () => {
  return (
    <section className="loading">
      <ReactLoading type="spin" color="#a48c61" />
    </section>
  );
};
