import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LeftArr from "../../images/LeftArr";
import styled, { css } from "styled-components";

const IMP = window.IMP;
IMP.init("imp89785568");

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: true,
      payMethod: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
      },
      tncCheck: false,
      fripDetail: {},
      fripPrice: "",
      data: [],
      detail: {},
      whichPay: null,
    };
  }

  componentDidMount = () => {
    const { detail } = this.state;
    console.log("여기입니다", this.props.match.params.id);
    console.log(this.props.location.state);
    this.setState(
      {
        detail: this.props.location.state,
        fripPrice: this.props.location.state.price.toLocaleString(),
      },
      () => {
        fetch(
          `http://192.168.0.7:8000/frip/purchase/${this.props.match.params.id}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(res, "res");
            this.setState(
              {
                data: res.purchase[0],
              },
              () => {
                console.log(res);
              }
            );
          });
      }
    );
  };

  requestPay = () => {
    const { data, detail, whichPay, fripPrice } = this.state;
    IMP.request_pay(
      {
        pg: "inicis",
        pay_method: "card",
        merchant_uid: "merchant_" + new Date().getTime(),
        name: `${data.title}`,
        amount: `${detail.price}`,
        buyer_email: "iamport@siot.do",
        buyer_name: "구매자이름",
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 강남구 삼성동",
        buyer_postcode: "123-456",
        m_redirect_url: "http://192.168.0.7:8000/myfrip",
      },
      function (rsp) {
        let msg;
        if (rsp.success) {
          msg = "결제가 완료되었습니다.";
          msg += "고유ID : " + rsp.imp_uid;
          msg += "상점 거래ID : " + rsp.merchant_uid;
          msg += "결제 금액 : " + rsp.paid_amount;
          msg += "카드 승인번호 : " + rsp.apply_num;

          fetch(
            `http://192.168.0.7:8000/frip/purchase/${this.props.match.params.id}`,
            {
              method: "POST",
              mode: "cors",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
              },
              body: JSON.stringify({
                frip: detail.id,
                option: detail.optionID,
                payment_method: whichPay,
                quantity: 1,
              }),
            }
          ).then((res) => {
            setTimeout(() => {
              this.props.history.push("/myfrip");
              window.location.reload();
            }, 3000);
          });
        } else {
          msg = "결제에 실패하였습니다.";
          msg += "에러내용 : " + rsp.error_msg;
        }
        alert(msg);
      }
    );
  };

  handleOnClick = (what) => {
    this.state[what]
      ? this.setState({
          [what]: false,
        })
      : this.setState({
          [what]: true,
        });
  };

  handlePaymentClick = (which) => {
    this.state.payMethod[which]
      ? this.setState({
          payMethod: {
            [which]: false,
          },
        })
      : this.setState({
          payMethod: {
            [which]: true,
          },
        });
    this.setState({
      whichPay: which,
    });
  };

  render() {
    const { fripPrice, select, payMethod, tncCheck, detail, data } = this.state;

    return (
      <>
        <MainContainer>
          <Auth>
            <Header>본인인증</Header>
            <AuthFirst>
              <AuthTxt>
                프립 신청을 위해서는 <span>최소 1회</span> 본인 인증이
                필요합니다.
              </AuthTxt>
              <button>인증완료</button>
            </AuthFirst>
          </Auth>
          <Price>
            <Header>결제</Header>
            <Frip>
              <Select onClick={() => this.handleOnClick("select")}>
                <span>선택한 프립</span>
                <ArrDiv on={select}>
                  <LeftArr />
                </ArrDiv>
              </Select>
              <FripDetail on={select}>
                <FripAbout>
                  <FripImg bgImg={data.image} />
                  <FripDesc>
                    <span>{data.catch_phrase}</span>
                    <span>{data.title}</span>
                  </FripDesc>
                </FripAbout>
                <PriceDetail>
                  <span>참가비 (1인) x 1개</span>
                  <span>{fripPrice}원</span>
                </PriceDetail>
              </FripDetail>
            </Frip>
            <PriceNCoupon>
              <ProductPrice>
                <span>상품 금액</span>
                <span>{`${fripPrice} 원`}</span>
              </ProductPrice>
              <Coupon>
                <span>쿠폰 /할인 코드</span>
                <div>
                  <span>- 0원</span>
                  <CoupNNrgBtn>선택</CoupNNrgBtn>
                </div>
              </Coupon>
              <Energy>
                <div>
                  <span>에너지</span>
                  <span>보유 2,000</span>
                </div>
                <div>
                  <span>
                    0 <span>E</span>
                  </span>
                  <CoupNNrgBtn>전체 사용</CoupNNrgBtn>
                </div>
              </Energy>
              <EnergyDesc>
                <li>
                  에너지는 1,000E부터 사용 가능하며, 결제 금액의 일부가
                  적립됩니다.
                </li>
                <li>
                  쿠폰/할인코드/에너지 사용하여 결제시 개별 취소를 할 수
                  없습니다.
                </li>
              </EnergyDesc>
              <TotalPrice>
                <div>
                  <span>할인 금액</span>
                  <span>- 0원</span>
                </div>
                <div>
                  <span>최종 결제 금액</span>
                  <span>{`${fripPrice} 원`}</span>
                </div>
              </TotalPrice>
            </PriceNCoupon>
          </Price>
          <PaymentMethod>
            <Header>결제수단</Header>
            <Methods>
              <MethodBtn
                on={payMethod[1]}
                onClick={() => this.handlePaymentClick(1)}
              >
                신용/체크 카드
              </MethodBtn>
              <MethodBtn
                on={payMethod[2]}
                onClick={() => this.handlePaymentClick(2)}
              >
                핸드폰 결제
              </MethodBtn>
              <MethodBtn
                on={payMethod[3]}
                onClick={() => this.handlePaymentClick(3)}
              >
                무통장 입금
              </MethodBtn>
              <MethodBtn
                on={payMethod[4]}
                onClick={() => this.handlePaymentClick(4)}
              >
                실시간 계좌이체
              </MethodBtn>
              <MethodBtn
                on={payMethod[5]}
                onClick={() => this.handlePaymentClick(5)}
              >
                PAYCO
              </MethodBtn>
              <MethodBtn
                on={payMethod[6]}
                onClick={() => this.handlePaymentClick(6)}
              >
                TOSS
              </MethodBtn>
            </Methods>
          </PaymentMethod>
          <Tnc onClick={() => this.handleOnClick("tncCheck")}>
            <StyledDiv checked={tncCheck} />
            <span>
              개인정보 제 3자 제공 동의, 결제 대행 서비스 이용 약관 등 모든
              약관에 동의합니다.
            </span>
          </Tnc>
          <Pay>
            <button onClick={this.requestPay}>
              <span>{fripPrice}</span>원 결제하기
            </button>
          </Pay>
        </MainContainer>
      </>
    );
  }
}

