<template>
    <div class="def_wrap">
        <div>list</div>
        <button id="add" @click="newsWrite">+</button>
        <div class="list">
            <ul>
                <li>2023.03</li>
                <li>어쩌고저쩌고</li>
            </ul>
            <ul>
                <li>2023.03</li>
                <li>어쩌고저쩌고</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsList',
    props: {type: Object},
    updated() {
        console.log(this.data)
    },
    methods: {
        newsWrite() {
            this.isActive = !this.isActive
        }
    }
}

</script>

<style>
.def_wrap{
    width: 100%;
}
#add {
    position: fixed;
    top: 100px;
    right: 100px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 2rem;
    background: yellow;
}
.list {
    display: flex;

}
.list ul {
    border: 1px solid #555;
    padding: 5%;
    width: 150px;
    height: 150px;
    margin-right: 10px;
    align-items: center;
    background-color: rgb(225, 225, 225)
}

ul, li {
    list-style: none;
    padding: 0;
}
</style>