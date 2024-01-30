<script setup> 
import { ref } from "vue";
let input = ref("");
const fruits = ["apple", "banana", "orange"];
function filteredList() {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>
<template>
    <div class="search relative" >
        <div class="absolute top-2 right-5 text-zinc-700" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="w-6 h-6 " fill="currentColor"><path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path></svg>
        </div>
     <input type="text" v-model="input" placeholder="Procure por um produto do seu gosto..." class="  pr-14 rounded p-3 w-[400px] focus:outline-none bg-[#f1f1f1] text-sm text-zinc-800 border-0 placeholder-zinc-700"  />

    </div>
</template>
