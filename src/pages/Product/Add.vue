<template>
  <div class="flex justify-center">
    <div class="max-w-[700px]">
      <a-form
        :model="formState"
        name="basic"
        hideRequiredMark
        layout="vertical"
        autocomplete="off"
        @finish="onFinish"
      >
        <a-form-item
          label="Name"
          name="name"
          :rules="[{ required: true, message: 'Please input your Name!' }]"
        >
          <a-input size="large" v-model:value="formState.name" />
        </a-form-item>

        <a-form-item name="category" label="Category">
          <a-select
            v-model:value="formState.category"
            show-search
            size="large"
            placeholder="Select a person"
            :options="options"
            :filter-option="filterOption"
          ></a-select>
        </a-form-item>

        <a-form-item name="brand" label="Brand">
          <a-select
            v-model:value="formState.brand"
            show-search
            size="large"
            placeholder="Select a person"
            :options="options"
            :filter-option="filterOption"
          ></a-select>
        </a-form-item>

        <a-form-item name="collectionId" label="Collection">
          <a-select
            v-model:value="formState.collectionId"
            show-search
            size="large"
            placeholder="Select a person"
            :options="options"
            :filter-option="filterOption"
          ></a-select>
        </a-form-item>

        <a-form-item name="images">
          <div class="flex space-x-2">
            <label for="image" v-if="formState.images.length < 5">
              <div
                class="w-[100px] h-[100px] rounded-[6px] border-dashed border-2 border-[#999] flex items-center justify-center"
              >
                <loading-outlined v-if="loading"></loading-outlined>
                <plus-outlined v-else></plus-outlined>
              </div>
            </label>
            <input type="file" hidden id="image" @input="upload" />
            <a-upload
              v-model:file-list="formState.images"
              list-type="picture-card"
              class="avatar-uploader"
              :maxCount="5"
            >
            </a-upload>
          </div>
        </a-form-item>

        <a-form-item label="Description" name="description">
          <ckeditor :editor="editor" v-model="formState.description" />
        </a-form-item>

        <a-form-item>
          <a-button type="primary" html-type="submit">Add Product</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons-vue";
import { uploadImage } from "../../request/upload.api.js";
import { ref } from "vue";
const editor = ref(ClassicEditor);
const formState = ref({
  name: "",
  description: "<p>Hello CKEditor!</p>",
  category: "",
  brand: "",
  collectionId: "",
  price: 0,
  images: [],
});
const loading = ref(false);
const options = ref([]);
const onFinish = (values) => {
  console.log("Success:", values);
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const upload = async (e) => {
  loading.value = true;
  const formData = new FormData();
  formData.append("image", e.target.files[0]);
  try {
    const { data } = await uploadImage(formData);
    const img_upload = {
      uid: data.data.id,
      url: data.data.src,
      status: "success",
      name: "",
    };
    formState.value = {
      ...formState.value,
      images: [...formState.value.images, img_upload],
    };
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>
