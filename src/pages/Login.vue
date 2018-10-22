<template>
    <Button type="primary" @click="login">登陆</Button>
</template>
<script>
export default {
    methods: {
        login () {
            this.$router.push('home')
        }
    }
}
</script>

