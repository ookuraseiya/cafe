import React from "react";

export const PageTop = ({ TopText, TopImage, TopImage_2, TopImage_3 }) => {
  const PageToptext = TopText.split('\n').map((item, index) => (
    <React.Fragment key={index}>
      {item}
      <br />
    </React.Fragment>
  ));

  return (
    <>
      <section className="main">
        <div className="container">
          <div className="main__flex">
            <h1 className="main__heading">{PageToptext}</h1>
            <div className="main__slider">
              <ul className="main__slider--list">
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src={TopImage}
                    alt=""
                    height=""
                    width=""
                  />
                </li>

                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src={TopImage_2}
                    alt=""
                    height=""
                    width=""
                  />
                </li>
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src={TopImage_3}
                    alt=""
                    height=""
                    width=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
