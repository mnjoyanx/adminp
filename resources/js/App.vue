<template>
  <div class="header">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import AuthLayout from './layouts/AuthLayout'
import SideBarLayout from './layouts/SideBarLayout'

export default {
  name: "App",
  components: {
      AuthLayout,
      SideBarLayout
  },
  computed: {
    layout() {
        console.log(this.$route);
      return (this.$route.meta.layout || 'auth') + '-layout'
    },
  },
};
</script>

<style lang="scss">
@import url("./app.css");
</style>
