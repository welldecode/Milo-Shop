<script setup>
import { Link, router, usePage } from '@inertiajs/vue3';
import AppLayout from '@/Layout/AppLayout.vue';

import { onMounted, onUnmounted, computed, ref } from 'vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Products from '@/Components/global/ProductList.vue'
import Breadcrumb from '@/Components/global/Breadcrumb.vue';

const carts = computed(() => usePage().props.cart.data.items)
const itemId = (id) => carts.value.findIndex((item) => item.product_id === id);

const update = (product, quantity) =>
    router.patch(route('cart.update', product), {
        quantity,
    });

const addToCart = (product) => {
    router.post(route('cart.store', product), {
        onSuccess: (page) => {
            console.log('foi')
            Swal.fire({
                toast: true,
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                title: page.props.flash.success
            });
        },
    })
};

const thumbsSwiper = ref()

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper
}

const modules = ref([FreeMode, Navigation, Thumbs])
</script>
<template>
    <AppLayout :title="products.title + `Milo!`">
        <div class="containerx mx-auto">
            <Breadcrumb title="Inicio" :property="products" :href="'product/' + products.slug" class="pa-0 mt-1" />

            <div class="flex flex-col gap-10 md:flex-row md:justify-between lg:gap-24">
                <div class=" w-[48rem]">
                    <swiper :style="{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    }" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
                        class="mySwiper2 rounded-md">
                        <swiper-slide v-for="i in 10">
                            <img :src="`https://picsum.photos/id/${110 + i}/800/600`" class="shadow rounded-md" />
                        </swiper-slide>
                    </swiper>
                    <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="5" :watchSlidesProgress="true"
                        :grabCursor="true" :modules="modules" class="mySwiper mt-5   ">
                        <swiper-slide v-for="i in 10" :key="`https://picsum.photos/id/${110 + i}/200/100`" class="my-slide">
                            <img :src="`https://picsum.photos/id/${110 + i}/200/100`" class="shadow rounded-md " />
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="lg:max-w-md xl:max-w-lg md:py-2 w-full">
                    <div class="rounded-md flex flex-col h-full">
                        <h1 class="text-2xl font-extrabold text-zinc-700 uppercase w-[25rem] mb-2"> {{ products.title }}
                        </h1>
                        <span class="text-sm font-normal text-zinc-500">Vendido e entregue pelo: <b>AliexPress</b> </span>

                        <div class="wishlist mt-5 flex items-center justify-between gap-5">
                            <div class="quantity text-sm font-medium text-zinc-600">


                                <span v-if="products.inStock == 0"
                                    class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Em
                                    Estoque</span>
                                <span v-else
                                    class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Fora
                                    de estoque</span>

                            </div>
                            <div class="flex items-center gap-4  ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"
                                    stroke-width=".1" fill="#222">
                                    <path
                                        d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <hr class="mt-5">
                        <div class="mt-5 inline-flex flex-col gap-5 ">
                            <div class=" ">
                                <h6 class="font-extrabold text-3xl text-blue-700"> R$ {{ products.price }}</h6>
                                <div class="flex items-center gap-2 mt-5">

                                    <div
                                        class="flex items-center gap-2 text-sm font-medium bg-blue-50 px-6 py-2 rounded text-blue-700 border border-solid border-slate-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5"
                                            fill="currentColor">
                                            <path
                                                d="M3.00488 2.99979H21.0049C21.5572 2.99979 22.0049 3.4475 22.0049 3.99979V19.9998C22.0049 20.5521 21.5572 20.9998 21.0049 20.9998H3.00488C2.4526 20.9998 2.00488 20.5521 2.00488 19.9998V3.99979C2.00488 3.4475 2.4526 2.99979 3.00488 2.99979ZM20.0049 10.9998H4.00488V18.9998H20.0049V10.9998ZM20.0049 8.99979V4.99979H4.00488V8.99979H20.0049ZM14.0049 14.9998H18.0049V16.9998H14.0049V14.9998Z">
                                            </path>
                                        </svg>
                                        <span>Até 12x sem juros</span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between gap-5">
                                <Link href="/checkout"
                                    class=" w-full cursor-pointer bg-blue-500 hover:bg-blue-700 px-4 py-3 text-slate-50 rounded-md inline-flex items-center justify-center gap-3 text-base ">
                                Comprar</Link>
                                <a @click="addToCart(products)"
                                    class="cursor-pointer bg-blue-500 hover:bg-blue-700 px-4 py-3 text-slate-50 rounded-md inline-flex items-center justify-center gap-3 text-base ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </a>
                            </div>
                            <div class="mt-10">
                                <h1 class="font-bold text-lg text-zinc-700">Produtos relacionados</h1>
                                <div
                                    class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-2 xl:gap-x-8">

                                    <div v-for="product in relatedPosts" :key="product.id" class="group relative">
                                        <!-- add to cart icon -->
                                        <div
                                            class="absolute right-5 top-10 flex items-center  gap-3 opacity-0 group-hover:opacity-100 cursor-pointer transition-all duration-300 ">

                                            <div class="bg-blue-700 p-2  rounded-md">
                                                <a @click="addToCart(product)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div class="bg-blue-700 p-2  rounded-md">
                                                <a @click="addToCart(product)">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24"
                                                        stroke-width="1.5" class="w-6 h-6 text-white">
                                                        <path
                                                            d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z">
                                                        </path>
                                                    </svg>

                                                </a>
                                            </div>
                                        </div>
                                        <!-- end -->
                                        <Link :href="'/product/' + product.slug">
                                        <div class="mt-4 flex justify-between gap-5">
                                            <div class="flex flex-col  ">
                                                <figure class=" h-[20rem]">
                                                    <img v-if="product.product_images.length > 0"
                                                        :src="`/${product.product_images[0].image}`" :alt="product.imageAlt"
                                                        class="rounded h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                                    <img v-else
                                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png"
                                                        :alt="product.imageAlt"
                                                        class="rounded h-full w-full object-cover object-center lg:h-full lg:w-full" />
                                                </figure>
                                                <h3 class="text-base text-gray-700 font-medium mt-5 mb-2">
                                                    <span aria-hidden="true" class="" />
                                                    {{ product.title }}
                                                </h3>
                                                <p class="mt-1 text-sm  text-gray-500"> </p>
                                                <span class="text-base font-bold text-gray-900">R$ {{ product.price
                                                }}</span>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="  mt-[10rem]">
            <h1 class="font-bold text-2xl mb-5 text-zinc-600">Descrição</h1>
            <p class="font-normal text-base text-zinc-500 leading-5">{{ products.description }}</p>
        </div>
        </div>
        <div class="container mx-auto mt-28">

            <!-- Product grid -->
            <div class="lg:col-span-3">
                <!-- Your content -->
            </div>
        </div>
    </AppLayout>
</template>
<script>

export default {
    components: {
        Breadcrumb,
    },
    props: {
        products: Object,
        relatedPosts: Object
    },

}  
</script>
