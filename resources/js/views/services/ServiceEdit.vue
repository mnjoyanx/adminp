<template>
  <div>
    <template> </template>
    <form @submit.prevent="editServiceHandler" v-if="service">
      <div class="form-group">
        <label for="img">Img Src</label>
        <input
          type="text"
          v-model="service.img"
          class="form-control"
          id="img"
        />
      </div>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          v-model="service.title"
          class="form-control"
          id="title"
        />
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <input
          type="text"
          v-model="service.body"
          class="form-control"
          id="body"
        />
      </div>
      <button class="btn btn-outline-primary">Edit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "service-edit",
  data() {
    return {
      service: null,
    };
  },
  computed: {
    getCurrentPath() {
      return this.$route.params.id;
    },
  },
  methods: {
    getEditableService() {
      axios
        .get(`/api/services/${this.getCurrentPath}`)
        .then((res) => {
          this.service = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editServiceHandler() {
      axios
        .put(`/api/services/${this.service.id}`, this.service)
        .then((res) => {
          Object.keys(this.service).map((item) => {
            return (this.service[item] = "");
          });
          this.$router.push({ name: "service-list" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getEditableService();
  },
};
</script>

<style lang="scss" scoped>
</style>