export default withRouter(Payment);

const MainContainer = styled.div`
  width: 730px;
  margin: 0 auto;
`;

const Auth = styled.div`
  width: 100%;
  height: 243.8px;
`;

const Header = styled.div`
  width: 100%;
  height: 120px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
`;

const AuthFirst = styled.div`
  width: 100%;
  height: 100.8px;
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  button {
    width: 210px;
    height: 50px;
    background-color: rgb(221, 221, 221);
    text-align: center;
    cursor: pointer;
    color: white;
    font-size: 13px;
    padding: 0px;
    border-radius: 5px;
    border: none;
  }
`;

const AuthTxt = styled.div`
  margin-bottom: 30px;
  span {
    color: red;
  }
`;

const Price = styled.div`
  width: 100%;
`;

const Frip = styled.div`
  width: 100%;
`;

const Select = styled.div`
  width: 100%;
  height: 60px;
  line-height: 22px;
  background-color: white;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    transform: rotate(90deg);
  }
`;

const ArrDiv = styled.div`
  transform-origin: center center;
  ${(props) =>
    props.on
      ? css`
          transform: rotate(180deg);
          transition: opacity 0.2s ease 0s, transform 0.5s ease 0s;
        `
      : css`
          transform: rotate(0deg);
          transition: opacity 0.2s ease 0s, transform 0.5s ease 0s;
        `}
`;

