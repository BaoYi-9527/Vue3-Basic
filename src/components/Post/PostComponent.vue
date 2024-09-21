<script setup>
import {Comment, Histogram, LocationFilled, More, Share, Star} from "@element-plus/icons-vue";
import {MdPreview} from "md-editor-v3";

const props = defineProps(['postItem'])
const postItem = props.postItem
const id = "preview-only"



function getImageSrc(imgPath) {
  // return require(`@/assets/img/post/${imgPath}`)
  // Vite 不支持 require 的方式
  // 参考 https://vitejs.cn/guide/assets.html#the-public-directory
  return new URL('/img/company/' + imgPath, import.meta.url).href
}


</script>

<template>
  <el-card>
    <template #header>
      <div class="card-header" style="display: flex; align-items: center; height: 100%;">
        <el-avatar :size="'small'" :src="getImageSrc(postItem.company.icon)" alt="company logo"/>
        <el-text size="small" style="margin-left: 10px; margin-right: 10px">{{ postItem.company.name }}</el-text>
        <el-text size="small" style="margin-right: 10px">
          <el-icon>
            <LocationFilled/>
          </el-icon>
          <span> {{ postItem.city.name }} </span>
        </el-text>
        <el-text size="small">
          {{ postItem.update_time + '发布' }}
        </el-text>
      </div>
    </template>
    <MdPreview :editor-id="id" :model-value="postItem.content" preview-theme="vuepress"/>
    <template #footer>
      <el-row justify="space-between">
        <el-col :span="8">
          <el-button round size="small">
            <el-icon>
              <Histogram/>
            </el-icon>
            <span> {{ postItem.views }} </span>
          </el-button>
          <el-button round size="small">
            <el-icon>
              <Star/>
            </el-icon>
            <span> {{ postItem.likes }} </span>
          </el-button>
          <el-button round size="small">
            <el-icon>
              <Comment/>
            </el-icon>
            <span> {{ postItem.comments }} </span>
          </el-button>
        </el-col>
        <el-col :span="4" style="display: flex; justify-content: flex-end;">
          <el-button round size="small">
            <el-icon>
              <Share/>
            </el-icon>
            <span> 分享 </span>
          </el-button>
          <el-button round size="small">
            <el-icon>
              <More/>
            </el-icon>
            <span> 更多 </span>
          </el-button>
        </el-col>
      </el-row>
    </template>
  </el-card>
</template>

<style scoped>

</style>