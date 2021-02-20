<template>
    <div>
        <h2>Add New Information</h2>
        <form @submit.prevent="addNewInformation">
      <div class="form-group">
        <label for="year" class="form-label">Year</label>
        <input
          class="form-control"
          name="year"
          id="year"
          type="texnumbert"
          v-model="info.year"
        />
      </div>

      <div class="form-group">
        <label for="completed" class="form-label">Completed</label>
        <input
          class="form-control"
          name="completed"
          id="completed"
          type="number"
          v-model="info.completed"
        />
      </div>

      <div class="form-group">
        <label for="constructions" class="form-label">Constructions</label>
        <input
          class="form-control"
          name="constructions"
          id="constructions"
          type="number"
          v-model="info.constructions"
        />
      </div>

      <div class="form-group">
        <label for="awards" class="form-label">Awards</label>
        <input
          class="form-control"
          name="awards"
          id="awards"
          type="number"
          v-model="info.awards"
        />
      </div>
      <button class="btn btn-outline-primary">Add</button>
    </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'info-add',
        data() {
            return {
                info: {
                    year: '',
                    completed: '',
                    constructions: '',
                    awards: ''
                }
            }
        },
        methods: {
            addNewInformation() {
                axios.post('/api/info', this.info)
                    .then(() => {
                        Object.keys(this.info).map(item => {
                            return this.info[item] = ''
                        })
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
