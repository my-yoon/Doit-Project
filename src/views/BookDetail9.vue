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
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>를 소개 합니다.</h1>
            <p>
                <strong>아이패드로 하루 24시간, 365일을 알차게 보내는 방법!<br>삶의 질이 좋아지는 요모조모 아이패드 활용법을 전부 담았다!</strong><br><br>

                이 책은 아이패드를 구입하기 전 확인할 내용, 구입하는 과정, 구입한 후 추천 설정을 초보자의 눈높이에 맞춰 소개한다. 또한 아이패드에서 사용할 필수 앱과 다른 기기와 연동하는 방법, 문제가 생겼을 때 바로 해결하는 방법까지 알려 준다. IT/가전/테크 유튜버인 저자 ‘톡써니’는 아이패드의 무궁무진한 활용성을 영상으로 제작해 알려 왔다. ‘아이패드 구매 팁’부터 업무, 육아, 취미 생활에 활용하는 방법까지 톡써니가 소개한 유튜브 누적 조회수는 1,000만을 기록하기도 했다. 그동안 쌓아 온 아이패드 활용 노하우를 이 책을 통해 전부 공개한다.
            </p>
            <p>
                
                직장인이라면 아이패드의 이메일, 미리 알림, 메모, 아이워크 등을 활용해 업무 생산성을 좀 더 높일 수 있다. 학생이라면 종이로 된 교재를 스캔해서 그 위에 필기를 하면서 공부하면 더욱 편리할 뿐 아니라 효율적이다. 엄마 아빠라면 워크시트와 교육용 앱 등을 이용해 아이에게 부족한 부분을 보충해 줄 수 있다. 그뿐만 아니라 아이패드 인기 앱 프로크리에이트로 드로잉하고, 굿노트로 다이어리를 쓰며 다양한 취미 생활을 즐길 수도 있다. 아이패드를 다른 기기와 연동하는 방법도 친절하게 설명한다.

                여태까지 아이패드를 단순히 넷플릭스나 유튜브를 보는 용도로만 사용해 왔다면, 이제부터는 애플답게 ‘똑똑하게 잘’ 활용할 수 있기를 바란다.


            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='review'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>출판사 리뷰 입니다.</h1>
            <p>
                <strong>조회수 1,000만! 구독자 6만 명을 보유한 IT/가전/테크 대표 유튜버!<br>‘톡써니’가 소개하는 아이패드의 모든 것!</strong><br><br>

                “여러분, 안녕하세요. 톡써니입니다!” 언제나 밝은 웃음과 함께 영상을 여는 IT/가전/테크 채널을 운영하는 유튜버 톡써니가 이번에는 독자들을 위해 아이패드 꿀팁을 한 권의 책으로 엮었습니다. 톡써니가 하루 종일 아이패드와 한몸처럼 생활하며 쌓아 온 노하우를 만나 보세요!
            </p>
            <p>
                <strong>아이패드의 시작을 톡써니와 함께!<br>구입 방법부터 효율을 확 높일 수 있는 추천 설정까지!</strong>
                아이패드를 구입할 때 아이패드 화면의 크기, 셀룰러의 여부 등에 따라 어떤 모델을 선택해야 할지 고민되나요? 아이패드를 처음 켰는데 대충 만져 보다가 결국 유튜브 동영상만 봤다고요? 아이패드를 처음 사용한다면 톡써니가 속속들이 알려 주는 추천 설정을 배워 보세요. 특히 배경화면, 위젯 등을 설정하면 나만의 아이패드에 좀 더 애정이 갈 거예요. 

                매일 쓰는 아이패드인 만큼 환경 설정도 중요하겠죠? 쓸데없이 소모되던 배터리를 아끼는 방법과 검색만 했다 하면 나타나는 사파리의 광고를 없애는 방법까지! 어딘가 모르게 불편했던 아이패드의 온갖 추천/비추천 설정 방법도 모두 공개합니다. 여러분도 톡써니가 소개하는 쾌적한 아이패드 환경 설정을 통해 처음부터 ‘아이패드 마스터’의 길을 걸어가 보세요! 

            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='order'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>목차 입니다.</h1>
            <p>
              <strong>01장 나의 첫 아이패드</strong><br><br>
              

              01-1 나에게 맞는 아이패드 고르기<br>

                01-2 아이패드 구매 전 Q&A<br>

                01-3 아이패드 상태 확인하기

                01-4 애플 계정 만들기<br>

                [보너스] 톡써니 추천! 아이패드 액세서리<br><br><br>


            <strong>02장 아이패드 생활의 시작</strong><br><br>
              

            02-1 아이패드의 기본 제스처<br>

            02-2 앱 설치하기<br>

            02-3 나만의 아이패드 꾸미기<br>

            02-4 톡써니의 아이패드 추천 설정<br>

            02-5 저장 공간을 관리하는 아이클라우드<br>

            02-6 사파리와 친해지기<br>

            02-7 메신저로 소통하기<br>

            [보너스] 톡써니 추천! 아이패드 필수 유·무료 앱


  
              
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='write'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>저자소개 입니다.</h1>
            <p>
              <strong>홍정희(톡써니)</strong><br><br>
              IT/가전/테크 유튜브 채널 TalkSunny TECH를 운영하고 있다. 최신 기기를 먼저 사용해 보는 것에 매우 진심이라 홍콩, 대만, 일본 등 애플 1차 출시국에서 기기를 공수하기도 한다. 특히 직장 업무, 개인 공부, 취미 생활, 아이 교육 등 다양한 곳에서 아이패드와 한몸처럼 생활하고 있는데, 그 과정에서 얻은 노하우를 모아 영상으로 제작한다. 유튜브에 올린 영상으로 도움을 받았다는 구독자들 덕분에 보람을 느끼며 살아가고 있다.
             
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='recommendation'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>추천의 글 입니다.</h1>
            <p>
              <strong>이런 분께 추천해요!</strong><br>
              ✔ 태블릿을 하나 장만해 본전 뽑고 싶어요!<br>

                ✔ 아이패드를 넷플릭스, 유튜브를 보는 용도로만 써왔어요!<br>

                ✔ 여가 시간을 한층 보람 있게! 이런저런 취미 생활하며 갓생 살고 싶어요!<br>

                ✔ 아이패드를 다른 기기와 사용할 때 호환이 너무 어려웠어요!
            </p>
        
          </div>
        </template>
        <template v-else-if="tapselect=='reference'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>자료실 입니다.</h1>
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
          {label:"저 자", content:"홍정희(톡써니)"},
          {label:"발행일", content:"2023-01-11"},
          {label:"사 양", content:"288쪽  |  188*257mm"},
          {label:"I S B N", content:"979-11-6303-439-1, 13000"},
          {label:"정 가", content:"16,000 원"},
          {label:"상 태", content:"정상 판매중"},
              ],
        tapselect:"introduce"
      }
    }
  }
  </script>