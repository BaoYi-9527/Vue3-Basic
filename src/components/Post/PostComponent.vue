<script setup>
// import logo from '@/assets/img/common/head.jpg'
import nvidaIcon from '@/assets/img/company/nvida_icon.png'
import {Comment, Histogram, LocationFilled, More, Share, Star} from "@element-plus/icons-vue";
import {MdPreview} from "md-editor-v3";

const props = defineProps(['postItem'])
const postItem = props.postItem
console.log(postItem)
const id = "preview-only"
</script>

<template>
  <el-card>
    <template #header>
      <div class="card-header" style="display: flex; align-items: center; height: 100%;">
        <el-avatar :size="'small'" :src="nvidaIcon" alt="erp logo"/>
        <el-text size="small" style="margin-left: 10px">{{ postItem.company.name }}</el-text>
        <el-button text size="small">
          <el-icon>
            <LocationFilled/>
          </el-icon>
          <span> {{ postItem.city.name }} </span>
        </el-button>
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