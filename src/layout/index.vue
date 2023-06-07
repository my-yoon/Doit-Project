<template>
    <section id="wrap">
        <h1 class="blind">웹사이트 제목</h1>
        <Header />
        <section id="container">
            <router-view /> <!-- 각 메뉴에 따라 변경할 컴포넌트 영역의 라우터 태그 -->
        </section>
        <Footer />
    </section>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
export default {
    components: {
        Header,
        Footer,
    },
};
</script>