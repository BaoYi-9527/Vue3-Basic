<script setup>

import PostComponent from "@/components/Post/PostComponent.vue";

const badgeItems = [
  {"id": 1, "name": '北京', "count": 167},
  {"id": 2, "name": '上海', "count": 89},
  {"id": 3, "name": '深圳', "count": 85},
  {"id": 4, "name": '广州', "count": 78},
  {"id": 5, "name": '武汉', "count": 66},
  {"id": 6, "name": '长沙', "count": 64},
  {"id": 7, "name": '郑州', "count": 55},
  {"id": 8, "name": '成都', "count": 53},
  {"id": 9, "name": '合肥', "count": 48},
  {"id": 10, "name": '杭州', "count": 46},
  {"id": 11, "name": '南京', "count": 44},
  {"id": 12, "name": '苏州', "count": 42},
  {"id": 13, "name": '重庆', "count": 41},
]

</script>

<template>
  <el-row class="row-bg" justify="center" style="min-height: 750px">
    <el-col :span="16"><div class="grid-content ep-bg-purple" />
      <el-row>
        <el-col :span="18">
          <PostComponent/>
          <br>
          <PostComponent/>
          <br>
          <PostComponent/>
          <br>
          <PostComponent/>
          <br>
          <PostComponent/>
          <br>
        </el-col>
        <el-col :span="6">
          <el-card style="max-width: 480px; margin-left: 10px; min-height: 100px">
            <el-badge v-for="item in badgeItems" :key="item.id" :value="item.count" class="item" type="primary">
              <el-button>{{ item.name }}</el-button>
            </el-badge>
          </el-card>
          <br>
          <el-card style="max-width: 480px; margin-left: 10px; min-height: 300px">
            <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
          </el-card>
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 30px;
}
</style>