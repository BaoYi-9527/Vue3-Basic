<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import HeadView from "@/views/HeadView.vue";
import MainView from "@/views/MainView.vue";
import FooterView from "@/views/FooterView.vue";
</script>

<template>

  <div class="common-layout">
    <el-container>
      <el-header>
        <HeadView />
      </el-header>
      <el-main>
        <MainView/>
      </el-main>
      <el-footer>
        <FooterView/>
      </el-footer>
    </el-container>
  </div>

<!--  <header>-->
<!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

<!--    <div class="wrapper">-->
<!--      <HelloWorld msg="You did it!" />-->

<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->

<!--  <RouterView />-->
</template>

