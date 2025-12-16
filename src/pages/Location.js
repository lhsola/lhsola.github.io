import React, {useRef, useEffect} from 'react'
import naverMapIcon from '../images/naver.webp';
import kakaoMapIcon from '../images/kakao.png';
import carIcon from '../images/car.png';
import busIcon from '../images/bus.png';
import { TbBoxPadding } from 'react-icons/tb';
import flower from '../images/flower.png'

function Location() {
  const mapRef = useRef(null);
  const lat = 37.4856796; // 위도
  const lng = 127.0043305; // 경도

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 15, // 지도 확대 정도
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, []);

  const gotoNavermap = () => {
    window.open("https://map.naver.com/v5/search/서초%20디토%20레스토랑","_blank");
  }

  const gotoKakaomap = () => {
     window.open("https://map.kakao.com/?urlX=500937.99999999907&urlY=1107307.9999999981&urlLevel=3&itemId=1706770960&q=%EB%94%94%ED%86%A0%20%EC%84%9C%EC%B4%88%EC%A0%90&srcid=1706770960&map_type=TYPE_MAP","_blank");
  }
  
  return (
    <div className='container'>
      {/* <img src={flower} className='flower' alt='flower'/> */}
      <div className='title'>오시는 길</div>
      <div className='location__details'>
        <div>서초 디토레스토랑</div>
        <div>서울 서초구 명달로 94</div>
      </div>
      <div ref={mapRef} className='location__map'></div>
      <div className='location__map-icon-box'>
          <div className='location__map-item' onClick={gotoNavermap}>
            <img src={naverMapIcon} className='location__map-icon' alt="naverMap"/>
            <span>네이버지도</span>
          </div>
          <div className='location__map-item' onClick={gotoKakaomap}>
            <img src={kakaoMapIcon} className='location__map-icon' alt='kakaoMap'/>
            <span>카카오지도</span>
          </div>
      </div>
      <div className='location__info'>
        <div className='info-item'>
          <img src={carIcon} alt="car" className="info-icon"/>
          <span>주차안내</span>
        </div>
        <div className='info-detail'>
          <div>♥디토 레스토랑 건물 지하 1,2층</div>
          <div className='info-detail-desc'>병원과 편의점 사이 골목에 입구가있습니다.</div>
          {/* <div>&nbsp;&nbsp;&nbsp;&nbsp;입구가 있습니다.</div> */}
        </div>
        <div className='info-item'>
          <img src={busIcon} alt="bus" className="info-icon"/>
          <span>대중교통 이용시</span>
        </div>
        <div className='info-detail'>
          <div>♥서초역 4번출구 도보 12분</div>
          <div>♥서초역 5번출구 서초13(마을버스)승차 → 2정거장이동 "더미켈란아파트역"하차</div>
          <div>♥방배역 4번출구 도보 12분 </div>
          <div>♥방배역 1번출구 서초13(마을버스)승차 → 3정거장이동 "더미켈란아파트역"하차</div>
        </div>
      </div>
    </div>
  )
}


export default Location
