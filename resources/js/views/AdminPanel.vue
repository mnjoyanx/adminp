<template>
  <div class="admin__panel-wrapper">
    <div class="wrapper"></div>
    <div class="container">
      <div class="items__section" v-if="counts">
        <div class="card mb-3" style="width: 15rem">
          <div class="card-body">
            <h5 class="card-title">Services</h5>
            <p class="card-text">All Services: {{ counts.services }}</p>
            <router-link :to="{ name: 'service-list' }" class="btn btn-primary"
              >Go to all Services</router-link
            >
          </div>
        </div>

        <div class="card mb-3" style="width: 15rem">
          <div class="card-body">
            <h5 class="card-title">Clients</h5>
            <p class="card-text">All Clients: {{ counts.clients }}</p>
            <router-link :to="{ name: 'client-list' }" class="btn btn-primary"
              >Go All Cilents</router-link
            >
          </div>
        </div>

        <div class="card mb-3" style="width: 15rem">
          <div class="card-body">
            <h5 class="card-title">Info</h5>
            <p class="card-text">Info: {{ counts.info }}</p>
            <router-link :to="{ name: 'info-list' }" class="btn btn-primary"
              >Go All Info</router-link
            >
          </div>
        </div>

        <div class="card mb-3" style="width: 15rem">
          <div class="card-body">
            <h5 class="card-title">Projects</h5>
            <p class="card-text">All Projects: {{ counts.projects }}</p>
            <router-link :to="{ name: 'project-list' }" class="btn btn-primary"
              >Go All Projects</router-link
            >
          </div>
        </div>

        <div class="card mb-3" style="width: 15rem">
          <div class="card-body">
            <h5 class="card-title">About</h5>
            <p class="card-text">About Us Items count: {{ counts.projects }}</p>
            <router-link :to="{ name: 'about-list' }" class="btn btn-primary"
              >Go About Us</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "admin-panel",
  data() {
    return {
      counts: null,
    };
  },
  mounted() {
    axios.get("/api/register").then((res) => {
      this.counts = res.data;
    });
  },
};
</script>

<style lang="scss" scoped>
.admin__panel-wrapper {
  display: flex;
  justify-content: space-between;
}
.items__section {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
