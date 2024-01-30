<script setup>
import { Link } from '@inertiajs/vue3';

</script>

<template>
    <h2 class="font-semibold text-base text-zinc-500 leading-tight mt-12 mb-12">
        <Link class="hover:text-emerald-500 duration-200" :href="`/${href}`">{{ title }}</Link>
        /
        <Link :href="`/${href}/`" class="text-zinc-500">
            {{ property.title }}
        </Link>
    </h2>
</template>

<script>

export default {
    props: {
        property: Object,
        title: String,
        href: String
    }
}
</script>
