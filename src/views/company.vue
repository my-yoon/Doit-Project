<template>
    <Subpage :pagetit="'회사 소개'">
        <div class="company">
            <div class="introcon">
                <div class="introgroup">
                    <strong>"사람을 구체적으로 도와주는 책"</strong>
                    <p>... (생략) ...</p>
                </div>
                <div class="introgroup">
                    <strong>이지스퍼블리싱의 미션</strong>
                    <p>... (생략) ...</p>
                </div>
                <div class="introgroup">
                    <strong>조직관</strong>
                    <p>... (생략) ...</p>
                </div>
            </div>
        </div>
    </Subpage>
</template>
<script>
import Subpage from "@/layout/components/Subpage.vue";
export default {
components: { Subpage },
};
</script>