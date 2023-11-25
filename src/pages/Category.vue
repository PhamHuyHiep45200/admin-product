<template>
    <div class="flex space-x-10">
        <div class="flex-1 border-[red] border-r-2 ">
            <h3 class="text-center">Category Parent</h3>
            <CategoryParent/>
        </div>
        <div class="flex-1">
            <h3 class="text-center">Category Childrent</h3>
            <CategoryChidrent/>
        </div>
    </div>
</template>

<script setup>
import CategoryParent from '../components/category/parent/index.vue'
import CategoryChidrent from '../components/category/childrent/index.vue'
</script>
