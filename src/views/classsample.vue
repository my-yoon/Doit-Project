<template>
    <Subpage :pagetit="'교재 샘플'">
        <div class="classsample">
            <div class="subpageguide">
            대학이나 학원 등 교육 기관에서 이지스퍼블리싱 도서를 교재로 채택하고
            싶으신 선생님은 아래 내용대로 접수해 주세요.
            </div>
            <b-form @submit="ClassCall">
                <b-form-group
                    id="form-group1"
                    label="요청 도서"
                    label-for="bookname"
                    description="도서명을 확인 후 정확하게 입력해 주세요"
                >
                    <b-form-input
                        id="bookname"
                        v-model="form.bookname"
                        type="text"
                        required
                    ></b-form-input>
                </b-form-group>
                <div class="btnwrap half">
                    <b-button type="submit" variant="login">확인</b-button>
                    <b-button type="reset" variant="cancel">취소</b-button>
                </div>
            </b-form>
        </div>
    </Subpage>
</template>
<script>
import Subpage from "@/layout/components/Subpage.vue";
export default {
    components: { Subpage },
    data() {
        return {
            form: {
                bookname: "",
                companyname: "",
                class: "",
                name: "",
                phonenum: "",
                email: "",
                memo: "",
                checkedtype: [],
            },
        };
    },
    methods: {
        ClassCall(event) {
            event.preventDefault();
            alert(JSON.stringify(this.form));
            this.$nextTick(() => {
                this.form.bookname = "";
                this.form.companyname = "";
                this.form.class = "";
                this.form.name = "";
                this.form.phonenum = "";
                this.form.email = "";
                this.form.memo = "";
                this.form.checkedtype = [];
            });
        },
    },

};
</script>