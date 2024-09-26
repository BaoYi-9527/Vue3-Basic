<script setup>

import PostComponent from "@/components/Post/PostComponent.vue";
import {getPostList} from "@/api/post.js";
import {ref} from "vue";
// import {login} from "@/api/common.js";
// login()

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


let postItems = ref([]);

(async () => {
  const response = await getPostList()
  postItems.value = response.data.data.data
})()



// const postList = getPostList()
// console.log(postList)

// const postItems = [
//   {
//     "id": 1,
//     "title": "",
//     "city": {
//       "id": 1,
//       "name": "深圳"
//     },
//     "content": "+ 工作时间 955，年假15天 + 8天 FreeDay\n" +
//         "+ 女性员工享有22周全薪产假，男性员工享有12周全薪陪产假\n" +
//         "+ 五险一金、补充商业保险、年度体检、员工关爱计划、ESPP 员工购股计划、斯坦福医学健康计划、上午旅行保险等\n" +
//         "+ 继续教育学费报销、支持攻读在读学位",
//     "desc": "",
//     "company": {
//       "name": "英伟达 NVIDA",
//       "icon": "nvida_icon.png"
//     },
//     "views": 789,
//     "likes": 121,
//     "comments": 45,
//     "update_time": "刚刚"
//   },
//   {
//     "id": 2,
//     "title": "",
//     "city": {
//       "id": 1,
//       "name": "广州"
//     },
//     "content": "+ 头部音乐公司，发展前景好\n" +
//         "+ 福利待遇超一线水平，12*14,16~20W\n" +
//         "+ 班车接送、餐补房补、24小时健身房、免费早餐+下午茶、年度健康心理体验，不定期举办明星音乐会，其他公司专属产品套餐",
//     "desc": "",
//     "company": {
//       "name": "腾讯音乐",
//       "icon": "tencent_music.png"
//     },
//     "views": 66,
//     "likes": 111,
//     "comments": 35,
//     "update_time": "10分钟前"
//   },
//   {
//     "id": 3,
//     "title": "",
//     "city": {
//       "id": 1,
//       "name": "深圳"
//     },
//     "content": "+ 世界五百强老牌企业\n" +
//         "+ 弹性工作制、可远程办公、WLB、很少加班\n" +
//         "+ 女性友好企业，有女性、IWD领导力论坛等一系列活动，让女性员工学习和成长" +
//         "+ 15天入职年假+30天病假，女性员工还可享受28天超长产假和10天育儿假",
//     "desc": "",
//     "company": {
//       "name": "高通 Qualcomm",
//       "icon": "qualcomm.png"
//     },
//     "views": 66,
//     "likes": 111,
//     "comments": 35,
//     "update_time": "2024-08-30"
//   }
// ]

const companyItems = [
  {
    "id": 1,
    "name": "英伟达 NVIDA",
    "icon": "nvida_icon.png",
    "desc": "人工智能计算领域的领导者",
    "hot": 99
  },
  {
    "id": 2,
    "name": "腾讯音乐",
    "icon": "tencent_music.png",
    "desc": "中国在线音乐娱乐服务领航者，拥有中国广受喜爱和独具匠心的音乐平台",
    "hot": 88
  },
  {
    "id": 3,
    "name": "高通 Qualcomm",
    "icon": "qualcomm.png",
    "desc": "全球首个基于芯片的移动通信领域领导者",
    "hot": 77
  }
]

// console.log(postItems)

function getImageSrc(imgPath) {
  // return require(`@/assets/img/post/${imgPath}`)
  // Vite 不支持 require 的方式
  // 参考 https://vitejs.cn/guide/assets.html#the-public-directory
  return new URL('/img/company/' + imgPath, import.meta.url).href
}

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
            <el-text size="small">城市榜</el-text>
            <el-divider style="margin: 10px 0" />
            <el-tag  v-for="item in badgeItems" :key="item.id" type="primary" style="margin: 5px; min-width: 60px">{{ item.name + ' ' + item.count}}</el-tag>
<!--            <el-badge v-for="item in badgeItems" :key="item.id" :value="item.count" class="item" type="primary">-->
<!--              <el-button size="small">{{ item.name }}</el-button>-->
<!--            </el-badge>-->
          </el-card>
          <br>
          <el-card style="max-width: 480px; margin-left: 10px; min-height: 300px">
            <el-text size="small">公司热度榜</el-text>
            <el-divider style="margin: 10px 0" />
            <el-row v-for="company in companyItems" :key="company.id" style="display: flex; align-items: center; height: 100%; min-height: 40px; margin: 5px 0">
              <el-col :span="2">
                <el-avatar :size="'small'" :src="getImageSrc(company.icon)" alt="company logo" style="border: darkgray 1px solid"/>
              </el-col>
              <el-col :span="18" style="padding: 0 5px">
                <el-col :span="24"><el-text size="small" :title="company.name" class="single-line" style="max-width: 100%; display: block">{{ company.name }}</el-text></el-col>
                <el-col :span="24"><el-text size="small" :title="company.desc" class="single-line" style="max-width: 100%; display: block">{{ company.desc }}</el-text></el-col>
              </el-col>
              <el-col :span="4">
                <el-button size="small">关注</el-button>
<!--                <el-text size="small" type="primary">{{ company.hot }}</el-text>-->
              </el-col>
            </el-row>
          </el-card>
          <br>
          <el-card style="max-width: 480px; margin-left: 10px; min-height: 300px">
            <el-text size="small">用户活跃榜</el-text>
            <el-divider style="margin: 10px 0" />
            <el-row v-for="company in companyItems" :key="company.id" style="display: flex; align-items: center; height: 100%; min-height: 40px; margin: 5px 0">
              <el-col :span="2">
                <el-avatar :size="'small'" :src="getImageSrc(company.icon)" alt="company logo" style="border: darkgray 1px solid"/>
              </el-col>
              <el-col :span="18" style="padding: 0 5px">
                <el-col :span="24"><el-text size="small" :title="company.name" class="single-line" style="max-width: 100%; display: block">{{ company.name }}</el-text></el-col>
                <el-col :span="24"><el-text size="small" :title="company.desc" class="single-line" style="max-width: 100%; display: block">{{ company.desc }}</el-text></el-col>
              </el-col>
              <el-col :span="4">
                <el-button size="small">关注</el-button>
                <!--                <el-text size="small" type="primary">{{ company.hot }}</el-text>-->
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>

<style scoped>
.single-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>