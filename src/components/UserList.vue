<template>
  <div class="card mt-4">
    <table clas="table m-0">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{id, name, email} in users" :key="id">
          <td>{{name}}</td>
          <td>{{email}}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm ma-2">Edit</button>
            </router-link>
            <button @click="deleteUser(id)" class="btn btn-denger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useLoadeUsers, deleteUser } from '@/firebase'
export default {
  setup () {
    const users = useLoadeUsers()
    return { users, deleteUser }
  }
}
</script>

<style>
</style>
