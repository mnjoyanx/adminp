<template>
  <div>
    <h2>Edit Info</h2>
    <div v-if="!info">
        <h4>Loading...</h4>
    </div>
    <form @submit.prevent="editInfo" v-else>
      <div class="form-group">
        <label for="year">Year</label>
        <input type="number" class="form-control" id="year" v-model="info.year" />
      </div>

      <div class="form-group">
        <label for="completed">Completed</label>
        <input type="number" class="form-control" id="completed" v-model="info.completed"/>
      </div>

      <div class="form-group">
        <label for="constructions">Constructions</label>
        <input type="number" class="form-control" id="constructions" v-model="info.constructions"/>
      </div>

      <div class="form-group">
        <label for="awards">Awards</label>
        <input type="number" class="form-control" id="awards" v-model="info.awards"/>
      </div>
      <button class="btn btn-outline-primary">Edit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "info-edit",
  data() {
    return {
        info: null
    };
  },
  methods: {
    getCurrentInfo() {
      axios
        .get(`/api/info/${this.$route.params.id}`)
        .then((res) => {
          this.info = res.data
        })
        .catch((err) => {
          console.log(err);
        });
    },

    editInfo() {
        axios.put(`/api/info/${this.info.id}`, this.info)
            .then(res => {
                this.$router.push({name: 'info-list'})
            })
            .catch(err => {
                console.log(err);
            })
    },
  },
  mounted() {
      this.getCurrentInfo()
  }
};
</script>

<style lang="scss" scoped>
</style>
