<template>
  <CardCode header="搜索框">
    <lc-input-search v-model="val"></lc-input-search>
  </CardCode>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const val = ref('');
</script>

<style>
.card-code{
  border-radius: 4px 4px 0px 0px !important;
  border-bottom: 0px!important;
}
</style>