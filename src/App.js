import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FakeData } from './Data/FakeData';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.scss'
import './Responsive.scss'


// Import image 
import Background from './Assets/Img/esports_banner-1.png'
import firstPrice from './Assets/Img/first-price.png';
import secondPrice from './Assets/Img/second-price.png';
import thirdPrice from './Assets/Img/third-price.png';
import smallCup from './Assets/Img/small-cup.png';
import tournament from './Assets/Img/OEG-White 2.png';
import cup from './Assets/Img/cup.png';
import brand from './Assets/Img/OEG-White 3.png';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${Background})`,backgroundSize:"cover",boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.3)"}}>
      <div className="container">
      <div className='timeline'>
      <div className="swiper-container">
      <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        renderBullet: function(index, className) {
          let year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
          return '<span class="' + className + '">' + year + '</span>';
        }
    }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        FakeData.map((item,index) =>{
          return(
      <SwiperSlide data-year={item.time}>
      <div key={index} className="swiper-slide-content">
        <div className="page-content flex items-center">
          <div className="title style-2 text-white">
            <span>Giải đấu</span>
            <h2>Hanoi Open Student Oeg</h2>
          </div>
          <button className="btn btn-primary style-2 large-btn ml-auto">
            Xem giải đấu
          </button>
        </div>
        <div className="price-wrapper">
          <img className="order-2" src={firstPrice} alt="price" />
          <img src={secondPrice} alt="price" />
          <img className="order-3" src={thirdPrice} alt="price" /> 
          <div className="order-4 fourth-fifth-price">
            <div className="small-price">
              <div className="small-image">
                <img src={smallCup} alt="cup" /> 
              </div>
              <p>Giải 4: <span>1.000.000 </span>VNĐ</p>
            </div>
            <div className="small-price">
              <div className="small-image">
                <img src={smallCup} alt="cup" /> 
              </div>
              <p>Giải 5: <span>1.000.000 </span>VNĐ</p>
            </div>
          </div>
        </div>
        <div className="tournament-info">
          <div className="tournament-image">
            <img src={tournament} alt="tournament" /> 
          </div>
          <div className="tournament-content">
            <h3 className="primary-color">THÔNG TIN GIẢI ĐẤU:</h3>
            <p>
              Bằng việc đã và đang hợp tác với nhiều đối tác trong khu
              vực, cùng với đội ngũ chuyên gia có hơn 10 năm kinh
              nghiệm trong lĩnh vực eSports, giàu tâm huyết, OEG hứa
              hẹn trở thành tổ chức cốt lõi hàng đầu và nâng tầm cao
              mới cho eSports tại Việt Nam. Chúng tôi hoạt động trên
              rất nhiều lĩnh vực nhắm hướng tới xây dựng một hệ sinh
              thái Thể thao điện tử toàn diện, chuyên nghiệp nhất.
            </p>
            <div className="time-sponsor">
              <h3 className="primary-color">THỜI GIAN: THÁNG 8 - 2022</h3>
              <div className="sponsor">
                <div className="sponsor-cup">
                  <img src={cup} alt="cup" /> 
                </div>
                <div className="sponsor-brand">
                  <img src={brand} alt="brand" /> 
                  <p className="brand-name primary-color">
                    Nhà tài trợ: OEG
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
