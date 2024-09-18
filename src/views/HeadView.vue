<template>
  <el-row class="row-bg">
    <el-col :span="4">
      <div class="grid-content" style="display: flex; align-items: center; height: 100%;">
        <el-avatar  :size="'small'" :src="logo" alt="erp logo"/>
        <el-text style="margin-left: 15px" class="mx-1" type="primary">“凤凰非梧桐不栖”</el-text>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="grid-content">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
        >
          <el-menu-item index="1">Post</el-menu-item>
          <el-menu-item index="2">Company</el-menu-item>
          <el-menu-item index="3">Q&A</el-menu-item>
        </el-menu>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content ep-bg-purple-dark">11</div>
    </el-col>
  </el-row>

</template>

<script lang="ts" setup>
import {ref} from 'vue'
import logo from '../assets/img/common/head.jpg'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>

</style>