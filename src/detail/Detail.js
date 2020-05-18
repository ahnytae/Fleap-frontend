import React, { Component } from "react";
import DetailSlider from "../../components/slider/components/detail/DetailSlider";
import Down from "../../images/down.png";
import Upward from "../../images/upward.png";
import KakaoMap from "./Map";
import "./node_modules/slick-carousel/slick/slick.css";
import "./node_modules/slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickbutton: [false, false, false],
      like: "11",
      detail: [],
    };
  }

  handleClick = (num) => {
    let arr = this.state.clickbutton;
    arr[num] = !arr[num];
    this.setState({
      clickbutton: arr,
    });
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/data/detail.json")
      .then((res) => res.json())
      .then((res) => {
        // console.log("firstly: ", res.detail);
        this.setState(
          {
            detail: res.detail,
          },
          () => {
            console.log("secondly: ", res.detail);
          }
        );
      });
  };
  render() {
    console.log("thi", this.state.data);
    console.log(
      "detail",
      this.state.detail[0] && this.state.detail[0].detail_subtitle
    );
    const tempStyle = {
      opacity: 1,
      display: "block",
    };
    const introduce = `
  <p><strong>[코로나19 관련 유의사항]</strong></p><p><br></p><p>1. 프립은 다수의 인원이 참여하는 프로그램이므로, 발열/호흡기 관련 증상, 감기 등의 질병이 발생한 대원님은 참여를 지양해주세요.</p><p>2. 프립 참가 시에는 마스크 착용, 손 소독제 활용 등으로 안전에 특히 유의해주세요.</p><p>3. 일정 변동 없이 진행되는 프립은 하단의 환불 규정을 따릅니다. 참여가 우려되시는 분들은 구매 시 신중한 선택 부탁드리며, 환불 규정을 숙지하여 기한 내 환불 신청 바랍니다.</p><p><br></p><p style="text-align:center;"><strong>ㅡ</strong></p><p style="text-align:center;"><strong>프립에서 구매 후&nbsp;</strong></p><p style="text-align:center;"><strong>호스트 연락처를 문자로 보내드립니다.</strong></p><p style="text-align:center;"><strong>구매 전 문의사항은 Q&amp;A 게시판을 이용해주세요.</strong></p><p style="text-align:center;"><strong>ㅡ</strong></p><p style="text-align:center;"><br></p><p style="text-align:center;">도예 공방에서 세상에서 단 하나뿐인</p><p style="text-align:center;"><strong>나만의 그릇 만들기</strong></p><p style="text-align:center;"><br></p><p style="text-align:center;">음식 맛이 더 맛있어져요 :)</p><p style="text-align:center;"><br></p><p style="text-align:center;"><br></p><p style="text-align:center;"><strong><span style="font-size: 18px; color: rgb(251, 160, 38);">그 아저씨 공방만의 특별 할인가</span></strong></p><p style="text-align:center;"><br></p><p style="text-align:center;">더 많은 분들이 유익하고 즐거운 시간을 가지시길 바라며</p><p style="text-align:center;">준비해 본 할인가 입니다 :D</p><p style="text-align:center;"><br></p><hr><p style="text-align:center;"><br></p><p style="text-align:center;">1인 이용권 <s>35,000원</s> -&gt; <strong><span style="font-size: 16px;">32,000원</span></strong></p><p style="text-align:center;"><br></p><p style="text-align:center;">1인 이용권 ★오전 클래스(10:30) 특별 할인★ <s>35,000원</s> -&gt; <strong><span style="font-size: 16px;">30,000원</span></strong></p><p style="text-align:center;"><br></p><p style="text-align:center;">1인 이용권 ★10인 이상 단체 특별 할인★ <s>35,000원</s> -&gt; <strong><span style="font-size: 16px;">28,000원</span></strong></p><p style="text-align:center;"><br></p><p style="text-align:center;"><u>*10인 이상 단체 할인은 함께 참여하는 인원이 10명 이상 될 때 구매해주셔야 합니다!</u></p><p style="text-align:center;"><br></p><hr><p style="text-align:center;"><br></p><p style="text-align:center;"><br></p><p style="text-align:center;"><img src="https://res.cloudinary.com/frientrip/image/upload/c_limit,dpr_3.0,f_auto,q_auto:good,w_500/1477634880870.jpg" class="fr-fic fr-dii"><br></p><p style="text-align:center;"><strong>.&nbsp;.&nbsp;.</strong></p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;">우리에게 친숙한 소재인 흙을 통해 도예와 관련된 문화와 기술을 공유하며 다양한 작품 활동을 통해 폭넓은 창작의 세계를 경험하실 수 있습니다.</p><p style="text-align: center;">-</p><p style="text-align: center;">다양한 전시 및 경험을 갖춘 전문 강사진들과 함께 체계적이고 재미있는 수업이 진행되는 도예전문 공방입니다.^^</p><p style="text-align: center;">-</p><p style="text-align: center;">프립을 통해 만들어 볼 나만의 도예 작품은 자유주제로 자신이 원하는 아이템 하나를 선택한 후&nbsp;만들게 되고 핸드 빌딩 방식으로 제작됩니다.</p><p style="text-align: center;">-</p><p style="text-align: center;">핸드 빌딩 방식이란? 사람의 손으로 직접 모양을 만드는 제형 기법으로 만드는 사람 각각의 개성을 담을 수 있습니다.♥</p><p style="text-align: center;">-</p><p style="text-align: center;">실생활에도 유용하게 사용할 수 있는 나만의 예쁜 그릇! 함께 만들어 봐요. :D</p><p style="text-align: center;"><br></p><p style="text-align: center;">&lt;아래사진은 공방에 실제로 배치된 샘플들입니다. 참고하세요 &gt;</p><p style="text-align: center;">아이템은 참고하시고 디자인은 본인에 손길에 따라 아이디어에 따라 달라집니다. 공방에는 사진보다 더 많은 아이템과 도자기들이 준비되어 있으니&nbsp;수업전&nbsp;둘러보시고 만드실 아이템을 결정하셔도 됩니다 :D</p><p style="text-align: center;"><br></p><p style="text-align: center;"><img src="https://res.cloudinary.com/frientrip/image/upload/c_limit,dpr_3.0,f_auto,q_auto:good,w_500/1587720923059_bhphle.png" class="fr-fic fr-dib" style="width: 1018px;"><img src="https://res.cloudinary.com/frientrip/image/upload/c_limit,dpr_3.0,f_auto,q_auto:good,w_500/1587721341507_tj4ruw.png" class="fr-fic fr-dib" style="width: 1011px;"></p><p style="text-align: center;"><img src="https://res.cloudinary.com/frientrip/image/upload/c_limit,dpr_3.0,f_auto,q_auto:good,w_500/1587721505185_wf33jx.png" class="fr-fic fr-dib" style="width: 1005px;"></p><p style="text-align: center;"><img src="https://res.cloudinary.com/frientrip/image/upload/c_limit,dpr_3.0,f_auto,q_auto:good,w_500/1587721610338_vlza5d.png" class="fr-fic fr-dib" style="width: 998px;"></p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;">손으로 흙을 빚어 형태를 만들고 흙으로 장식을 붙이거나 문양들을 새겨 자신만의 유니크한 도자기를 만들어요~&nbsp;</p><p style="text-align: center;">모든 형태를 다 만든 후에 그아저씨공방 원데이클래스 유약 색상표를 보시고 여섯가지 색상 중 원하는 색을 선택할 수 있어요.&nbsp;</p><p style="text-align: center;">그러면 일주일이상 건조시키고 불에서 두번 굽는 과정을 거쳐 한달 후에 자신만의 세상에 하나뿐인 소중한 도자기를 갖게 된답니다 :D</p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;"><strong>&lt;공방에 배치된 샘플과 실제 체험한 작품들 사진 :D &gt;</strong></p><p style="text-align: center;"><br></p><p style="text-align: center;"><img src="http://res.cloudinary.com/frientrip/image/upload/c_limit,dpr_3.0,f_auto,q_auto:good,w_500/hcyfu9khrmonxb3d6af9.jpg" class="fr-fic fr-dii"></p><p style="text-align: center;"><br></p><p style="text-align: center;"><img src="http://res.cloudinary.com/frientrip/image/upload/c_limit,dpr_3.0,f_auto,q_auto:good,w_500/lydd1c1f9xwfwzvcuxkh.jpg" class="fr-fic fr-dii"></p><p style="text-align: center;"><br></p><p style="text-align: center;"><strong>ㅣ 이런 점이 좋아요</strong></p><p style="text-align: center;"><strong>·</strong> 창의력과 집중력을 향상할 수 있어요</p><p style="text-align: center;"><strong>·</strong> 전통문화에 대한 새로운 안목을 키울 수 있어요&nbsp;</p><p style="text-align: center;"><strong>·&nbsp;</strong>완성도 높은 그릇을 만들 수 있어요</p><p style="text-align: center;"><strong>·&nbsp;</strong>넓은 공간에서 진행되기 때문에 여럿이 함께 즐길 수 있어요</p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;"><strong>ㅣ 이런 분들에게 추천드려요</strong></p><p style="text-align: center;"><strong>·</strong> 이색적인 데이트를 원하는 분</p><p style="text-align: center;"><strong>·</strong> 시중에 판매하는 똑같은 그릇이 지겨운 분</p><p style="text-align: center;"><strong>·</strong> 색다른 취미, 여가 문화를 만들고 싶으신 분</p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;"><strong>[업체 정보]</strong></p><p style="text-align: center;"><br></p><p style="text-align: center;"><strong>·&nbsp;</strong>업체명 :&nbsp;그 아저씨 공방</p><p style="text-align: center;"><strong>·&nbsp;</strong>주소 :&nbsp;서울시 성동구 무학봉 15길 27 지하 1층</p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;"><strong>[클래스 시간&nbsp;안내]</strong></p><p style="text-align: center;"><br></p><p style="text-align: center;">아래 가능 시간에 각각 클래스 진행됨. 예약후 참석가능&nbsp;</p><p style="text-align: center;"><br></p><p style="text-align: center;"><strong>·</strong> 월, 수, 금, 토요일 수업가능 시간 : 10:30(할인 진행 중) / 오후 2시 / 오후 4시 30분</p><p style="text-align: center;"><strong>·</strong> 일요일 수업가능 시간 : 오전 수업없음 / 오후 2시 / 오후 4시 30분</p><p style="text-align: center;"><strong>·</strong> 저녁클래스 : 수, 금요일만 : 저녁 7시</p><p style="text-align: center;"><br></p><p style="text-align: center;">※<strong>&nbsp;</strong>실습 2시간 소요</p><p style="text-align: center;">※<strong>&nbsp;</strong>전화예약 필수</p><p style="text-align: center;">※<strong>&nbsp;</strong>화, 목요일은 정기휴무</p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;"><strong>[찾아가는 방법]</strong></p><p style="text-align: center;"><br></p><p style="text-align: center;"><strong>·</strong> 지하철 : 2호선 상왕십리역 4번 출구에서 도보 1분</p><p style="text-align: center;"><br></p><p style="text-align: center;"><br></p><p style="text-align: center;"><strong>[신청 시 유의사항]</strong></p><p style="text-align: center;"><br></p><p style="text-align: center;"><strong>·</strong> 프립에서 구매 후 업체에 전화로 가능한 날짜 예약 바랍니다.</p><p style="text-align: center;"><strong>·</strong> 방문 시 프립 앱 내의 [내 활동] 화면을 보여주시면 호스트가 출석체크를 해 드립니다. 출석체크 후 자유롭게 이용하시면 됩니다.</p><p style="text-align: center;"><strong>·&nbsp;</strong>예약 후 일정 변경은 강습 최소 1일 전에 해주셔야 합니다.</p><p style="text-align: center;"><strong>·&nbsp;</strong>예약 시간에 맞추어 늦지 않게 도착해 주시기 바랍니다.</p><p style="text-align: center;"><strong>·&nbsp;</strong>도자기의 특성상 불에서 굽는 과정에서 요변현상이 발생할 수 있습니다.(요변이란? 가마에서 도자기를 불에 구울 때 뒤틀리고 금이 가거나 색이 변하는 우연적인 현상)</p><p style="text-align: center;"><strong>·&nbsp;</strong>직접 만든 작품은 당일 가져가실 수 없습니다. (소성 기간&nbsp;한달 소요)</p><p style="text-align: center;"><strong>·&nbsp;</strong>택배로 수령을 원하실 경우 5,000원의 택배비가 별도로 부담되며 파손의 우려가 있어 가급적 재방문하여 수령하실 것을 권유 드립니다.</p><p style="text-align: center;"><strong>·&nbsp;</strong>택배 수령 시 파손에 따른 책임은 호스트가 지지 않습니다.</p>`;

    const isTxt = `안녕하세요 반갑습니다:)
    저는 서울 마포구에서 그림을 그리고있답니다.
    기분좋은 음악이 흐르는 저의 공간으로 여러분을 초대해요.
    
    오늘은 뭐하지? 뭔가 특별한 경험을 해보고싶은데~ 
    그런 날 캔버스그림은 어떠세요?
    멋진 그림에 조명을 달아, 캔버스조명으로 만들어가실 수 있답니다:D 
    그동안 바쁘게 고생했던 나에게,  연인과의 특별한 데이트로, 가족과 친구들을 위한 선물로 예쁜 작품만들어보세요♥
    
    초등학교 이후에 붓을 잡아보지 않았어도 괜찮아요.
    제가 1-10까지 쉽게 만드실 수 있도록 도와드릴게요~
    부푼 마음만 안고 오세요.
    마음이 간질간질해진 여러분을 환영합니다.
    함께해요💕`;

    return (
      <Product>
        <DetailPage style={tempStyle}>
          <Detailshape>
            <Content>
              <ContentBox>
                <Slide>
                  <DetailSlider />
                </Slide>
                <Title>
                  <TitleSubstance>
                    <FeedName>
                      <FeedTitleName>
                        <SubTitle>
                          {this.state.detail[0] &&
                            this.state.detail[0].detail_subtitle}
                        </SubTitle>
                        <TitleExplain>
                          {this.state.detail[0] &&
                            this.state.detail[0].detail_title}
                        </TitleExplain>
                      </FeedTitleName>
                      <TitleImg>
                        <ShareBtn>
                          <img
                            alt=""
                            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4gPHN2ZyB3aWR0aD0nMjRweCcgaGVpZ2h0PScyNHB4JyB2aWV3Qm94PScwIDAgMjQgMjQnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+IDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDUzLjIgKDcyNjQzKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4gPHRpdGxlPjk5RUQ5RDMxLUNEOTQtNEU5Qy05Q0Y2LTI4N0VBOEM1OUQ5NjwvdGl0bGU+IDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLjwvZGVzYz4gPGcgaWQ9J1N5bWJvbHMnIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPiA8ZyBpZD0naWNvbi8yNHB4L3NoYXJlX25hdmlfYmxhY2snIGZpbGwtcnVsZT0nbm9uemVybyc+IDxyZWN0IGlkPSdpY19hcmVhJyB4PScwJyB5PScwJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnPjwvcmVjdD4gPHBhdGggZD0nTTkuNzIzMDEzMDksOS4wNjk5MjYxMSBMMTMuMjAxMDgzMyw3LjI1NTc0NzU0IEMxMy4wNzA2MDk3LDYuODYwODIwNzQgMTMsNi40Mzg2NTYyNiAxMyw2IEMxMywzLjc5MDg2MSAxNC43OTA4NjEsMiAxNywyIEMxOS4yMDkxMzksMiAyMSwzLjc5MDg2MSAyMSw2IEMyMSw4LjIwOTEzOSAxOS4yMDkxMzksMTAgMTcsMTAgQzE1Ljk1NDk0MDgsMTAgMTUuMDAzNDg2OSw5LjU5OTIyNzc3IDE0LjI5MDk0NzMsOC45NDI5OTIyMiBMMTAuODA0NTcyMSwxMC43NjE1MDI3IEMxMC45MzE0Mjk0LDExLjE1MTQ2MzggMTEsMTEuNTY3NzI0MSAxMSwxMiBDMTEsMTIuNDg5MTYzNyAxMC45MTIxOTQsMTIuOTU3ODE5MyAxMC43NTE0ODM1LDEzLjM5MTA2NSBMMTQuMDgzMzE5NSwxNS4yNjI2NTE5IEMxNC44MTMwMTU5LDE0LjQ4NTQ1NjkgMTUuODQ5ODE1NywxNCAxNywxNCBDMTkuMjA5MTM5LDE0IDIxLDE1Ljc5MDg2MSAyMSwxOCBDMjEsMjAuMjA5MTM5IDE5LjIwOTEzOSwyMiAxNywyMiBDMTQuNzkwODYxLDIyIDEzLDIwLjIwOTEzOSAxMywxOCBDMTMsMTcuNjYwNjMxOSAxMy4wNDIyNjI4LDE3LjMzMTEzNDggMTMuMTIxODEyMiwxNy4wMTY0ODQ4IEw5LjYwMTE2NDQ5LDE1LjAzODgzNjkgQzguOTAxNzk3NDcsMTUuNjM4MDM4NyA3Ljk5MzE2OTAzLDE2IDcsMTYgQzQuNzkwODYxLDE2IDMsMTQuMjA5MTM5IDMsMTIgQzMsOS43OTA4NjEgNC43OTA4NjEsOCA3LDggQzguMDUxODk5MzUsOCA5LjAwODk2Mzk5LDguNDA2MDM1NjUgOS43MjMwMTMwOSw5LjA2OTkyNjExIFogTTcsMTQgQzguMTA0NTY5NSwxNCA5LDEzLjEwNDU2OTUgOSwxMiBDOSwxMC44OTU0MzA1IDguMTA0NTY5NSwxMCA3LDEwIEM1Ljg5NTQzMDUsMTAgNSwxMC44OTU0MzA1IDUsMTIgQzUsMTMuMTA0NTY5NSA1Ljg5NTQzMDUsMTQgNywxNCBaIE0xNyw4IEMxOC4xMDQ1Njk1LDggMTksNy4xMDQ1Njk1IDE5LDYgQzE5LDQuODk1NDMwNSAxOC4xMDQ1Njk1LDQgMTcsNCBDMTUuODk1NDMwNSw0IDE1LDQuODk1NDMwNSAxNSw2IEMxNSw3LjEwNDU2OTUgMTUuODk1NDMwNSw4IDE3LDggWiBNMTcsMjAgQzE4LjEwNDU2OTUsMjAgMTksMTkuMTA0NTY5NSAxOSwxOCBDMTksMTYuODk1NDMwNSAxOC4xMDQ1Njk1LDE2IDE3LDE2IEMxNS44OTU0MzA1LDE2IDE1LDE2Ljg5NTQzMDUgMTUsMTggQzE1LDE5LjEwNDU2OTUgMTUuODk1NDMwNSwyMCAxNywyMCBaJyBpZD0nQ29tYmluZWQtU2hhcGUnIGZpbGw9JyMwMDAwMDAnPjwvcGF0aD4gPC9nPiA8L2c+IDwvc3ZnPg=="
                          ></img>
                        </ShareBtn>
                        <HeartBtn>
                          <img
                            alt=""
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0Jz4gPGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz4gPHBhdGggZD0nTTAgMGgyNHYyNEgweicvPiA8cGF0aCBzdHJva2U9JyMwMDAnIHN0cm9rZS13aWR0aD0nMicgZD0nTTEyLjI0MiA2LjEyOWwtLjU1NS0uNTU1QzkuODQgMy43MjcgNi44NDEgMy40MjggNC44MjggNS4wOTFhNS4wMDEgNS4wMDEgMCAwIDAtLjM2NCA3LjQwMmw3Ljc3OCA3Ljc3OCA3Ljc3OC03Ljc3OGE1LjAwMSA1LjAwMSAwIDAgMC0uMzY0LTcuNDAyYy0yLjAxMy0xLjY2My01LjAxMi0xLjM2NC02Ljg1OS40ODNsLS41NTUuNTU1eicvPiA8L2c+IDwvc3ZnPg=="
                          />
                        </HeartBtn>
                      </TitleImg>
                    </FeedName>
                    <Price>
                      <div>
                        <MainPrice>
                          {" "}
                          {this.state.detail[0] &&
                            this.state.detail[0].detail_price}{" "}
                        </MainPrice>
                        <PriceNum>
                          {this.state.detail[0] &&
                            this.state.detail[0].detail_discountPrice}{" "}
                          <PriceText> 원</PriceText>
                        </PriceNum>
                      </div>
                      <DiscountPrice>
                        {" "}
                        {this.state.detail[0] &&
                          this.state.detail[0].detail_discountRate}
                        %
                      </DiscountPrice>
                    </Price>
                  </TitleSubstance>
                  <Explain>
                    <ExplainImoji>
                      <Icon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0Jz4gPGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz4gPHBhdGggZD0nTTAgMGgyNHYyNEgweicvPiA8cGF0aCBmaWxsPScjRjY2JyBkPSdNMTIuMjQyIDYuMTI5bC0uNTU1LS41NTVDOS44NCAzLjcyNyA2Ljg0MSAzLjQyOCA0LjgyOCA1LjA5MWE1LjAwMSA1LjAwMSAwIDAgMC0uMzY0IDcuNDAybDcuMDcxIDcuMDdhMSAxIDAgMCAwIDEuNDE1IDBsNy4wNy03LjA3YTUuMDAxIDUuMDAxIDAgMCAwLS4zNjQtNy40MDJjLTIuMDEzLTEuNjYzLTUuMDEyLTEuMzY0LTYuODU5LjQ4M2wtLjU1NS41NTV6Jy8+IDwvZz4gPC9zdmc+" />
                      <Like> {this.state.like} 명이 좋아한 프립</Like>
                    </ExplainImoji>
                    <ExplainImoji>
                      <Icon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxOCcgaGVpZ2h0PScxOCcgdmlld0JveD0nMCAwIDE4IDE4Jz4gPGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz4gPHBhdGggZD0nTTAgMGgxOHYxOEgweicvPiA8cmVjdCB3aWR0aD0nMTInIGhlaWdodD0nMTInIHg9JzMnIHk9JzMnIGZpbGw9JyMzMzk3RkYnIGZpbGwtcnVsZT0nbm9uemVybycgcng9JzEnLz4gPHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNNSA4aDh2NUg1eicvPiA8cGF0aCBmaWxsPScjMzM5N0ZGJyBmaWxsLXJ1bGU9J25vbnplcm8nIGQ9J001IDFoMnYySDV6TTExIDFoMnYyaC0yeicvPiA8L2c+IDwvc3ZnPg==" />
                      <Like> 유효기간 구매일로부터 88일</Like>
                    </ExplainImoji>
                    <ExplainImoji>
                      <Icon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAArCAMAAAAuY3oFAAAASFBMVEVHcEwAf/8Aff8Afv8AgP8Jgv8Phf8Aff8Bf/8NhP8Afv8Hgf8Af/8Df/8Afv8Aff8zl/////8rk/8djP/B3/9jr//r9P+UyP/2LrjhAAAAEHRSTlMARZxnBt/xGLntgtCPxFUtECF3nwAAARVJREFUOMuFlN0CwxAMhcNoBd06uu7933RqzL+dO3KaL0gK8BMjWihEJTRh0GqlaM3uZSzStQoziSEaPCiLLOtWhL1ly5I8eBN3Dv74fc/3rnjIwTbTN5jtW4ccxJ1DesCyD7VcEGrGBkNdBbhPhAyIzdav4zyPV7ZhSUF4P73eBUNk3z+DshwCVFoc0XCkPQVZjWc0nFmVsMwNC/A5gv8vUs+Pqf9fFOOzq+buwfXssfT13JPXQt9T0o7iVn57To0MKrQ+GaRwRwjqN9XVTnGu+OiIUfcOxN7z2RPt6IlytrF/BUm3CmJv9f+hhFSAFlIDakgLKCEdwHVbaYqXFbqKkD4gQfoASL+KESBCxgDfGpSScucDG1I6q3UhKQAAAAAASUVORK5CYII=" />
                      <Like>
                        {" "}
                        {this.state.detail[0] &&
                          this.state.detail[0].detail_region}
                      </Like>
                    </ExplainImoji>
                    <ExplainImoji>
                      <Icon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2Jz4gPHBhdGggZmlsbD0nIzMzOTdGRicgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNOCAxMi4xNmwtMy44NTIgMS44OTRhLjUuNSAwIDAgMS0uNzE1LS41MmwuNjEtNC4yNDgtMi45OTEtMy4wNzlhLjUuNSAwIDAgMSAuMjczLS44NGw0LjIzLS43MzNMNy41NTguODM4YS41LjUgMCAwIDEgLjg4NCAwbDIuMDAzIDMuNzk2IDQuMjMuNzMyYS41LjUgMCAwIDEgLjI3My44NDFsLTIuOTkyIDMuMDc5LjYxMSA0LjI0OGEuNS41IDAgMCAxLS43MTUuNTJMOCAxMi4xNnonLz4gPC9zdmc+" />
                      <Like>
                        {" "}
                        프립 평점{" "}
                        {this.state.detail[0] &&
                          this.state.detail[0].detail_score}
                      </Like>
                    </ExplainImoji>
                  </Explain>

                  <Host>
                    <HostName>
                      <HostName2>호스트</HostName2>
                    </HostName>
                    <HostInfoAll>
                      <HostInfo>
                        <HostImg>
                          <img
                            src="https://res.cloudinary.com/frientrip/image/upload/ar_1:1,c_fill,dpr_1.0,f_auto,g_auto,h_48,q_auto,w_48/20190117_235621_1547737063358"
                            alt=""
                          ></img>
                        </HostImg>
                        <HostContent>
                          <HostContent1>
                            <HostContentName>
                              <span>지아네 요리공작소</span>
                            </HostContentName>
                            <HostIntro> 프립 11 | 좋아요 362 </HostIntro>
                          </HostContent1>
                        </HostContent>
                      </HostInfo>
                      <HostItem>
                        {/* 안녕하세요, 호스트 이경민입니다. 요리와 베이킹 강의만
                        10년차입니다. 더 좋은 먹거리와 행복한 식탁을 만들기 위해
                        공방을 열었어요. 현) 요리아카데미 NCS 까페 취업 및
                        창업과정 출강 현) 지아네요리공작소 공방 대표 키즈쿠킹 /
                        성인 요리수업 / 베이킹 수업 진행 전) 고등학교 조리과
                        교사로 4년 재직 */}
                        {isTxt}
                      </HostItem>
                      <HostProfile>호스트 프로필</HostProfile>
                      <HostIntro></HostIntro>

                      <HostReview>
                        <h4>호스트후기</h4>
                      </HostReview>
                      <HostReviewIntro>
                        <HostReviewPic>
                          <img
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Ccircle cx='24' cy='24' r='24' fill='%23C2E0FF'/%3E %3Cpath fill='%23FFF' d='M19 24.5h10a4 4 0 0 1 4 4v4H15v-4a4 4 0 0 1 4-4zm5-1.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z'/%3E %3C/g%3E %3C/svg%3E"
                            alt=""
                          ></img>
                        </HostReviewPic>
                        <HostReviewInfor>
                          <HostReviewName> 이정아 </HostReviewName>

                          <HostReviewFlex>
                            <HostReviewStar>
                              <img
                                alt=""
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2Jz4gPHBhdGggZmlsbD0nIzMzOTdGRicgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNOCAxMi4xNmwtMy44NTIgMS44OTRhLjUuNSAwIDAgMS0uNzE1LS41MmwuNjEtNC4yNDgtMi45OTEtMy4wNzlhLjUuNSAwIDAgMSAuMjczLS44NGw0LjIzLS43MzNMNy41NTguODM4YS41LjUgMCAwIDEgLjg4NCAwbDIuMDAzIDMuNzk2IDQuMjMuNzMyYS41LjUgMCAwIDEgLjI3My44NDFsLTIuOTkyIDMuMDc5LjYxMSA0LjI0OGEuNS41IDAgMCAxLS43MTUuNTJMOCAxMi4xNnonLz4gPC9zdmc+"
                              ></img>
                              <img
                                alt=""
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2Jz4gPHBhdGggZmlsbD0nIzMzOTdGRicgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNOCAxMi4xNmwtMy44NTIgMS44OTRhLjUuNSAwIDAgMS0uNzE1LS41MmwuNjEtNC4yNDgtMi45OTEtMy4wNzlhLjUuNSAwIDAgMSAuMjczLS44NGw0LjIzLS43MzNMNy41NTguODM4YS41LjUgMCAwIDEgLjg4NCAwbDIuMDAzIDMuNzk2IDQuMjMuNzMyYS41LjUgMCAwIDEgLjI3My44NDFsLTIuOTkyIDMuMDc5LjYxMSA0LjI0OGEuNS41IDAgMCAxLS43MTUuNTJMOCAxMi4xNnonLz4gPC9zdmc+"
                              ></img>
                              <img
                                alt=""
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2Jz4gPHBhdGggZmlsbD0nIzMzOTdGRicgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNOCAxMi4xNmwtMy44NTIgMS44OTRhLjUuNSAwIDAgMS0uNzE1LS41MmwuNjEtNC4yNDgtMi45OTEtMy4wNzlhLjUuNSAwIDAgMSAuMjczLS44NGw0LjIzLS43MzNMNy41NTguODM4YS41LjUgMCAwIDEgLjg4NCAwbDIuMDAzIDMuNzk2IDQuMjMuNzMyYS41LjUgMCAwIDEgLjI3My44NDFsLTIuOTkyIDMuMDc5LjYxMSA0LjI0OGEuNS41IDAgMCAxLS43MTUuNTJMOCAxMi4xNnonLz4gPC9zdmc+"
                              ></img>
                              <img
                                alt=""
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2Jz4gPHBhdGggZmlsbD0nIzMzOTdGRicgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNOCAxMi4xNmwtMy44NTIgMS44OTRhLjUuNSAwIDAgMS0uNzE1LS41MmwuNjEtNC4yNDgtMi45OTEtMy4wNzlhLjUuNSAwIDAgMSAuMjczLS44NGw0LjIzLS43MzNMNy41NTguODM4YS41LjUgMCAwIDEgLjg4NCAwbDIuMDAzIDMuNzk2IDQuMjMuNzMyYS41LjUgMCAwIDEgLjI3My44NDFsLTIuOTkyIDMuMDc5LjYxMSA0LjI0OGEuNS41IDAgMCAxLS43MTUuNTJMOCAxMi4xNnonLz4gPC9zdmc+"
                              ></img>
                              <img
                                alt=""
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2Jz4gPHBhdGggZmlsbD0nIzMzOTdGRicgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNOCAxMi4xNmwtMy44NTIgMS44OTRhLjUuNSAwIDAgMS0uNzE1LS41MmwuNjEtNC4yNDgtMi45OTEtMy4wNzlhLjUuNSAwIDAgMSAuMjczLS44NGw0LjIzLS43MzNMNy41NTguODM4YS41LjUgMCAwIDEgLjg4NCAwbDIuMDAzIDMuNzk2IDQuMjMuNzMyYS41LjUgMCAwIDEgLjI3My44NDFsLTIuOTkyIDMuMDc5LjYxMSA0LjI0OGEuNS41IDAgMCAxLS43MTUuNTJMOCAxMi4xNnonLz4gPC9zdmc+"
                              ></img>
                            </HostReviewStar>
                            <HostReviewDate>
                              2020년 5월 13일 21:31 작성
                            </HostReviewDate>
                          </HostReviewFlex>
                        </HostReviewInfor>
                      </HostReviewIntro>

                      <HostReviewContent>
                        <span>
                          똥손+간단한 재료로 엄청 맛있는 스콘이 탄생했어요 넘
                          재밌고 특별한 시간이었습니다! 주변인에게 나눠주니
                          칭찬도 많이 받고 뿌듯했습니당. 갓 만든 스콘과
                          버터+딸기잼+커피 조합 잊지못할거에요👍🏻
                        </span>
                      </HostReviewContent>

                      <HostReviewGrayName>
                        (망원) 스콘 2종 원데이클래스 (예약 가능) 이용권
                      </HostReviewGrayName>
                      <HostReviewGrayNameTwo>이용권</HostReviewGrayNameTwo>
                      <HostReviewHelp>
                        <HostReviewContentName>
                          도움이 됬어요 0
                          <img
                            alt=""
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='none' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23FFCD00' fill-rule='nonzero' d='M12 3h1v3h-1V3zm5.207 1.086l.707.707-2.121 2.121-.707-.707 2.121-2.121zm-10.121.707l.707-.707 2.121 2.121-.707.707-2.121-2.121z'/%3E %3Cpath fill='%23BBB' stroke='%23BBB' d='M4 22h4v-9H4z'/%3E %3Cpath stroke='%23BBB' d='M17.936 12h-3.958V9.388A1.38 1.38 0 0 0 12.6 8c-.497 0-.965.267-1.212.697L9 13H8v9h9.153a2 2 0 0 0 1.983-1.741l.783-6A2 2 0 0 0 17.936 12z'/%3E %3C/g%3E %3C/svg%3E"
                          />
                        </HostReviewContentName>
                      </HostReviewHelp>
                      <HostProfile> 393개 후기 모두 보기</HostProfile>
                    </HostInfoAll>
                  </Host>
                </Title>
                <HostReview>
                  <h4>프립 소개</h4>
                </HostReview>
                <DetailData dangerouslySetInnerHTML={{ __html: introduce }} />
              </ContentBox>
              <Include>
                <h4>포함 사항</h4>
              </Include>
              <Include>
                <h4>불포함 사항</h4>
              </Include>
              <Include>
                <h4>세부 일정</h4>
              </Include>
              <Include>
                <h4>유의 사항</h4>
              </Include>

              <Place>진행 장소</Place>
              <KakaoMap />
              <Frequently>
                <FrequentlyQuestion
                  onClick={() => {
                    this.handleClick(0);
                  }}
                >
                  자주 묻는 질문{" "}
                  <img
                    alt=""
                    src={this.state.clickbutton[0] ? Down : Upward}
                  ></img>{" "}
                </FrequentlyQuestion>
                <QuestionContent
                  style={{
                    display: this.state.clickbutton[0] ? "block" : "none",
                  }}
                >
                  <p>Q : 신청한 프립은 어디서 확인하나요? </p>
                  <p>
                    A : [내 프립] 또는 [내 활동]의 [신청 내역] 탭에서 신청하신
                    프립을 확인하실 수 있습니다.{" "}
                  </p>

                  <p>Q: 환불 신청했는데 언제 환불되나요? </p>

                  <p>
                    A : 환불 신청한 날로부터 영업일 기준 최대 5일 이내에 환불될
                    예정입니다.
                  </p>

                  <p>Q: 두 명 신청하고 싶은데 어떻게 하나요?</p>

                  <p>
                    A : 프립에 따라 한 번에 여러명 신청하는 것이 가능하며, 1회
                    최대 신청 가능 인원 수는 프립별로 다를 수 있으니 확인
                    부탁드립니다. 추가 신청을 원하시는 경우 추가 결제가 가능하니
                    참고 부탁드립니다.
                  </p>
                  <p>Q : 인원 증원은 안되나요? </p>

                  <p>
                    A : 정해진 인원으로 진행되는 프립이기에 인원 증원이 어려운
                    점 양해 부탁드립니다. '대기 알림' 또는 '대기 신청'을 하시면
                    공석이 생겼을 때, 알림 설정에 동의하신 분들에 한해 Push
                    알림과 이메일로 안내해 드리고 있습니다.{" "}
                  </p>

                  <p>Q : 대기신청했을 경우 따로 연락을 주시나요? </p>

                  <p>
                    A : 공석이 생겼을 때, 알림 설정에 동의하신 분들에 한해 Push
                    알림과 이메일로 안내해 드리고 있습니다.
                  </p>
                </QuestionContent>
                <FrequentlyQuestion
                  onClick={() => {
                    this.handleClick(1);
                  }}
                >
                  문의 하기
                  <img
                    alt=""
                    src={this.state.clickbutton[1] ? Down : Upward}
                  ></img>{" "}
                </FrequentlyQuestion>
                <FrequentlyQuestion
                  onClick={() => {
                    this.handleClick(2);
                  }}
                >
                  환불 정책
                  <img
                    alt=""
                    src={this.state.clickbutton[2] ? Down : Upward}
                  ></img>{" "}
                </FrequentlyQuestion>
                <QuestionContent
                  style={{
                    display: this.state.clickbutton[2] ? "block" : "none",
                  }}
                >
                  <p>
                    <p> [국내 환불규정] </p>-
                    <p>신청 마감 4일 이전 취소시 : 전액환불 </p>
                    <p>
                      - 신청 마감 3일 이전 취소시 : 결제 금액의 20% 배상 후 환불{" "}
                    </p>
                    <p>
                      - 신청 마감 2일 이전 취소시 : 결제 금액의 40% 배상 후 환불
                    </p>
                    <p>
                      - 신청 마감 1일 이전 취소시 : 결제 금액의 50% 배상 후 환불{" "}
                    </p>
                    - 신청 마감 이후 취소시, 또는 당일 불참 : 환불 불가 ※ 신청
                    마감일은 무엇인가요? 호스트님들이 장소 대관, 강습, 재료 구비
                    등 프립 진행을 준비하기 위해, 프립 참여일보다 일찍 신청을
                    마감합니다. 환불은 참여일이 아닌 신청 마감일 기준으로
                    이루어집니다.{" "}
                    <p>
                      프립마다 신청 마감일이 다르니, 꼭 날짜와 시간을 확인 후
                      결제해주세요! : )
                    </p>{" "}
                    <p>
                      {" "}
                      [환불 신청 방법] 1. 해당 프립을 결제한 계정으로 로그인 2.
                      내 프립 - 신청내역 3. 취소를 원하는 프립 상세 정보 버튼 -
                      취소 ※ 결제 수단에 따라 예금주, 은행명, 계좌번호 입력
                    </p>
                  </p>
                </QuestionContent>
              </Frequently>
            </Content>
          </Detailshape>
        </DetailPage>

        <Option>
          <OptionAll>
            <OptionProperty>
              <OptionName>옵션 선택</OptionName>
            </OptionProperty>
          </OptionAll>
        </Option>
      </Product>
    );
  }
}

