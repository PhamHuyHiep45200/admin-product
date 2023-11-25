<template>
  <div>
    <div class="font-bold text-[18px]">QUẢN LÝ TIN TỨC</div>
    <div class="flex justify-end mt-5 mb-5">
      <a-button @click="showModal" type="primary"> Thêm tin tức </a-button>
    </div>
    <div>
      <NewsTable @open-update="openUpdate($event)" />
      <ModalNews
        :show="show"
        :title="title"
        :buttonText="buttonText"
        :mode="mode"
        :formState="formState"
        @cancel="cancel()"
        @create-news="create($event)"
        @update-news="update($event)"
      />
    </div>
  </div>
</template>

<script setup>
import NewsTable from "../components/NewsTable.vue";
import ModalNews from "../components/ModalNews.vue";
import { getAllNews, createNews } from "../request/news";
import { ref,reactive,  onBeforeMount } from "vue";
import { message } from "ant-design-vue";
const show = ref(false);
const title = ref("");
const buttonText = ref("");
const listNews = ref("");
const mode = ref("");
const formState = reactive({
  titleNews: "",
  editorNews: "<p>Hello CKEditor!</p>",
  authorNews: "QuocTV",
});

const showModal = () => {
  title.value = "Thêm tin tức";
  buttonText.value = "Thêm";
  show.value = true;
  mode.value = "create";
};
onBeforeMount(() => {
  // getAll();
});
const getAll = () => {
  listNews = getAllNews();
  console.log(listNews);
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
  title.value = "Cập nhật tin tức";
  buttonText.value = "Cập nhật";
  show.value = true;
  mode.value = "update";
  formState.editorNews = "<p>Hello CKEditor! Update</p>";
};
const success = (mes) => {
  message.success(mes);
};
const error = (mes) => {
  message.error(mes);
};
</script>
