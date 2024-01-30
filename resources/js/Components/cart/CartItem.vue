<script setup>
import { onMounted, onUnmounted, computed, ref } from 'vue';

import { Head, Link, router, usePage } from '@inertiajs/vue3';

const carts = computed(() => usePage().props.cart.data.items)
const total = computed(() => usePage().props.cart.data.total)
const itemId = (id) => carts.value.findIndex((item) => item.product_id === id);
const products = computed(() => usePage().props.cart.data.products)
let open = ref(false);


const update = (product, quantity) =>
    router.patch(route('cart.update', product), {
        quantity,
    });
//remove form cart 
const remove = (product) => router.delete(route('cart.delete', product));

</script>
 

<template>
    <div class=" ">
        <div v-for="product in products" :key="product.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600rounded-sm relative">

            <div class=" flex justify-between ">
                <h1 class="px-6 py-4 font-semibold text-gray-900 dark:text-white text-sm w-64">
                    {{ product.title }}
                </h1>

            </div>

            <a @click="remove(product)"
                class="cursor-pointer font-medium text-zinc-600 dark:text-red-500 hover:underline  pr-4 pt-6 h-3 absolute top-0 right-0" ><svg
                    xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z">
                    </path>
                </svg></a>

            <div class="flex items-center justify-between w-full pl-5">
                <div class="flex items-center space-x-3">
                    <button @click.prevent="update(product, carts[itemId(product.id)].quantity - 1)"
                        :disabled="carts[itemId(product.id)].quantity <= 1"
                        :class="[carts[itemId(product.id)].quantity > 1 ? 'cursor-pointer text-purple-600' : 'cursor-not-allowed text-gray-300 dark:text-gray-500', 'inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700']"
                        type="button">
                        <span class="sr-only">Quantity button</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h16" />
                        </svg>
                    </button>
                    <div>
                        <input type="number" id="first_product" v-model="carts[itemId(product.id)].quantity"
                            class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="1" required>
                    </div>
                    <button @click.prevent="update(product, carts[itemId(product.id)].quantity + 1)"
                        class="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                        type="button">
                        <span class="sr-only">Quantity button</span>
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>
                <div class="px-6 py-4 font-semibold text-gray-900 dark:text-white ">
                    R$ {{ product.price }}
                </div>
            </div>
        </div>
    </div>
</template>
