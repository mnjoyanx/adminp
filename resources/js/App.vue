<template>
    <div class="header">
        <side-bar />
        <div class="container">
            <hr />
            <router-view />
            <hr />
        </div>
    </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
    components: { SideBar },
    name: "App"
};
</script>

<style lang="scss">
@import url('./app.css');
.header {
    display: flex;
}
</style>
