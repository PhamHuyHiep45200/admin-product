<template>
  <a-layout class="min-h-[100vh]">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item :key="item.path" v-for="item in menu">
          <span>{{ item.name }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <div class="flex items-center justify-end px-8 relative">
          <h3 class="absolute left-[50%] translate-x-[-50%] font-bold">
            ADMIN
          </h3>
          <div class="flex items-center space-x-2 cursor-pointer">
            <a-avatar>H</a-avatar> <span>Name</span>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }"
        class="max-h-[calc(100vh-120px)] overflow-auto"
      >
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup>
import { ref, watch, watchEffect } from "vue";
import { useRouter } from "vue-router";

const selectedKeys = ref([]);
const collapsed = ref(false);
const router = useRouter();
const menu = [
  {
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    path: "/user",
    name: "User",
  },
  {
    path: "/category",
    name: "Category",
  },
  {
    path: "/product",
    name: "Product",
  },
  {
    path: "/news",
    name: "News",
  },
  {
    path: "/brand",
    name: "Brand",
  },
  {
    path: "/collection",
    name: "Collection",
  },
  {
    path: "/order",
    name: "Order",
  },
];

const setKeyManu = () => {
  menu.forEach((item) => {
    if (router.currentRoute.value.fullPath.includes(item.path)) {
      selectedKeys.value = [item.path];
      return;
    }
  });
};

watchEffect(() => {
  setKeyManu();
});

watch(
  () => selectedKeys.value,
  (value) => {
    router.push(value[0]);
  }
);
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
