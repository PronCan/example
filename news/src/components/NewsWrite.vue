<template>
    <div class="write_wrap">
    <div>write</div>
    <form>
        <input type="text" placeholder="작성자" v-model="name"/>
        <input type="text" placeholder="내용" v-model="content"/>
        <input type="submit" value="전송" @click="sendData"/>
    </form>
    </div>
</template>

<script>
export default {
    name: 'NewsWrite',
    data() {
        return {
            name: '',
            content: '',
        }
    },
    methods: {
        sendData(e) {
            e.preventDefault();
            this.$emit('send', { 
                name: this.name,
                content: this.content
            })
        }
    }
}
</script>

<style>
.write_wrap {
    position: absolute;
    top: 125px;
    right: 125px;
    border: 1px solid #555;
    padding: 1%;
    background: rgb(224, 159, 83);
}
form {
    display: flex;
    flex-direction: column;
}
input[type=text] {
    height: 2rem
}
input[type=text]:nth-child(2) {
    height: 4rem;
}
input[type=submit] {
    background: #000;
    color: #fff;
    margin-top: 5px;
}

</style>