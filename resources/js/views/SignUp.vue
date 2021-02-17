<template>
    <div class="container">
    <h2 class="pt-5">Registration</h2>
        <form class="pt-5" @submit.prevent="submitForm">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" placeholder="Name" id="name" name="name" class="form-control" v-model="formGroup.name">
        </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                v-model="formGroup.email"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                />
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                v-model="formGroup.password"
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "sign-up",
    data() {
        return {
            formGroup: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        submitForm() {
            axios.post('api/register', this.formGroup)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
};
</script>