export default Detail;

const Product = styled.div`
  width: 100%;
  max-width: 990px;
  min-height: 1px;
  margin: 0px auto;
  display: flex;
`;

const DetailPage = styled.div`
  width: auto;
  height: auto;
  display: none;
  opacity: 0;
  min-width: 0px;
  min-height: 1px;
  transition: opacity 200ms ease-in-out 0s;
`;
const Detailshape = styled.div`
  position: relative;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 100%;
  display: flex;
  width: 100%;
  height: auto;
  margin: 0px auto;
`;

const Content = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  display: flex;
  min-width: 0px;
  width: 100%;
  flex-flow: column nowrap;
  padding: 40px 30px 30px;
`;

const ContentBox = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
`;

const Slide = styled.div``;

const Title = styled.div`
  width: 560px;
  min-height: 1px;
`;

const TitleSubstance = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  line-height: 1.8;
  font-size: 14px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const FeedName = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const FeedTitleName = styled.div`
  width: 100%;
  min-width: 0px;
`;

const SubTitle = styled.h2`
  line-height: 22px;
  font-size: 14px;
  font-weight: normal;
  color: rgb(155, 155, 155);
  margin: 0px 0px 11px;
`;

const TitleExplain = styled.h1`
  height: 64px;
  line-height: 32px;
  font-size: 22px;
  font-weight: 500;
  word-break: keep-all;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 0px;
  overflow: hidden;
`;

