<template>
  <CardCode header="身份证件">
    <lc-input-idnumber v-model="val" v-model:xuanze="xuanze"></lc-input-idnumber>
  </CardCode>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  const val = ref('');
  const xuanze = ref('01');
</script>

<style>
.card-code{
  border-radius: 4px 4px 0px 0px !important;
  border-bottom: 0px!important;
}
</style>