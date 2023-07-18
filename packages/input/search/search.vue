<template>
  <el-input placeholder="请输入" maxlength="50" clearable>
    <template #prefix>
      <el-icon><Search /></el-icon>
    </template>
  </el-input>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'lc-input-search',
})

import { Search } from '@element-plus/icons-vue'
</script>

<style>

</style>