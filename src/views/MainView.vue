<script setup>

import PostComponent from "@/components/Post/PostComponent.vue";
import {getPostList} from "@/api/post.js";
import {getCityStatistics} from "@/api/city.js";
import {ref} from "vue";
import {getCompanyHotRank} from "@/api/company.js";
// import {login} from "@/api/common.js";
// login()

let postItems = ref([]);
let cityItems = ref([]);
let companyItems = ref([]);

(async () => {
  // post list
  const postResponse = await getPostList()
  postItems.value = postResponse.data.data.data
  // 城市榜
  const cityResponse = await getCityStatistics()
  cityItems.value = cityResponse.data.data
  // company hot rank
  const companyResponse = await getCompanyHotRank()
  companyItems.value = companyResponse.data.data
})()

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
            <el-tag  v-for="item in cityItems" :key="item.id" type="primary" style="margin: 5px; min-width: 60px">{{ item.city.name + ' ' + item.post_count}}</el-tag>
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
                <el-avatar :size="'small'" :src="getImageSrc(company.company.logo_url)" alt="company logo" style="border: darkgray 1px solid"/>
              </el-col>
              <el-col :span="18" style="padding: 0 5px">
                <el-col :span="24"><el-text size="small" :title="company.name" class="single-line" style="max-width: 100%; display: block">{{ company.company.name }}</el-text></el-col>
                <el-col :span="24"><el-text size="small" :title="company.desc" class="single-line" style="max-width: 100%; display: block">{{ company.company.desc }}</el-text></el-col>
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
                <el-avatar :size="'small'" :src="getImageSrc(company.company.logo_url)" alt="company logo" style="border: darkgray 1px solid"/>
              </el-col>
              <el-col :span="18" style="padding: 0 5px">
                <el-col :span="24"><el-text size="small" :title="company.name" class="single-line" style="max-width: 100%; display: block">{{ company.company.name }}</el-text></el-col>
                <el-col :span="24"><el-text size="small" :title="company.desc" class="single-line" style="max-width: 100%; display: block">{{ company.company.desc }}</el-text></el-col>
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