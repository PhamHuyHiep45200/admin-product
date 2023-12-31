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
        <a-form-item
          label="Price"
          name="price"
          :rules="[{ required: true, message: 'Please input your Price!' }]"
        >
          <a-input-number size="large" v-model:value="formState.price" />
        </a-form-item>

        <a-form-item name="category" label="Category">
          <a-select
            v-model:value="formState.category"
            size="large"
            placeholder="Select a category"
          >
            <a-select-opt-group v-for="e in category" :key="e.value">
              <template #label>
                <span>
                  {{ e.label }}
                </span>
              </template>
              <a-select-option
                v-for="c in e.children"
                :key="c.value"
                :value="c.value"
                >{{ c.label }}</a-select-option
              >
            </a-select-opt-group>
          </a-select>
        </a-form-item>

        <a-form-item name="brand" label="Brand">
          <a-select
            v-model:value="formState.brand"
            show-search
            size="large"
            placeholder="Select a Brand"
            :options="brand"
            :filter-option="filterOption"
          ></a-select>
        </a-form-item>

        <a-form-item name="collectionId" label="Collection">
          <a-select
            v-model:value="formState.collectionId"
            show-search
            size="large"
            placeholder="Select a Collection"
            :options="collection"
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
            <input
              multiple="multiple"
              type="file"
              hidden
              id="image"
              @input="upload"
            />
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
import { uploadImage, uploadImages } from "../../request/upload.api.js";
import { getAll } from "../../request/brand";
import { getAllCategory } from "../../request/category.api";
import { getAllCollection } from "../../request/collection";
import { onMounted, ref } from "vue";
import { createProduct } from "../../request/product.api";
import { useRouter } from "vue-router";
const editor = ref(ClassicEditor);
const formState = ref({
  name: "",
  description: "",
  category: "",
  brand: "",
  collectionId: "",
  price: 0,
  images: [],
});
const loading = ref(false);
const brand = ref([]);
const category = ref([]);
const collection = ref([]);
const router = useRouter();
const onFinish = async (values) => {
  const data = {
    ...values,
    images: values.images.map((img) => ({
      src: img.url,
      id: img.uid,
    })),
  };
  try {
    await createProduct(data);
    router.push("/product");
  } catch (error) {
    console.log(error);
  }
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const upload = async (e) => {
  loading.value = true;
  const formData = new FormData();
  const files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    formData.append("images", files[i]);
  }
  formData.append("folderName", "banners");
  try {
    const { data } = await uploadImages(formData);
    formState.value = {
      ...formState.value,
      images: [
        ...formState.value.images,
        ...data.data.map((img) => ({
          uid: img.id,
          url: img.src,
          status: "success",
          name: "",
        })),
      ],
    };
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

// const upload = async (e) => {
//   loading.value = true;
//   const formData = new FormData();
//   formData.append("image", e.target.files[0]);
//   try {
//     const { data } = await uploadImage(formData);
//     const img_upload = {
//       uid: data.data.id,
//       url: data.data.src,
//       status: "success",
//       name: "",
//     };
//     formState.value = {
//       ...formState.value,
//       images: [...formState.value.images, img_upload],
//     };
//   } catch (error) {
//     console.log(error);
//   } finally {
//     loading.value = false;
//   }
// };

const getAllCategoryData = async () => {
  try {
    const { data } = await getAllCategory();
    category.value = data.data.map((e) => ({
      label: e.name,
      value: e._id,
      children: e.children.map((c) => ({
        label: c.name,
        value: c._id,
      })),
    }));
  } catch (error) {
    console.log(error);
  }
};

const getAllCollectionData = async () => {
  try {
    const { data } = await getAllCollection();
    collection.value = data.data.map((e) => ({
      label: e.name,
      value: e._id,
    }));
  } catch (error) {
    console.log(error);
  }
};

const getAllBrand = async () => {
  try {
    const { data } = await getAll();
    brand.value = data.data.map((e) => ({
      label: e.name,
      value: e._id,
    }));
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getAllBrand();
  getAllCategoryData();
  getAllCollectionData();
});
</script>
