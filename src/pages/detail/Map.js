/*global kakao*/

import React, { Component } from "react";
import styled from "styled-components";
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      markers: [],
      infowindows: [],
      venue: [],
    };
  }
  componentDidMount() {
    fetch(`http://13.59.219.151:8000/frip/${this.props.whichOne}`)
      .then((res) => res.json())
      .then((res) => {
        console.log("firstly: ", res);
        this.setState({
          detail: res.detail,
          venue: res.detail[0].venue,
        });
      });
    var container = document.getElementById("myMap"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(this.props.lat, this.props.lng), //지도의 중심좌표.
      level: 4, //지도의 레벨(확대, 축소 정도)
    };
    this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 지도를 생성한다
    var map = new kakao.maps.Map(container, options);
    // 마커 클러스터러를 생성합니다
    var clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 10, // 클러스터 할 최소 지도 레벨
    });

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      const { venue } = this.state;
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        let lat = venue && venue.venue_lat; // 위도
        let lon = venue && venue.venue_lng; // 경도

        console.log("나와주세요", { lat, lon });
        let locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;"> 프립 위치 </div>'; // 인포윈도우에 표시될 내용입니다

        //  마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
      // 지도에 마커와 인포윈도우를 표시하는 함수입니다
      function displayMarker(locPosition, message) {
        // 마커를 생성합니다
        var marker_present = new kakao.maps.Marker({
          map: map,
          position: locPosition,
        });

        var iwContent = message, // 인포윈도우에 표시할 내용
          iwRemoveable = true;

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removable: iwRemoveable,
        });

        // 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker_present);

        // 지도 중심좌표를 접속위치로 변경합니다
        map.setCenter(locPosition);
        marker_present.setMap(locPosition);
      }
    }
  }

  render() {
    console.log("aoq", this.props.lat, this.props.lng);
    console.log(this.state.venue);
    const { detail } = this.state;
    return (
      <Popup>
        <div id="myMap" />
      </Popup>
    );
  }
}
export default Map;

const Popup = styled.div`
  #myMap {
    width: 400px;
    height: 400px;
  }
`;
