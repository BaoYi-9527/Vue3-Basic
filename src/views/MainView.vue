<script setup>

import PostComponent from "@/components/Post/PostComponent.vue";
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
          <el-card style="max-width: 480px; margin-left: 10px; min-height: 700px">
            <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
          </el-card>
        </el-col>
      </el-row>

    </el-col>
  </el-row>
</template>

<style scoped>

</style>