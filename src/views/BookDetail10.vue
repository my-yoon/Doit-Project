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
                <strong>아마존 네트워크 분야 베스트셀러 1위! <br>전 세계 사람들이 가장 주목하는 블록체인 입문서, 드디어 국내 상륙!</strong><br><br>

                “도대체 블록체인이 뭔데?” 속 시원한 답이 이 책에 다 있다.

                이 책은 과장된 소문에 휘둘리지도, 비트코인에 집중하지도 않는다. 중립적 입장에서 원리를 하나하나 차분히 설명한다. 블록체인이 무엇인지, 왜 필요한지, 어떻게 움직이는지. 25단계를 따라가다 보면 사전지식이 없는 일반인들도 어느새 블록체인을 쉽게 이해할 수 있다. 수학 공식, 코딩 한 줄 없이 문과생도 이해할 수 있게 설명하기 때문이다. 비유를 활용한 설명에 이미 많은 아마존 독자들이 찬사를 보냈다.

                다음 세대가 꼭 알아야 할 개념인 블록체인, 이 책으로 큰 개념부터 세부 작동원리까지 한 번에 잡아 미래로 가는 문을 열기 바란다.

                
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='review'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>출판사 리뷰 입니다.</h1>
            <p>
                <strong>비트코인이 휩쓸고 간 지금, 블록체인의 본질을 볼 때다</strong><br><br>

                블록체인, 비트코인, 암호화폐. 무엇이기에 사람들이 이토록 열광하는 걸까? 정확히 정리하자면, 블록체인은 비트코인이라는 암호화폐를 통해 구현된 ‘개념’이다. 비트코인 투기 현상으로 인해 사람들에게 ‘암호화폐의 기반 기술’로 블록체인이 알려졌지만, 사실 블록체인은 금융거래는 물론 일상을 뒤바꿀 잠재력을 가지고 있다. 인터넷이 우리의 삶을 완전히 뒤바꾼 것처럼.


            </p>
            <p>
                <strong>중립적인 관점에서 25단계로 ‘블록체인의 기본’을 알려준다</strong>
                몇몇 사람들이 ‘블록체인이 떼돈을 벌어다 줄 것’이라며 사람들을 현혹시킨다. 하지만 정작 우리가 알아야 하는 건 ‘블록체인의 기본 원리’다. 이 밑바탕이 없다면 모래 위에 성을 쌓은 것에 불과하다. 이 책은 과장이나 억측 없이, 차분히 블록체인의 기본 원리를 설명한다. 비트코인에 집착하지도, 특정 세부 기술에 치중하지도 않는다. 더도 말고 덜도 말고 ‘다음 세대가 알아야 할 블록체인의 기본’을 다룬다. 비트코인, 이더리움 다 사라져도 흔들리지 않을 블록체인의 기본 원리. 앞으로는 이 원리를 아는 자만이 미래 사회의 작동원리를 이해할 수 있을 것이다.

            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='order'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>목차 입니다.</h1>
            <p>
              <strong>첫째마당 <br >소프트웨어 공학에서 변하지 않는 주요 개념들</strong><br><br>
              

              1단계 - 시스템을 보는 눈 장착하기<br>

                시스템을 계층과 측면으로 분리해 분석하기<br>

                

                2단계 - 큰 그림으로 바라보기<br>

                소프트웨어 아키텍처란 무엇이고 블록체인과 어떤 관계인가<br>

                

                3단계 - P2P 시스템의 엄청난 잠재력<br>

                P2P 시스템이 세상을 어떻게 바꿀 것인가?<br><br><br>


                <strong>둘째마당<br >왜 우리에게 블록체인이 필요한가?</strong><br><br>
              

                                    4단계 - 블록체인에게 떨어진 미션<br>

                    독립적인 컴퓨터를 무리짓게 만들어라<br>

                    

                    5단계 - 그래서 블록체인이 뭔가요?<br>

                    블록체인을 정의하는 네 가지 방법<br>

                    

                    6단계 - 소유권의 본질 이해하기<br>

                    내가 가진 것이 내 것이라고 어떻게 증명할까?<br>

                    

                    7단계 - 이중사용, 블록체인이 해결한다<br>

                    P2P 시스템의 취약성을 이용한 범죄 예방책<br>


  
              
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='write'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>저자소개 입니다.</h1>
            <p>
              <strong>다니엘 드레셔 Daniel Drescher</strong><br><br>
              여러 은행의 전자증권거래 분야에 근무하며 풍부한 경험을 쌓은 금융 전문가이다. 증권거래 자동화, 머신 러닝 및 빅데이터와 관련된 분야에서 중점적으로 활동하고 있다. 베를린 기술 대학 Technical University of Berlin에서 계량경제학econometrics으로 박사학위를 받았고 옥스퍼드대학에서 소프트웨어 공학 석사학위를 취득했다.
             
            </p>
            <p>
              <strong>이병욱</strong><br><br>
              KAIST 전산학과에서 학사 및 석사를 취득하고 LG전자에서 소프트웨어 연구원으로 재직하다 ㈜보험넷을 창업하였다. 이후 삼성생명을 비롯한 국내 유수의 생명보험사와 손해보험사에서 최고 마케팅 임원(CMO), 최고 영업 및 마케팅 임원(CSMO)으로 활약했다. 핀테크 관련 분야, 특히 블록체인과 빅데이터를 활용한 머신 러닝에 관심이 많으며 최근에는 직접 《비트코인과 블록체인》 책을 저술한, 이 분야 최고의 전문가 중 한 명이다.
              <br>
              저서 《비트코인과 블록체인》 
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='recommendation'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>추천의 글 입니다.</h1>
            <p>
              <strong>화성에서 온 경제학자, 금성에서 온 엔지니어 모두 봐야 할 책!</strong><br>
              블록체인을 화폐로 접근하면 이해할 수 없는 게 너무나 많다. 경제학자들은 기술을 모르고 엔지니어는 경제를 모른다. 블록체인의 본질을 이해하지 못하면 투기적 현상만 바라보게 된다. 대표적인 가상화폐인 비트코인이 익명성과 무국적성 때문에 악용되는 경우가 50%에 달한다는 실증적 분석이 나오고 있다.

                이 책은 과장된 광고, 억측에 휩쓸리지 않고 차분히 블록체인 기술의 원리를 하나하나 개념적으로 설명한다. 경제학자들도 엔지니어들도 모두 읽을 수 있는 책이다.
                <br>
                - 엑셈 기술 총괄 부사장, 윤경구
            </p>
            <p>
              <strong> 블록체인이란 큰 덩어리를 조각내 소화시켜 주는 책!</strong><br>
              많은 사람들이 블록체인을 이해할 때 높은 진입장벽을 느낀다. 블록체인은 여러 기술들이 적재적소에 융합된 것이기 때문이다. 하지만 이 책이라면 단계적이고 효과적으로 블록체인을 배울 수 있다. 일단, 블록체인의 장벽인 여러 기술을 조각들로 분리한다. 그런 다음 이 조각들을 수학, 코딩 같은 어려운 설명 없이 각개격파해 나간다. 손쉽게 조각들을 알아가다 보면 종국에는 블록체인이라는 큰 퍼즐을 완성할 수 있게 된다.
                <br>
                - 데일리인텔리전스 CTO, 박재호
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
          {label:"저 자", content:"다니엘 드레셔"},
          {label:"발행일", content:"2018-02-19"},
          {label:"사 양", content:"316쪽  |  152*210mm"},
          {label:"I S B N", content:"979-11-88612-92-5 13000"},
          {label:"정 가", content:"15,000 원"},
          {label:"상 태", content:"정상 판매중"},
              ],
        tapselect:"introduce"
      }
    }
  }
  </script>