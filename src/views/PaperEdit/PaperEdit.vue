<template>
  <div class="container">
    <SideBar></SideBar>
    <div class="box">
      <PageHeader />
      <MarkDownEditor />
    </div>
  </div>
</template>

<script setup>
import MarkDownEditor from "../../components/PaperEdit/MarkDownEditor.vue";
import SideBar from "../../components/PaperEdit/SideBar.vue";
import PageHeader from "../../components/PaperEdit/PageHeader.vue";
</script>

<style scoped lang="scss">
.container {
  display: flex;
}

.box {
  flex: 1;
  padding: 10px 20px;
  margin-left: 200px;
  transition: margin-left 0.3s;
  /* 添加过渡效果 */
}

@media screen and (min-width: 600px) {
  .box {
    padding: 20px 40px;
  }
}
</style>
