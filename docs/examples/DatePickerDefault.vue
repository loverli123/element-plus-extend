<template>
  <CardCode header="日期选择器">
    <div class="demo-date-picker">
      <div class="container">
        <div class="block">
          <span class="demonstration">选择日期</span>
          <lc-date-picker type="date" v-model="value1"></lc-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">选择月</span>
          <lc-date-picker type="month" v-model="value3"></lc-date-picker>
        </div>        
      </div>
      <div class="container">
        <div class="block">
          <span class="demonstration">选择周</span>
          <lc-date-picker type="week" v-model="value2"></lc-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">选择年</span>
          <lc-date-picker type="year" v-model="value4"></lc-date-picker>
        </div>
      </div>
    </div>
  </CardCode>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>

<style scoped>
.card-code{
  border-radius: 4px 4px 0px 0px !important;
  border-bottom: 0px!important;
}

.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .container {
  flex: 1;
  border-right: solid 1px var(--el-border-color);
}
.demo-date-picker .container .block {
  border-right: none;
}
.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--el-border-color);
}
.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
