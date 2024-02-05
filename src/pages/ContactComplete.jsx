import { FadeIn } from '../components/animations/FadeIn';
import { Link } from 'react-router-dom';

export const ContactComplete = () => {
  return (
    <>
      <FadeIn>
        <section className="contactComplete">
          <div>
            <h1 className="contactComplete__title">
              お問い合わせが完了しました。
            </h1>
            <p className="contactComplete__text">ありがとうございました。</p>

            <button className="contactComplete__button button">
              <Link to="/">トップページに戻る</Link>
            </button>
          </div>
        </section>
      </FadeIn>
    </>
  );
};
