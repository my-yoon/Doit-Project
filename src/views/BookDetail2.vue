<template>
  <section class="bookdetail">
    <h1 class="booktitle">
      {{bookName}}
      <span>{{ bookDec }}</span>
    </h1>
    <div class="book-info">
      <div class="imgview">
        <div class="imgbook"><img :src="bookUrl" alt=""></div>
        <div class="bookbtns">
          <b-button variant="lightgray"><i class="bi bi-search" />책 미리보기</b-button>
          <b-button variant="lightgray"><i class="bi bi-hdd" />전자책</b-button>
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
        <b-form-radio name="detail-tap" v-model="tapselect" value="introduce" button  button-variant="detailtap"><i class="bi bi-mic" /> 책소개</b-form-radio>
        <b-form-radio name="detail-tap" v-model="tapselect" value="review" button  button-variant="detailtap"><i class="bi bi-chat-left-text" /> 출판사리뷰</b-form-radio>
        <b-form-radio name="detail-tap" v-model="tapselect" value="order" button  button-variant="detailtap"><i class="bi bi-layout-text-sidebar-reverse" />목차</b-form-radio>
        <b-form-radio name="detail-tap" v-model="tapselect" value="write" button  button-variant="detailtap"><i class="bi bi-journal-text" /> 저자소개</b-form-radio>
        <b-form-radio name="detail-tap" v-model="tapselect" value="recommendation" button button-variant="detailtap"><i class="bi bi-person-check" />추천의글</b-form-radio>
        <b-form-radio name="detail-tap" v-model="tapselect" value="reference" button button-variant="detailtap"><i class="bi bi-inboxes" />자료실</b-form-radio>
      </div>
      <template v-if="tapselect=='introduce'">
        <div class="detailTapCon">
          <h1 class="tapcontit"><strong>"{{bookName}}"</strong>를 소개 합니다.</h1>
          <p>
            <strong>160가지 그림과 스토리텔링으로 이해한다!<br>
            자료구조부터 보안, 인공지능까지 최신 알고리즘 총망라!<br><br>
           </strong>
            

            


            《Do it! 첫 알고리즘》은 자료구조의 기본기부터 시작해 검색 알고리즘, 정렬 알고리즘, 보안과 인공지능까지 160가지 그림과 스토리텔링으로 전부 알려 준다. 처음 책을 펼쳤다면 ‘이게 진짜 알고리즘 책이야?’라는 생각이 들 정도로 그림과 이야기가 많다. 주인공인 다람쥐, 순록, 거북이가 프로그래밍 초보자의 머릿속에 들어간 듯이 사고의 흐름을 따라 가며 알고리즘을 알려 주니, 애쓰지 않아도 쉽게 이해할 수 있다.

            그림으로 배워 깊이가 얕지 않을까 걱정된다면 큰 오산! 알고리즘에서 가장 골치 아픈 ‘시간 복잡도’ 계산식을 하나하나 풀어서 설명한다. 중고등학교에서 배우는 수학 개념 하나(로그 함수)만 짚고 넘어간다면 누구나 알고리즘 공부의 한계를 넘어설 수 있다.

            뿐만 아니라 보안, 딥러닝, 클러스터링 등 최신 알고리즘 개념까지 다뤄 이후에 배우게 될 지식의 밑바탕까지 갖추었다.

            알고리즘을 만나 앞이 꽉 막혔던 프로그래밍 초보자, ‘전과할까’ 잠시 고민한 적 있는 컴퓨터공학과 1학년, 알고리즘 개념을 쉽게 가르칠 수 있는 책을 찾는 교수님, 선생님들께 적극 추천한다. 


          </p>
        </div>
      </template>
      <template v-else-if="tapselect=='review'">
        <div class="detailTapCon">
          <h1 class="tapcontit"><strong>"{{bookName}}"</strong>출판사 리뷰 입니다.</h1>
          <p>
            <strong>스택, 큐, 정렬, 이진 트리, …<br />프로그래밍 공부하는데 알고리즘이 발목을 잡았다면!</strong><br><br>

            

            이 책은 여러 가지 알고리즘을 가볍게 훑어보면서 여러분이 컴퓨터와 프로그래밍에 친숙해지도록 돕습니다.

            ‘프로그래밍을 모르면 큰일나겠다’며 걱정하는 분, 컴퓨터의 정보기술을 잘 활용하고 싶은 분,

            알고리즘을 알고는 있지만 기초를 다시 확실하게 다지고 싶은 분 등

            모든 분께 이 책을 추천합니다.

            이제 막 알고리즘과 프로그래밍에 흥미를 느끼고 배우기 시작한 분이라면 이 책이 더욱 안성맞춤입니다. 알고리즘의 기초 내용을 총망라하여 프로그래밍 입문자를 위한 첫 교재로 적합하기 때문입니다. 프로그래밍 전문 서적으로 공부할 때 이해를 돕는 부교재로 활용해도 좋습니다.
          </p>
        </div>
      </template>
      <template v-else-if="tapselect=='order'">
        <div class="detailTapCon">
          <h1 class="tapcontit"><strong>"{{bookName}}"</strong>목차 입니다.</h1>
          <p>
            <strong>01 꺼내자 ― 데이터 구조</strong><br><br>
            01-1 편하게 꺼내요 ― 데이터 구조<br>

            01-2 쌓아 올려요 ― 스택<br>

            01-3 빨리 온 순서로 줄을 서요 ― 큐<br>

            01-4 스택과 큐 비교하기<br>

            01-5 데이터를 담는 컴퓨터의 기억 장치 ― 메모리<br>

            01-6 메모리의 구조와 비슷해요 ― 배열<br>

            01-7 도전! 프로그래밍 ― 배열로 단어 재조합하기<br>

            01-8 화살표로 연결해요 ― 연결 리스트<br>

            01-9 나무가 거꾸로 서 있는 모습이야 ― 트리 구조<br>

            01-10 이진 트리로 표현해요<br><br><br>
            

            
            <strong>02 찾아보자 ― 검색 알고리즘</strong><br><br>
            

            02-1 데이터를 찾아요 ― 검색<br>

            02-2 도전! 프로그래밍 ― 게임 아이디로 정보 찾아내기<br>

            02-3 차례대로 검색해요 ― 선형 검색<br>

            02-4 단순하게 평가해요 ― O 표기법<br>

            알기 쉬운 용어 풀이 | 함수와 메서드<br>

            02-5 도전! 프로그래밍 ― 게임 데이터 검색 프로그램 만들기 1탄<br>

            02-6 찾는 것이 앞뒤 어느 쪽에 있을까? ― 이진 검색<br>

            02-7 도전! 프로그래밍 ― 가장 느린 검색과 가장 빠른 검색에서 시간 복잡도 구하기<br>

            02-8 단숨에 찾아내요 ― 해시법<br>

            02-9 해시값이 충돌하면 어떻게 하나요?<br>

            02-10 도전! 프로그래밍 ― 게임 데이터 검색 프로그램 만들기 2탄<br>

            
          </p>
        </div>
      </template>
      <template v-else-if="tapselect=='write'">
        <div class="detailTapCon">
          <h1 class="tapcontit"><strong>"{{bookName}}"</strong>저자소개 입니다.</h1>
          <p>
            <strong>마츠우라 켄이치로<br></strong>

 

            도쿄대학교 공학계 연구과 전자공학 전공 석사 과정을 수료했다. 연구소에서 병렬 컴퓨팅 연구에 종사한 뒤 프로그래머, 작가, 강사로 활동하고 있다. 기업이나 연구 기관 전용 소프트웨어, 게임, 라이브러리 등을 개발하고 원격 전송과 동영상으로 교육 연수 강의도 했다. 츠카사 유키와 함께 프로그래밍이나 게임 관련 책을 다수 집필했다.
            <br><br>
            

            

            <strong>츠카사 유키<br></strong>

            

            

            도쿄대학교 이학계 연구과 정보과학 전공 석사 과정을 수료했으며, 대학에서 인공지능(자연어 처리)을 전공했다. 기업이나 연구 기관 전용 소프트웨어, 게임 등을 개발하고 연구를 지원하는 등 실무를 겸하면서 책과 교육용 학습 자료를 집필하고 있다. 또한 논문이나 기술 기사를 번역하며 기술 감독 등도 하고 있다. 학교에서는 프로그래밍 강사로 뛰고 있다.
          </p>
        </div>
      </template>
      <template v-else-if="tapselect=='recommendation'">
        <div class="detailTapCon">
          <h1 class="tapcontit"><strong>"{{bookName}}"</strong>추천의 글 입니다.</h1>
          <p>
            “일상에서 쓰는 말과 비유로, 초보자를 생각하는 마음이 빛나는 책!”<br>



            일상 용어와 실례를 들어 귀여운 그림과 함께 설명해서 책을 보는 것만으로도 기분이 몽글몽글 좋았습니다. 모쪼록 이 책으로 알고리즘 개념에 익숙해져서 프로그래밍의 기초를 다지는 데 도움이 되기를 바랍니다.

            <br><br>

            옮긴이•노은정
          </p>
          <p>
            “어려운 원리도 그림으로 쉽게 설명하네요! 매우 유용합니다.”<br>



            간결하면서도 흥미를 유발하는 그림과 대화체로 컴퓨터 과학의 세계로 쉽게 입문할 수 있도록 도와줍니다. 또한 말로 설명하기 어려운 개념이나 원리도 실생활에서 흔히 볼 수 있는 예제를 이용해서 쉽게 이해할 수 있습니다. 어린 학습자뿐 아니라 컴퓨터 과학을 처음 접하는 독자 모두에게 매우 유용한 책입니다.

            <br><br>

            감수자•홍지연<br>

            《코딩수학동화 팜》, 《코딩과학동화 팜》 저자 
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
  data(){
    return{
      bookinfolists:[
        {label:"저 자", content:"마츠우라 켄이치로, 츠카사 유키"},
        {label:"발행일", content:"2023-04-21"},
        {label:"사 양", content:"280쪽  |  170*225mm"},
        {label:"I S B N", content:"979-11-6303-465-0 13000"},
        {label:"포맷/용량PDF", content:"PDF | 77MB"},
        {label:"정 가", content:"18,000 원"},
        {label:"상 태", content:"정상 판매중"},
			],
      tapselect:"introduce"
    }
  }
}
</script>