<template>
  <div class="card card-body mt-4">
      <form @onSubmit.prevent="onSubmit">
          <div class="form-group">
              <label>Name</label>
              <input v-model="form.name" class="form-control" required/>
          </div>
          <div class="form-group mt-3">
              <label>Email</label>
              <input
                v-model="form.email"
                class="form-control"
                type="email"
                required
              />
          </div>
          <button type="submit" class="btn btn-primary mt-2">Create User</button>
      </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'
export default {
  setup () {
    const form = reactive({ name: '', email: '' })
    const onSubmit = () => {
      window.console.log('test')
      createUser({ ...form })
      form.name = ''
      form.email = ''
    }
    return { form, onSubmit }
  }
}
</script>

<style>

</style>
