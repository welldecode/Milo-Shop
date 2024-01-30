<script setup>


</script>

<template>
    <swiper :modules="modules" :slides-per-view="1" navigation :pagination="{ clickable: true }" @swiper="onSwiper"
        @slideChange="onSlideChange" effect="fade">

        <swiper-slide class="group flex items-start relative mb-auto select-none rounded-xl w-full h-72 aspect-[16/5]">
            <img src="https://production.na01.natura.com/on/demandware.static/-/Library-Sites-TbsSharedLibrary/default/dw1be58d6d/banners-home/13307-Banner-Sale-Home-Desk-1920x770.jpg"
                class="rounded-xl shadow-md w-full h-full object-cover">

        </swiper-slide>
        <swiper-slide class="group flex items-start relative mb-auto select-none rounded-xl w-full h-72  aspect-[16/5]">
            <img src="https://www.salonline.com.br/file/v452737483588720131/general/mais-vendidos-home-desk%20(3).jpg"
                class="rounded-xl shadow-md w-full h-full">

        </swiper-slide>
    </swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, A11y, EffectFade],
        };
    },
};
</script>
