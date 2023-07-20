<template>
  <el-input class="lc-input-idnumber" placeholder="请输入证件号码" :maxlength="changDu" clearable>
    <template v-if="showXuanZe" #prepend>
      <el-select v-model="xuanZe" style="width: 100px;" @change="selchang">
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
  name: 'lc-input-idnumber',
})

const props = defineProps({
  xuanZe: {
    type: String,
    default: '01'
  },
  changDu:{
    type: String,
    default: '18'
  },
  showXuanZe:{
    type: Boolean,
    default: true
  },
});

const emit = defineEmits(['update:xuanZe'])

const xuanZe = computed({
  get() {
    return props.xuanZe
  },
  set(value) {
    emit('update:xuanZe', value)
  }
})

const changDu = ref(props.changDu);

const selchang = (value : string) =>{
  if(value === '01'){
    changDu.value = '18';
  }
  else if(value === '02' || value === '03'){
    changDu.value = '9';
  }
  else if(value === '04'){
    changDu.value = '10';
  }
  else if(value === '05'){
    changDu.value = '12';
  }
  else if(value === '06'){
    changDu.value = '11';
  }
  else if(value === '07'){
    changDu.value = '09';
  }
  else{
    changDu.value = '50';
  }
}
</script>

<style>
.lc-input-idnumber > .el-input__wrapper > .el-input__inner {
  font-size: 20px;
  letter-spacing: 15px;
}
</style>