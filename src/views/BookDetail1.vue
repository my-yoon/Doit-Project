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
            <template v-else-if="tapselect=='review'">
                <div class="detailTapCon">
                <h1 class="tapcontit"><strong>"{{bookName}}"</strong>출판사 리뷰 입니다.</h1>
                <p>
                    자신이 알고 있는 내용은 다른 사람과 나누고, 궁금한 내용은 나와 비슷한 고민을 하는 사람들과 함께 풀어보면 어떨까요? 지식을 공유하는 뿌듯함과 함께 자신의 능력이 한층 
                    더 발전되어 가는 모습을 발견할 수 있을 거예요. 또한 Do it! 스터디룸에 공부 계획 세우고 스터디 노트를 꾸준히 올리면 새 책을 받을 수 있어요. 
                    공부하고 책 받고 다시 공부하는 행복한 무한루프에 빠져 자신의 능력을 키워보세요!<br /><br />

                - Do it! 스터디룸 카페 [cafe.naver.com/doitstudyroom → ‘웹 사이트 따라 만들기’ 메뉴]<br />

                - Do it! 스터디룸 카페 [cafe.naver.com/doitstudyroom → ‘Do it! 공부단 지원&책 선물 받기’ 메뉴]<br />
                </p>
                </div>
            </template>
            <template v-else-if="tapselect=='order'">
                <div class="detailTapCon">
                <h1 class="tapcontit"><strong>"{{bookName}}"</strong>목차 입니다</h1>
                <p>

                    첫째마당. 웹 사이트 만들기 준비하기<br><br>
                    01장 실습 전 익혀야 할 기본 지식<br>

                    01-1 우리가 알아야 할 HTML 기본 상식<br>

                    01-2 웹 페이지를 시각화하는 CSS<br>

                    01-3 동적인 웹 페이지를 만들어 주는 자바스크립트<br>

                    01-4 알아 두면 유용한 제이쿼리<br>

                    01-5 자원과 시간 낭비를 막아주는 Ajax<br><br>

                    

                    02장 개발 환경 준비하기<br><br>

                    02-1 개발 도구 설치하기<br>

                    02-2 브라우저의 개발자 도구<br>

                    02-3 크로스 브라우징<br>

                    스페셜 01 웹 퍼블리셔에 대해서 알아보자!
                </p>
                </div>
            </template>
            <template v-else-if="tapselect=='write'">
                <div class="detailTapCon">
                <h1 class="tapcontit"><strong>"{{bookName}}"</strong>저자소개 입니다.</h1>
                <p>
                    <strong>김윤미</strong><br><br>
                    그녀는 일에 대한 열정이 가득하고 언제나 두려움 없이 새로운 도전을 시작하는 실무 경력 13년 차 웹 퍼블리셔이다. 국내 웹 에이전시에서 활동하며 이니스프리, 에뛰드, 엘지 하우시스 등 유명한 쇼핑몰 제작에 참여했고 그동안 작업한 사이트 대부분은 웹 어워드 코리아에서 각 분야별로 최우수상 또는 대상을 수상하였다. 또한 웹 퍼블리싱 실무 강의로 인기를 끌기도 했다. 'Do it! 웹 사이트 따라 만들기'는 그녀의 실무 경험과 강의 경험이 결합되어 나온 책이다. 그녀의 업무 방식을 화면 그대로 정리해 이 책에 빠짐없이 옮겨 담았으며 이 책을 읽는 독자들의 시간을 절약해주기 위해 전체 소스도 공개했다. 이 소스를 그대로 활용하면 독자가 필요한 웹사이트를 빠르게 만들 수 있다. 그녀는 현재 외국계 기업에서 솔루션 프로그램을 만드는 프로젝트에 참여하고 있다.  
                </p>
                </div>
            </template>
            <template v-else-if="tapselect=='recommendation'">
                <div class="detailTapCon">
                <h1 class="tapcontit"><strong>"{{bookName}}"</strong>추천의 글 입니다.</h1>
                <p>
                    <strong>이런분께 권해 드려요</strong><br>
                    - HTML, CSS, 자바스크립트 문법은 조금 알지만 사이트를 직접 만든 적 없는 코딩 초보자<br />
                    - 웹 퍼블리셔가 되고 싶은 취업 준비생<br />
                    - 실무에 익숙하지 않은 신입 웹 퍼블리셔<br />
                    - 퍼블리싱도 함께 해야 하는 스타트업 기업의 웹 디자이너, 웹 개발자<br />
                    - 빠르게 홈페이지를 만들어서 바로 사용해야 하는 1인 창업자
                </p>
                </div>
            </template>
            <template v-else-if="tapselect=='reference'">
                <div class="detailTapCon">
                <h1 class="tapcontit"><strong>"{{bookName}}"</strong>자료실 입니다.</h1>
                <p>자료실 메뉴로 들어가시면 더 많은 내용을 확인 할 수 있습니다.</p>
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