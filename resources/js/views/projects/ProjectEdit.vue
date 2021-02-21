<template>
  <div>
    <h2>Edit Project</h2>
    <div v-if="!project">
        <h4>Loading...</h4>
    </div>
    <form @submit.prevent="editProject" v-else>
      <div class="form-group">
        <label for="img">Img Src</label>
        <input type="text" class="form-control" id="img" v-model="project.img" />
        <button class="btn btn-outline-primary">Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "project-edit",
  data() {
    return {
        project: null
    };
  },
  methods: {
      getCurrentProject() {
          axios.get(`/api/projects/${this.$route.params.id}`)
          .then(res => {
              this.project = res.data
          })
          .catch(err => {
              console.log(err);
          })
      },
      editProject() {
          axios.put(`/api/projects/${this.project.id}`, this.project)
            .then(res => {
                this.$router.push({name: 'project-list'})
            })
            .catch(err => {
                console.log(err);
            })
      }
  },
  mounted() {
      this.getCurrentProject()
  }
};
</script>

<style lang="scss" scoped>
</style>
