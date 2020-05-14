import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <FooterAll>
        <Admin>
          <Name>
            <Link to="https://team.frip.co.kr/joinhost">호스트 지원</Link>
            <Link to="https://www.frip.co.kr/promotion/group">단체 신청</Link>
            <Link to="https://www.frip.co.kr/promotion/welfare">
              기업 복지 신청
            </Link>
          </Name>

          <Cooperate>
            <Inquire>
              <InquireSeparate>
                <FooterName>Friendship</FooterName>
                <CooperateImg>
                  <Link
                    alt=""
                    to="https://res.cloudinary.com/frientrip/image/upload/v1580982772/frip-partnership-1912.pdf?_branch_match_id=779598393514134793"
                  >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAABFCAMAAADXajKUAAAAPFBMVEVHcExnZ2dmZmZqampnZ2dnZ2dmZmZmZmZmZmZmZmZmZmZoaGhmZmbOzs7Nzc3Ozs7Nzc3Nzc3MzMxmZmaOT0TXAAAAEnRSTlMAbosUL6HH51m09kfTQeQumsBy1jrEAAADAElEQVRo3u2b6XaDIBCFhWHHbOX937UDxEBQW0yjqR7uj6RZDvAx3Jlpjnad1+l6/tqrztdTN+hy2y1G1O0SQU77jccjLiEsFw9yvXQ7FVyuHsWv/zYg7Vb+UN3wCYn2DTIwYGyuOwfpIgRGZrceSdkXHeJJdg/SgSf5OgJJoGgkjaSRNJJG0kgaSSNZIMZY+ZZV6s/DAmPwGolzbulklhJ81E6WH+jlY42knFObkfDAUEvCxViwS5LejZWTKC6k1JRtQUJ1JlqSKPmQcS69UA8SSbzU8ChyEvsA5bA+ici3U49I3LTIg6QvNiYjsfhFQRXhEjcBVichFMURwj+rkgTstGCOhCcSkM7EdQMNm7SFT1ja5VmfTOqnmNA0qDeZ/Q8kgMbtjTOy14T9TJLFRGRj3Cf4MAlwk1tEsMqYmHii8hfrk+AMdI4EMAH11GJxxgrtc5OxOYmkT+pnSfgmJCQ40salFCQ0Ud6hRV09+cjpomF5NK6kIJGF+XVeMSgf66OOx4kMdMoXR1mSCP/RkzUMVA3qszC5O82Fw7U+CXhLqxmfkCeT+0Xprk7MeIeRUBl72IREOaOH9Y1zF67dL0gpRajAxQnoalHEG7qVwoW/HS5thzMzUU9I3tFImnl/Tuk7VGMR+lMHuYSE+fFFPMnTNR4I5VpoTvPCaCtIxtl+VZKQeIdJ6rsVLC9J3kxJ8EaSHOb3YkJitoWShM1rNFlNHliXRJnYceAs0hYkYv4AwVISDOG6JBgREzcYKxl24U8k2gThGKb8654fOJ0hYaH79wkPPSZ66RPgqllYpUqCKMg05ZPUd/AiGHLoIEckZBRFqVf+n9GksZXt3kYSMpsxUvYh56mQBVYlgcK7L5LM56s3OP41vUhSp0ayCUn8lSiXfRfJfAmo6iap7BeR1LcqW5NE1ZLoiV9Tyb8isSSfEavb430C3etilLLNfPIRNZJG0kgaSSNpJI2kJDnv/3LhcMHw+UDXCx/nGu7jXFd/oHsdjnP/yYHuCeqOcZ/WN5y/uP6yq24UAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </Link>
                </CooperateImg>
              </InquireSeparate>

              <Infomation>
                <InfomationName>
                  <span>㈜프렌트립</span>
                  <ReigsterNum>|</ReigsterNum>
                  <span>사업자 등록번호 : 261-81-04385</span>
                  <ReigsterNum>|</ReigsterNum>
                  <span>통신판매업신고번호 : 2016-서울성동-01088</span>
                </InfomationName>

                <InfomationName>
                  <span>대표 : 임수열</span>
                  <ReigsterNum>|</ReigsterNum>
                  <span>개인정보 관리 책임자 : 김종광</span>
                  <ReigsterNum>|</ReigsterNum>
                  <span>
                    서울시 성동구 왕십리로 115 헤이그라운드 서울숲점 G601
                  </span>
                </InfomationName>
                <div>
                  <p>
                    ㈜프렌트립은 통신판매중개자로서 거래당사자가 아니며,
                    호스트가 등록한 상품정보 및 거래에 대해 ㈜프렌트립은 일체의
                    책임을 지지 않습니다.
                  </p>
                </div>
                <p>
                  NICEPAY 안전거래 서비스 : 고객님의 안전거래를 위해 현금 결제
                  시, 저희 사이트에서 가입한 구매안전 서비스를 이용할 수
                  있습니다.&nbsp;
                  <Link
                    to="https://pg.nicepay.co.kr/issue/IssueEscrow.jsp?Mid=frientripm&amp;CoNo=2618104385"
                    target="_blank"
                  >
                    가입 확인
                  </Link>
                </p>
                <p> </p>
              </Infomation>

              <Terms>
                <Link to="/static-info/agreement">
                  <TermsName>이용약관</TermsName>
                </Link>
                <Link to="/static-info/privacy">
                  <strong>개인정보 처리방침</strong>
                </Link>

                <Link to="/static-info/geoLocationAgreement">
                  <TermsName>위치기반 서비스 이용약관</TermsName>
                </Link>
              </Terms>
            </Inquire>

            <Customer>
              <Center>고객센터</Center>
              <Info>
                <p> 이메일 : cs@frientrip.com </p>
                <p> 고객센터 : 02-512-3662</p>
                <p> 업무시간 : 평일 11:00 - 18:00 (점심: 13:00 - 14:00)</p>
              </Info>
            </Customer>
          </Cooperate>

          <Picture>
            <Pic>
              <Link to="https://www.instagram.com/frip_korea">
                <PicType>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='%23FFF' fill-opacity='0' fill-rule='nonzero' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M12 3c2.444 0 2.75.01 3.71.054.959.044 1.613.196 2.185.419.592.23 1.094.537 1.594 1.038.5.5.809 1.002 1.039 1.594.222.572.374 1.226.418 2.184C20.99 9.25 21 9.556 21 12s-.01 2.75-.054 3.71c-.044.959-.196 1.613-.418 2.185a4.412 4.412 0 0 1-1.039 1.594c-.5.5-1.002.809-1.594 1.039-.572.222-1.226.374-2.184.418-.96.044-1.267.054-3.711.054s-2.75-.01-3.71-.054c-.959-.044-1.613-.196-2.185-.418a4.412 4.412 0 0 1-1.594-1.039c-.5-.5-.809-1.002-1.038-1.594-.223-.572-.375-1.226-.419-2.184C3.01 14.75 3 14.444 3 12s.01-2.75.054-3.71c.044-.959.196-1.613.419-2.185A4.411 4.411 0 0 1 4.51 4.51c.5-.5 1.002-.809 1.594-1.038.572-.223 1.226-.375 2.184-.419C9.25 3.01 9.556 3 12 3zm.05 12.06a3.015 3.015 0 1 1 0-6.03 3.015 3.015 0 0 1 0 6.03zm0-7.66a4.645 4.645 0 1 0 0 9.29 4.645 4.645 0 0 0 0-9.29zm5.89-.144a1.101 1.101 0 1 0-2.202 0 1.101 1.101 0 0 0 2.203 0z'/%3E %3C/g%3E %3C/svg%3E"
                    alt="프립 인스타그램 링크"
                    width="24px"
                    height="24px"
                  />
                </PicType>
              </Link>

              <Link to="https://www.instagram.com/frip_korea">
                <PicType>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Cpath fill='%23FFF' fill-opacity='0' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M20.007 3H3.993A.993.993 0 0 0 3 3.993v16.014c0 .548.445.993.993.993h8.628v-6.961h-2.343v-2.725h2.343V9.31c0-2.324 1.421-3.59 3.494-3.59.699-.002 1.397.033 2.092.105v2.43h-1.428c-1.13 0-1.35.534-1.35 1.322v1.735h2.7l-.35 2.725h-2.365V21h4.593a.993.993 0 0 0 .993-.993V3.993A.993.993 0 0 0 20.007 3z'/%3E %3C/g%3E %3C/svg%3E"
                    alt="프립 페이스북 링크"
                    width="24px"
                    height="24px"
                  />
                </PicType>
              </Link>

              <Link to="https://www.instagram.com/frip_korea">
                <PicType>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Cpath fill='none' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M3 3h18v18H3V3zm10.431 13.122H16.5V7.887h-3.024v4.257l-2.898-4.257H7.5v8.235h3.033v-4.266l2.898 4.266z'/%3E %3C/g%3E %3C/svg%3E"
                    alt="프립 네이버 링크"
                    width="24px"
                    height="24px"
                  />
                </PicType>
              </Link>

              <Link to="https://www.instagram.com/frip_korea">
                <PicType>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='none' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M20.605 13.282V9.381h-1.308v.386s-.387-.526-1.13-.526c0 0-1.906-.083-1.906 2.119 0 0-.021 2.051 1.853 2.051 0 0 .764.032 1.183-.527v.323s.094 1.01-.859 1.01h-.324v1.225h.523s1.968.022 1.968-2.16zm-5.024-1.907s.074-2.134-2.277-2.134c0 0-2.225 0-2.225 2.134 0 0-.072 2.104 2.225 2.104 0 0 2.277-.003 2.277-2.104zM10.13 9.61s.055-2.164-1.913-2.164v1.333s.614-.03.614 1.146v3.41h1.299V9.61zm-4.244 3.87s1.898-.072 1.898-2.15c0 0-.07-2.107-1.898-2.107 0 0-.6 0-1.145.544V7.575H3.394v5.76h1.36v-.45s.322.594 1.132.594zM19.526 3C21.443 3 23 4.603 23 6.58v8.492c0 1.978-1.556 3.58-3.475 3.58h-5.184l-1.77 2.958s-.015.034-.059.088A.593.593 0 0 1 12 22a.593.593 0 0 1-.514-.306.656.656 0 0 1-.058-.084l-1.77-2.958H4.476C2.555 18.652 1 17.05 1 15.072V6.58C1 4.603 2.555 3 4.475 3h15.05zm-6.222 7.486c.478 0 .866.398.866.888 0 .491-.388.89-.866.89a.878.878 0 0 1-.865-.89c0-.49.387-.888.865-.888zm5.188 0c.478 0 .865.398.865.888 0 .491-.387.89-.865.89a.877.877 0 0 1-.865-.89c0-.49.387-.888.865-.888zm-12.903 0c.478 0 .866.398.866.888 0 .491-.388.89-.866.89a.878.878 0 0 1-.865-.89c0-.49.388-.888.865-.888z'/%3E %3C/g%3E %3C/svg%3E"
                    alt="프립 네이버 블로그 링크"
                    width="24px"
                    height="24px"
                  />
                </PicType>
              </Link>

              <Link to="https://www.instagram.com/frip_korea">
                <PicType>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='%23FFF' fill-opacity='0' fill-rule='nonzero' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M21.582 7.186C22 8.746 22 12 22 12s0 3.254-.418 4.814a2.505 2.505 0 0 1-1.768 1.768C18.254 19 12 19 12 19s-6.254 0-7.814-.418a2.505 2.505 0 0 1-1.768-1.768C2 15.254 2 12 2 12s0-3.254.418-4.814c.23-.86.908-1.538 1.768-1.768C5.746 5 12 5 12 5s6.254 0 7.814.418c.86.23 1.538.908 1.768 1.768zM9.955 14.955L15.182 12 9.955 9.045v5.91z'/%3E %3C/g%3E %3C/svg%3E"
                    alt="프립 유튜브 링크"
                    width="24px"
                    height="24px"
                  />
                </PicType>
              </Link>
              <Link to="https://www.instagram.com/frip_korea">
                <PicType>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='none' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm10.659 6.321l-.026-.037a3.442 3.442 0 0 0-.987-.918 2.408 2.408 0 0 0-.999-.352 2.357 2.357 0 0 0-.978.098c-.231.074-.457.17-.684.26-.185.072-.37.144-.565.174-.26.04-.515.01-.764-.075-.25-.086-.497-.186-.746-.279a2.695 2.695 0 0 0-.885-.188 2.304 2.304 0 0 0-1.174.305 3.275 3.275 0 0 0-.96.814c-.3.366-.533.778-.674 1.252-.132.44-.196.89-.213 1.352-.02.564.03 1.12.135 1.671.107.565.27 1.115.483 1.64a8.79 8.79 0 0 0 1.19 2.092c.195.252.415.474.676.641.32.207.662.277 1.027.197.19-.042.368-.125.542-.215.33-.172.673-.285 1.04-.3.336-.014.666.022.98.16.18.08.352.174.53.255.287.13.582.172.886.089.256-.07.477-.22.68-.404.256-.23.471-.504.668-.796.426-.636.801-1.307 1.084-2.039.024-.064.05-.128.075-.188-.98-.474-1.555-1.296-1.643-2.488-.09-1.204.382-2.101 1.302-2.72zM12.023 8h.035c.17 0 .341-.025.503-.073.354-.103.656-.277.897-.524.324-.334.522-.715.541-1.157.004-.081-.006-.164-.01-.245h-.04c-.069.009-.14.015-.207.029-.525.113-.964.346-1.295.716-.254.285-.418.605-.445.97-.006.095.001.19.021.284z'/%3E %3C/g%3E %3C/svg%3E"
                    alt="프립 앱스토어 링크"
                    width="24px"
                    height="24px"
                  />
                </PicType>
              </Link>

              <Link to="picType" href="https://www.instagram.com/frip_korea">
                <PicType>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath fill='none' d='M0 0h24v24H0z'/%3E %3Cpath fill='%23CCC' d='M6 3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm2 14.538l5.5-5.535L8 6.462v11.076zm6.135-6l1.365-1.38-1.074-.666a1062.651 1062.651 0 0 0-4.772-2.965c-.237-.147-.473-.296-.71-.442A.547.547 0 0 0 8.5 6.02l5.635 5.517zm.017.924L8.5 17.985c.162.037.304.007.494-.112.38-.239.762-.477 1.144-.714a2224.476 2224.476 0 0 0 5.103-3.166c.092-.057.183-.116.259-.164l-1.348-1.367zm.348-.466l1.629 1.389c.122-.07.28-.163.439-.253.392-.225.789-.445 1.174-.679a.564.564 0 0 0 .21-.247c.12-.278.012-.535-.271-.698-.342-.196-.687-.389-1.03-.584-.188-.107-.375-.215-.537-.309l-1.614 1.38z'/%3E %3C/g%3E %3C/svg%3E"
                    alt="프립 구글 플레이스토어 링크"
                    width="24px"
                    height="24px"
                  />
                </PicType>
              </Link>
            </Pic>
          </Picture>
        </Admin>
      </FooterAll>
    );
  }
}

