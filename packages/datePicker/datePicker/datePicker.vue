<template>
  <el-date-picker
    v-model="val"
    type="date"
    placeholder="请选择日期"
    start-placeholder="请选择开始时间"
    end-placeholder="请选择结束时间"
    value-format="YYYY-MM-DD HH:mm:ss">
    <template #default="cell">
        <div class="cell el-date-table-cell" :class="{ current: cell.isCurrent }">
          <span class="el-date-table-cell__text" :class="{ weekend: cell.type != 'next-month' && cell.type != 'prev-month' && (cell.column == 5 || cell.column == 6) , 
            notInMonth: (cell.column == 5 || cell.column == 6) && (cell.type == 'next-month' || cell.type == 'prev-month')}">
            {{ cell.text }}
          </span>
        </div>
      </template>
    </el-date-picker>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

defineOptions({
  name: 'lc-date-picker',
})

const val = ref('');

</script>

<style scoped>

.cell .weekend {
  color: #eb3333;
}

.cell .notInMonth {
  color: #8e1e1e;
}
</style>