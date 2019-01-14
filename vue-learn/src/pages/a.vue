<template>
    <div class="page">
        page a 登陆名：{{loginuser.name}}
        <ul>
      <!-- <li v-for="item in user" :key="item.id">
        {{item.name}}
      </li> -->
    </ul>
    </div>
</template>
<script>
import  {LoginUsers,Users} from '../mock/data/user.js'
export default {
 data(){
    return {
        loginuser:LoginUsers[0],
        user: Users
        }
  }
}
</script>
<style lang="css" scope>
</style>