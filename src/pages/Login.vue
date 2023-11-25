<template>
  <div class="flex justify-center items-center h-[100vh]">
    <div class="w-[400px]">
      <a-form
        :model="formState"
        name="basic"
        hideRequiredMark
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="username"
        >
          <a-input v-model:value="formState.username" size="large" />
        </a-form-item>

        <a-form-item
          name="password"
        >
          <a-input-password v-model:value="formState.password" size="large" />
        </a-form-item>

        <a-button block size="large" type="primary" html-type="submit"
          >Submit</a-button
        >
      </a-form>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { signIn } from "../request/auh.api";

const router = useRouter()
const formState = reactive({
  username: "",
  password: "",
});
const onFinish = async (values) => {
   try {
    const {data} = await signIn(values)
    localStorage.setItem('token', data.refreshToken)
    router.push('/')
   } catch (error) {
      if(error.response.status === 400) {
        console.log(error.response.data)
      }
   }
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>
