<script setup>
import { computed, reactive } from 'vue'

import AppLayout from '@/Layout/AppLayout.vue';
import { router, usePage } from '@inertiajs/vue3';

defineProps({
    userAddress: Object
})

const carts = computed(() => usePage().props.cart.data.items)
const products = computed(() => usePage().props.cart.data.products)

const total = computed(() => usePage().props.cart.data.total)
const itemId = (id) => carts.value.findIndex((item) => item.product_id === id);

const form = reactive({
    address1: null,
    state: null,
    city: null,
    zipcode: null,
    country_code: null,
    type: null,

})
const formFilled = computed(() => {
    return (form.address1 !== null &&
        form.state !== null &&
        form.city !== null &&
        form.zipcode !== null &&
        form.country_code !== null &&
        form.type !== null)
})

const update = (product, quantity) =>
    router.patch(route('cart.update', product), {
        quantity,
    });
//remove form cart 
const remove = (product) => router.delete(route('cart.delete', product));


//confirm order 

function submit() {
    router.visit(route('checkout.store'), {
        method: 'post',
        data: {
            carts: usePage().props.cart.data.items,
            products: usePage().props.cart.data.products,
            total: usePage().props.cart.data.total,
            address: form
        }
    })
}




</script>
<template>
    <AppLayout>
        <section class="text-gray-600 body-font relative">
            <div class="containerx ">
                <h1>Carrinho de Compras</h1>
            </div>
        </section>
    </AppLayout>
</template>