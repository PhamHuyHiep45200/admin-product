<template>
  <Layout>
    <div v-if="loading" class="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.3)]">
      <a-spin :indicator="indicator" />
    </div>
    <router-view></router-view>
  </Layout>
</template>

<script setup>
import Layout from './layout/default.vue'
import { LoadingOutlined } from '@ant-design/icons-vue';
import { h, provide, ref } from 'vue';

const loading = ref(false)
const indicator = h(LoadingOutlined, {
  style: {
    fontSize: '50px',
  },
  spin: true,
});

const startLoading = ()=>{
  loading.value = true
}

const stopLoading = ()=>{
  loading.value = false
}

provide('startLoading', startLoading)
provide('stopLoading', stopLoading)
</script>