const FripDetail = styled.div`
  width: 100%;
  height: 195px;
  transform-origin: left top;
  overflow: hidden;
  margin: 0px;
  padding-bottom: 25px;
  border-top: 1px solid rgb(238, 238, 238);
  ${(props) =>
    props.on
      ? css`
          transform: translateY(0px) scale(1, 1);
        `
      : css`
          height: 0px;
          transform: translateY(-2px) scale(1, 0);
        `}
`;

const FripAbout = styled.div`
  height: 157px;
  padding: 30px 0;
  display: flex;
`;

const FripImg = styled.div`
  width: 130px;
  height: 97px;
  background-image: url(${(props) => props.bgImg});
  background-size: contain;
`;

const FripDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  word-break: keep-all;
  padding: 20px;
  span {
    &:first-of-type {
      font-size: 12px;
      color: rgb(155, 155, 155);
    }
    &:last-of-type {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
    }
  }
`;

const PriceDetail = styled.div`
  display: flex;
  justify-content: space-between;
  color: rgb(155, 155, 155);
  font-size: 12px;
  line-height: 12px;
`;

const PriceNCoupon = styled.div`
  width: 100%;
  height: 360.2px;
`;

const ProductPrice = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(238, 238, 238);
  font-weight: bold;
`;

const Coupon = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(238, 238, 238);
  div {
    span {
      font-weight: bold;
    }
  }
`;

const Energy = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgb(238, 238, 238);
  span {
    span {
      font-weight: bold;
    }
  }
`;

const EnergyDesc = styled.ul`
  height: 86.2px;
  border-top: 1px solid rgb(238, 238, 238);
  padding: 20px 0px 30px;
  margin: 0px;
  list-style-position: inside;
  display: block;
  li {
    line-height: 18px;
    color: rgb(51, 151, 255);
    font-size: 11px;
    list-style-type: disc;
  }
`;

const CoupNNrgBtn = styled.button`
  margin-left: 20px;
  width: 90px;
  height: 38px;
  line-height: normal;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  padding: 0px 13px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(187, 187, 187);
  border-image: initial;
  border-radius: 5px;
`;

const TotalPrice = styled.div`
  height: 94px;
  background-image: linear-gradient(
    277deg,
    rgb(98, 201, 255),
    rgb(51, 151, 255)
  );
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 13px 20px;
  div {
    display: flex;
    justify-content: space-between;
    span {
      &:last-of-type {
        font-weight: bold;
      }
    }
  }
`;

const PaymentMethod = styled.div`
  width: 100%;
  height: 260px;
`;

const Methods = styled.div`
  padding: 20px 0px 60px;
  height: 140px;
  display: flex;
  flex-wrap: wrap;
`;

const MethodBtn = styled.button`
  margin-right: 10px;
  margin-bottom: 10px;
  word-break: keep-all;
  width: 100px;
  height: 50px;
  line-height: 13px;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
  font-size: 13px;
  padding: 0px 13px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.on ? "rgb(51, 151, 255)" : "rgb(238, 238, 238)"};
  border-image: initial;
  border-radius: 5px;
  overflow-wrap: break-word;
`;

const StyledDiv = styled.div`
  background-image: ${(props) =>
    props.checked
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Cg fill='none' fill-rule='nonzero'%3E %3Crect width='18' height='18' fill='%233397FF' rx='5'/%3E %3Cpath stroke='%23FFF' stroke-width='2' d='M13.485 5.828l-5.657 5.657L5 8.657'/%3E %3C/g%3E %3C/svg%3E")`
      : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E %3Crect width='17' height='17' x='.5' y='.5' fill='none' fill-rule='nonzero' stroke='%233397FF' rx='5'/%3E %3C/svg%3E")`};
`;

const Tnc = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  ${StyledDiv} {
    width: 18px;
    height: 18px;
    text-align: center;
    margin-right: 10px;
  }
`;

const Pay = styled.div`
  width: 100%;
  height: 265px;
  padding-top: 30px;
  padding-bottom: 185px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 290px;
    height: 50px;
    line-height: normal;
    background-color: rgb(51, 151, 255);
    text-align: center;
    cursor: pointer;
    color: white;
    font-size: 14px;
    padding: 0px 13px;
    border: none;
    border-radius: 5px;
  }
`;
