import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Items from "../../components/item/Items";
import DoubleLArr from "../../images/DoubleLArr";
import LeftArr from "../../images/LeftArr";
import RightArr from "../../images/RightArr";
import DoubleRArr from "../../images/DoubleRArr";
import WhenModal from "./components/WhenModal";
import WhereModal from "./components/WhereModal";
import WhoModal from "./components/WhoModal";
import FilterModal from "./components/FilterModal";
import styled from "styled-components";

class Daily extends Component {
  constructor() {
    super();
    this.state = {
      when: false,
      where: false,
      who: false,
      filter: false,
      fid: 1,
      sid: null,
      tid: null,
      categories: {
        fc: [],
        sc: {
          sc1: [],
          sc2: [],
          sc3: [],
          sc4: [],
        },
        tc: {
          // tc1: {
          tc1: [],
          tc2: [],
          tc3: [],
          tc4: [],
          tc5: [],
          tc6: [],
          tc7: [],
          tc8: [],
          tc9: [],
          // },
          // tc2: {
          tc10: [],
          tc11: [],
          tc12: [],
          tc13: [],
          tc14: [],
          tc15: [],
          tc16: [],
          tc17: [],
          tc18: [],
          tc19: [],
          tc20: [],
          tc21: [],
          tc22: [],
          tc23: [],
          tc24: [],
          tc25: [],
          // },
          // tc3: {
          tc26: [],
          tc27: [],
          tc28: [],
          tc29: [],
          tc30: [],
          tc31: [],
          tc32: [],
          // },
          // tc4: {
          tc33: [],
          tc34: [],
          tc35: [],
          tc36: [],
          tc37: [],
          tc38: [],
          // },
        },
      },
      data: [],
      hotData: [],
      pickData: [],
      newData: [],
      region: [],
      str: "액티비티",
      activePage: 1,
      override: false,
      fromDate: null,
      toDate: null,
      province: null,
      whichRegion: null,
      locationName: "",
      whichFilter: null,
      loading: false,
    };
  }

  componentDidMount = () => {
    this.getCategories();
    this.firstData();
  };

  getCategories = () => {
    fetch("http://localhost:3000/data/daily.json")
      .then((res) => res.json())
      .then((res) => {
        console.log("카테고리 잘 나옴", res.categories);
        this.setState({ categories: res.categories });
      });
  };

  firstData = () => {
    this.setState(
      {
        loading: true,
      },
      () => {
        ["hot", "pick", "new"].map((tag) => {
          return fetch(
            `http://127.0.0.1:8000/frip/daily?fid=1&limit=4&tag=${tag}`,
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          )
            .then((res) => res.json())
            .then((res) => {
              console.log(
                `첫 ${tag} 데이터 잘 나옴`,
                res.data,
                res.region_data
              );
              this.setState(
                {
                  [`${tag}Data`]: res.data,
                  region: res.region_data,
                  loading: false,
                },
                () => {
                  console.log(this.state[`${tag}Data`], "first");
                }
              );
            });
        });
      }
    );
  };

  handleClick = (category, idx, str) => {
    if (category === "fid") {
      this.setState({
        sid: null,
        tid: null,
      });
    } else if (category === "sid") {
      this.setState({
        tid: null,
      });
    }
    this.setState(
      {
        [category]: idx,
      },
      () => {
        this.getData();
        console.log(category, idx);
      }
    );
    if (!str) {
      return;
    } else {
      this.setState({
        str,
      });
    }
  };

  getData = () => {
    const { fid, sid, tid } = this.state;
    let queryString;
    if (sid == null) {
      queryString = `${fid}`;
      this.hotPickNew(queryString);
    } else if (tid == null) {
      queryString = `${fid}&sid=${sid}`;
      this.hotPickNew(queryString);
    } else {
      queryString = `${fid}&sid=${sid}&tid=${tid}`;
      this.showAll(queryString);
    }
  };

