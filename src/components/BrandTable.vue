<template>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <span>
          <a-button class="bg-orange-500" @click="update(record.id)"
            >Cập nhật</a-button
          >
          <a-button class="bg-red-500" @click="showDeleteConfirm(1)"
            >Xóa</a-button
          >
        </span>
      </template>
    </template>
  </a-table>
</template>
<script setup>
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { createVNode } from "vue";
import { Modal } from "ant-design-vue";
const emit = defineEmits(["open-update"]);
const props = defineProps({
  data: [Array, Object],
});

const columns = [
  {
    title: "STT",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Position",
    key: "position",
    dataIndex: "position",
  },
  {
    title: "Thao tác",
    key: "action",
  },
];
const data = [
  {
    id: "1",
    name: "John Brown",
    position: 32,
  },
  {
    id: "2",
    name: "John Brown",
    position: 32,
  },
  {
    id: "3",
    name: "John Brown",
    position: 32,
  },
  {
    id: "4",
    name: "John Brown",
    position: 32,
  },
  {
    id: "5",
    name: "John Brown",
    position: 32,
  },
];
const update = (id) => {
  emit("open-update", id);
};
const showDeleteConfirm = (id) => {
  Modal.confirm({
    title: "Bạn chắc chắn muốn xóa?",
    icon: createVNode(ExclamationCircleOutlined),
    okText: "OK",
    okType: "danger",
    cancelText: "Hủy",
    onOk() {
      console.log("OK" + id);
    },
    onCancel() {},
  });
};
</script>
