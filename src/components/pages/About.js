import React from 'react';
import Header from '../Header';
import FooterContact from '../FooterContact';
import Footer from '../Footer';
import Loader from '../basics/Loader';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import { gsap } from "gsap";

class About extends React.Component {
    state = {
      isLoading: true,
    };
  
    mainStart = () => {
        let tl = gsap.timeline();
        tl.to("#header", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(1) > p:nth-child(1)", { duration: 0.3, stagger: 0.1, opacity: 1, rotationZ: 0, ease: "bounce.out" });
        tl.to(".screen-content-main > div:nth-child(1) > p:nth-child(2)", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(1) > p:nth-child(3)", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(2) > p:nth-child(1)", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "bounce.out" });
        tl.to(".screen-content-main > div:nth-child(2) > p:nth-child(2)", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "power4.out" });
        tl.to(".screen-content-main > div:nth-child(2) > p:nth-child(3)", { duration: 0.3, stagger: 0.1, opacity: 1, scaleX: 1, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(3) > p:nth-child(1)", { duration: 0.5, stagger: 0.1, opacity: 1, scaleX: 1, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(3) > p:nth-child(2)", { duration: 0.3, stagger: 0.1, opacity: 1, skewX: 0, ease: "bounce.out" });
        tl.to(".screen-content-main > div:nth-child(4) > p:nth-child(1)", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "bounce.out" });
        tl.to(".screen-content-main > div:nth-child(4) > p:nth-child(2)", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" });
        tl.to(".screen-content-main > div:nth-child(4) > p:nth-child(3)", { duration: 0.3, stagger: 0.1, opacity: 1, scaleX: 1, ease: "ease.out" });
        tl.to(".screen-line", { duration: 0.8, stagger: 0.1, opacity: 1, scaleY: 1, ease: "ease.out" });
    };
  
    getSite = () => {
      setTimeout(() => {
        console.log("????????? ??????");
        this.setState({ isLoading: false });
        this.mainStart();
      }, 2000);
    };
  
    componentDidMount() {
      setTimeout(() => {
        console.log("????????? ??????");
        this.getSite();
      }, 1000);
    }
  
