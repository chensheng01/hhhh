<template>
  <span>
    <!-- 设置图标在右 -->
    <button
      class="g-button"
      :class="{ right: loading }"
      v-if="iconPosition == 'right'"
      @click="x"
    >
      <g-icon name="loading" v-if="loading" class="loading"></g-icon>
      <slot></slot>
      <!-- <svg v-if="icon" class="icon">
        <use :xlink:href="`#i-${icon}`"></use>
      </svg> -->
      <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
    </button>
    <!--设置图标在左边或者没有  -->
    <button class="g-button" v-else @click="x" :class="[`type-${type}`]">
      <g-icon name="loading" v-if="loading" class="loading"></g-icon>
      <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
      <slot></slot>
    </button>
  </span>
</template>
<script>
import Icon from "./icon.vue";
export default {
  methods: {
    x() {
      this.$emit("click");
    },
  },
  props: {
    icon: String,
    loading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator(val) {
        return ["primary", "danger", "success"].includes(val);
      },
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(val) {
        if (val !== "left" && val !== "right") {
          return false;
        } else {
          return true;
        }
      },
    },
  },
  components: {
    "g-icon": Icon,
  },
};
// props: ["icon", "iconPosition"],
</script>
<style lang="scss" scoped>
@import "helper";
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.g-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: bottom;
  &.type-primary {
    background: blue;
    color: #fff;
  }
  &.type-danger {
    background: rgb(236, 40, 40);
    color: #fff;
  }
  &.type-success {
    background: rgb(52, 124, 52);
    color: #fff;
  }
  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    background-color: $button-active-bg;
  }

  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
    line-height: $font-size;
  }

  // 不加行高 文字没法和 icon 对齐，应该是浏览器问题吧...
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }

  &.icon-right {
    > .content {
      order: 1;
    }

    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.1em;
    }
  }

  .loading {
    animation: spin 1.5s linear infinite;
  }
}
</style>
