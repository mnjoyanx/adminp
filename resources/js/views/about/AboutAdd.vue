<template>
  <div>
    <h2>Add About</h2>
    <form @submit.prevent="addAbout">
      <div class="form-group">
        <label for="body" class="form-label">Image Src</label>
        <input
          class="form-control"
          name="body"
          id="body"
          type="text"
          v-model="about.img"
        />
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <textarea
          class="form-control"
          id="body"
          rows="3"
          v-model="about.body"
        ></textarea>
      </div>
      <button class="btn btn-outline-primary mt-3">Add</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "about-add",
  data() {
    return {
      about: {
        img: "",
        body: "",
      },
    };
  },
  methods: {
    addAbout() {
      axios
        .post("/api/about", this.about)
        .then(() => {
          Object.keys(this.about).map((item) => {
            return (this.about[item] = "");
          });
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
