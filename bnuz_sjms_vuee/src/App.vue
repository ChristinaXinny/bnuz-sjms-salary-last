<template>
  <v-app>
<!--    <v-app-bar app color="#409EFF" light>-->
<!--      <div class="d-flex align-center" style="color: #FFFFFF">-->
<!--          <el-page-header @back="goBack" content="Xinny的薪资系统"  >-->
<!--          -->
<!--          </el-page-header>-->
<!--      </div>-->
<!--      <v-spacer></v-spacer>-->
<!--&lt;!&ndash;    <div style="opacity:0.5;display: grid; grid-template-columns: 30px 30px" >&ndash;&gt;-->
<!--        -->
<!--        <v-img alt="Vuetify Logo" class="shrink mr-2" contain-->
<!--               src="https://i.loli.net/2021/06/02/xvQi6rJcheDISj7.png"-->
<!--               transition="scale-transition"-->
<!--               width="40"-->
<!--        />-->
<!--        <v-img-->
<!--            alt="Vuetify Name"-->
<!--            class="shrink mt-1 hidden-sm-and-down"-->
<!--            contain-->
<!--            min-width="100"-->
<!--            src="https://i.loli.net/2021/06/02/kmha5TdrZ2fLINP.png"-->
<!--            width="100"-->
<!--        />-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->
<!--        <v-spacer></v-spacer>-->
<!--        -->
<!--      <v-btn style="color: #FFFFFF"-->
<!--        href="https://github.com/ChristinaXinny"-->
<!--        target="_blank"-->
<!--        text-->
<!--      >-->
<!--        -->
<!--        -->
<!--        <span class="mr-2">Xinny's GitHub</span>-->
<!--        <v-icon>mdi-open-in-new</v-icon>-->
<!--      </v-btn>-->
<!--        -->
<!--      -->
<!--    </v-app-bar>-->

    
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>



<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
