<template>
  <div class="home">
    <UserCreate />
  </div>
</template>

<script>
// @ is an alias to /src
import UserCreate from '@/components/UserCreate.vue'

export default {
  name: 'Home',
  components: {
    UserCreate
  }
}
</script>
