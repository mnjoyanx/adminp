<template>
  <div>
    <div v-if="!client">
      <h4>loading...</h4>
    </div>
    <div v-else>
    <form @submit.prevent="editClient">
      <div class="form-group">
        <label for="img">Img Src</label>
        <input type="text" class="form-control" id="img" v-model="client.img" />
        <button class="btn btn-primary">Edit</button>
      </div>
    </form>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "client-edit",
  data() {
    return {
      client: null,
    };
  },
  methods: {
    getEditableClient() {
      axios
        .get(`/api/clients/${this.$route.params.id}`)
        .then((res) => {
          this.client = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    editClient() {
        axios.put(`/api/clients/${this.client.id}`, this.client)
            .then(res => {
                this.$router.push({name: 'client-list'})
            })
            .catch(err => {
                console.log(err);
            })
    }
  },
  mounted() {
    this.getEditableClient();
  },
};
</script>

<style lang="scss" scoped>
</style>
