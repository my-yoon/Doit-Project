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
              <strong> 굵직한 글로벌 기업의 현직 데이터베이스 전문가가 20년간의 기업 실무와 강의 경험을 아낌없이 담았다!<br><br></strong>

              20년간 글로벌 기업에서 데이터베이스 전문가로 근무한 저자의 풍부한 실무 경험을 이 책에 아낌없이 담았다! IT 초보자도 쉽게 이해할 수 있는 난이도와 친절한 설명으로 누구나 쉽게 SQL에 입문할 수 있게 구성했다. 실습에 사용한 데이터베이스는 나스닥, 국가 통계 포털의 실제 데이터로, 현업에서 당장 사용할 수 있는 흥미로운 예제가 가득하다. 또한 수 년간 미국 실리콘 밸리 강의 경험을 바탕으로 비전공자부터 개발자가 알아야 할 표준 SQL의 필수 지식을 체계적으로 구성했다. 이 책 한 권이면 현업에서 데이터 분석을 자유자재로 하는 능력은 물론, IT 기업에서 원하는 데이터베이스 인재로 거듭날 수 있다.

 
  
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='review'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>출판사 리뷰 입니다.</h1>
            <p>
                
              <strong>실제 나스닥 주식, 국가 통계 포털의 데이터베이스로 현업에서 바로 사용 가능한 표준 SQL 쿼리문 짜기!</strong><br><br>
              ‘주식 데이터를 분석해 투자 계획을 세울 수 있을까?’, ‘전국 부동산 현황을 한눈에 보고 싶다면?’, ‘사람들이 가장 많이 이주한 도시는 어디일까?’ 답을 찾고 싶다면 이 책에 담긴 실습을 하면 된다. 《Do it! SQL 입문》에서는 실제 나스닥 주식, 국가 통계 포털의 데이터베이스로 실습해 매우 실용적인 SQL 쿼리문을 배울 수 있다. 가짜 데이터가 아닌 진짜 데이터베이스 전문가들이 사용하는 ‘실제 데이터’로 매력적인 SQL를 시작해 보자.
            </p>
            <p>
                
                <strong>개발자부터 기획자, 마케터, 디자이너에 이르기까지 누구나 당장 시작할 수 있는 SQL 입문서!</strong><br><br>
                저자는 누구나 SQL을 사용해 데이터를 분석하고 이를 통해 기업의 인사이트를 얻을 수 있다고 말한다. 그래서 이 책에는 데이터베이스를 다루는 개발자도, 데이터를 분석하려는 마케터와 기획자도 꼭 알아야 할 내용을 엄선하여 담았다. 01장에서는 데이터베이스와 SQL을 배우는 이유와 기본 개념을 빠르게 설명하고, 02장에서는 데이터베이스를 설치하며 SQL 실습을 준비한다. 03장은 본격적으로 데이터를 다루면서 SQL과 친해지는 시간을 갖는다. 04장과 05장에는 테이블 조인, SQL 함수 등 데이터 분석에 필요한 기술이 담겨 있다. 06장에서는 주식 데이터를, 07장에서는 국가 통계 데이터를 가지고 진짜 현업에서 데이터 분석가가 된 것처럼 실감나게 실습할 수 있다.
              </p>
          </div>
        </template>
        <template v-else-if="tapselect=='order'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>목차 입니다.</h1>
            <p>
              <strong> [01장] 데이터베이스와 SQL의 기초</strong><br><br>
              

            __01-1 데이터베이스의 기본 개념<br>

            ____데이터는 어떻게 데이터베이스가 되는가<br>

            ____데이터베이스는 왜 필요할까<br>

            ____데이터베이스는 ISOS, R1C3으로 정리한다<br>

            ____데이터베이스는 DBMS로 관리한다<br>

            __01-2 데이터베이스 종류<br>

            ____계층형 데이터베이스<br>

            ____네트워크형 데이터베이스<br>

            ____키-값 데이터베이스<br>

            ____관계형 데이터베이스<br>

            __01-3 SQL이란 무엇인가<br>

            ____DBMS 종류에 따른 SQL 종류<br>

            ____SQL 문법 종류<br>

            __01-4 SQL을 배워야 하는 이유<br>

            ____데이터 홍수 속에서 꼭 필요한 SQL<br>


  
              
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='write'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>저자소개 입니다.</h1>
            <p>
              <strong>강성욱</strong><br><br>
  
              

              넥슨, 넥슨 아메리카, NHN(미국 지사)을 거쳐 현재 아마존 웹 서비스에서 데이터베이스 전문가로 근무하고 있다. 10년 연속 마이크로소프트 데이터 플랫폼 MPV로 활동한 능력자이자, 미국 실리콘밸리에서 개발자, 마케터, 데이터 분석가 들에게 SQL을 가르치는 인기 강사이기도 하다. 굵직한 글로벌 기업에서 20년간 근무한 저자의 경험을 이 책에 고스란히 담아, 비전공자부터 개발자에 이르기까지 SQL 문법과 실무 감각을 누구나 쉽게 익힐 수 있도록 알려 준다.
              <br>
                홈페이지: sungwookkang.com | sqlmvp.kr<br><br>

                저서 및 커뮤니티 활동<br>

            - 《우린 이렇게 왔다》(클라우드북스, 2018), 《SQL Server 운영과 튜닝》(영진닷컴, 2012) 등
            <br>
            - SQL PASS LA 운영자, K-DEVCON(미국 한인 IT 커뮤니티) 설립, 한국정보산업연합회 SW마에스트로 멘토 활동




                      
          </p>
          </div>
        </template>
        <template v-else-if="tapselect=='recommendation'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>추천의 글 입니다.</h1>
            <p>
              <strong>업계에서 인정받는 국제적인 데이터베이스 전문가의 친절한 SQL 입문서</strong><br>
              저자는 업계에서 인정받는 데이터베이스 전문가이자, 국내외 굵직한 IT 기업에서 20여 년간 일하며 풍부하게 경험을 쌓은 실력자입니다. 그래서 이 책에는 저자의 모든 경험과 노하우가 고스란히 담겨 있습니다. 이 책을 꼭 한 번, 아니 두 번 읽고 SQL을 여러분의 것으로 만드세요. SQL 문법을 누구나 쉽게 이해할 수 있도록 설명했을 뿐 아니라, 실무에서 사용하는 엄선된 예제도 들어 있으니 혼자서도 충분히 공부할 수 있습니다. 지금까지 출간된 그 어떤 SQL 입문서보다 실용적인 이 책을 읽는다면, 여러분은 데이터를 자유자재로 다루는 능력뿐만 아니라 업무의 효율성과 생산성까지 높일 수 있습니다.
              <br>
                -저스틴 유(Justin Yoo), 마이크로소프트 Senior Cloud Advocate
             
              

              
            </p>
            <p>
                <strong>요즘 기업들이 원하는 가치 창출 능력을 갖추고 싶다면 이 책으로!</strong><br>
                빅데이터 시대에 우리에게 꼭 필요한 업무 능력은 바로 ‘데이터를 잘 다루는 능력’입니다. 이 능력은 IT 업계만이 아니라 거의 모든 산업에서 필요로 한다고 해도 과언이 아닙니다. 하지만 기업에서는 엄청난 실력을 갖춘 데이터베이스 전문가를 찾는 건 아닙니다. 회사에 쌓인 데이터베이스를 업무에 약간만 활용해서 새로운 가치를 창출해 낼 사람을 원하죠. 즉, 누구나 ‘기본적인 SQL 소양만 있으면 된다’는 것입니다. 이 책을 통해 그동안 쌓은 자신의 능력에 SQL이라는 날개를 달아 보세요. 여러분이 어떤 회사에 취업하고 싶거나 이직을 준비할 때 SQL 활용 능력을 갖춘다면 크게 도움받을 것입니다. 다양한 비즈니스에서 원하는 데이터 분석의 기술을 배우고 싶다면 《Do it! SQL 입문》으로 시작하세요.
                <br>
                -미셸 리(Michelle Lee), 메타 플랫폼스(페이스북), 전 디즈니 스트리밍 Lead Data Analyst
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
          {label:"저 자", content:"강성욱"},
          {label:"발행일", content:"2022-07-01"},
          {label:"사 양", content:"360쪽  |  188 x 257mm"},
          {label:"I S B N", content:"979-11-6303-380-6, 93000"},
          {label:"정 가", content:"22,000 원"},
          {label:"상 태", content:"정상 판매중"},
              ],
        tapselect:"introduce"
      }
    }
  }
  </script>