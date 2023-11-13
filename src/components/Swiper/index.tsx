"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SwiperCore from "swiper";

import 'swiper/css/bundle';
import './swiper.css';
import Image from "next/image";

SwiperCore.use([Pagination]);

export default function SwiperComponent({
    imageList,
    className
}: {
    imageList: {
        url: string;
        width: number;
        height: number;
    }[];
    className?: string
}) {
    return (
        <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            className={className}
            pagination={{ clickable: true }}
            autoplay
            loop={true}
        >
            {imageList.map((image) => (
                <SwiperSlide key={image.url}>
                    <Image
                        src={image.url}
                        alt="works image"
                        width={image.width}
                        height={image.height}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}