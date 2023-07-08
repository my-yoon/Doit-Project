<template>
    <Subpage :pagetit="'동영상 강의'"> 
        <div class="movieclasspage">
            <div class="subpageguide">
                동영상 강의를 볼 수 있습니다.
            </div>
            <listComm :lists="lists" />
        </div>
    </Subpage>
</template>
<script>
import Subpage from "@/layout/components/Subpage.vue";
import listComm from "@/layout/components/listComm.vue";
export default {
    components: { Subpage,listComm },
    data() {
        return {
            lists: [
                {
                    img: "/images/books_image/book03.jpg", // 이미지 경로
                    title: "Do it! C# 프로그래밍 입문", // 제목
                    date: "2022.10.18", // 등록일
                    dec: "채널에 접속하시면 전체 강의를 볼 수 있습니다. (출간 후 차례로 업데이트 예정)", // 설명
                    link1: "", // 소스 파일 경로
                    link2: "", // 정오표 경로
                },
                {
                    img: "/images/books_image/book27.jpg", // 이미지 경로
                    title: "Do it! 깡샘의 플러터 & 다트 프로그래밍", // 제목
                    date: "2023.02.08", // 등록일
                    dec: "본 강의는 무료와 유료 버전으로 구분되며 출간 후 순차적으로 업데이트 예정입니다.", // 설명
                    link1: "", // 소스 파일 경로
                    link2: "", // 정오표 경로
                },
            ],
        };
    },
};
</script>