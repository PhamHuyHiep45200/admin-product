<template>
  <a-table :columns="columns" :data-source="data">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'name'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'tags'">
        <span>
          <a-tag
            v-for="tag in record.tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          <a-button type="warning" :color="red" @click="update(1)"
            >Cập nhật</a-button
          >
          <a-button type="danger" @click="showDeleteConfirm(1)">Xóa</a-button>
        </span>
      </template>
    </template>
  </a-table>
</template>
<script setup>
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
import { Modal } from 'ant-design-vue';
const emit = defineEmits(["open-update"]);
const columns = [
  {
    title: "Tiêu đề",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Nội dung",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Người đăng",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Ngày tạo",
    key: "create_at",
    title: "Ngày tạo",
  },
  {
    title: "Thao tác",
    key: "action",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const update = (id) => {
  emit("open-update", id);
};
const showDeleteConfirm = (id) => {
  Modal.confirm({
    title: "Bạn chắc chắn muốn xóa tin tức này?",
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
