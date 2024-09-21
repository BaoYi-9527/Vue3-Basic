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

const postItems = [
  {
    "id": 1,
    "title": "",
    "city": {
      "id": 1,
      "name": "深圳"
    },
    "content": "+ 工作时间 955，年假15天 + 8天 FreeDay\n" +
        "+ 女性员工享有22周全薪产假，男性员工享有12周全薪陪产假\n" +
        "+ 五险一金、补充商业保险、年度体检、员工关爱计划、ESPP 员工购股计划、斯坦福医学健康计划、上午旅行保险等\n" +
        "+ 继续教育学费报销、支持攻读在读学位",
    "desc": "",
    "company": {
      "name": "英伟达 NVIDA",
      "icon": ""
    },
    "views": 789,
    "likes": 121,
    "comments": 45
  },
  {
    "id": 2,
    "title": "",
    "city": {
      "id": 1,
      "name": "广州"
    },
    "content": "+ 头部音乐公司，发展前景好\n" +
        "+ 福利待遇超一线水平，12*14,16~20W\n" +
        "+ 班车接送、餐补房补、24小时健身房、免费早餐+下午茶、年度健康心理体验，不定期举办明星音乐会，其他公司专属产品套餐",
    "desc": "",
    "company": {
      "name": "腾讯音乐",
      "icon": ""
    },
    "views": 66,
    "likes": 111,
    "comments": 35
  }
]

</script>

<template>
  <el-row class="row-bg" justify="center" style="min-height: 750px">
    <el-col :span="16"><div class="grid-content ep-bg-purple" />
      <el-row>
        <el-col :span="18">
          <div v-for="postItem in postItems" :key="postItem.id">
            <PostComponent :post-item="postItem" />
            <br>
          </div>
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