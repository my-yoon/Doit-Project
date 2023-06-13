<template>
    <Subpage :pagetit="'도서 소개'">
        <div class="bookpage">
            <VueSlickCarousel 
                class="subpageslider" 
                v-bind="settings"
                @init="handleInit"
                ref="carousel"
            >
                <div class="rollimg" 
                    v-for="(item, index) in Newbooks" 
                    :key="index" 
                    @click="Clicklink(index)"
                    :class="{ active: index === tabIndex }"
                >
                    <span class="imgbox"><img :src="item.imgurl" /></span>
                    <strong v-html="item.name"></strong>
                    <span class="textbox" v-html="item.subdec"></span>
                </div>
            </VueSlickCarousel>
           
            <component
                :is="componentslist[tabIndex]"
                :bookUrl.sync= "Newbooks[tabIndex].imgurl"
                :bookName.sync= "Newbooks[tabIndex].name"
                :bookDec.sync= "Newbooks[tabIndex].dec"
            >
            </component>
        </div> 
    </Subpage>
</template>
<script>
import Subpage from "@/layout/components/Subpage.vue";
import BookDetail1 from "./BookDetail1.vue";
import BookDetail2 from "./BookDetail2.vue";
export default {
    components: {
        Subpage,
        BookDetail1,
        BookDetail2
    },
    mounted() {
        if (typeof this.$route.query.tabId === "undefined") {
            this.tabIndex = 0;
        }
        this.tabIndex = Number(this.$route.query.tabId);
    },
    data() {
        return {
            Newbooks: [
                {
                    imgurl: "/images/books_image/book01.jpg",
                    name: "Do it! 웹 사이트 따라 만들기",
                    dec: "HTML, CSS, 자바스크립트, jquery, Ajax로 웹 퍼블리싱"
                },
                {
                    imgurl: "/images/books_image/book02.jpg",
                    name: "Do it! 첫 알고리즘",
                    dec: "HTML, CSS, 자바스크립트, jquery, Ajax로 웹 퍼블리싱"
                },
                {
                    imgurl: "/images/books_image/book03.jpg",
                    name: "Do it! C# 프로그래밍 입문",
                    
                },
                {
                    imgurl: "/images/books_image/book04.jpg",
                    name: "IT 5분 잡학사전",
                },
                {
                    imgurl: "/images/books_image/book05.jpg",
                    name: "Do it! SQL 입문",
                },
                {
                    imgurl: "/images/books_image/book06.jpg",
                    name: "Do it! 클론 코딩 줌",
                },
                {
                    imgurl: "/images/books_image/book08.jpg",
                    name: "된다! 엑셀 수식 & 함수",
                },
                {
                    imgurl: "/images/books_image/book09.jpg",
                    name: "일 잘하는 디자이너",
                },
                {
                    imgurl: "/images/books_image/book10.jpg",
                    name: "된다! 아이패드 하루 24시간",
                },
                {
                    imgurl: "/images/books_image/book21.jpg",
                    name: "블록체인 무엇인가?",
                },
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
                BookDetail1,
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
