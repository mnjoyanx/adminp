<template>
<div class="admin__panel-wrapper">
 <div class="wrapper">


    </div>
<div class="container">

    <div class="items__section" v-if="counts">
        <div class="card" style="width: 15rem;">
  <div class="card-body">
    <h5 class="card-title">Services</h5>
    <p class="card-text">All Services: {{ counts.services }}</p>
    <a href="#" class="btn btn-primary">Go to all Services</a>
  </div>
</div>

          <div class="card" style="width: 15rem;">
  <div class="card-body">
    <h5 class="card-title">Clients</h5>
    <p class="card-text">All Clients: {{ counts.clients }}</p>
    <router-link to="/services" class="btn btn-primary">Go somewhere</router-link>
  </div>
</div>

          <div class="card" style="width: 15rem;">
  <div class="card-body">
    <h5 class="card-title">Info</h5>
    <p class="card-text">Info: {{ counts.info }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

         <div class="card" style="width: 15rem;">
  <div class="card-body">
    <h5 class="card-title">Projects</h5>
    <p class="card-text">All Projects: {{ counts.projects }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
</div>
</div>


</template>

<script>
import axios from 'axios'

    export default {
        name: 'admin-panel',
        data() {
            return {
                counts: null
            }
        },
        mounted() {
            axios.get('/api/register')
                .then(res => {
                    this.counts = res.data
                    console.log(res.data)
                })
        }
    }
</script>

<style lang="scss" scoped>


.admin__panel-wrapper {
    display: flex;
    justify-content: space-between;
}
.items__section {
    display: flex;
    justify-content: space-between;
}
</style>
