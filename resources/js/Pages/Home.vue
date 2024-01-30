<script setup>
import AppLayout from '@/Layout/AppLayout.vue';
import ProductSlider from '@/Components/global/ProductSlider.vue';

import Products from '@/Components/global/ProductList.vue'
//products list 
defineProps({
    products: Array
})


</script>
<template>
    <AppLayout title="Página Inicial">
        <div class="container mx-auto">
            <section class="mb-24"> 
            <ProductSlider />
        </section>
            <section class="flex flex-col gap-20 mt-14 mb-40">
                <div class="flex flex-col "> 
                    <h1 class="font-medium text-3xl text-zinc-700">Os mais vendidos</h1>
                    <span class="font-light text-base text-zinc-500">Nossos produtos mais vendidos no site!</span> 

                      <!-- product list component -->
                <Products :products="products"></Products>
                </div>
<!--- 
                <div class="flex flex-col "> 
                    <h1 class="font-medium text-3xl text-zinc-700">Lançamentos</h1>
                    <span class="font-light text-base text-zinc-500">Ultimos produtos lançados no site!</span> 
                </div>-->
            </section> 
        </div>
    </AppLayout>
</template>