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
          <span class="el-date-table-cell__text" :class="{ weekend: cell.type != 'next-month' && cell.type != 'prev-month' && (cell.column == 5 || cell.column == 6) , 
            notInMonth: (cell.column == 5 || cell.column == 6) && (cell.type == 'next-month' || cell.type == 'prev-month')}">
            {{ cell.text }}
          </span>
        </div>
      </template>
    </el-date-picker>
</template>

<script lang="ts" setup>
import { dayjs } from 'element-plus';
import { ref } from 'vue';

defineOptions({
  name: 'lc-date-range',
})

const val = ref('');

const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])

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

.cell .weekend {
  color: #eb3333;
}

.cell .notInMonth {
  color: #8e1e1e;
}
</style>