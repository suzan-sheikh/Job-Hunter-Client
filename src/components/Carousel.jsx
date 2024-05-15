
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


import { Autoplay, Pagination} from 'swiper/modules'
import Slide from './Slide'

const bgimg1 = 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const bgimg2 = 'https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const bgimg3 = 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function Carousel() {
  return (
    <div data-aos="zoom-in" className='container px-4 py-2 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide className='rounded-xl'>
          <Slide
            image={bgimg1}
            text='Discover Your Dream Job: Explore, Apply, and Succeed with Ease.'
          />
        </SwiperSlide>
        <SwiperSlide className='rounded-xl'>
          <Slide
            image={bgimg2}
            text='Find Your Perfect Fit: Unlock Opportunities and Propel Your Career Forward.'
          />
        </SwiperSlide>
        <SwiperSlide className='rounded-xl'>
          <Slide
            image={bgimg3}
            text='Your Career Journey Starts Here: Navigate, Apply, and Thrive Professionally.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
