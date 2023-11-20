<template>
  <a-layout>
    <a-layout-header class="header">
      <div class="logo" />
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <div v-for="key in [1,2]" :key="key">
          {{ key }}
        </div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            height: 'calc(100vh - 94px)',
          }"
        >
          <slot />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import {ref} from 'vue'

const items = ref([
  {
    key: '1',
    icon: '() => h(MailOutlined)',
    label: 'Navigation One',
    title: 'Navigation One',
  },
  {
    key: '2',
    icon: '() => h(CalendarOutlined)',
    label: 'Navigation Two',
    title: 'Navigation Two',
  }])
</script>
<style scoped>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>