const TitleImg = styled.div`
  white-space: nowrap;

  * {
    margin-right: 20px;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border-style: none;
    color: inherit;
    font-size: 1em;
    margin: 0;
  }
`;

// const TitleImg = styled.div`
//   margin-right: 20px;
// `;

const ShareBtn = styled.button`
  cursor: pointer;
`;

const HeartBtn = styled.button`
  width: 24px;
  height: 24px;
  line-height: normal;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  padding: 0px;
  border-radius: 5px;
`;

const Price = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  height: 40px;
  align-items: flex-end;
  margin-top: 10px;
`;

const PriceNum = styled.div`
  font-size: 16px;
  font-weight: 900;
`;

const PriceText = styled.span`
  margin-right: 2px;
`;

const DetailData = styled.div`
  border-bottom: 1px solid rgb(238, 238, 238);
  img {
    width: 100% !important;
    height: 100% !important;
  }
`;

const Option = styled.div`
  margin-top: 35px;
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  width: 370px;
  height: auto;
  border-left: 1px solid rgb(238, 238, 238);
`;

const OptionAll = styled.div`
  position: sticky;
  top: 70px;
`;

const OptionProperty = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 370px;
  max-height: calc(100vh - 70px);
  height: 100vh;
  padding: 0px 30px;
  overflow: hidden;
`;

