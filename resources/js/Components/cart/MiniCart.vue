<script setup>
import { onMounted, onUnmounted, computed, ref } from 'vue';

import { Head, Link, router, usePage } from '@inertiajs/vue3';

import CartItem from '@/Components/cart/CartItem.vue';

const cart = computed(() => usePage().props.cart);
const total = computed(() => usePage().props.cart.data.total)
const products = computed(() => usePage().props.cart.data.products)
let open = ref(false);

const closeOnEscape = (e) => {
    if (open.value && e.key === 'Esc') {
        open.value = false;
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.75s ease-in-out;
}

.slide-enter-to {
    position: absolute;
    right: 0;
}

.slide-enter-from {
    position: absolute;
    right: -100%;
}

.slide-leave-to {
    position: absolute;
    right: -100%;
}

.slide-leave-from {
    position: absolute;
    right: 0;
}
</style>

<template>
    <div class=" h-full  ">
        <div @click="open = !open">
            <div class="relative inline-flex items-center p-2 text-sm font-medium text-center text-zinc-800 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="w-6 h-6 " fill="currentColor"><path d="M6.50488 2H17.5049C17.8196 2 18.116 2.14819 18.3049 2.4L21.0049 6V21C21.0049 21.5523 20.5572 22 20.0049 22H4.00488C3.4526 22 3.00488 21.5523 3.00488 21V6L5.70488 2.4C5.89374 2.14819 6.19013 2 6.50488 2ZM19.0049 8H5.00488V20H19.0049V8ZM18.5049 6L17.0049 4H7.00488L5.50488 6H18.5049ZM9.00488 10V12C9.00488 13.6569 10.348 15 12.0049 15C13.6617 15 15.0049 13.6569 15.0049 12V10H17.0049V12C17.0049 14.7614 14.7663 17 12.0049 17C9.24346 17 7.00488 14.7614 7.00488 12V10H9.00488Z"></path></svg>
               
                <span class="sr-only">cart</span>
                <div
                    class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-blue-500 bg-slate-100 border-2 border-white rounded-full top-0 -right-1 dark:border-gray-900">
                    {{ cart.data.count }}</div>
            </div>
        </div>
        <div v-show="open" class="fixed inset-0 z-[15] bg-[#282F54]/60" @click="open = false"></div>
        <!-- Full Screen Dropdown Overlay -->

        <Transition name="slide"> 
                <div  v-show="open"  class="fixed z-50 shadow-lg slide-enter-active top-0 bottom-0 right-0  slide-enter-active  bg-[#fff]  w-[400px]">

                    <!-- Settings Dropdown -->
                    <div class="relative p-5 h-screen">
                        <div
                            class="relative z-50 w-full inline-flex items-center gap-4 justify-between border-b-2 pb-3 border-slate-100 border-solid">
                            <div class="flex flex-col">
                                <div class="font-bold text-zinc-800">MINHA SACOLA</div>
                                <div class="font-light text-base text-zinc-500"> Items ({{ cart.data.count }})</div>
                            </div>
                            <div class="cursor-pointer relative z-50 w-10 inline-flex items-center gap-4 justify-between"
                                v-show="open">
                                <div class="py-1 px-2  text-zinc-700 text-sm" @click="open = !open">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24"
                                        fill="currentColor">
                                        <path
                                            d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center justify-center gap-10 -mt-14 h-screen flex-col "
                            v-if="cart.data.count == 0">
                            <div class="flex items-center flex-col gap-4">

                                <h1 class="font-bold text-xl text-center text-zinc-800">NENHUM PRODUTO NA SACOLA!</h1>
                                <span class="font-light text-sm text-center  text-zinc-500">Quando você escolher seus
                                    produtos,
                                    mostraremos
                                    aqui tudo que você deseja comprar em nosso site.</span>

                                <Link href="/"
                                    class="bg-blue-500 rounded text-slate-50 px-5 py-3 hover:bg-blue-600 text-sm font-bold flex items-center gap-2">
                                CONTINUE COMPRANDO

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                    fill="currentColor">
                                    <path
                                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                                    </path>
                                </svg>
                                </Link>
                            </div>


                        </div>
                        <div class="  mt-10  h-full flex flex-col justify-between " v-else>
                            <CartItem />
                            <div class="absolute bottom-0 left-0 right-0 flex gap-10 justify-end   flex-col">

                                <div class="px-5">
                                    <p class="leading-relaxed mb-3 text-gray-600 flex justify-between">Subtotal: <span
                                            class="font-bold text-zinc-700"> R$ {{ total }}</span> </p>
                                    <p class="leading-relaxed mb-5 text-gray-600 flex justify-between">Economia: <span
                                            class="font-bold text-zinc-700"> N/A</span> </p>

                                    <div
                                        class="flex items-center justify-center px-2 py-3 text-zinc-700 rounded-sm bg-slate-100 text-base">
                                        Total da Compra: R$ {{ total }}</div>
                                </div>

                                <Link href="/"
                                    class="px-4 bg-blue-500 py-4 text-white flex items-center justify-center text-center w-full">
                                Continuar Comprando</Link>
                            </div>
                        </div>
                    </div>
                </div> 
        </Transition>
    </div>
</template>
