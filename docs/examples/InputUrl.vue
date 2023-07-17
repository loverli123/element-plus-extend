<template>
  <CardCode header="URL">
    <lc-input-url v-model="val"></lc-input-url>
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