const OptionName = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 370px;
  max-height: calc(100vh - 70px);
  height: 100vh;
  padding: 0px 30px;
  overflow: hidden;
`;

const MainPrice = styled.div`
  color: rgb(155, 155, 155);
  text-decoration: line-through;
`;

const DiscountPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
  color: rgb(255, 102, 102);
`;

const Explain = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  line-height: 1.8;
  font-size: 14px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const Icon = styled.img.attrs((props) => ({
  src: props.src,
}))``;

const ExplainImoji = styled.div`
  display: flex;
  line-height: 18px;
  font-size: 12px;
  margin-top: 15px;

  ${Icon} {
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }
`;

const Like = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  &:nth-child(1) {
  }
`;

const Host = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  line-height: 1.8;
  font-size: 14px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const HostName = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const HostName2 = styled.h4`
  line-height: 24px;
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
`;

const HostInfoAll = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const HostInfo = styled.div`
  display: flex;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 24px;
`;

const HostImg = styled.div`
  img {
    display: initial;
    width: 100%;
    border-radius: 50%;
  }
`;

const HostContent = styled.div``;

const HostContent1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HostContentName = styled.div`
  margin-left: 20px;

  span {
    display: inline-flex;
    max-width: 212px;
    font-weight: bold;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    line-height: 22px;
    overflow: hidden;
  }
