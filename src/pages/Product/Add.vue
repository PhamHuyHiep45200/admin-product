<template>
  <div><ckeditor :editor="editor" v-model="editorData" /></div>
</template>

<script setup>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ref } from "vue";
const editor = ref(ClassicEditor);
const editorData = ref("<p>Hello CKEditor!</p>");
</script>
