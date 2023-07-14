<template>
  <el-input class="c-input-idnumber" placeholder="请输入证件号码" :maxlength="inputlength" clearable>
    <template #prepend>
      <el-select v-model="xuanze" style="width: 100px;" @change="selchang">
        <el-option label="身份证" value="01" />
        <el-option label="户口簿" value="02" />
        <el-option label="护照" value="03" />
        <el-option label="军官证" value="04" />
        <el-option label="驾驶证" value="05" />
        <el-option label="港澳通行证" value="06" />
        <el-option label="台湾通行证" value="07" />
        <el-option label="其他" value="99" />
      </el-select>
    </template>
  </el-input>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

defineOptions({
  name: 'input-idnumber',
})

const props = defineProps({
  xuanze: {
    type: String,
    default: '01'
  },
  inputlength:{
    type: String,
    default: '18'
  }
});

const emit = defineEmits(['update:xuanze'])

const xuanze = computed({
  get() {
    return props.xuanze
  },
  set(value) {
    emit('update:xuanze', value)
  }
})

const inputlength = ref(props.inputlength);

const selchang = (value : string) =>{
  if(value === '01'){
    inputlength.value = '18';
  }
  else if(value === '02' || value === '03'){
    inputlength.value = '9';
  }
  else if(value === '04'){
    inputlength.value = '10';
  }
  else if(value === '05'){
    inputlength.value = '12';
  }
  else if(value === '06'){
    inputlength.value = '11';
  }
  else if(value === '07'){
    inputlength.value = '09';
  }
  else{
    inputlength.value = '50';
  }
}
</script>

<style>
.c-input-idnumber > .el-input__wrapper {
  .el-input__inner {
    font-size: 20px;
    letter-spacing: 15px;
  }
}


</style>