`;

const HostIntro = styled.span`
  margin-top: 12px;
  color: rgb(155, 155, 155);
  line-height: 10px;
  font-size: 10px;
  padding-right: 15px;
`;

const HostItem = styled.div`
  position: relative;
  margin-bottom: 20px;
  height: auto;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: pre-line;
  font-size: 14px;
  line-height: 24px;
  max-height: 110px;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const HostProfile = styled.a`
  text-align: center;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100% !important;
  height: 40px !important;
  line-height: 13px;
  font-size: 13px;
  border-radius: 5px;
  padding: 13px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(238, 238, 238);
  border-image: initial;
  margin-top: 20px;
`;

const HostReview = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  line-height: 1.8;
  font-size: 14px;
  border-bottom: 1px solid rgb(238, 238, 238);

  h4 {
    line-height: 24px;
    font-size: 18px;
    font-weight: bold;
    margin: 0px;
  }
`;

const HostReviewIntro = styled.div`
  display: flex;
  margin-top: 15px;
`;

const HostReviewPic = styled.div`
  img {
    width: 48px;
    height: 48px;
    border-radius: 5px;
  }
`;
const HostReviewName = styled.header`
  font-weight: bold;
  line-height: 16px;
  margin-left: 10px;
`;

const HostReviewFlex = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const HostReviewStar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-left: 10px;
  margin-top: 10px;
`;

