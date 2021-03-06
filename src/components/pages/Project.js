import React from 'react';
import Header from '../Header';
import WrapTitle from '../basics/WrapTitle';
import FooterContact from '../FooterContact';
import Footer from '../Footer';
import Loader from '../basics/Loader';
import { Link } from "react-router-dom";
import { gsap } from "gsap";

class Project extends React.Component {
    state = {
      isLoading: true,
    };
  
    mainStart = () => {
        let tl = gsap.timeline();
        tl.to("#header", { duration: 0.3, stagger: 0.1, opacity: 1, y: 0, ease: "ease.out" });
        tl.to(".wrapTitle-line", { duration: 0.3, stagger: 0.1, opacity: 1, scaleY: 1, ease: "ease.out" });
        tl.to(".wrapTitle-title .tit", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "bounce.out" });
        tl.to(".wrapTitle-intro1", { opacity: 1, rotationZ: 0, duration: 0.5, ease: "bounce.out" });
        tl.to(".wrapTitle-intro2", { opacity: 1, rotationZ: 0, duration: 0.5, stagger: 0.1, ease: "bounce.out" },"-=0.2");
        tl.to(".wrapTitle-des1-line", { duration: 0.3, stagger: 0.1, opacity: 1, scale: 1, ease: "ease.out" });
        tl.to(".wrapTitle-des1-1", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" });
        tl.to(".wrapTitle-des1-2", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" },"-=0.12");
        tl.to(".wrapTitle-des1-3", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" },"-=0.12");
        tl.to(".wrapTitle-des1-4", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" },"-=0.12");
        tl.to(".wrapTitle-des2", { duration: 0.3, stagger: 0.1, opacity: 1, x: 0, ease: "ease.out" });

    };
  
    getSite = () => {
      setTimeout(() => {
        console.log("두번째 시작");
        this.setState({ isLoading: false });
        this.mainStart();
      }, 1000);
    };
  
    componentDidMount() {
      setTimeout(() => {
        console.log("첫번째 시작");
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
                <Header />
                <WrapTitle 
                  title="MOPROJECTVIE" 
                  desc1="WEBSITE" 
                  desc2="JAVASCRIPT" 
                  desc3="ANIMATION" 
                  desc4="PROJECT"
                  mainDesc="WEBSITE, VANILLA JAVASCRIPT, CSS ANIMATION 작업물들을 감상해주세요! 아래 세가지 탭 메뉴를 클릭해 주시면 감사하겠습니다:)"
                />

                {/* project */}
                <section id="project-section">
                    <h3 className="screen_out">project 영역</h3>
                    <article className="project-article">
                        <h4 className="screen_out">project 본문 영역</h4>
                        <div className="tab-wrapper">
                            <div className="tab-content">
                                <div id="website">
                                    <div className="project-subtit">
                                        <div className="subtit-main">WEBSITE PROJECTS</div>
                                        <div className="subtit-cont">
                                            <div className="subtit-cont-line"></div>
                                            <div className="subtit-cont1">
                                                <p>TECHNOLOGY</p>
                                                <p>
                                                    새로운 기술들은 더 편리하게, 더 멋진 효과들을 구현할 수 있게 도와줍니다. 그래서 REACT, VUE, PHP 등 새로운 언어들을 배우는게 더 즐거웠습니다. 이들을 이용해 더 다양한 웹사이트들을 제작하고 싶습니다.
                                                </p>
                                            </div>
                                            <div className="subtit-cont2">
                                                <p>THINKING</p>
                                                <p>
                                                    어떻게 하면 사용자의 시선을 사로잡으면서 편리하게 웹사이트를 이용할 수 있을지 고민하며 만든 웹사이트들입니다. 직접 기획부터 디자인, 코딩까지 한 크리스피크림, 한국지식재산보호원 사이트는 그 홈페이지의 목적에 부합하도록 제작했습니다.
                                                </p>
                                                <div className="subtit-cont-line line2"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="project">
                                        <ul>
                                            <li className="project1">
                                                <div className="cont">
                                                    <p className="num">PROJECT 1</p>
                                                    <p className="tit">
                                                        <span className="fontBonV">PORTFOLIO</span>
                                                        <span>
                                                            첫번째로 만든 포트폴리오입니다. 저는 어떤 사람인지, 어떤 작업들을 해왔는지, 어떤 기술들을 사용할 수 있는지 확인하실 수 있습니다. 바람에 흔들리지만 묵묵히 자신의 일을 하는 나뭇잎을 잘 봐주세요. 마치 저와 같거든요!
                                                        </span>
                                                    </p>
                                                    <p className="view">
                                                        <a href="https://seyoungjoy.github.io/portfolio/port/" target="_blank">
                                                            <span className="view-text">VIEW SITE</span>
                                                            <span className="view-arrow">
                                                                <img src="/img/project-arrow.svg"></img>
                                                            </span>
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="mockup">
                                                    <img src="/img/web1.jpg"></img>
                                                </div>
                                            </li>
                                            <li className="project2">
                                                <div className="cont">
                                                    <p className="num">PROJECT 2</p>
                                                    <p className="tit">
                                                        <span className="fontBonV">VUE WEBSITE</span>
                                                        <span>
                                                            Vue를 이용해 간단한 웹 사이트를 제작했습니다.
                                                        </span>
                                                    </p>
                                                    <p className="view">
                                                        <a href="https://youngsvue.web.app/" target="_blank">
                                                            <span className="view-text">VIEW SITE</span>
                                                            <span className="view-arrow">
                                                                <img src="/img/project-arrow.svg"></img>
                                                            </span>
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="mockup">
                                                    <img src="/img/web2.jpg"></img>
                                                </div>
                                            </li>
                                            <li className="project3">
                                                <div className="cont">
                                                    <p className="num">PROJECT 3</p>
                                                    <p className="tit">
                                                        <span className="fontBonV">PHP WEBSITE</span>
                                                        <span>
                                                            php를 사용해 웹 페이지를 제작하였습니다. 댓글 기능, 게시판, 로그인, 회원가입 기능을 넣었습니다. phpMyAdmin에 접속한 후 현재 프로젝트에서 사용하고 있는 DB에 들어가 데이터들을 수정, 삭제, 복사 등을 할 수 있습니다.
                                                        </span>
                                                    </p>
                                                    <p className="view">
                                                        <a href="http://fejoy95.dothome.co.kr/php/pages/main.php" target="_blank">
                                                            <span className="view-text">VIEW SITE</span>
                                                            <span className="view-arrow">
                                                                <img src="/img/project-arrow.svg"></img>
                                                            </span>
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="mockup">
                                                    <img src="/img/web3.jpg"></img>
                                                </div>
                                            </li>
                                            <li className="project5">
                                                <div className="cont">
                                                    <p className="num">PROJECT 4</p>
                                                    <p className="tit">
                                                        <span className="fontBonV">WINIX<br /> RESPONSIVE</span>
                                                        <span>
                                                            위닉스 홈페이지를 리뉴얼하여 만들었습니다. 사용자들이 위닉스 홈페이지에 접속한다면 무엇이 필요한지를 생각하며 내용을 구성했습니다. 제품 등록, 제품 종류, 추천 제품, 이벤트, 고객센터 순으로 나열했고 미디어쿼리를 이용한 반응형으로 제작했습니다.
                                                        </span>
                                                    </p>
                                                    <p className="view">
                                                        <a href="https://seyoungjoy.github.io/portfolio/port/project/project5/"
                                                            target="_blank">
                                                            <span className="view-text">VIEW SITE</span>
                                                            <span className="view-arrow">
                                                                <img src="/img/project-arrow.svg"></img>
                                                            </span>
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="mockup">
                                                    <img src="/img/web5.jpg"></img>
                                                </div>
                                            </li>
                                            <li className="project6">
                                                <div className="cont">
                                                    <p className="num">PROJECT 5</p>
                                                    <p className="tit">
                                                        <span className="fontBonV">KOIPA</span>
                                                        <span>
                                                            한국지식재산보호원 홈페이지를 기획부터 디자인, 퍼블리싱까지 진행한 프로젝트입니다. 공기업의 신뢰성 있는 이미지를 위해 파란색을 주색상으로 최대한 깔끔하게 디자인해서 코딩했습니다.
                                                        </span>
                                                    </p>
                                                    <p className="view">
                                                        <a href="https://seyoungjoy.github.io/portfolio/port/project/project6/" target="_blank">
                                                            <span className="view-text">VIEW SITE</span>
                                                            <span className="view-arrow">
                                                                <img src="/img/project-arrow.svg"></img>
                                                            </span>
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="mockup">
                                                    <img src="/img/web6.jpg"></img>
                                                </div>
                                            </li>
                                            <li className="project7">
                                                <div className="cont">
                                                    <p className="num">PROJECT 6</p>
                                                    <p className="tit">
                                                        <span className="fontBonV">KRISPY KREME</span>
                                                        <span>
                                                            처음으로 진행한 리뉴얼 프로젝트입니다. 기획-디자인-퍼블리싱까지 혼자서 했고 크리스피크림 도넛의 맛있는 느낌을 살리기 위해 입맛 돋는 붉은 컬러를 주색상으로 사용했습니다. 서브 페이지 '메뉴'도 함께 작업했습니다.
                                                        </span>
                                                    </p>
                                                    <p className="view">
                                                        <a href="https://seyoungjoy.github.io/portfolio/port/project/project7/"
                                                            target="_blank">
                                                            <span className="view-text">VIEW SITE</span>
                                                            <span className="view-arrow">
                                                                <img src="/img/project-arrow.svg"></img>
                                                            </span>
                                                        </a>
                                                    </p>
                                                </div>
                                                <div className="mockup">
                                                    <img src="/img/web7.jpg"></img>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
                {/* //project */}
                <FooterContact/>
                <Footer />
            </>
          )}
        </div>
      );
    }
  }




export default Project;