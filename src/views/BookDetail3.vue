<template>
    <section class="bookdetail">
      <h1 class="booktitle">
        {{bookName}}
        <span>{{ bookDec }}</span>
        <!-- {{ bookUrl }} -->
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
            <h1 class="tapcontit"><strong>"Do it! C# 프로그래밍 입문"</strong>를 소개 합니다.</h1>
            <p>
              <strong> C#에 빠르게 입문하는 지름길<br>
                기본 문법부터 유니티 게임과 아두이노 응용까지!<br><br>
             </strong>

            이 책은 기본이 충실하면서도 프로젝트 실습까지 챙긴 C# 입문서입니다. C#에 빠르게 입문하여 활용할 수 있게 구성했습니다. 방대하고 어려운 문법에 매몰되지 않도록 자주 사용하는 핵심 기능에 집중했으며, 윈도우 앱과 웹 서비스, 게임은 물론 사물 인터넷까지 각 분야에서 C#을 어떻게 활용하는지 4가지 프로젝트로 실습해 봅니다. 또한 책의 전체 과정을 상세하게 소개한 영상 강의로 학습을 돕고, 저자가 운영하는 커뮤니티에서는 책을 보충하는 다양한 콘텐츠로 독자와 만납니다. 


  
  
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='review'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"Do it! C# 프로그래밍 입문"</strong>출판사 리뷰 입니다.</h1>
            <p>
              <strong>기본 문법만 익혀도 웬만한 프로그램은 만들 수 있어요!</strong><br><br>
              어떤 개발 언어든지 기본을 충실하게 배워 두면 다양한 프로그램을 만들 수 있을 뿐만 아니라 새로운 언어도 쉽게 배울 수 있습니다. 이 책은 대부분의 언어에서 공통으로 제공하는 문법과 객체지향 프로그래밍의 핵심을 자세하게 설명하여 기초를 튼튼하게 만들어 줍니다. 또한 C# 버전별로 추가된 새로운 기능까지 살펴보면서 문법 공부를 보충합니다.
  
              

              
            </p>
            <p>
              - 기본 문법부터 객체지향 프로그래밍까지 기초를 튼튼히 합니다.<br>

              - C#을 가장 많이 사용하는 4개 분야의 프로젝트 실습을 진행합니다.<br>

              - C# 1.0~10.0 버전까지 새로운 기능을 다룹니다.<br>

              - 책의 전체 내용을 동영상 강의로 제공합니다.<br>

              - 15차시 강의 진도표를 제공합니다.<br>

              - 전체 실습 과정과 소스를 최신 버전의 개발 도구로 검증했습니다.<br>

              - 웹 기반 개발 도구를 보조 수단으로 제시해 설치 문제가 없습니다. (단, 06~09장 프로젝트 실습은 제외)
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='order'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"Do it! C# 프로그래밍 입문"</strong>목차 입니다.</h1>
            <p>
              <strong>01 C# 알아보기</strong><br><br>
              01-1 프로그래밍 언어와 C#<br>

              01-2 C#이 사는 집 ‘닷넷 프레임워크’<br>

              01-3 절차적 vs 객체지향 프로그래밍<br>

              01-4 C#으로 무엇을 만들까?<br><br><br>
              
  
              
              <strong>02 C# 시작하기</strong><br><br>
              
  
              02-1 비주얼 스튜디오 설치하기<br>

              02-2 첫 번째 C# 프로그램 만들기<br>

              02-3 웹 통합 개발 환경<br><br><br>

              <strong>03 C# 기본기 쌓기</strong><br><br>
              
  
              03-1 데이터를 저장하는 변수<br>

              03-2 프로그램의 흐름을 결정하는 제어문<br>

              03-3 데이터를 연산자로 요리하기<br>

              03-4 데이터 옮겨 담기<br>

              도전 코딩! 섭씨 온도를 화씨 온도로 변환하기
  
              
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='write'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{bookName}}"</strong>저자소개 입니다.</h1>
            <p>
              <strong>박필준<br></strong><br>
  
              

            IT 기술을 활용한 메이커 교육 서비스를 제공하는 이누의 대표  입니다. 유니티와 C#을 활용한 3D 게임, 가상 현실과 증강 현실 콘텐츠를 개발합니다. 또한 아두이노, 라즈베리파이 등 오픈소스 하드웨어와 3D 모델링, 프린팅으로 사물 인터넷 장치 만들기를 좋아합니다. 누구나 자신이 필요한 것을 만들 수 있는 메이커가 될 수 있도록 돕고 싶습니다.

            <br><br>

            주요 경력<br>

            • 《Do it! 키트 없이 만드는 아두이노(이지스퍼블리싱)》 집필<br>

            • SW 마에스트로, 한이음, 프로보노 ICT, 이브와 ICT, 공개 소프트웨어 개발자 대회 멘토로 활동 <br>            
          </p>
          </div>
        </template>
        <template v-else-if="tapselect=='recommendation'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{bookName}}"</strong>추천의 글 입니다.</h1>
            <p>
              <strong>누구나 쉽게 실습해 볼 수 있어요!</strong><br>
              이 책은 누구나 무료로 쉽게 구할 수 있는 비주얼 스튜디오 설치와 사용법을 자세하게 소개합니다. 실습은 대부분 비주얼 스튜디오에서 진행하지만 게임을 만들 때는 유니티, 사물 인터넷을 만들 때는 온라인 저작 도구인 팅커캐드의 서킷을 이용합니다. 또한 C# 문법을 공부할 때는 개발 도구를 설치하지 않아도 웹 브라우저에서 바로 실습해 볼 수 있는 온라인 통합 개발 환경도 소개하여 진입 장벽을 낮췄습니다.
              <br><br>
              

              <strong>보기 편한 책으로 ‘꼼꼼하게’ 배워요!</strong><br>

              책에 담긴 주요한 코드마다 주석이나 말풍선으로 해설을 달아 분석에 도움을 주고 실행 결과를 친절하게 설명합니다. 또한 미니 퀴즈, 도전 코딩을 풀며 배운 내용을 스스로 점검해 볼 수 있습니다.
            </p>
            <p>
              <strong>이런분께 권해 드려요</strong><br>
  
  
  
              - C#을 처음 배우는 학생 또는 취업 준비생 —기본 개념부터 시작하고 싶다!<br>

              - 다른 언어 개발자 — 핵심만 빠르게 배워 프로젝트에 써먹고 싶다!<br>

              - 유니티 콘텐츠 크리에이터 — C# 스크립트를 자유자재로 작성하고 싶다!<br>

              - 아두이노 메이커 — C# 프로그램으로 장치를 제어하고 싶다!<br>
            </p>
            
          </div>
        </template>
        <template v-else-if="tapselect=='reference'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{bookName}}"</strong>자료실 입니다.</h1>
            <p>
              소스는 다음 링크를 클릭하면 내려받을 수 있습니다.<br>
              또한, 저자 깃허브에서는 출간 후 업데이트되는 최신 소스를 내려받을 수 있습니다.<br>
              [소스 파일 내려받기]<br>
              [저자 깃허브] 
            </p>
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
          {label:"저 자", content:"박필준"},
          {label:"발행일", content:"2022-10-13"},
          {label:"사 양", content:"296쪽  |  188*257mm"},
          {label:"I S B N", content:"979-11-6303-408-7"},
          {label:"정 가", content:"20,000 원"},
          {label:"상 태", content:"정상 판매중"},
              ],
        tapselect:"introduce"
      }
    }
  }
  </script>