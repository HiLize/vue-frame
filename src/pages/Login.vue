<template>
    <iframe src="http://172.20.6.218:8000/admin.html#/tenantmanage/tenantgroup" style="border: 0; width: 100%; height: 100%;"></iframe>
</template>

<script>
export default {
    components: {
    },
    watch: {
        '$route' (to, from) {
            console.log(to, from)
            this.src = `http://172.20.6.218:8000/admin.html#/${to.name}manage`
        }
    }
}
</script>


