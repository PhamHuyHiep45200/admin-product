<template>
  <div>
    <a-tag
      v-if="type === 'parent'"
      color="purple"
      class="px-5 py-2 text-[16px] font-semibold"
      @click="openUpdate(info, 'parent')"
      >{{info.name}}</a-tag
    >
    <a-tag
      v-else
      :bordered="false"
      color="blue"
      class="px-4 py-1 text-[14px]"
      @click="openUpdate(info, 'children')"
      >{{info.name}}</a-tag
    >
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "parent",
  },
  info: {
    type: String
  },
  openUpdate: {
    type: Function
  }
});
</script>
