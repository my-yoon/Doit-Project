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
                label="요청도서"
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
                <b-form-group
                id="form-group2"
                label="기관이름"
                label-for="companyname"
                description="기관이름을 정확하게 입력해 주세요"
                >
                <b-form-input
                    id="companyname"
                    v-model="form.companyname"
                    type="text"
                ></b-form-input>
                </b-form-group>
                <b-form-group
                id="form-group3"
                label="학과/과정"
                label-for="class"
                description="요청이 필요한 학과/과정을 입력주세요"
                >
                <b-form-input
                    id="class"
                    v-model="form.class"
                    type="text"
                ></b-form-input>
                </b-form-group>
                <b-form-group
                id="form-group4"
                label="이름"
                label-for="name"
                description="담당자 이름을 입력해 주세요"
                >
                <b-form-input
                    id="class"
                    v-model="form.name"
                    type="text"
                ></b-form-input>
                </b-form-group>
                <b-form-group
                id="form-group5"
                label="연락처"
                label-for="phonenum"
                description="연락이 가능한 번호를 입력 주세요"
                >
                <b-form-input
                    id="class"
                    v-model="form.phonenum"
                    type="text"
                ></b-form-input>
                </b-form-group>
                <b-form-group
                id="form-group6"
                label="이메일"
                label-for="email"
                description="연락이 가능한 이메일을 입력 주세요"
                >
                <b-form-input
                    id="class"
                    v-model="form.email"
                    type="text"
                ></b-form-input>
                </b-form-group>
                <b-form-group
                id="form-group7"
                label="추가 요청 및 건의사항"
                label-for="memo"
                description="요청사항을 작성해 주세요"
                >
                <b-form-textarea
                    id="memo"
                    v-model="form.memo"
                    type="text"
                ></b-form-textarea>
                </b-form-group>
                <b-form-group
                id="form-group8"
                label="신청유형"
                label-for="checkedtype"
                description=""
                >
                <b-form-checkbox value="paper" v-model="form.checkedtype">종이책</b-form-checkbox>
                <b-form-checkbox value="ebooks" v-model="form.checkedtype">전자책</b-form-checkbox>
                <b-form-checkbox value="ppt" v-model="form.checkedtype">강의자료</b-form-checkbox>
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
data(){
    return{
      form:{
        bookname:"",
        companyname:"",
        class:"",
        name:"",
        phonenum:'',
        email:'',
        memo:'',
        checkedtype:[]
      },
    }
  },
  methods:{
    ClassCall(event){
        event.preventDefault()
        alert(JSON.stringify(this.form))
        this.$nextTick(() => {
            this.form.bookname = ''
            this.form.companyname = ''
            this.form.class = ''
            this.form.name = ''
            this.form.phonenum = ''
            this.form.email = ''
            this.form.memo = ''
            this.form.checkedtype = []
        })
	},
  }
};
</script>