<template>
  <div>
    <h2>Add New Project</h2>
    <form @submit.prevent="addProject">
      <div class="form-group col-6">
        <label for="img" class="form-label">Image Src</label>
        <input
          class="form-control"
          name="img"
          id="img"
          type="text"
          v-model="img"
        />

        <button class="btn btn-outline-primary mt-3">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "project-add",
  data() {
      return {
          img: ''
      }
  },
  methods: {
      addProject() {
          axios.post('/api/projects', {img: this.img})
            .then(res => {
                this.img = ''
            })
            .catch(err => {
                console.log(err);
            })
      }
  }
};
</script>
