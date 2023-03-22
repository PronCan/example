<template lang="">
    <li>
        <!-- {{data}} -->
        <img :src="src">
        <p>{{name}}</p>
    </li>
</template>

<script>
export default {
    name:'ItemList',
    props: ['data'],
    computed: {
        //return console.log(this.data)
    },

    data() {
        return {
            id: this.data.id,
            name: this.data.name,
            src: this.data.src,
        }
    },
    // mounted() {
    //     console.log(this.data);
    // }
}
</script>

<style lang="">
    
</style>