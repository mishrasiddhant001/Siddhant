import React from 'react';
import './education.css';
import { FaGraduationCap } from 'react-icons/fa';
import grad from '../../assets/grad.jpg';
import school from '../../assets/school.jpg';
// import Swiper core and required modules
import {  Pagination, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: grad,
    name: 'College- United College Of Engineering And Research.',
    detail: 'Batch - 2020 - 2024<br />' +
            'Stream - B.Tech (Computer Science Engineering.)<br />' +
            'Location - Prayagraj, UP, 211010<br />'
  },
  {
    avatar: school,
    name: 'School- Gorakhpur Public School.',
    detail: 'Batch - 2018 - 2020<br />' +
            'Stream - XII(PCM)<br />' +
            'Location - Gorakhpur, UP, 273016<br />'
  },
  {
    avatar: school,
    name: 'School- Gorakhpur Public School.',
    detail: 'Batch - 2016 - 2018<br />' +
            'Stream - X<br />' +
            'Location - Gorakhpur, UP, 273016<br />'
  }
];

const Education = () => {
  return (
    <section id="education">
      <div className="head">
        <div className="icon">
          <FaGraduationCap />
        </div>
        <div className="text">
          <h1 style={{ fontSize: '2rem' }}><b>Education</b></h1>
        </div>
      </div>
      <Swiper className="container institution_container"
       // install Swiper modules
       modules={[Navigation, Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, detail }, index) => {
          return (
            <SwiperSlide key={index} className="institution">
              <div className="avatar">
                <img src={avatar} alt={name} />
              </div>
              <h4><b>{name}</b></h4>
              <small className='details' dangerouslySetInnerHTML={{ __html: detail }}></small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Education;