const HostReviewDate = styled.div`
  margin-top: 10px;
  margin-left: 6px;
  line-height: 10px;
  color: rgb(155, 155, 155);
  font-size: 10px;
`;

const HostReviewInfor = styled.div`
  margin-left: 10px;
`;

const HostReviewContent = styled.div`
  span {
    margin-bottom: 20px;
    white-space: pre-wrap;
    font-size: 14px;
    line-height: 24px;
    word-break: keep-all;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    -webkit-line-clamp: 4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    max-height: 96px;
    overflow: hidden;
  }
`;

const HostReviewGrayName = styled.div`
  color: rgb(155, 155, 155);
  cursor: default;
  display: inline-block;
  margin-bottom: 10px;
  line-height: 10px;
  font-size: 10px;
`;

const HostReviewGrayNameTwo = styled.div`
  color: rgb(155, 155, 155);
  cursor: default;
  display: inline-block;
  margin-bottom: 10px;
  line-height: 10px;
  font-size: 10px;
`;

const HostReviewHelp = styled.div`
  height: 24px;
  text-align: right;
`;

const HostReviewContentName = styled.div`
  width: auto;
  height: auto;
  line-height: 10px;
  background-color: transparent;
  cursor: pointer;
  color: rgb(85, 85, 85);
  font-size: 10px;
  padding: 0px;
  border-radius: 5px;

  img {
    margin-left: 2px;
  }
`;

const Include = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  line-height: 24px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const Place = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-bottom: 20px;
  line-height: 24px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

const Frequently = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;

const FrequentlyQuestion = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  line-height: 22px;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.4s ease 0s;
  border-top: 1px solid rgb(238, 238, 238);
  font-size: 18px;
  font-weight: bold;
  padding-top: 20px;
  margin-top: 30px;
  border: none;
  background-color: white;
  img {
    width: 18px;
    height: 18px;
    transform: rotate(180deg);
  }
`;

const QuestionContent = styled.div`
  width: 100%;
  height: 100%;
  p {
    list-style: disc;
    font-size: 14px;
    line-height: 24px;
    visibility: visible;
    transition: visibility 0.3s ease;
    letter-spacing: -0.025em;

    margin-top: 20px;
  }
`;
