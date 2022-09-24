<template>
    <div class="content">
        <HeaderVue></HeaderVue>
        <router-view/>
    </div>
    <div class="footer">
        <FooterVue></FooterVue>
    </div>
</template>

<style>
    @import "assets/bootstrap.min.css";

    #app {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .content {
      flex: 1 0 auto;
    }
    .footer {
      flex: 0 0 auto;
    }

    body, html {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
</style>

<script>
    import HeaderVue from "./components/HeaderVue";
    import FooterVue from "./components/FooterVue";

    export default {
        name: 'App',
        components: {
            FooterVue,
            HeaderVue
        },
    }
</script>