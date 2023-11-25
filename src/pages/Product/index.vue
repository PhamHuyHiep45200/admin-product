<template>
    <div>
      <a-button @click="addProduct">add</a-button>
      <Product />
    </div>
  </template>
  
  <script setup>
  import Product from '../../components/product/index.vue'
import { useRouter } from "vue-router";
  
  const router = useRouter()
  
  const addProduct = ()=>{
    console.log(router.options.routes)
  }
  </script>
  