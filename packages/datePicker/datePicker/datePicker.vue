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
        <span v-if="isHoliday(cell) == 1" class="el-date-table-cell__text" 
        :class="{ weekend: cell.type != 'next-month' && cell.type != 'prev-month',
        notInMonth: (cell.type == 'next-month' || cell.type == 'prev-month')}">
          {{ cell.text }}
        </span>
        <span v-else class="el-date-table-cell__text"
        :class="{ work: cell.type != 'next-month' && cell.type != 'prev-month' , 
        workInMonth: (cell.type == 'next-month' || cell.type == 'prev-month')}">
          {{ cell.text }}
        </span>
      </div>
    </template>
  </el-date-picker>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { offDays, onDays} from '../../Resources';

defineOptions({
  name: 'lc-date-picker',
})

const val = ref('');

const isHoliday = ({ dayjs, column }) => {
  const offDay = offDays.includes(dayjs.format('YYYY-MM-DD'));
  if(offDay){
    return 1;
  }
  const onDay = onDays.includes(dayjs.format('YYYY-MM-DD'));
  if(onDay){
    return 0;
  }
  if(column == 5 || column == 6){
    return 1;
  }
  else{
    return 0;
  }
}

</script>

<style scoped>

.cell{
  font-family:baidunumber-Medium;
}
.cell .weekend {
  color: #eb3333;
}

.cell .notInMonth {
  color: #eb3333;
  opacity: .3;
}

.cell .work {
  color: var(--el-text-color-regular);
}

.cell .worknotInMonth {
  opacity: .3;
}

.el-date-table-cell__text {
  border-radius: .12rem !important;
}

.dark .el-date-table-cell__text:hover {
  background-color: rgba(255,255,255,.08) !important;
}

.el-date-table-cell__text:hover {
  background-color: #f5f5f5 !important;
}

.el-month-table td .cell:hover {
  background-color: red !important;
}
</style>