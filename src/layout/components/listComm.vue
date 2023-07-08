<template>
    <div class="listwrap">
        <div class="listnum">
            총 <strong v-html="lists.length"></strong>건이 등록되어 있습니다.
        </div>
        <div class="listbox">
            <div class="listitem" v-for="(item, index) in lists" :key="index">
                <div class="listthum"><img :src="item.img" /></div>
                <div class="listdetail">
                    <strong v-html="item.title"></strong>
                    <div class="listdate">등록일 : {{ item.date }}</div>
                    <div class="listdec" v-html="item.dec"></div>
                    <div class="itembtns">
                        <b-button variant="listdown" :href="item.link1"><i class="bi bi-folder-symlink" /> 소스 파일 내려받기</b-button>
                        <b-button variant="listdown" :href="item.link2"> <i class="bi bi-table" /> 정오표 </b-button>
                    </div>
                    <div class="downguide">
                        ※ 다운로드가 안 될 경우 <br />회사에서 접속한 경우 사내 보안
                        등의 이유로 다운로드가 되지 않을 수 있습니다. <br />
                        고객센터로 연락주시면 별도로 송부하겠습니다.
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ["lists"],
};
</script>