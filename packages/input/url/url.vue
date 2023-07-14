<template>
  <el-input v-model="inputValue" placeholder="请输入URL" maxlength="100" clearable
            :formatter="(value : string) => `${value}`.replace(/((http|https):\/\/)/g, '')"
            :parser="(value : string) => xuanze+value">
    <template #prepend>
      <el-select v-model="xuanze" style="width: 90px" @change="change">
        <el-option label="http://" value="http://"/>
        <el-option label="https://" value="https://" />
      </el-select>
    </template>
  </el-input>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

defineOptions({
  name: 'input-url',
})

const props = defineProps({
  modelValue: String,
  xuanze: {
    type: String,
    default: 'http://'
  },
});

const emit = defineEmits(['update:modelValue']);

// input的值
const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
});
// select的值
const xuanze = ref(props.xuanze);

// select的change事件
const change = (value : string) => {
  inputValue.value = value + inputValue.value?.replace(/((http|https):\/\/)/g, '');
};
</script>

<style>

</style>