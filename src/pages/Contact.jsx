import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FadeIn } from '../components/animations/FadeIn';
import { PageTop } from '../components/common/PageTop';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../firebase/firebase';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [channel, setChannel] = useState('');
  const navigate = useNavigate();

  console.log('process.env:', process.env);
  const reset = () => {
    setName('');
    setEmail('');
    setChannel('');
  };

  const submit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'contact_infos'), {
      name: name,
      email: email,
      channel: channel,
      created_at: serverTimestamp(),
    });

    reset();
    navigate('/contactComplete');
  };

  return (
    <>
      <FadeIn>
        <PageTop
          TopText={'CONTACT'}
          TopImage={'/images/contact/contact_image01.webp'}
          TopImage_2={'/images/contact/contact_image02.webp'}
          TopImage_3={'/images/contact/contact_image03.webp'}
        />
        <section className="contact">
          <h1 className="access__heading" data-en="Recruit">
            CONTACT
          </h1>
          <p className="access__heading--sub">お問い合わせ</p>
          <form onSubmit={submit}>
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
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
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
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
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
                required
                onChange={(e) => {
                  setChannel(e.target.value);
                }}
                value={channel}
              />
            </div>

            <button className="contact__button button" type="submit">
              送信
            </button>
          </form>
        </section>
      </FadeIn>
    </>
  );
};
