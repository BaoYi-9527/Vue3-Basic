<script setup>

import PostComponent from "@/components/Post/PostComponent.vue";
</script>

<template>
  <el-row class="row-bg" justify="center" style="min-height: 750px">
    <el-col :span="16"><div class="grid-content ep-bg-purple" />
      <el-row>
        <el-col :span="18">
          <PostComponent/>
        </el-col>
        <el-col :span="6">
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>

<style scoped>

</style>