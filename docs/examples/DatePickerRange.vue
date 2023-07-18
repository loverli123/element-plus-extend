<template>
  <CardCode header="日期范围选择器">
    <lc-date-range v-model="val"></lc-date-range>
    <lc-input v-model="val" style="margin-top: 20px;"></lc-input>
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