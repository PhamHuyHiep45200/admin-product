<template>
  <router-view v-if="routerAuth"></router-view>
  <Layout v-else>
    <div
      v-if="loading"
      class="fixed inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.3)]"
    >
      <a-spin :indicator="indicator" />
    </div>
    <router-view></router-view>
  </Layout>
</template>

<script setup>
import Layout from "./layout/default.vue";
import { LoadingOutlined } from "@ant-design/icons-vue";
import { computed, h, onMounted, provide, ref } from "vue";
import { useRouter } from "vue-router";
import { getMe } from "./request/user.api";
const listRouteAuth = ["/login"];

const loading = ref(false);
const router = useRouter();
const indicator = h(LoadingOutlined, {
  style: {
    fontSize: "50px",
  },
  spin: true,
});

const startLoading = () => {
  loading.value = true;
};

const stopLoading = () => {
  loading.value = false;
};

const routerAuth = computed(() => {
  return listRouteAuth.includes(router.currentRoute.value.fullPath);
});

const getInfo = async ()=>{
  try {
    const {data} = await getMe()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

onMounted(()=>{
  getInfo()
})

provide("startLoading", startLoading);
provide("stopLoading", stopLoading);
</script>
