import React from 'react';
import { FadeIn } from '../components/animations/FadeIn';
import { PageTop } from '../components/common/PageTop';

export const Concept = () => {
  return (
    <>
      <FadeIn>
        <PageTop
          TopText={'CONCEPT'}
          TopImage={'/images/concept/concept_image01.webp'}
          TopImage_2={'/images/concept/concept_image02.webp'}
          TopImage_3={'/images/concept/concept_image03.webp'}
        />
        <section className="concept">
          <div className="container">
            <div className="concept__body">
              <h1 className="access__heading" data-en="Recruit">
                CONCEPT
              </h1>
              <p className="access__heading--sub">大切にしていること</p>
              <div className="concept__item">
                <div className="concept__text">
                  <h1 className="concept__heading">
                    こんなことを考えてCAFEを作りました。
                  </h1>
                  <h1 className="concept__item--title">「深呼吸」</h1>
                  <p className="concept__item--lead">
                    天然の木と葉っぱと石、生きている素材をたっぷりつかったお店です。
                    <br />
                    大きな「深呼吸」をしに、ぜひいらしてください。
                  </p>
                </div>
                <img
                  className="concept__image"
                  src="/images/concept/concept_image04.webp"
                  alt=""
                  height=""
                  width=""
                  loading="lazy"
                />
              </div>
              <div className="concept__item row__reverse">
                <div className="concept__text">
                  <h1 className="concept__item--title concept__end">
                    「からだをあたためてくれるスープ」
                  </h1>
                  <p className="concept__item--lead concept__end">
                    太陽の光をいっぱいに浴びて育った
                    <br />
                    元気な野菜はからだの中から。
                    <br />
                    夏も冬も体幹をあたため、からだ本来の働きを高め、
                    <br />
                    明日もあさっても元気に。
                  </p>
                </div>
                <img
                  className="concept__image"
                  src="/images/concept/concept_image05.webp"
                  alt=""
                  height=""
                  width=""
                  loading="lazy"
                />
              </div>
              <div className="concept__item">
                <div className="concept__text">
                  <h1 className="concept__item--title">
                    「あさごはんとひるごはんと、あとすこし」
                  </h1>
                  <p className="concept__item--lead">
                    スープを軸とし、あさとひるをバランスよく、
                    <br />
                    噛めばかむほどに味が濃く、からだに優しい
                    <br />
                    「温野菜」を中心に献立てしております。
                    <br />
                    そして、あとすこしの時間は「とびきりのほっこり」をご用意しております。
                    <br />
                    大切なお友達とおしゃべりをしにきてくださいね。
                  </p>
                </div>
                <img
                  className="concept__image"
                  src="/images/concept/concept_image06.webp"
                  alt=""
                  height=""
                  width=""
                  loading="lazy"
                />
              </div>
              <div className="concept__item row__reverse">
                <div className="concept__text">
                  <h1 className="concept__item--title concept__end">
                    「すこし、いいもの」
                  </h1>
                  <p className="concept__item--lead concept__end">
                    MON スタッフがジャンルを問わず お気に入りの
                    <br />
                    「すこし、いいもの」を集めています。
                    <br />
                    ときどき開きます「モンマルシェ」でもお買い物いただけます。
                    <br />
                    こんなことを考えて[MON] をつくりました。
                  </p>
                </div>
                <img
                  className="concept__image"
                  src="/images/concept/concept_image07.webp"
                  alt=""
                  height=""
                  width=""
                  loading="lazy"
                />
              </div>
              {/* ここからstaffページです。 */}
              <div className="staff">
                <h1 className="staff__heading">STAFF</h1>
                <div className="staff__container">
                  <div className="staff__card">
                    <img
                      className="staff__image"
                      src="/images/concept/staff/staff_image01.webp"
                      alt=""
                      height=""
                      width=""
                      loading="lazy"
                    />
                    <h1 className="staff__title">
                      <span className="staff__title--span">M</span>ARUBAYASHI
                    </h1>
                    <p className="staff__lead">
                      一番のしっかり者。穏和で社交的な頼れる「姉さん」で常に物事を把握し、皆をリードし統括してくれる総務的存在。
                    </p>
                    <p className="staff__lead">
                      かつては教育系の現場で18
                      年間バリバリと働くキャリアウーマンとだけあって「健康・安心・安全」にとことんこだわり、食材集め、オイルや調味料にいたるまで・・・・断然、食育担当。
                    </p>
                  </div>
                  <div className="staff__card">
                    <img
                      className="staff__image"
                      src="/images/concept/staff/staff_image02.webp"
                      alt=""
                      height=""
                      width=""
                      loading="lazy"
                    />
                    <h1 className="staff__title">
                      <span className="staff__title--span">O</span>OBA
                    </h1>
                    <p className="staff__lead">
                      フランスのアパレルブランドショップ店員10
                      年と、カフェのホール経験者。
                    </p>
                    <p className="staff__lead">
                      かなりの感覚人間でエコバッグやエプロンはベトナムでフルオーダー。こだわり紅茶もフルオーダー。『MON』オリジナル商品やイベントの企画担当。今後のイベント、乞うご期待！！！！
                    </p>
                  </div>
                  <div className="staff__card">
                    <img
                      className="staff__image"
                      src="/images/concept/staff/staff_image03.webp"
                      alt=""
                      height=""
                      width=""
                      loading="lazy"
                    />
                    <h1 className="staff__title">
                      <span className="staff__title--span">N</span>AKAI
                    </h1>
                    <p className="staff__lead">
                      自然が大好きで、 食べることが大好きで、
                      おもてなしするのが大好き。
                    </p>
                    <p className="staff__lead">
                      四国の大自然の中で育った空と海と大地と・・・・
                      幼いころからの記憶をヒントに『みんなをもっともっと健康にしたい』という願いから、こだわりつづけている『SOUP』。もちろんキッチン担当。
                      今後の季節のスープメニューをお楽しみに！！
                    </p>
                  </div>
                </div>
              </div>
              {/* ここから自己紹介ページです */}
              <div className="intro">
                <h1 className="intro__heading">DESIGN WORKS</h1>
                <h1 className="intro__title">室内デザイン</h1>
                <div className="intro__container">
                  <div className="intro__text">
                    <h1 className="intro__title--name">
                      やまもとみゆき/DESIGN WORKS
                    </h1>
                    <p className="intro__lead">
                      2008 年自身のスタジオを設立
                      <br />
                      「京都」を拠点に 住宅を主にデザインを手がけ
                      <br />
                      飲食店デザイン企画、・アパレル企画・企業ブランディングなど、
                      <br />
                      ジャンルを問わずプロデュース＆コーディネイトにたずさわる
                      <br />
                      「その時、そのひと、その場所」をデザインし続けたい
                      <br />
                      経年変化を楽しんで、いつまでも居心地のいい空間を。
                      <br />
                      と、いつも願います。
                    </p>
                  </div>
                  <img
                    className="intro__image"
                    src="/images/concept/staff/staff_image04.webp"
                    alt=""
                    height=""
                    width=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
};
