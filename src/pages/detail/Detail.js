import React, { Component } from "react";
import DetailSlider from "../../components/slider/components/detail/DetailSlider";
import Down from "../../images/down.png";
import Upward from "../../images/upward.png";
import KakaoMap from "./Map";
import OptionWrap from "./OptionWrap";
import NewWindow from "./NewWindow";

import styled from "styled-components";

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clickbutton: [false, false, false],
      detail: false,
      Iclicked: false,
      Oclicked: false,
      clickedData: false,
      optionGroupCount: false,
      childOptionGroupCount: false,
    };
  }

  handleClick = (num) => {
    let arr = this.state.clickbutton;
    arr[num] = !arr[num];
    this.setState({
      clickbutton: arr,
    });
  };

  componentDidMount() {
    console.log("asdf", this.state.clickedData);
    fetch(`http://13.59.219.151:8000/frip/${this.props.match.params.id}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState(
          {
            detail: res.detail[0],
          },
          () => {
            console.log("thisisdata", this.state.detail);
            this.setState({
              optionGroupCount:
                this.state.detail.choice.option.length /
                this.state.detail.choice.option
                  .map((item) => {
                    if (item.option_type === "optionGroup") {
                      return 1;
                    }
                  })
                  .filter((item) => item === 1).length,
            });
            this.setState({
              childOptionGroupCount:
                this.state.detail.choice.child_option.length /
                this.state.detail.choice.child_option
                  .map((item) => {
                    if (item.option_type === "optionGroup") {
                      return 1;
                    }
                  })
                  .filter((item) => item === 1).length,
            });
          }
        );
      });

    // this.getData();
  }

  // getData() {
  //   console.log("thisisshit", this.props.match.params.id);
  //   const ID = this.props.match.params.id;
  //   fetch(`http://13.59.219.151:8000/frip/${this.props.match.params.id}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         detail: res.detail[0],
  //       });
  //     });
  // }

  setClickedData = (getOptions) => {
    console.log("thisisit", getOptions);
    this.setState({ clickedData: getOptions });
  };

  pushData = () => {
    const { clickedData } = this.state;
    console.log("here", this.state.detail);
    this.state.detail.choice &&
      this.props.history.push({
        pathname: `/payment/${this.state.detail.id}`,
        state: {
          id: this.state.detail.id,
          price: clickedData.price,
          optionId: this.state.detail.choice.option[0].id,
          ticket: this.state.detail.ticket,
        },
      });
  };

  idxChange = (idx) => {
    this.setState({
      Iclicked: idx,
    });
  };

  idxOChange = (idx) => {
    this.setState({
      Oclicked: idx,
    });
  };

  render() {
    let optionArr = [],
      child_optionArr = [];

    if (this.state.optionGroupCount && this.state.childOptionGroupCount) {
      for (
        let i = 1;
        i <
        this.state.detail.choice.option.length / this.state.optionGroupCount;
        i++
      ) {
        optionArr.push(
          this.state.detail.choice.option[
            this.state.Oclicked * this.state.optionGroupCount + i
          ]
        );
      }
      for (
        let i = 1;
        i <
        this.state.detail.choice.option.length / this.state.optionGroupCount;
        i++
      ) {
        child_optionArr.push(
          this.state.detail.choice.child_option[
            this.state.Oclicked * this.state.childOptionGroupCount + i
          ]
        );
      }
    }
    console.log("clickedData", this.state.clickedData);

    const tempStyle = {
      opacity: 1,
      display: "block",
    };

    return (
      <Product>
        <DetailPage style={tempStyle}>
          <Detailshape>
            <Content>
              <ContentBox>
                <Slide>
                  <DetailSlider whichOne={this.props.match.params.id} />
                </Slide>
                <Title>
                  <TitleSubstance>
                    <FeedName>
                      <FeedTitleName>
                        <SubTitle>
                          {this.state.detail && this.state.detail.catch_phrase}
                        </SubTitle>
                        <TitleExplain>
                          {this.state.detail && this.state.detail.title}
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
                          {this.state.detail && this.state.detail.faked_price}
                        </MainPrice>
                        <PriceNum>
                          {this.state.detail && this.state.detail.price}
                          <PriceText> 원</PriceText>
                        </PriceNum>
                      </div>
                      {this.state.detail.discount_percentage && (
                        <DiscountPrice>
                          {this.state.detail.discount_percentage + "%"}
                        </DiscountPrice>
                      )}
                    </Price>
                  </TitleSubstance>
                  <Explain>
                    <ExplainImoji>
                      <Icon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0Jz4gPGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz4gPHBhdGggZD0nTTAgMGgyNHYyNEgweicvPiA8cGF0aCBmaWxsPScjRjY2JyBkPSdNMTIuMjQyIDYuMTI5bC0uNTU1LS41NTVDOS44NCAzLjcyNyA2Ljg0MSAzLjQyOCA0LjgyOCA1LjA5MWE1LjAwMSA1LjAwMSAwIDAgMC0uMzY0IDcuNDAybDcuMDcxIDcuMDdhMSAxIDAgMCAwIDEuNDE1IDBsNy4wNy03LjA3YTUuMDAxIDUuMDAxIDAgMCAwLS4zNjQtNy40MDJjLTIuMDEzLTEuNjYzLTUuMDEyLTEuMzY0LTYuODU5LjQ4M2wtLjU1NS41NTV6Jy8+IDwvZz4gPC9zdmc+" />
                      <Like>
                        {" "}
                        {this.state.detail && this.state.detail.liked} 명이
                        좋아한 프립
                      </Like>
                    </ExplainImoji>
                    <ExplainImoji>
                      <Icon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxOCcgaGVpZ2h0PScxOCcgdmlld0JveD0nMCAwIDE4IDE4Jz4gPGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz4gPHBhdGggZD0nTTAgMGgxOHYxOEgweicvPiA8cmVjdCB3aWR0aD0nMTInIGhlaWdodD0nMTInIHg9JzMnIHk9JzMnIGZpbGw9JyMzMzk3RkYnIGZpbGwtcnVsZT0nbm9uemVybycgcng9JzEnLz4gPHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNNSA4aDh2NUg1eicvPiA8cGF0aCBmaWxsPScjMzM5N0ZGJyBmaWxsLXJ1bGU9J25vbnplcm8nIGQ9J001IDFoMnYySDV6TTExIDFoMnYyaC0yeicvPiA8L2c+IDwvc3ZnPg==" />
                      <Like>
                        {" "}
                        유효기간 구매일로부터{" "}
                        {this.state.detail && this.state.detail.duedate} 일
                      </Like>
                    </ExplainImoji>
                    <ExplainImoji>
                      <Icon src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAArCAMAAAAuY3oFAAAASFBMVEVHcEwAf/8Aff8Afv8AgP8Jgv8Phf8Aff8Bf/8NhP8Afv8Hgf8Af/8Df/8Afv8Aff8zl/////8rk/8djP/B3/9jr//r9P+UyP/2LrjhAAAAEHRSTlMARZxnBt/xGLntgtCPxFUtECF3nwAAARVJREFUOMuFlN0CwxAMhcNoBd06uu7933RqzL+dO3KaL0gK8BMjWihEJTRh0GqlaM3uZSzStQoziSEaPCiLLOtWhL1ly5I8eBN3Dv74fc/3rnjIwTbTN5jtW4ccxJ1DesCyD7VcEGrGBkNdBbhPhAyIzdav4zyPV7ZhSUF4P73eBUNk3z+DshwCVFoc0XCkPQVZjWc0nFmVsMwNC/A5gv8vUs+Pqf9fFOOzq+buwfXssfT13JPXQt9T0o7iVn57To0MKrQ+GaRwRwjqN9XVTnGu+OiIUfcOxN7z2RPt6IlytrF/BUm3CmJv9f+hhFSAFlIDakgLKCEdwHVbaYqXFbqKkD4gQfoASL+KESBCxgDfGpSScucDG1I6q3UhKQAAAAAASUVORK5CYII=" />
                      <Like>
                        {this.state.detail && this.state.detail.location}
                      </Like>
                    </ExplainImoji>
                    <ExplainImoji>
                      <Icon src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2Jz4gPHBhdGggZmlsbD0nIzMzOTdGRicgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNOCAxMi4xNmwtMy44NTIgMS44OTRhLjUuNSAwIDAgMS0uNzE1LS41MmwuNjEtNC4yNDgtMi45OTEtMy4wNzlhLjUuNSAwIDAgMSAuMjczLS44NGw0LjIzLS43MzNMNy41NTguODM4YS41LjUgMCAwIDEgLjg4NCAwbDIuMDAzIDMuNzk2IDQuMjMuNzMyYS41LjUgMCAwIDEgLjI3My44NDFsLTIuOTkyIDMuMDc5LjYxMSA0LjI0OGEuNS41IDAgMCAxLS43MTUuNTJMOCAxMi4xNnonLz4gPC9zdmc+" />
                      <Like>
                        프립 평점
                        {this.state.detail && this.state.detail.review_average}
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
                            src={
                              this.state.detail &&
                              this.state.detail.host.host_image
                            }
                            alt=""
                          ></img>
                        </HostImg>
                        <HostContent>
                          <HostContent1>
                            <HostContentName>
                              {this.state.detail &&
                                this.state.detail.host.host_name}
                            </HostContentName>
                            <HostIntro> 프립 11 | 좋아요 362 </HostIntro>
                          </HostContent1>
                        </HostContent>
                      </HostInfo>
                      <HostItem>
                        {this.state.detail &&
                          this.state.detail.host.description}
                      </HostItem>
                      <HostProfile>호스트 프로필</HostProfile>
                      <HostIntro></HostIntro>

                      <HostReview>
                        <h4>호스트후기</h4>
                      </HostReview>
                      <HostReviewIntro>
                        <HostReviewPic>
                          <img
                            src="https://k.kakaocdn.net/dn/blGCnn/btqCt7BjPLh/0JwZ3r9ClbHt1COk4O0GdK/img_110x110.jpg"
                            alt=""
                          ></img>
                        </HostReviewPic>
                        <HostReviewInfor>
                          <HostReviewName>
                            {this.state.detail &&
                              this.state.detail.review.length > 0 &&
                              this.state.detail.review[0].user_name}
                          </HostReviewName>

                          <HostReviewFlex>
                            <HostReviewStar>
                              {this.state.detail &&
                                this.state.detail.review.length > 0 &&
                                this.state.detail.review[0].grade}
                            </HostReviewStar>
                            <HostReviewDate>
                              <span>
                                {this.state.detail &&
                                  this.state.detail.review.length > 0 &&
                                  this.state.detail.review[0].created_at}
                              </span>
                            </HostReviewDate>
                          </HostReviewFlex>
                        </HostReviewInfor>
                      </HostReviewIntro>

                      <HostReviewContent>
                        <span>
                          {this.state.detail &&
                            this.state.detail.review.length > 0 &&
                            this.state.detail.review[0].content}
                        </span>
                      </HostReviewContent>

                      <HostReviewGrayName>
                        <span>
                          {this.state.detail &&
                            this.state.detail.review.length > 0 &&
                            this.state.detail.review[0].option}
                        </span>
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
                  <h4> 소개</h4>
                </HostReview>
                <DetailData
                  dangerouslySetInnerHTML={{
                    __html: this.state.detail && this.state.detail.content,
                  }}
                />
              </ContentBox>
              <Include>
                <h4>포함 사항</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.detail.include,
                  }}
                />
                {/* {this.state.detail && this.state.detail.include} */}
              </Include>
              <Include>
                <h4>불포함 사항</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.detail && this.state.detail.exclude,
                  }}
                />
              </Include>
              <Material>
                <h4>준비물</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.detail && this.state.detail.material,
                  }}
                />
              </Material>
              <Include>
                <h4>세부 일정</h4>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.detail && this.state.detail.schedule,
                  }}
                />
              </Include>
              <Include>
                <h4>유의 사항</h4>{" "}
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.detail && this.state.detail.notice,
                  }}
                />
              </Include>

              <Place>진행 장소</Place>
              {this.state.detail && (
                <KakaoMap
                  lat={this.state.detail && this.state.detail.venue.venue_lat}
                  lng={this.state.detail && this.state.detail.venue.venue_lng}
                  whichOne={this.props.match.params.id}
                />
              )}

              {/* <Place>만나는 장소</Place>
              {this.state.detail && (
                <KakaoMap
                  lat={this.state.detail[0].gathering_place.geopoint_lat}
                  lng={this.state.detail[0].gathering_place.geopoint_lng}
                />
              )} */}

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
        {this.state.optionGroupCount || this.state.childOptionGroupCount ? (
          <OptionsWrap>
            {this.state.detail.choice.itinerary.length === 0 ? (
              ""
            ) : (
              <OptionWrap
                title="일정"
                data={this.state.detail.choice.itinerary}
                option={this.state.detail.choice.option}
                idxChange={this.idxChange}
                setClickedData={this.setClickedData}
                isOpen={true}
              />
            )}

            {this.state.Iclicked !== false ? (
              <OptionWrap
                title="기본 옵션"
                data={[
                  this.state.detail.choice.option[
                    this.state.Iclicked * this.state.optionGroupCount + 1
                  ],
                ]}
                isOpen={true}
                setClickedData={this.setClickedData}
                idxOChange={this.idxOChange}
              />
            ) : (
              ""
            )}

            {this.state.detail.choice.itinerary.length !== 0 ||
            this.state.detail.choice.option.length === 0 ? (
              ""
            ) : (
              <OptionWrap
                title="기본 옵션"
                data={this.state.detail.choice.option}
                isOpen={true}
                setClickedData={this.setClickedData}
                notMore
              />
            )}

            {this.state.detail.choice.child_option.length !== 0 &&
            this.state.Oclicked !== false ? (
              <OptionWrap
                title={this.state.detail.choice.child_option[0].title}
                data={[
                  this.state.detail.choice.child_option[
                    this.state.Oclicked * this.state.childOptionGroupCount + 1
                  ],
                  this.state.detail.choice.child_option[
                    this.state.Oclicked * this.state.childOptionGroupCount + 2
                  ],
                  this.state.detail.choice.child_option[
                    this.state.Oclicked * this.state.childOptionGroupCount + 3
                  ],
                ]}
                setClickedData={this.setClickedData}
                isOpen={true}
              />
            ) : (
              ""
            )}
            {this.state.clickedData && (
              <NewWindow data={this.state.clickedData} />
            )}
            <OptionJoin>
              <OptionData
                onClick={() => this.pushData()}
                last={this.state.clickedData}
              >
                참여하기
              </OptionData>
            </OptionJoin>
          </OptionsWrap>
        ) : (
          ""
        )}
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
  color: rgb(155, 155, 155);
  line-height: 10px;
  font-size: 10px;
  margin-left: 20px;
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
  padding-top: 30px;
  padding-bottom: 30px;
  line-height: 1.8;
  font-size: 14px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const Material = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  line-height: 1.8;
  font-size: 14px;
  border-bottom: 1px solid rgb(238, 238, 238);
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

