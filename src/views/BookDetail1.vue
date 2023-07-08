<template>
    <section class="bookdetail">
        <h1 class="booktitle">
            {{ bookName }}
            <span>{{ bookDec }}</span>
        </h1>
        <div class="book-info">
            <div class="imgview">
                <div class="imgbook"><img :src="bookUrl" alt="" /></div>
                <div class="bookbtns">
                    <b-button variant="lightgray">
                    <i class="bi bi-search" />책 미리보기
                    </b-button>
                    <b-button variant="lightgray">
                    <i class="bi bi-hdd" />전자책
                    </b-button>
                </div>
            </div>
            <div class="infolist">
                <ul>
                    <li v-for="(item, index) in bookinfolists" :key="index">
                        <span class="label" v-html="item.label"></span>
                        <span class="infocontent" v-html="item.content"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="book-detailinfo">
            <div class="detailTap">
                <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="introduce"
                button
                button-variant="detailtap">
                    <i class="bi bi-mic" />책 소개
                </b-form-radio>
                <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="review"
                button
                button-variant="detailtap">
                    <i class="bi bi-chat-left-text" />출판사 리뷰
                </b-form-radio>
                <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="order"
                button
                button-variant="detailtap">
                    <i class="bi bi-layout-text-sidebar-reverse"/>목차
                </b-form-radio>
                <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="write"
                button
                button-variant="detailtap">
                    <i class="bi bi-journal-text" />저자 소개
                </b-form-radio>
                <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="recommendation"
                button
                button-variant="detailtap">
                    <i class="bi bi-person-check" />추천의 글
                </b-form-radio>
                <b-form-radio
                name="detail-tap"
                v-model="tapselect"
                value="reference"
                button
                button-variant="detailtap">
                    <i class="bi bi-inboxes" />자료실
                </b-form-radio>
            </div>
            <template v-if="tapselect === 'introduce'">
                <div class="detailTapCon">
                    <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>를 소개합니다.</h1>
                    <p>
                        웹 어워드 코리아에서 대상, 최우수상을 수상한 현직 웹 퍼블리셔의
                        작업 방식 그대로<br />웹 사이트 하나 통째로 만들면 나도 어느새 웹
                        퍼블리셔!!<br />이 책 한 권이면 웹 사이트 하나가 뚝딱 완성
                    </p>
                </div>
            </template>
        </div>
    </section>
</template>
<script>
export default {
    props: ['bookName', 'bookDec', 'bookUrl'],
    data() {
        return {
        bookinfolists: [
            { label: "저자", content: "김윤미" },
            { label: "발행일", content: "2019-11-28" },
            { label: "사양", content: "312쪽 | 188*257mm" },
            { label: "ISBN", content: "979-11-6303-119-2 13000" },
            { label: "정가", content: "16,000원" },
            { label: "상태", content: "정상 판매중" },
        ],
        tapselect: "introduce",
        };
    },
};
</script>