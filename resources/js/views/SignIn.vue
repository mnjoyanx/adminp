<template>
    <div class="container">
    <h2 class="pt-5">Sing In</h2>
        <form class="pt-5" @submit.prevent="submitForm" novalidate>
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
        name: 'sign-in',
        data() {
            return {
                formGroup: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            submitForm() {
                axios.post('/api/login', this.formGroup)
                    .then(res => {
                        this.$router.push('/admin-panel')
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
