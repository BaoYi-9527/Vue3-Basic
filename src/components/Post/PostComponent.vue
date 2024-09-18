<script setup>
  import logo from '@/assets/img/common/head.jpg'
</script>

<template>
  <el-card>
    <template #header>
      <div class="card-header" style="display: flex; align-items: center; height: 100%;">
        <el-avatar  :size="'small'" :src="logo" alt="erp logo"/>
        <span style="margin-left: 10px">宋·陈翥《桐谱》</span>
      </div>
    </template>
    <div>凤凰非梧桐而不栖。且众木森森，胡有不可栖者，岂独梧桐乎?答日：夫凤凰仁瑞之禽也，不止强恶之木，梧桐，叶软之木也，皮理细腻而脆，枝干扶疏而软，故凤凰非梧而不栖也。</div>
    <template #footer>阅读原文 -- 百度百科</template>
  </el-card>
</template>

<style scoped>

</style>