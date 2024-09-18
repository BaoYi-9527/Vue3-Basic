<template>
  <el-row class="row-bg">
    <el-col :span="4">
      <div class="grid-content ep-bg-purple-dark">
        <el-avatar :size="50" :src="logo" alt="erp logo"/>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="grid-content ep-bg-purple">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
        >
          <el-menu-item index="1">订单</el-menu-item>
          <el-menu-item index="2">发货</el-menu-item>
          <el-menu-item index="3">产品</el-menu-item>
          <el-menu-item index="4">客户</el-menu-item>
          <el-menu-item index="4">报表</el-menu-item>
          <el-menu-item index="4">物流</el-menu-item>
          <el-menu-item index="4">营销</el-menu-item>
          <el-menu-item index="4">客服</el-menu-item>
          <el-menu-item index="4">财务</el-menu-item>
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