<template id="div">
    <div class="footer">
    
        <router-link to="/home">
    
            <i class="iconfont icon-home"></i>
    
            <span>首页</span>
    
        </router-link>
    
        <router-link to="/member">
    
            <i class="iconfont icon-huangguan"></i>
    
            <span>会员</span>
    
        </router-link>
    
        <router-link to="/detect">
    
            <i class="iconfont icon-zhinanzhen"></i>
    
            <span>发现</span>
    
        </router-link>
    
        <router-link to="/buycar">
    
            <i class="iconfont icon-shop_car"></i>
    
            <span>购物车</span>
    
        </router-link>
    
        <router-link to="/mine">
    
            <i class="iconfont icon-tab_mine"></i>
    
            <span>我的</span>
    
        </router-link>
    
    </div>
</template>

<script>
    export default {
    
        data() {
    
            return {}
    
        },
    
        methods: {},
    
        components: {},
    
        computed: {},
    
    
    
    }
</script>

<style scoped lang="less">
    .footer {
        position: fixed;
        width: 100%;
        bottom: 0;
        display: flex;
        background:#fff;
        padding: 3px 0;
        z-index: 100;
        a {
            display: flex;
            flex: 1;
            flex-direction: column;
            font-size: 10px;
            align-items: center;
            color: #999;
        }
        .router-link-active {
            color: #ff4891;
        }
    
    }
    .iconfont {
        font-size: 30px;
    }
</style>