  hotPickNew = (queryString) => {
    this.setState(
      {
        loading: true,
      },
      () => {
        ["hot", "pick", "new"].map((tag) => {
          return fetch(
            `http://127.0.0.1:8000/frip/daily?fid=${queryString}&limit=4&tag=${tag}`,
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          )
            .then((res) => res.json())
            .then((res) => {
              console.log(
                `update ${tag} 데이터 잘 나옴`,
                res.data,
                res.region_data,
                queryString
              );
              this.setState(
                {
                  [`${tag}Data`]: res.data,
                  region: res.region_data,
                  loading: false,
                },
                () => {
                  console.log(this.state[`${tag}Data`], "update");
                }
              );
            });
        });
      }
    );
  };

  showAll = (queryString) => {
    this.setState(
      {
        loading: true,
      },
      () => {
        fetch(
          `http://127.0.0.1:8000/frip/daily?fid=${queryString}&limit=20`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(
              "update all 데이터 잘 나옴",
              res.data,
              res.region_data,
              queryString
            );
            this.setState({
              data: res.data,
              region: res.region_data,
              loading: false,
            });
          });
      }
    );
  };

  noScroll = () => {
    window.scrollTo(0, 0);
  };

  modalHandler = (name) => {
    this.state[name]
      ? this.setState({ [name]: false })
      : this.setState(
          { [name]: true },
          console.log("hi"),
          window.addEventListener("scroll", this.noScroll)
        );
  };

  modalClosed = () => {
    this.setState(
      {
        when: false,
        where: false,
        who: false,
        filter: false,
      },
      window.removeEventListener("scroll", this.noScroll)
    );
  };

  goTo = (id) => {
    this.props.history.push(`/detail/${id}`);
  };

  handlePage = (num) => {
    const { fid, sid, tid } = this.state;
    let queryString;
    if (sid == null) {
      queryString = `${fid}`;
    } else if (tid == null) {
      queryString = `${fid}&sid=${sid}`;
    } else {
      queryString = `${fid}&sid=${sid}&tid=${tid}`;
    }
    this.setState(
      {
        loading: true,
      },
      () => {
        fetch(
          `http://127.0.0.1:8000/frip/daily?fid=${queryString}&limit=20&offset=${
            (num - 1) * 20
          }`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(
              "pagination 데이터 잘 나옴",
              (num - 1) * 20,
              res.data,
              queryString
            );
            this.setState({
              data: res.data,
              region: res.region_data,
              activePage: num,
              loading: false,
            });
          });
      }
    );
  };

  override = () => {
    this.setState(
      {
        override: true,
        loading: true,
      },
      () => {
        const { fid, sid } = this.state;
        let queryString;
        sid == null
          ? (queryString = `${fid}`)
          : (queryString = `${fid}&sid=${sid}`);
        fetch(
          `http://127.0.0.1:8000/frip/daily?fid=${queryString}&limit=20`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log("전체보기 데이터 잘 나옴", res.data, queryString);
            this.setState({
              data: res.data,
              region: res.region_data,
              loading: false,
            });
          });
      }
    );
  };

  overrideFalse = () => {
    this.setState({
      override: false,
    });
  };

  activeReset = () => {
    this.setState({
      activePage: 1,
      fromDate: null,
      toDate: null,
      province: null,
      whichRegion: null,
      locationName: "",
      whichFilter: null,
    });
  };

  getDate = (from, to) => {
    const { fid, sid, tid } = this.state;
    console.log(from, to);
    this.setState(
      {
        fromDate: from,
        toDate: to,
        loading: true,
      },
      () => {
        const { fromDate, toDate } = this.state;
        console.log(fromDate);
        let queryString;
        if (sid == null) {
          queryString = `${fid}`;
        } else if (tid == null) {
          queryString = `${fid}&sid=${sid}`;
        } else {
          queryString = `${fid}&sid=${sid}&tid=${tid}`;
        }
        fetch(
          `http://127.0.0.1:8000/frip/daily?fid=${queryString}&limit=20&startdate=${fromDate}&enddate=${toDate}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log("날짜 데이터 잘 나옴", res.data, queryString);
            this.setState({
              data: res.data,
              region: res.region_data,
              loading: false,
            });
          });
      }
    );
  };

  getLocation = async (which, location, name) => {
    console.log(which, location, name, "hey");
    const { fid, sid, tid } = this.state;
    which === "main"
      ? await this.setState({ province: location, locationName: name })
      : await this.setState({ whichRegion: location, locationName: name });
    let queryString;
    const { province, whichRegion } = this.state;
    if (sid == null) {
      queryString = `${fid}`;
    } else if (tid == null) {
      queryString = `${fid}&sid=${sid}`;
    } else {
      queryString = `${fid}&sid=${sid}&tid=${tid}`;
    }

    let where;
    province
      ? (where = `province=${province}`)
      : (where = `location=${whichRegion}`);

    this.setState(
      {
        loading: true,
      },
      () => {
        fetch(
          `http://127.0.0.1:8000/frip/daily?fid=${queryString}&limit=20&${where}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log("어디 데이터 잘 나옴", res.data, queryString, where);
            this.setState({
              data: res.data,
              region: res.region_data,
              loading: false,
            });
          });
      }
    );
  };

  getFilter = (which) => {
    console.log(which);
    const { fid, sid, tid } = this.state;
    let realWhich;
    if (which === 0) {
      realWhich = "popular";
    } else if (which === 1) {
      realWhich = "latest";
    } else if (which === 2) {
      realWhich = "rate";
    } else if (which === 3) {
      realWhich = "high_price";
    } else if (which === 4) {
      realWhich = "low_price";
    }
    this.setState(
      {
        whichFilter: realWhich,
        loading: true,
      },
      () => {
        let queryString;
        const { whichFilter } = this.state;
        if (sid == null) {
          queryString = `${fid}`;
        } else if (tid == null) {
          queryString = `${fid}&sid=${sid}`;
        } else {
          queryString = `${fid}&sid=${sid}&tid=${tid}`;
        }

        fetch(
          `http://127.0.0.1:8000/frip/daily?fid=${queryString}&limit=20&order_by=${whichFilter}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(
              "필터 데이터 잘 나옴",
              res.data,
              queryString,
              whichFilter
            );
            this.setState({
              data: res.data,
              region: res.region_data,
              loading: false,
            });
          });
      }
    );
  };

  render() {
    const {
      when,
      where,
      who,
      filter,
      fid,
      sid,
      tid,
      categories,
      data,
      hotData,
      pickData,
      newData,
      region,
      str,
      activePage,
      override,
      fromDate,
      toDate,
      province,
      whichRegion,
      locationName,
      whichFilter,
      loading,
    } = this.state;

    return (
      <>
        <DailyContainer>
          <Header />
          <StyledAside>
            <AsideContainer>
              <MainMenu fid={fid}>
                {categories.fc.map((categ, idx) => {
                  return (
                    <a
                      onClick={() => {
                        this.handleClick("fid", idx + 1, categ);
                        this.overrideFalse();
                        this.activeReset();
                      }}
                    >
                      {categ}
                    </a>
                  );
                })}
              </MainMenu>
              <SubMenu fid={fid} sid={sid}>
                {categories.sc[`sc${fid}`].map((categ, idx) => {
                  let before1 = 0;
                  for (let i = 1; i < fid; i++) {
                    before1 += categories.sc[`sc${i}`].length;
                  }
                  idx = idx + before1 + 1;
                  return (
                    <a
                      onClick={() => {
                        this.handleClick("sid", idx, categ);
                        this.overrideFalse();
                        this.activeReset();
                      }}
                    >
                      {categ}
                    </a>
                  );
                })}
              </SubMenu>
            </AsideContainer>
          </StyledAside>
          {sid &&
            !override &&
            !fromDate &&
            !province &&
            !whichRegion &&
            !whichFilter && (
              <ThirdMenu fid={fid} sid={sid} tid={tid} categories={categories}>
                <a
                  onClick={() => {
                    this.handleClick("tid", null, null);
                    this.activeReset();
                  }}
                >
                  전체
                </a>
                {categories.tc[`tc${sid}`].map((categ, idx) => {
                  let before2 = 0;
                  for (let i = 1; i < sid; i++) {
                    before2 += categories.tc[`tc${i}`].length;
                  }
                  idx = idx + before2 + 1;
                  return (
                    <a
                      onClick={() => {
                        this.handleClick("tid", idx, null);
                        this.activeReset();
                      }}
                    >
                      {categ}
                    </a>
                  );
                })}
              </ThirdMenu>
            )}
          {(override || fromDate || province || whichRegion || whichFilter) && (
            <Override>
              <span>{`${str} 프립`}</span>
              <span>
                {data[0] && (fromDate || province || whichRegion)
                  ? `${data[0].total}`
                  : `${hotData[0].total}`}
              </span>
            </Override>
          )}
          <Filter>
            <FilterContainer
              dateTrue={fromDate}
              whereTrue={locationName}
              filterTrue={whichFilter}
            >
              <button onClick={() => this.modalHandler("when")}>
                {fromDate
                  ? `${fromDate.split("-")[1]}월 ${fromDate.split("-")[2]}일 ~ `
                  : "언제"}
                {toDate &&
                  `${toDate.split("-")[1]}월 ${toDate.split("-")[2]}일`}
              </button>
              <button onClick={() => this.modalHandler("where")}>
                {locationName ? `${locationName}` : "어디서"}
              </button>
              <button onClick={() => this.modalHandler("who")}>누구와</button>
              <button onClick={() => this.modalHandler("filter")}>
                {whichFilter ? `적용됨` : "필터"}
              </button>
            </FilterContainer>
          </Filter>
          {loading ? (
            <LoadingDiv>
              <div />
            </LoadingDiv>
          ) : (
            <>
              {tid ||
              override ||
              fromDate ||
              province ||
              whichRegion ||
              whichFilter
                ? Array(1)
                    .fill()
                    .map((el, idx) => {
                      return (
                        <Items
                          idx={idx}
                          data={data}
                          goTo={(id) => {
                            this.goTo(id);
                          }}
                        />
                      );
                    })
                : Array(3)
                    .fill()
                    .map((el, idx) => {
                      let realData;
                      let categ;
                      if (idx === 0) {
                        realData = hotData;
                        categ = `인기 ${str}`;
                      } else if (idx === 1) {
                        realData = pickData;
                        categ = `금주의 PICK`;
                      } else if (idx === 2) {
                        realData = newData;
                        categ = `신규 ${str}`;
                      }
                      return (
                        <Items
                          categ={categ}
                          data={realData}
                          goTo={(id) => {
                            this.goTo(id);
                          }}
                        />
                      );
                    })}
            </>
          )}

          {tid ||
          override ||
          fromDate ||
          province ||
          whichRegion ||
          whichFilter ? (
            <StyledFooter leftOrRight={activePage} endPage={data}>
              <div>
                <DoubleLArr />
                <LeftArr />
              </div>
              {data[0] &&
                [...Array(Math.ceil(data[0].total / 20) + 1).keys()]
                  .slice(1)
                  .map((num) => {
                    return (
                      <Button
                        onClick={() => this.handlePage(num)}
                        active={activePage}
                      >
                        {num}
                      </Button>
                    );
                  })}
              <div>
                <RightArr />
                <DoubleRArr />
              </div>
            </StyledFooter>
          ) : (
            <ShowMore>
              {hotData[0] && (
                <button
                  onClick={() => this.override()}
                >{`${hotData[0].total}개의 ${str} 전체보기`}</button>
              )}
            </ShowMore>
          )}
        </DailyContainer>
        {when && (
          <WhenModal
            closed={() => this.modalClosed()}
            getDate={(from, to) => this.getDate(from, to)}
          />
        )}
        {where && (
          <WhereModal
            closed={() => this.modalClosed()}
            region={region}
            getLocation={(which, location, name) =>
              this.getLocation(which, location, name)
            }
          />
        )}
        {who && <WhoModal closed={() => this.modalClosed()} />}
        {filter && (
          <FilterModal
            closed={() => this.modalClosed()}
            getFilter={(which) => {
              this.getFilter(which);
            }}
          />
        )}
      </>
    );
  }
}

export default withRouter(Daily);

const LoadingDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  div {
    height: 50px;
    width: 200px;
    background-image: url("https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/logo/wecode_gray_logo.png");
    background-repeat: no-repeat;
    background-size: 100%;
    color: black;
    position: absolute;
    left: auto;
    top: auto;
    bottom: auto;
    animation: 1s linear 0s infinite normal none running linArrow;
    @keyframes linArrow {
      0% {
        margin-top: -30px;
        opacity: 100%;
      }
      100% {
        margin-top: 30px;
        opacity: 0%;
      }
    }
  }
`;

const DailyContainer = styled.div`
  header {
    a:nth-of-type(2) {
      font-weight: bold;
      &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        background-color: rgb(51, 151, 255);
        margin: 12px auto 0px;
        border-radius: 3px;
      }
    }
  }
`;

const StyledAside = styled.aside`
  background: linear-gradient(279deg, rgb(98, 201, 255), rgb(51, 151, 255));
  margin-bottom: 40px;
`;

const AsideContainer = styled.div`
  width: 930px;
  height: 163.6px;
  padding: 40px 0 40px;
  margin: auto;
  color: white;
`;

const MainMenu = styled.div`
  width: 400px;
  display: flex;
  a {
    width: 100px;
    height: 35.6px;
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    &:nth-of-type(${(props) => props.fid}) {
      border-bottom: 2px solid white;
      font-weight: bold;
    }
  }
`;

const SubMenu = styled.div`
  width: auto;
  height: 24px;
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  a {
    font-size: 14px;
    text-decoration: none;
    color: inherit;
    margin-right: 16px;
    cursor: pointer;
    &:nth-of-type(${(props) => {
          if (props.fid === 1) {
            return props.sid;
          } else if (props.fid === 2) {
            return props.sid - 9;
          } else if (props.fid === 3) {
            return props.sid - 25;
          } else if (props.fid === 4) {
            return props.sid - 32;
          }
        }}) {
      font-weight: bold;
    }
  }
`;

const ThirdMenu = styled.div`
  height: 18px;
  width: 930px;
  margin: 0 auto 20px;
  a {
    font-size: 14px;
    text-decoration: none;
    color: inherit;
    margin-right: 16px;
    cursor: pointer;
    &:nth-of-type(${(props) => {
          if (props.tid === null) {
            return 1;
          } else {
            let before2 = 0;
            for (let i = 1; i < props.sid; i++) {
              before2 += props.categories.tc[`tc${i}`].length;
            }
            return props.tid - before2 + 1;
          }
        }}) {
      color: rgb(51, 151, 255);
    }
  }
`;

const Override = styled.div`
  width: 930px;
  margin: 0 auto 20px;
  span {
    font-size: 18px;
    &:first-of-type {
      font-weight: bold;
      margin-right: 4px;
    }
    &:nth-of-type(2) {
      font-weight: 300;
    }
  }
`;

const Filter = styled.div`
  width: 930px;
  padding: 5px 0 40px;
  margin: auto;
`;

const FilterContainer = styled.div`
  display: flex;
  button {
    margin-right: 16px;
    border: 1px solid rgb(238, 238, 238);
    border-image: initial;
    border-radius: 5px;
    line-height: 14px;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    color: initial;
    font-size: 14px;
    font-weight: 500;
    padding: 11px 20px;
    &:first-of-type {
      color: ${(props) => (props.dateTrue ? "rgb(51, 151, 255)" : "initial")};
    }
    &:nth-of-type(2) {
      color: ${(props) => (props.whereTrue ? "rgb(51, 151, 255)" : "initial")};
    }
    &:last-of-type {
      color: ${(props) => (props.filterTrue ? "rgb(51, 151, 255)" : "initial")};
    }
  }
`;

const ShowMore = styled.div`
  display: flex;
  button {
    width: 492px;
    height: 58.8px;
    padding: 22px 0;
    margin: 0 auto 40px;
    border: 1px solid rgb(238, 238, 238);
    border-image: initial;
    border-radius: 5px;
    line-height: 14px;
    background-color: transparent;
    text-align: center;
    cursor: pointer;
    color: black;
    font-size: 13px;
  }
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
  padding: 0px;
  border-radius: 50%;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: rgb(238, 238, 238);
  }
  &:nth-of-type(${(props) => props.active}) {
    color: rgb(51, 151, 255);
  }
`;

const StyledFooter = styled.footer`
  height: 40px;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  div {
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    &:first-of-type {
      margin-right: 10px;
      button {
        opacity: ${(props) => (props.leftOrRight === 1 ? "20%" : "100%")};
      }
    }
    &:last-of-type {
      margin-left: 10px;
      button {
        opacity: ${(props) =>
          props.endPage[0] &&
          (props.leftOrRight === Math.ceil(props.endPage[0].total / 20)
            ? "20%"
            : "100%")};
      }
    }
  }
`;
