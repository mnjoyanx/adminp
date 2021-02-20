<template>
    <div>
    <h2>Add New Client</h2>
     <form @submit.prevent="addClient">
      <div class="form-group col-6">
        <label for="img" class="form-label">Image Src</label>
        <input
          class="form-control"
          name="img"
          id="img"
          type="text"
          v-model="img"
        />

        <button class="btn btn-primary mt-3">Add</button>
      </div>
    </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'client-add',
        data() {
            return {
                    img: ''
            }
        },
        methods: {
            addClient() {
                axios.post('/api/clients', {img: this.img})
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
