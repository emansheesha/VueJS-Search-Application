<template>
  <div class="p-8 flex justify-center">
    <input
      type="search"
      class="rounded border-2 border-gray-200 w-100"
      placeholder="Search For Meals"
    />
   
    <div class="gap-1 flex justify-center" >
        <router-link :to="{name:'letter',params:{letter}}" :key="letter" v-for="letter of letters">{{ letter }}</router-link>
    </div>
  </div> {{ ingredients }}
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store/index.js";
import axiosClient from "../axiosClient";
const meals = computed(() => store.state.meals);
const ingredients = ref([]);
const letters = "ABCDEFGHKLMNOPQRSTUVWXYZ".split('');
onMounted(async()=>{
  const res=await axiosClient.get('/list.php?c=list');
  console.log(res)
  ingredients.value=res;
})
</script>