export default Footer;

const FooterAll = styled.div`
  background-color: rgb(248, 248, 248);
  padding: 40px 20px 50px;
`;

const Admin = styled.div`
  width: 100%;
  max-width: 930px;
  margin: 0px auto;
`;

const Name = styled.div`
  display: flex;
  font-size: 16px;
  padding-bottom: 5px;
  background-repeat: no-repeat;
  box-sizing: inherit;

  * {
    color: rgb(51, 51, 51);
    margin-right: 30px;
    text-decoration: none;
  }
`;

const Cooperate = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: row;
`;

const Inquire = styled.div`
  padding-top: 30px;
`;

const InquireSeparate = styled.div`
  display: flex;
`;

const FooterName = styled.div`
  padding-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  color: rgb(51, 51, 51);
`;

const CooperateImg = styled.div`
  width: 67px;
  margin-left: 20px;

  img {
    width: 100%;
  }
`;

const Infomation = styled.div`
  line-height: 1.36;
  letter-spacing: -0.28px;
  color: rgb(153, 153, 153);
  font-size: 11px;
  margin-bottom: 20px;
  span {
    display: inline-block;
    margin: 3px 0px;
  }
  p {
    line-height: 1.36;
    margin-top: 5px;
    max-width: 505px;
  }
`;

const InfomationName = styled.div`
  display: -webkit-box;
  flex-direction: column;
  line-height: 1.36;
  letter-spacing: -0.28px;
  color: rgb(153, 153, 153);
  font-size: 11px;
