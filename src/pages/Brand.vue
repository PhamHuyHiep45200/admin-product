<template>
  <div>
    <div class="font-bold text-[18px]">QUẢN LÝ THƯƠNG HIỆU</div>
    <div class="flex justify-end mt-5 mb-5">
      <a-button @click="showModal" type="primary"> Thêm thương hiệu </a-button>
    </div>
    <div>
      <BrandTable :data="listData" @open-update="openUpdate($event)" />
      <BrandModal
        :show="show"
        :title="title"
        :buttonText="buttonText"
        :mode="mode"
        :formState="formState"
        @cancel="cancel()"
        @create-record="create($event)"
        @update-record="update($event)"
      />
    </div>
  </div>
</template>

<script setup>
import BrandTable from "../components/BrandTable.vue";
import BrandModal from "../components/BrandModal.vue";
import { ref, reactive, onBeforeMount } from "vue";
import { message } from "ant-design-vue";
const show = ref(false);
const title = ref("");
const buttonText = ref("");
const listData = ref([]);
const mode = ref("");
const formState = reactive({
  name: "Gucci",
  position: 1,
});

const showModal = () => {
  title.value = "Thêm thương hiệu";
  buttonText.value = "Thêm";
  show.value = true;
  mode.value = "create";
};
onBeforeMount(() => {
  // getAll();
});
const getAll = () => {
  console.log(listData);
};
const create = (data) => {
  console.log(data);
};
const update = (data) => {
  console.log(data);
};
const cancel = () => {
  show.value = false;
};
const openUpdate = (id) => {
  title.value = "Cập nhật thương hiệu";
  buttonText.value = "Cập nhật";
  show.value = true;
  mode.value = "update";
  formState.name = "Dior";
};
const success = (mes) => {
  message.success(mes);
};
const error = (mes) => {
  message.error(mes);
};
</script>
