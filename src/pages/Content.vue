<template>
<div>
    <iframe :src="src" style="border: 0; width: 100%; height: 100%;"></iframe>
    {{this.$route.name}}
</div>
</template>

<script>
export default {
    components: {
    },
    data () {
    	return {
    		src: 'http://next.wisedu.com:8013/v3/admin/cpdaily/new/whole/admin.html#/yibanlog'
    	}
    },
    computed: {
        menuList () {
            return this.$store.state.menu.menuList
        }
    },
    watch: {
        '$route' (to, from) {
            console.log(to, this.$router, 'luyou jiankong')
            // this.buildSrc(to)
        },
        menuList (val, oldVal) {
            console.log(val, 'hello')
            // this.buildSrc(this.$route)
        }
    },
    created () {
        console.log(this.$route, 'content create')
        this.src = this.$route.meta.path
        // this.buildSrc(this.$route)
    },
    methods: {
        buildSrc (route) {
            if (typeof this.menuList !== 'undefined') {
                let menuList = this.menuList
                for (let i = 0; i < menuList.length; i++) {
                    for (let j = 0; j < menuList[i].children.length; j++) {
                        if (route.params.module === menuList[i].children[j].name) {
                            this.src = menuList[i].children[j].path
                            break
                        }
                    }
                }
            }
        }
    }
}
</script>