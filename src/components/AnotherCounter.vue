<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({ by: 50, duration: 2000 })">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({ by: 50, duration: 5000 })">Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import * as types from '../store/types'

export default  {
    methods: {
        ...mapActions({
            'asyncIncrement': types.ASYNC_INCREMENT_COUNTER,
            'asyncDecrement': types.ASYNC_DECREMENT_COUNTER
        })
    }
}
</script>
