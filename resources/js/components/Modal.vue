<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Update Service</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true" @click="closeModal">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="chanegService">
                <div class="form-group">
                  <label for="img">Img Src</label>
                  <input
                    type="text"
                    v-model="payloadData.img"
                    class="form-control"
                    id="img"
                  />
                </div>
                <div class="form-group">
                  <label for="title">Title</label>
                  <input
                    type="text"
                    v-model="payloadData.title"
                    class="form-control"
                    id="title"
                  />
                </div>
                <div class="form-group">
                  <label for="body">Body</label>
                  <input
                    type="text"
                    v-model="payloadData.body"
                    class="form-control"
                    id="body"
                  />
                </div>

                <button class="btn btn-primary">Update</button>
                <button class="btn btn-outline-warning" @click="closeModal">
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from "axios";

export default {
  name: "modal",
  props: ["showModal", "item"],
  data() {
    return {
      payloadData: null,
    };
  },
  created() {
    this.payloadData = Object.assign({}, this.item);
  },
  computed: {
    isVisible() {
      return this.showModal;
    },
    currentService() {
      return this.item;
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    chanegService() {
      axios
        .put(`/api/services/${this.item.id}`, this.payloadData)
        .then((res) => {
          this.$emit("updateService");
          this.closeModal();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    console.log("mounteds", this.$props);
  },
};
</script>

<style lang="scss" scoped></style>
