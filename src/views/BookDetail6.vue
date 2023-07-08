<template>
    <section class="bookdetail">
      <h1 class="booktitle">
        {{ bookName }}
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
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>를 소개 합니다.</h1>
            <p>
              <strong> 똑같이 만들어 보는 것만큼 초보자에게 <br >효과적인 학습법은 없다! 왜냐면 클론 코딩은 "진짜"를 만드니까!<br><br></strong>

              주니어 개발자들의 필수 북마크, '노마드 코더'의 대표 강사 니꼴라스는 세상에서 가장 빠르게 프로그래밍을 배울 수 있는 방법은 '클론 코딩'이라고 말한다. 클론 코딩은 줌, 트위터, 넷플릭스, 인스타그램과 같은 실제 서비스를 복제해 보는 프로그래밍 학습 방법이다. 클론 코딩은 코드를 입력할 때마다 눈앞에 결과물이 바로바로 보이므로 프로그래밍을 빠르고 재미있게 배울 수 있다. HTML, CSS, 자바스크립트를 이제 막 뗀 웹 개발 초보자도 3일이면 충분하다! 이 책은 클론 코딩 시리즈의 세 번째이자, 화상 채팅 서비스인 줌(Zoom)을 똑같이 만들어 본다. 웹 소켓을 이용한 실시간 메시지 교환, 채팅룸 생성, 그리고 실시간 화상 채팅까지 줌의 핵심 서비스를 똑같이 구현한다. 그야말로 진짜 서비스를 만드는 것이다. 

            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='review'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>출판사 리뷰 입니다.</h1>
            <p>
                
              <strong>클론 코딩 시리즈 3탄, 노마드 코더의 동영상 무료 공개! '줌 클론 코딩'이 책으로 나왔다!</strong><br><br>
              출간 즉시 IT 분야 1위를 기록한 《Do it! 클론 코딩 영화 평점 웹서비스》, 《Do it! 클론 코딩 트위터》 출간 이후 '다른 웹 서비스도 클론하고 싶다'는 독자의 요청이 쇄도했다. 이러한 독자 성원에 힘입어 노마드 코더는 '줌 클론 코딩'을 촬영하고 전체 강의를 무료 공개했다. 해당 강의는 총 40개로 구성, 이제 막 프런트 엔드 웹 개발을 초보자가 봐도 이해할 수 있을 정도로 쉽게 풀어냈다. 또한 화상 채팅 서비스의 기본 개념인 웹소켓, SocketIO, WebRTC부터, 자바스크립트를 활용한 메시지 구현, 채팅방 생성, 화상 채팅 기능까지 모두 구현할 수 있다. 실제 노마드 코더 수강생 후기로 "SocketIO와 WebRTC와 같은 고급 네트워크 기술을 쉽게 사용할 수 있다니 실무에 큰 도움이 되었다!"와 같은 찬사가 쏟아지는 중이다. 평소 클론 코딩에 관심이 있었다면, 또는 하나의 서비스를 완벽하게 내 것으로 만들고 싶다면 지금 줌 클론 코딩을 시작해 보자!
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='order'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>목차 입니다.</h1>
            <p>
              <strong> 01 클론 코딩 줌 시작하기</strong><br><br>
              

              __01-1 클론 코딩 줌, 이런 기능을 만들어요!<br>
            __01-2 클론 코딩 수업 준비하기<br>
            __01-3 프로젝트 생성하기<br>
            __01-4 서버를 위한 준비 작업<br>
            __01-5 프런트엔드를 위한 준비 작업<br><br><br>
            <strong> 02 웹소켓을 이용한 실시간 기능 구현하기</strong><br><br>
              

            __02-1 HTTP와 비교하면 이해되는 웹소켓<br>
            __02-2 웹소켓 설치하고 서버 만들기<br>
            __02-3 웹소켓 이벤트<br>
            __02-4 메시지 주고받기



  
              
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='write'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>저자소개 입니다.</h1>
            <p>
              <strong>니꼴라스</strong><br><br>
  
              

            니꼴라스는 9살 때부터 코딩을 시작한 전형적인 '천재 코더'로 대학교 따위는 내팽개치고 혼자서 코딩을 공부했습니다. 그 덕분에 다른 사람들이 대학교에 다닐 때 코딩 강의를 할 수 있었지요. 거액 연봉의 입사 제안도 자유가 더 중요하다며 뻥 차버린 자유로운 영혼의 소유자입니다. 노마드 코더를 설립해 '코딩을 널리 알려 회사에 얽매인 영혼들을 자유케 하자'라는 책임감을 갖고 있습니다.<br>

            - 페이스북 facebook.com/nomadcoders<br>

            - 인스타그램 instagram.com/nomad_coders<br>

            - 유튜브 bit.ly/2yBdEFm<br>

            - 노마드 코더 academy.nomadcoders.co<br>

            - 1:1 채팅 문의 nomad-coders.channel.io<br><br>

            <strong>강윤호</strong><br><br>
  
              

            프리랜서 개발자이자 클래스101, 인프런 등 온·오프라인의 IT 교육 센터에서 프로그래밍 강의를 합니다. CSS와 자바스크립트, 파이썬을 좋아하고, '쉽게 설명할 수 없다면 충분히 이해한 것이 아니다'라는 아인슈타인의 말을 좌우명 삼아 많은 사람에게 도움을 주는 강의를 만들기 위해 노력합니다. 유튜브 채널 '유노코딩'에서 IT 지식 나눔에 힘쓰고 있습니다.
            <br>
            - 유튜브 youtube.com/c/유노코딩




                      
          </p>
          </div>
        </template>
        <template v-else-if="tapselect=='recommendation'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>추천의 글 입니다.</h1>
            <p>
              <strong>웹소켓 개념, 클론 코딩으로 공부하면 어렵지 않아요!</strong><br>
              이 책은 어렵게 느껴졌던 웹소켓 개념을 쉽게 잡을 수 있도록 도와주었어요. 누구나 쉽게 따라 할 수 있는 수준인 데다가, 필요한 정보만 골라서 활용할 수도 있죠. 웹소켓을 이용해 무언가를 만들고 싶은데 시작조차 못했다면 이 책을 꼭 읽어 보세요. 실습을 차분히 따라 하다 보면 혼자서도 줌 앱을 만들 수 있을 거예요!
              <br>
              - 고석진(5년 차 프런트엔드 개발자)
             
              

              
            </p>
            <p>
                <strong>줌을 만드는 전체 과정이 모두 들어 있어요!</strong><br>
                니꼬샘의 친절한 설명과 단계별 실습 덕분에 줌을 만드는 모든 과정이 머릿속에 쏙쏙 들어왔어요! 특히 동영상 강의로만 공부할 때보다 책으로 읽으니 더 명확하게 이해됐어요. 여러분도 줌을 만들고 싶다면 책과 동영상을 같이 보며 공부해 보세요. 그리고 결과물을 완성한 성취감과 개발 지식이 한층 높아지는 경험을 해보세요!
                <br>
                -김현성(15년차 앱, 백엔드 개발자)
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
          {label:"저 자", content:"니꼴라스, 강윤호"},
          {label:"발행일", content:"2022-05-19"},
          {label:"사 양", content:"296쪽  |  188 x 257mm"},
          {label:"I S B N", content:"979-11-6303-353-0, 13000"},
          {label:"정 가", content:"18,000 원"},
          {label:"상 태", content:"정상 판매중"},
              ],
        tapselect:"introduce"
      }
    }
  }
  </script>