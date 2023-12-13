import React from 'react';
import { useFormik } from 'formik';
import { Header } from '../modules/Header';
import { Footer } from '../modules/Footer';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log('form data', values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is Required';
  }

  if (!values.email) {
    errors.email = 'Email is Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email format';
  }

  if (!values.channel) {
    errors.channel = 'Channel is Required';
  }

  return errors;
};

export const ItemContact = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <>
      <Header />
      <section className="main">
        <div className="container">
          <div className="main__flex">
            <h1 className="main__heading">CONTACT</h1>
            <div className="main__slider">
              <ul className="main__slider--list">
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/contact/contact_image01.webp"
                    alt=""
                    height=""
                    width=""
                  />
                </li>
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/contact/contact_image02.webp"
                    alt=""
                    height=""
                    width=""
                  />
                </li>
                <li className="main__slider--item">
                  <img
                    className="main__slider--img"
                    src="/images/contact/contact_image03.webp"
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
      <section className="contact">
        <h1 className="access__heading" data-en="Recruit">
          CONTACT
        </h1>
        <p className="access__heading--sub">お問い合わせ</p>
        <form onSubmit={formik.handleSubmit}>
          <div className="contact__item">
            <label htmlFor="name" className="contact__label">
              お名前
            </label>
            <input
              className="contact__input"
              type="text"
              id="name"
              name="name"
              placeholder="山田 太郎"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="contact__error">{formik.errors.name}</div>
            ) : null}
          </div>

          <div className="contact__item">
            <label htmlFor="email" className="contact__label">
              メールアドレス
            </label>
            <input
              className="contact__input"
              type="email"
              id="email"
              name="email"
              placeholder="example@icloud.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="contact__error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="contact__item">
            <label htmlFor="channel" className="contact__label">
              お聞きしたいこと
            </label>
            <input
              className="contact__input"
              type="text"
              id="channel"
              name="channel"
              placeholder="お聞きしたいこと"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.channel}
            />
            {formik.touched.channel && formik.errors.channel ? (
              <div className="contact__error">{formik.errors.channel}</div>
            ) : null}
          </div>

          <button className="contact__button button" type="submit">
            送信
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};
