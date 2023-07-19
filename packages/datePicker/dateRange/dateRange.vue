<template>
  <el-date-picker
    v-model="val"
    type="daterange"
    placeholder="请选择日期"
    start-placeholder="请选择开始时间"
    end-placeholder="请选择结束时间"
    value-format="YYYY-MM-DD HH:mm:ss"
    :shortcuts="shortcuts"
    :default-time="defaultTime"
    >
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
import { dayjs } from 'element-plus';
import { ref } from 'vue';
import { offDays, onDays} from '../../Resources';

defineOptions({
  name: 'lc-date-range',
})

const val = ref('');

const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])

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

const shortcuts = [
  {
    text: '今天',
    value: () => {
      const now = new Date()
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)
      const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
      return [start, end]
    },
  },
  {
    text: '昨天',
    value: () => {
      const now = new Date()
      now.setTime(now.getTime() - 3600 * 1000 * 24)
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)
      const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
      return [start, end]
    },
  },
  {
    text: '近一周',
    value: () => {
      const now = new Date()
      const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
      now.setTime(now.getTime() - 3600 * 1000 * 24 * 7)
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)
      return [start, end]
    },
  },
  {
    text: '近30天',
    value: () => {
      const now = new Date()
      const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59)
      now.setTime(now.getTime() - 3600 * 1000 * 24 * 30)
      const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0)
      return [start, end]
    },
  },
  {
    text: '当月',
    value: () => {
      const now = new Date()
      const start = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0)
      const dayofMonth = dayjs(now.toLocaleDateString()).daysInMonth()
      const end = new Date(now.getFullYear(), now.getMonth(), dayofMonth, 23, 59, 59)
      return [start, end]
    },
  },
  {
    text: '上月',
    value: () => {
      const now = new Date()
      const firstDay = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0)
      now.setTime(firstDay.getTime() - 3600 * 1000 * 24 * 30)
      const start = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0)
      const dayofMonth = dayjs(now.toLocaleDateString()).daysInMonth()
      const end = new Date(now.getFullYear(), now.getMonth(), dayofMonth, 23, 59, 59)
      return [start, end]
    },
  },
]
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
</style>