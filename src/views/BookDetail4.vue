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
              <strong>  “개발자는 다 맥북을 써야 하나?”와 같은 사소한 질문부터 “서버가 대체 뭔지?”까지~♬<br > 전공자와 비전공자 모두 알고 싶어 하는 질문을 5분 안에 해결해 주는 IT 잡학사전이 나왔다!<br><br></strong>

            IT 분야 직장에서 일하는 나… 요즘 주변에 이상한 사람이 너무 많다. 어떤 사람은 숫자를 0부터 센다. 보통 1부터 세지 않나? 또, 어떤 사람은 “웹 사이트를 만드는데 지금 라이브러리가 문제라서 다른 라이브러리를 써야 한다.”라고 말한다. 라이브러리는 도서관, 아니었나? 

                으악! 외계어로 소통하는 별에 나 혼자 불시착한 것 같다. 난 어떻게든 저 외계인 같은 인간들과 소통해야 한다고! 그런데 어디부터 시작해야 하지? 앞길이 막막하다. 요즘 IT 회사에 출근하면 매일 듣는 용어들, 주식을 해도 IT 지식은 기본 상식인가 보다. IT 지식 관련 도서를 모두 볼 수도 없고… 진짜 초보의 눈으로 IT 기초 지식을 5분 안에 쉽게 설명해 주는 책이 있다면 어떨까?! 숫자를 0부터 세는 이유! 라이브러리를 자꾸 말하는 이유! 이제는 알 수 있을 것 같다. 내가 정말 쉽게 이해할 수 있는 책이 드디어 나왔다. IT 5분 잡학사전!


  
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='review'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>출판사 리뷰 입니다.</h1>
            <p>
                
              <strong> “60대 부모님도 이해할 수 있는 IT 지식 콘텐츠를 만들고 싶었어요.”<br >누구나 쉽게 이해할 수 있는 IT 지식이 가득한 입문서!</strong><br><br>
                40만 IT 지식 유튜브 채널을 운영하는 노마드 코더의 니꼴라스와 린. 어느 날 ‘나 진짜 API를 너희 부모님도 이해하실 수 있도록 쉽고 간단하게 설명할 수 있는데 영상으로 찍어 보면 어떨까?'라는 니꼴라스의 말에 유튜브에 ‘API 기초 개념 잡아 드림. 5분 순삭!’이라는 영상을 찍어 올렸다. 그런데 얼마 지나지 않아  엄청난 조회 수를 기록한 인기 영상이 되었다. 이후 60대 부모님도 이해할 수 있는 IT 지식 영상을 만들어 차곡차곡 쌓다 보니 지금의 노마드 코더 유튜브 채널이 탄생했다. 150개가 넘는 노마드 코더 영상 중 IT 시대를 살아가는 사람에게 꼭 필요한 주제를 엄선하여 재분류하고, 노마드 코더의 편집자와 기획자가 내용을 보완한 후 IT 전문가의 감수를 거쳐 탄생한 찐 IT 입문서! 어떻게든 IT를 이해해야 하는 사람이라면 지금 읽어 보면 어떨까? 또한 비전문가뿐 아니라 초보 개발자도 니꼴라스의 거침없는 설명에 속이 시원해진다.  
              

              
            </p>
            
          </div>
        </template>
        <template v-else-if="tapselect=='order'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>목차 입니다.</h1>
            <p>
              <strong> _01 마당 코딩별 안내서 ― 기초 편</strong><br><br>
            __에피소드 01 개발자에 대한 오해 5가지! <br>

            __에피소드 02 어떤 언어부터 공부해야 할까? <br>

            __에피소드 03 새 언어를 쉽게 배우는 노하우? <br>

            __에피소드 04 언어 이름은 왜 그렇게 지었을까? <br>

            __에피소드 05 C, C++, C#은 이름처럼 비슷할까? <br>

            __에피소드 06 왜 나만 오류가 자주 생길까? <br>

            __에피소드 07 파이썬은 왜 이렇게 인기가 많을까? <br>

            __에피소드 08 파이썬이 C 언어보다 느린 이유는? <br>

            __에피소드 09 자바스크립트는 웹 개발에만 쓰는 언어일까? <br>

            __에피소드 10 코틀린은 정말로 자바와 100% 호환될까? <br>

            __IT 쿠키 상식 프로그래밍 초보자가 하기 쉬운 실수 ① <br>

            __IT 쿠키 상식 세상에서 가장 난해한 프로그래밍 언어 ① <br>

            __IT 쿠키 상식 세상에서 가장 난해한 프로그래밍 언어 ② 


  
              
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='write'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>저자소개 입니다.</h1>
            <p>
              <strong>노마드 코더 · 니꼴라스(Nicolás Serrano Arévalo)</strong><br><br>
  
              

                9살 때부터 코딩을 시작한 전형적인 ‘천재 코더’ 니꼴라스. 대학교 따위는 내팽개치고 혼자서 코딩을 공부했습니다. 그 덕분에 다른 사람들이 대학교 다니는 나이에 코딩 강의를 할 수 있었습니다. 거액 연봉의 입사 제안도 자유가 중요하다며 뻥 차버린 자유로운 영혼의 소유자입니다. 노마드 코더를 설립해 ‘코딩을 널리 알려 회사에 얽매인 영혼들을 자유케 하자’라는 책임감을 갖고 있습니다.


                <strong>노마드 코더 · 배지현(baedori3@gmail.com)</strong><br><br>
                

                노마드 코더의 유튜브 편집자이자 다양한 콘텐츠를 생산하는 크리에이터입니다. 개발자 취업을 상상하며 노마드 코더 사이트에서 강의를 듣다가 지금까지 노마드 코더에서 열일하고 있습니다. 코딩 외에도 게임, 동영상, 음악 등 다양한 분야에 관심이 많고, 새로운 일에 도전하는 것을 매우 좋아합니다.


                      
          </p>
          </div>
        </template>
        <template v-else-if="tapselect=='recommendation'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>추천의 글 입니다.</h1>
            <p>
              <strong>짧은 시간에 IT 기술을 편안하게 습득하고 싶다면?</strong><br>
              새로운 프로그래밍 언어와 IT 기술이 하루가 다르게 쏟아지고 있습니다. 아무리 노력해도 모든 기술을 다 접해 볼 수는 없겠죠. 오죽하면 ‘기술 부채’라는 말이 생겼을까요? 하지만 이 책을 통해 새로운 IT 용어, 새로운 개발 환경, 그리고 새로운 프로그래밍 언어를 빠르고 가볍게 훑어볼 수 있어서 좋았습니다. 니꼬쌤의 음성이 지원되는 것도 좋았어요. 늘 깨어 있는 여러분을 응원합니다.
              <br><br>
              - 고경희•마이크로소프트 MVP, 《Do it! HTML+CSS+자바스크립트 웹 표준의 정석》 저자
              

              
            </p>
            <p>
                <strong>비전공자도 이해할 수 있는 IT 지식이 가득해요!</strong><br>
                요즘 IT 분야는 알아야 할 내용이 부쩍 많아졌다는 생각이 듭니다. 너무 많은 개념에 빠져 허우적대고 헤메는 사람이 많죠! 이런 상황에 힘들어하는 여러분에게 이 책이 길잡이가 되어 줄 것이라고 확신합니다. 이 책이 있다면 IT 공부에 대한 의욕을 잃지도 않을 것이고, 알고 싶은 것을 찾지 못해 헤메는 일도 없겠다는 생각을 했습니다. 또한 니꼴라스 특유의 친근한 어투가 더해져서 어려운 내용도 쉽고 빠르게 배울 수 있을 것입니다. 개발자도, 개발자가 아니어도 알아 두면 좋을 IT 지식이 가득합니다. 재미있게 보았습니다. 감사합니다.
              <br><br>
              - 조이슬•글루아(Gluwa) 개발자
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
          {label:"저 자", content:"니꼴라스, 배지현"},
          {label:"발행일", content:"2022-09-30"},
          {label:"사 양", content:"272쪽  |  170*225mm"},
          {label:"I S B N", content:"979-11-6303-400-1 13000"},
          {label:"정 가", content:"16,500 원"},
          {label:"상 태", content:"정상 판매중"},
              ],
        tapselect:"introduce"
      }
    }
  }
  </script>