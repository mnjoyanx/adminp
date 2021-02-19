<template>
  <div>
    <h2>Add New Service</h2>

    <form @submit.prevent="addService">
      <div class="form-group col-6">
        <label for="img" class="form-label">Image Src</label>
        <input
          class="form-control"
          name="img"
          id="img"
          type="text"
          v-model="formControl.img"
        />
        <label for="title" class="form-label">Title</label>
        <input
          class="form-control"
          type="text"
          id="title"
          name="title"
          v-model="formControl.title"
        />
        <div class="mb-3">
          <label for="body" class="form-label">Body</label>
          <textarea
            class="form-control"
            id="body"
            name="body"
            rows="3"
            v-model="formControl.body"
          ></textarea>
        </div>
        <button class="btn btn-primary">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "service-add",
  data() {
    return {
      formControl: {
        img: "",
        title: "",
        body: "",
      },
      message: ''
    };
  },
  methods: {
    addService() {
      axios
        .post("/api/services", this.formControl)
        .then((res) => {
          this.message = res.data.message
          Object.keys(this.formControl).map(item => {
              return this.formControl[item] = ''
          })
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
