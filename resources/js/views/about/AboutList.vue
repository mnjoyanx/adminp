<template>
  <div>
    <h2>About</h2>
    <div v-if="isLoading">
      <h4>Loading...</h4>
    </div>
    <table class="table" v-else>
      <thead class="thead-dark">
        <tr>
          <th scope="col"># ID</th>
          <th scope="col">Image Src</th>
          <th scope="col">Body</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <th scope="row">{{ item.id}}</th>
          <th>
            <p class="ellipsis">{{ item.img }}</p>
          </th>
          <th>
            <p class="ellipsis__">{{ item.body }}</p>
          </th>
          <td class="d-flex">
            <span class="btn btn-outline-danger" @click="deleteAbout(item.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </span>
            <span class="btn btn-outline-primary ml-2" @click="editAbout(item.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "info",
  data() {
    return {
      data: null,
      isLoading: true,
    };
  },
  methods: {
    getAllAboutData() {
      axios
        .get("/api/about")
        .then((res) => {
          this.data = res.data;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
        });
    },

    deleteAbout(id) {
        axios.delete(`/api/about/${id}`)
            .then(() => {
                this.getAllAboutData()
            })
            .catch(err => {
                console.log(err);
            })
    },

    editAbout(id) {
        this.$router.push({name:'about-edit', params: {id}})
    }
  },
  mounted() {
    this.getAllAboutData();
  },
};
</script>

<style lang="scss" scoped>
.ellipsis__ {
  white-space: nowrap;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
