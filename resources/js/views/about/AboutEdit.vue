<template>
  <div>
    <h2>Edit About</h2>
    <div v-if="!about">
        <h4>Loading...</h4>
    </div>
    <form @submit.prevent="editAbout" v-else>
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
      <button class="btn btn-outline-primary mt-3">Edit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "about-edit",
  data() {
    return {
      about: null,
    };
  },
  methods: {
      getCurrentAbout() {
          axios.get(`/api/about/${this.$route.params.id}`)
            .then(res => {
                this.about = res.data
            })
            .catch(err => {
                console.log(err)
            })
      },
    editAbout() {
        axios.put(`/api/about/${this.about.id}`, this.about)
            .then(() => {
                this.$router.push({name: 'about-list'})
            })
            .catch(err => {
                console.log(err)
            })
    }

  },
  mounted() {
      this.getCurrentAbout()
  }
};
</script>

<style lang="scss" scoped>
</style>