const OptionsWrap = styled.div`
  margin-top: 35px;
  width: 370px;
  border-left: 1px solid rgb(238, 238, 238);
  padding: 0px 30px;
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
  padding: 0px 30px;
  overflow: hidden;
`;

const OptionName = styled.p`
  display: flex;
  justify-content: space-between;
  line-height: 14px;
  font-size: 14px;
  font-weight: bold;
  padding: 40px 0px 26px;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const OptionCal = styled.button`
  background-color: transparent;
  color: black;
  cursor: pointer;
  font-size: 13px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  padding: 0px;
  margin: 0px;
`;

const OptionTopButton = styled.div`
  /* position: relative;
  display: block;
  width: 100%;
  color: black;
  margin: 0px;
  border-top: 1px solid white; */
`;

const OptionTopName = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  line-height: 22px;
  background-color: white;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.4s ease 0s;
  /* border-bottom: 1px solid rgb(238, 238, 238); */
`;

const OptionTopClick = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  padding: 14px 16px;
`;

const OptionClickName = styled.div`
  width: 100%;
  height: 60px;
  line-height: 22px;
  background-color: white;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.4s ease 0s;
  border-bottom: 1px solid rgb(238, 238, 238);
`;

const OptionSchedule = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 100%;
  display: inline-block;
  font-size: 13px;
  user-select: none;
  line-height: 14px;
  color: rgb(155, 155, 155);
  padding: 23px 16px;
  img {
    width: 14px;
    height: 14px;
    transform: rotate(180deg);
  }
`;
const OptionClickImg = styled.div`
  width: 100%;
  height: 100%;
  transform: rotate(90deg);
`;

const OptionAttend = styled.div`
  button {
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
`;

const OptionJoin = styled.div`
  position: relative;
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  margin-top: auto;
  padding: 80px 0px;
`;
const OptionData = styled.button`
  width: 100%;
  height: 50px;
  line-height: 13px;
  background-color: rgb(51, 151, 255);
  border: none;
  text-align: center;
  cursor: ${(props) => (props.last ? "" : "not-allowed")};
  color: white;
  font-size: 13px;
  font-weight: bold;
  padding: 0px 13px;
  border-radius: 5px;
`;
