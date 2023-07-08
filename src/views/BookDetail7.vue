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
              <strong>복잡한 수식의 원리부터 함수 설명까지!<br>대충 쓰던 엑셀, 이 책 한 권만 보면 실력자 된다!<br>109가지 실무 예제와 함께 배우는 엑셀웍스의 명품 강의를 책으로!<br><br></strong>

              ‘5년 동안 엑셀을 써도 실력이 늘지 않아요….’ 매일 쓰는 엑셀이 매번 어렵게 느껴지는 건 너무 많은 기능을 얼기설기 배웠기 때문이다. 실력자가 되기 위해 정복해야 할 것은 바로 수식, 함수, 데이터 관리! 이를 위해 대한민국 최고 엑셀 블로그 ‘엑셀웍스’ 운영자인 저자가 직접 집필했다.

                이 책은 엑셀의 3가지 핵심인 ‘수식’, ‘데이터’, ‘함수’를 중심으로 설명한다. 가장 기본인 ‘수식’은 그림과 함께 설명해 이해하기 쉽다. ‘데이터’ 부분은 데이터 입력값에 관한 설명부터 조건부 서식, 데이터구조화, 정렬까지 빠짐없이 배운다. 엑셀의 꽃이라 할 수 있는 ‘함수’는 직장에서 필수로 사용하는 것 위주로 정리했다. 이 책만 마치고 나면 나머지 함수나 수식은 충분히 스스로 검색해가며 수월하게 정복할 수 있다.

                저자가 강의하면서 실무에서 쌓은 109가지 예제를 책에 모두 담아 업무에 바로 활용하기 좋다. 저자의 실무 경험에서 우러나오는 말풍선 팁으로 친절함을 높였다. 또한 최신 기술인 챗GPT를 사용해 엑셀에 활용하는 특별 부록까지 준비했다.

                책에 담지 못했지만, 기본 용어조차 모르는 완전 엑셀 초보자를 위해서 저자의 블로그에 무료 강의도 준비했다. 저자의 배려심이 보이는 부분이다.

                이 책과 함께 엑셀 능력을 업그레이드해서 사무실의 능력자로 거듭나자!

            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='review'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>출판사 리뷰 입니다.</h1>
            <p>
                <strong>이 책, 이런 분께 딱 좋습니다!</strong><br><br>

                현재 엑셀 기본 기능만 쓰며 직장 생활을 때우는 분<br>

                - 엑셀 능력을 업그레이드하고 싶은 직장인<br>

                엑셀 실무가 궁금한 취준생, 대학생<br>

                수식과 함수를 제대로 배우고 싶은 엑셀 초보자
            </p>
            <p>
                
              <strong>엑셀, 언제까지 초보 단계에 머무를 것인가? 이제 능력자로 거듭나자!<br>엑셀의 핵심을 3가지로 나눴다! 수식, 데이터, 함수!</strong><br><br>
              프로그래머이지만 사내 엑셀 강사로도 활발하게 활동해 온 저자는 엑셀을 세 부분으로 나눠서 가르친다. 바로 수식, 데이터, 함수다. 이 중 ‘수식’은 엑셀에서 가장 기본이 되는 개념이다. 이 책에서는 수식의 작동 원리를 설명해 외우지 않고 이해할 수 있도록 했다. 엑셀에서 문제가 생긴다면 대부분 데이터 때문일 때가 많으므로 데이터를 어떻게 수집하고 정리하는지도 알려 준다. 엑셀에서는 함수를 500개 넘게 제공하지만, 실무에서 쓰는 함수는 따로 있다. 저자가 강의하면서, 블로그를 운영하면서 쌓인 조회수 데이터를 토대로 중요한 함수들만 골라 담았다. 또한 지면에 넣을 수 없는 내용은 책 속 QR코드로 블로그와 연동했다.
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='order'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>목차 입니다.</h1>
            <p>
              <strong> 준비마당 엑셀 이해하기</strong><br><br>
              

              01 엑셀의 기초 지식 알아보기<br>

                01-1 엑셀의 핵심은 수식, 함수, 데이터!<br>

                01-2 엑셀 버전별 차이점<br><br><br>
            <strong>첫째마당 지나치기 쉬운 엑셀의 핵심, 수식</strong><br><br>
              

            02 엑셀의 핵심, 수식 다루기<br>

            02-1 엑셀 수식의 기본기 익히기<br>

            하면 된다! } 수식을 입력하는 방법<br>

            하면 된다! } 수식을 수정하는 방법<br>

            하면 된다! } 계산 옵션 확인하고 자동으로 바꾸기<br>

            하면 된다! } 텍스트로 저장된 숫자 변환하기<br>

            02-2 수식 연산자와 연산 우선순위<br>

            하면 된다! } 비교 연산자를 활용해 판매실적 자료 정리하기<br>

            하면 된다! } 텍스트 연결 연산자를 활용해 판매실적 자료 정리하기<br>

            하면 된다! } 와일드카드로 텍스트 찾아서 개수 구하기<br>

            하면 된다! } 수식 표시하기<br>

            02-3 상대참조, 절대참조, 혼합참조<br>

            하면 된다! } 상대참조가 포함된 수식을 행 방향으로 입력하기<br>

            하면 된다! } 상대참조가 포함된 수식을 열 방향으로 입력하기<br>

            하면 된다! } 고정된 셀의 값 참조하기<br>

            하면 된다! } 절대참조로 품목별 판매금액 합계 구하기<br>

            하면 된다! } 혼합참조로 인센티브 계산하기<br>

            하면 된다! } 혼합참조로 판매일자별, 상품별 판매금액 합계 집계하기



  
              
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='write'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>저자소개 입니다.</h1>
            <p>
              <strong>정태호 admin@xlworks.net</strong><br><br>
  
              

                엑셀로 만든 프로그램, 엑셀 강좌, 엑셀 함수를 총망라한 유명한 블로그 ‘엑셀웍스’를 운영하고 있다. 사실 본업은 프로그래머, IT 시스템 구축 전문가이다. 엑셀과 프로그래머는 거리가 멀어 보이지만, 프로그래머도 엑셀을 잘 쓰면 데이터 처리, 자료 정리 등의 업무를 원활하게 할 수 있다는 장점 때문에 오랫동안 사용해 왔고 사내 강사로도 활발하게 활동했다. 그렇게 쌓아 온 노하우를 2015년부터 엑셀웍스에 담아냈다. IT 회사인 LG CNS와 GS ITM에서 다양한 솔루션을 개발했고, 2023년 5월 현재 SAP ERP 구축 전문 회사인 디버스코리아에서 테크니컬 컨설턴트 일하고 있다.
                <br>
                

               
                저자와 소통할 수 있는 공간

                [인스타그램] www.instagram.com/excelworks<br>

                [유튜브] www.youtube.com/c/xlworks<br>
                •블로그 주소: xlworks.net<br>

                
          </p>
          </div>
        </template>
        <template v-else-if="tapselect=='recommendation'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>추천의 글 입니다.</h1>
            <p>
              <strong>정리만 잘해도 능력자가 되는 데이터! <br >누구도 알려 주지 않는 사무실 꿀팁 대공개</strong><br>
              엑셀은 결국 데이터를 다루는 프로그램이므로 입력해야 하는 데이터의 종류와 형식을 제대로 알아야 한다. 그래서 데이터를 체계적이고 구조적으로 관리하는 방법도 공부할 수 있도록 했다. 또한 조건부 서식을 통해 데이터를 강조하는 방법과 표 이름 정의로 수식의 참조를 간단하게 만드는 법, 필터로 데이터를 뽑아내는 방법까지도 배운다. 이 내용은 엑셀을 익숙하게 사용하는 사람도 헷갈리기 마련이다. 저자의 실무 노하우까지 얻어 갈 수 있다.
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
          {label:"저 자", content:"정태호"},
          {label:"발행일", content:"2023-05-15"},
          {label:"사 양", content:"520쪽  |  188*257mm"},
          {label:"I S B N", content:"979-11-6303-466-7, 13000"},
          {label:"정 가", content:"28,000 원"},
          {label:"상 태", content:"정상 판매중"},
              ],
        tapselect:"introduce"
      }
    }
  }
  </script>