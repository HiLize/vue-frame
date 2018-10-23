<template>
    <Card :bordered='false' shadow class="card_style" :padding=40>
        <div>
            <Input v-model="value" placeholder="输入adminSessionToken" style="width: 100%" />
            <div style="height: 30px;"></div>
            <Button type="primary" @click="login" style="width: 50%">LOGIN</Button>
        </div>
    </Card>
</template>
<script>
export default {
    data () {
        return {
            value: ''
        }
    },
    methods: {
        login () {
            console.log(this.value, 'login value')
            this.$store.commit('Login', this.value)
            this.$router.replace('/manage')
        }
    }
}
</script>
<style lang="less" scoped>
    .card_style {
        width:500px;
        // height: 200px;
        text-align: center;
        margin: auto;
        top: 50%;
        transform: translate(0, -50%);
    }
</style>