    render() {
      const { isLoading } = this.state;
      return (
        <div id="wrap" className="lock">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Header info="none"/>
            <main>
                <section id="mainContent">
                <h2 className="screen_out">?????? ?????????</h2>
                    <article className="screen-content">
                        <div className="screen-content-main">
                            <div>
                                <p className="wordIam fontCavi">I AM</p>
                                <p className="mainArrow"><img src="/img/arrowsvg.svg" alt="?????????"></img></p>
                                <p className="mainLogo fontSun">
                                    <span>BRIGHT</span>
                                    <span className="mainLogoSymbol">young</span>
                                    <span className="symbol"><img src="/img/symbol.svg"></img></span>
                                </p>
                            </div>
                            <div>
                                <p className="fontCavi">I DO</p>
                                <p className="really fontBonV">REALLY</p>
                                <p className="fontCoco">COOL</p>
                            </div>
                            <div>
                                <p className="fontCoco">CODING</p>
                                <p className="fontBonV">TO BE A REALLY</p>
                            </div>
                            <div>
                                <p className="mainSymbol"><img src="/img/symbol.svg" alt="????????????"></img></p>
                                <p className="fontBonV">TALENTED</p>
                                <p className="fontCoco">PEOPLE</p>
                            </div>
                        </div>
                        <div className="screen-line"></div>
                    </article>

                    {/* ?????? ?????? */}
                    <article className="main-about">
                        <h3 className="screen_out">?????? ??????</h3>
                        <section className="about-cont">
                            <h4 className="screen_out">?????? ?????? ?????????</h4>
                           
                            <div className="introduce">
                                <p>
                                    ???????????????. ???????????? ?????? ???????????? ??????????????? ?????? ??????????????? ????????? ??????????????????.
                                </p>
                                <p>
                                    ????????? ???????????????????????? ??????????????? 6?????? ????????? ???????????? ???????????? ?????? ?????????????????? ?????? ??????????????? ???????????? ???????????? ?????? ???????????? ??? ????????? ???
                                    ????????? ????????????.
                                </p>
                                <p>
                                    ????????? ????????? ????????? Javascript, React, Vue, Php ??? ????????? ???????????? ????????? ?????????????????? ??????????????????.
                                </p>
                                <p>
                                    ?????? ?????? ?????? ??????????????? ???????????? ?????? ???????????? ????????? ???????????? ???????????????.
                                </p>
                                <p>
                                    ?????? ????????????, ????????? ????????????, ????????? ??????????????? ???????????????.
                                </p>
                                <p className="notice">
                                    ??? ???????????? ????????? ???????????? ????????? :) <br/>
                                    ??? Movie, Youtube ???????????? API??? ????????? ?????? ?????? ???????????? ??? ????????????.
                                </p>
                            </div>
                            <div className="introduceTab">
                                <div className="row">
                                    <ul className="tab-menu">
                                        <li className="active">
                                            <Link to="#tabs-1" >
                                                <img src="/img/1.svg"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#tabs-2">
                                                <img src="/img/2.svg"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#tabs-3">
                                                <img src="/img/3.svg"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#tabs-4">
                                                <img src="/img/4.svg"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#tabs-5">
                                                <img src="/img/5.svg"></img>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#tabs-6">
                                                <img src="/img/6.svg"></img>
                                            </Link>
                                        </li>
                                    </ul>

                                    <div className="tab-content">
                                        <div id="tabs-1" className="tabs clearfix active">
                                            <p className="text-left">
                                                ????????????<br/>
                                                ?????? ???????????? ??????????????????.&#128526;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    No matter how difficult it is, I feel a sense of accomplishment when I
                                                    see a
                                                    website that is completed one by one.
                                                </span>
                                            </p>
                                        </div>
                                        <div id="tabs-2" className="tabs clearfix">
                                            <p className="text-left">???????????? ???????????? ??????<br/>
                                                ENFJ ?????????.&#129392;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    My MBTI is a bright and caring ENFJ. Warm, active, responsible, sociable
                                                    and compassionate.
                                                </span>
                                            </p>
                                        </div>
                                        <div id="tabs-3" className="tabs clearfix">
                                            <p className="text-left">
                                                ?????? ??????<br/>
                                                ????????? ????????? ????????????.
                                                &#128221;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    Every morning I make a plan for the day. No matter what happens, I tend
                                                    to act in a planned manner.
                                                </span>
                                            </p>
                                        </div>
                                        <div id="tabs-4" className="tabs clearfix">
                                            <p className="text-left">??????????????? ????????? ??????<br/>
                                                ?????? ????????? ????????????.&#128187;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    I am interested in self-development and enjoy studying coding. Learning
                                                    new things is always fun.
                                                </span>
                                            </p>
                                        </div>
                                        <div id="tabs-5" className="tabs clearfix">
                                            <p className="text-left">????????? ??? 4??? ??????<br/>
                                                ?????? ????????? ??????????????????.&#128170;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    I exercise 4 times a week and manage my stamina. Because you have to be
                                                    physically fit to study.
                                                </span>
                                            </p>
                                        </div>
                                        <div id="tabs-6" className="tabs clearfix">
                                            <p className="text-left">??? ??????<br/>
                                                ?????????&#128081;
                                            </p>
                                            <p className="text-right">
                                                <span className="about-arrow">
                                                    <img src="/img/about-arrow.svg" />
                                                </span>
                                                <span>
                                                    ?????? ????????? ????????? ?????? ????????? ??? ?????? ????????? ??????????????? ????????? ????????????. ????????? ?????? ???????????? ?????????????
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </article>
                    {/* //?????? ?????? */}

                    {/* ?????? ????????? */}
                    <article className="story-article">
                        <h3 className="screen_out">?????? ?????????</h3>
                            <section className="main-story">
                                <h4 className="main-story-title">
                                    <span className="story-line" aria-hidden="true"></span>
                                    <p className="story-title-1 fontBonV">THAT???S MY</p>
                                    <p className="story-title-2 fontCoco">STORY</p>
                                </h4>
                                <Swiper
                                    className='swiper-container'
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log("slide change")}
                                    >
                                    <SwiperSlide><img src="/img/story3.jpg" alt="?????????1"/></SwiperSlide>
                                    <SwiperSlide><img src="/img/story1.jpg" alt="?????????2"/></SwiperSlide>
                                    <SwiperSlide><img src="/img/story2.jpg" alt="?????????3"/></SwiperSlide>
                                    <SwiperSlide><img src="/img/story6.jpg" alt="?????????3"/></SwiperSlide>
                                    <SwiperSlide><img src="/img/story5.jpg" alt="?????????3"/></SwiperSlide>
                                    <SwiperSlide><img src="/img/story4.jpg" alt="?????????3"/></SwiperSlide>
                                </Swiper>
                            </section>
                    </article>
                {/* //?????? ????????? */}
                </section>
            </main>
            <FooterContact/>
            <Footer />
            </>
          )}
        </div>
      );
    }
  }

export default About;