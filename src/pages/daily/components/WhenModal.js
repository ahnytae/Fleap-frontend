import React, { Component } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import { Helmet } from "react-helmet";
import "react-day-picker/lib/style.css";
import CloseX from "../../../images/CloseX";
import styled from "styled-components";

export default class WhenModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  handleDayClick = (day, modifiers) => {
    if (modifiers.disabled) {
      return;
    } else {
      const range = DateUtils.addDayToRange(day, this.state);
      this.setState(range);
    }
  };

  // Weekday = ({ weekday, className, localeUtils, locale }) => {
  //   const weekdayName = localeUtils.formatWeekdayLong(weekday, locale);
  //   return (
  //     <div className={className} title={weekdayName}>
  //       {weekday} {weekdayName.slice(0, 1)}
  //     </div>
  //   );
  // }

  // Navbar = ({
  //   nextMonth,
  //   previousMonth,
  //   onPreviousClick,
  //   onNextClick,
  //   className,
  //   localeUtils,
  // }) => {
  //   const months = localeUtils.getMonths();
  //   const prev = months[previousMonth.getMonth()];
  //   const next = months[nextMonth.getMonth()];
  //   const styleLeft = {
  //     float: 'left',
  //   };
  //   const styleRight = {
  //     float: 'right',
  //   };
  //   return (
  //     <div className={className}>
  //       <button style={styleLeft} onClick={() => onPreviousClick()}>
  //         ← {prev.slice(0, 3)}
  //       </button>
  //       <button style={styleRight} onClick={() => onNextClick()}>
  //         {next.slice(0, 3)} →
  //       </button>
  //     </div>
  //   );
  // }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    const { closed } = this.props;

    const MONTHS = [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ];
    const WEEKDAYS_LONG = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];
    const WEEKDAYS_SHORT = ["일", "월", "화", "수", "목", "금", "토"];

    return (
      <>
        <ModalOverlay onClick={closed} />
        <ModalBox>
          <ModalHeader>
            <span>언제</span>
            <div onClick={closed}>
              <CloseX />
            </div>
          </ModalHeader>
          <ModalBody>
            <DayPicker
              className="Selectable"
              numberOfMonths={2}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={this.handleDayClick}
              // weekdayElement={<Weekday />}
              // navbarElement={<Navbar />}
              months={MONTHS}
              weekdaysLong={WEEKDAYS_LONG}
              weekdaysShort={WEEKDAYS_SHORT}
              disabledDays={[
                new Date(2020, 4, 13),
                {
                  before: new Date(2020, 4, 13),
                },
              ]}
            />
            <Helmet>
              <style>
                {`
                    .Selectable .DayPicker-Day {
                      border-radius: 0 !important;
                    }
                    .Selectable .DayPicker-Day--start {
                      border-top-left-radius: 50% !important;
                      border-bottom-left-radius: 50% !important;
                    }
                    .Selectable .DayPicker-Day--end {
                      border-top-right-radius: 50% !important;
                      border-bottom-right-radius: 50% !important;
                    }
                  `}
              </style>
            </Helmet>
          </ModalBody>
          <ModalFooter>
            {!from && !to && (
              <button className="link" onClick={this.handleResetClick}>
                날짜를 선택해주세요
              </button>
            )}
            {from && !to && (
              <button className="active" onClick={this.handleResetClick}>
                {from.toLocaleDateString().split(".")[1]}월{" "}
                {from.toLocaleDateString().split(".")[2]}일 - 종료일 선택
              </button>
            )}
            {from && to && (
              <button className="active" onClick={this.handleResetClick}>
                {from.toLocaleDateString().split(".")[1]}월{" "}
                {from.toLocaleDateString().split(".")[2]}일 -{" "}
                {to.toLocaleDateString().split(".")[1]}월{" "}
                {to.toLocaleDateString().split(".")[2]}일
              </button>
            )}
          </ModalFooter>
        </ModalBox>
      </>
    );
  }
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const ModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 633px;
  height: 504px;
  background-color: white;
  z-index: 2;
  border-radius: 5px;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 18px 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(238, 238, 238);
  span {
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;
  }
`;

const ModalBody = styled.div`
  width: 100%;
  height: 354px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalFooter = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    width: 370px;
    height: 60px;
    line-height: 13px;
    background-color: rgb(221, 221, 221);
    text-align: center;
    color: white;
    font-size: 15.6px;
    font-weight: bold;
    padding: 0px;
    border-radius: 5px;
    border: none;
    &.active {
      background-color: rgb(51, 151, 255);
    }
  }
`;
