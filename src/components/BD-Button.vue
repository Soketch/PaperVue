<template>
  <div class="BD-button" :class="[
    `BD-button-${size}`,
    { 'BD-button-loading': loading }
  ]">
    <span>
      <i class="el-icon-loading" v-if="loading"></i>
      <slot>BD-button</slot>
    </span>
  </div>
</template>
<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: "medium",
    validator(value) {
      return ["small", "medium", "large"].includes(value);
    }
  },
  loading: {
    type: Boolean
  }
})

const { size, loading } = toRefs(props)
</script>
<style lang="less" scoped>
.BD-button {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: @main-color;
  color: #fff;
  overflow: hidden;
  border-radius: 23px;
  position: relative;
  cursor: pointer;

  .el-icon-loading {
    margin-right: 5px;
  }

  &-loading {
    pointer-events: none;
  }

  &:hover :after,
  &-loading:after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  &-small {
    height: 26px;
  }

  &-large {
    height: 50px;
  }
}
</style>
