<template>
    <Subpage :pagetit="'도서 소개'">
        <div class="bookpage">
            <VueSlickCarousel class="subpageslider" v-bind="settings" @init="handleInit" ref="carousel">
                <div class="rollimg" 
                    :class="{ active: index === tabIndex }"
                    v-for="(item, index) in Newbooks" 
                    :key="index" 
                    @click="Clicklink(index)"
                >
                    <span class="imgbox"><img :src="item.imgurl" /></span>
                    <strong v-html="item.name"></strong>
                </div>
            </VueSlickCarousel>
            <component
                :is="componentslist[tabIndex]"
                :bookUrl="Newbooks[tabIndex].imgurl"
                :bookName="Newbooks[tabIndex].name"
                :bookDec="Newbooks[tabIndex].dec"
            >
            </component>
        </div>
    </Subpage>
</template>
<script>
import Subpage from "@/layout/components/Subpage.vue";
import BookDetail1 from "./BookDetail1.vue";
import BookDetail2 from "./BookDetail2.vue";
import BookDetail3 from "./BookDetail3.vue";
import BookDetail4 from "./BookDetail4.vue";
import BookDetail5 from "./BookDetail5.vue";
import BookDetail6 from "./BookDetail6.vue";
import BookDetail7 from "./BookDetail7.vue";
import BookDetail8 from "./BookDetail8.vue";
import BookDetail9 from "./BookDetail9.vue";
import BookDetail10 from "./BookDetail10.vue";
export default {
    components: {
        Subpage,
        BookDetail1,BookDetail2,BookDetail3,BookDetail4,
        BookDetail5,BookDetail6,BookDetail7,BookDetail8,BookDetail9,BookDetail10
    },
    mounted() {
        if (!this.$route.query.tabId) {
            this.tabIndex = 0;
        }else{
            this.tabIndex = Number(this.$route.query.tabId);
        }
    },
    data() {
        return {
            Newbooks: [
                { imgurl: "/images/books_image/book01.jpg", name: "Do it! 웹 사이트 따라 만들기", dec: "HTML, CSS, 자바스크립트, jquery, Ajax로 웹 퍼블리싱" },
                { imgurl:'/images/books_image/book02.jpg', name:'Do it! 첫 알고리즘', dec:'160가지 그림과 스토리텔링으로 이해한다!' },
                { imgurl:'/images/books_image/book03.jpg', name:'Do it! C# 프로그래밍 입문', dec:'딱 필요한 문법만 빠르게 배우고 프로젝트 실습까지!' },
                { imgurl:'/images/books_image/book04.jpg', name:'IT 5분 잡학사전', dec:'누구나 쉽게 이해할 수 있는 IT 지식이 가득한 입문서' },
                { imgurl:'/images/books_image/book05.jpg', name:'Do it! SQL 입문',dec:'비전공자도 개발자도 쉽게 배우는 기초 문법 + 실용 예제' },
                { imgurl:'/images/books_image/book06.jpg', name:'Do it! 클론 코딩 줌', dec:'노마드 코더와 만드는 화상 채팅 서비스' },
                { imgurl:'/images/books_image/book08.jpg', name:'된다! 엑셀 수식 & 함수', dec:'복잡한 수식의 원리부터 함수 설명까지!' },
                { imgurl:'/images/books_image/book09.jpg', name:'일 잘하는 디자이너', dec:'클라이언트 설득부터 타이포그래피, 색상 선택, 면접 준비까지!' },
                { imgurl:'/images/books_image/book10.jpg', name:'된다! 아이패드 하루 24시간',dec:'굿노트, 프로크리에이트, 루마퓨전 사용법과 애플 연동, 아이패드 문제 해결까지!' },
                { imgurl:'/images/books_image/book21.jpg', name:'블록체인 무엇인가?' ,dec:'수학, 코딩 몰라도 이해하는 비유의 힘!' },
            ],
            settings: {
                slidesToShow: 8,
                arrows: true,
                dots: false,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 5,
                        },
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                        },
                    },
                ],
            },
            componentslist: [
                BookDetail1,BookDetail2,BookDetail3,BookDetail4,
                BookDetail5,BookDetail6,BookDetail7,BookDetail8,BookDetail9,BookDetail10
            ],
            tabIndex: 0,
        };
    },
    methods: {
        Clicklink(tabIndex) {
            if (!(this.$route.query.tabId == tabIndex)) {
                this.tabIndex = tabIndex;
                return this.$router.push("/book?tabId=" + tabIndex);
            }
        },
        handleInit() {
            this.$nextTick(() => {
                this.$refs.carousel.goTo(this.tabIndex);
            });
        },
    },
};
</script>
