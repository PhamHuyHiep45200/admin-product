<template>
  <div>
    <div class="text-right mb-5">
      <a-button type="primary" @click="showModal">Add</a-button>
    </div>
    <a-table :dataSource="dataSource" :columns="columns" />
    <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const open = ref(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
</script>