`;

const ReigsterNum = styled.div`
  color: rgb(224, 224, 224);
  font-size: 10px;
  line-height: 1.54;
  padding: 0px 5px;
`;

const Terms = styled.div`
  display: flex;
  font-size: 13px;
  color: rgb(51, 51, 51);
  line-height: 18px;
  margin: 20px 0px;

  * {
    color: #333333;
    padding-right: 15px;
    text-decoration: none;
    white-space: nowrap;
    line-height: 1;
    letter-spacing: -0.33px;
    border-right: 1px solid rgb(224, 224, 224);
  }
`;

const TermsName = styled.span`
  min-height: 1px;
  text-decoration: none;
  color: #000000;
`;

const Customer = styled.div`
  padding-top: 30px;
  padding-bottom: 0px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;

const Center = styled.div`
  padding-bottom: 20px;
  font-size: 16px;
  font-weight: bold;
  color: rgb(51, 51, 51);
`;

const Info = styled.div`
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: rgb(102, 102, 102);
  p {
    margin-bottom: 15px;
  }
`;

const Picture = styled.div`
  display: flex;
  margin-top: 20px;
  color: rgb(155, 155, 155);
  font-size: 9px;
  line-height: 18px;
`;

const Pic = styled.div`
  display: flex;
  justify-content: space-between;

  &::first-child {
    margin-left: 0px;
  }
`;

const PicType = styled.div`
  margin-right: 35px;
  img {
    min-height: 1px;
  }
`;
