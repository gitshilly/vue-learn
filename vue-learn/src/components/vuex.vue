<template>
    <div class="vuex">
        {{ count }}
        <button @click="increment(2)">增加</button>
        <button @click="decrement">减少</button> 
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
export default {
    methods:mapActions([
        'increment',
        'decrement'
    ]),
    computed:mapState({
        count:state=>state.count,
        countAlias:'count',
        countPlusLocalState(state){
            return state.count + this.localCount
        }
    })
    // computed:{
    //     count(){
    //         return this.$store.state.count;
    //     }
    // }

}
</script>

