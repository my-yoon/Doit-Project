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
              <strong>클라이언트 설득부터 타이포그래피, 색상 선택, 면접 준비까지!<br>‘일 잘하는 디자이너’가 되는 69가지 방법으로 자신을 지키면서 일하세요!<br><br></strong>

              디자이너에게 필요한 능력에는 어떤 것들이 있을까? 
              <br>‘
            모든 일이 그러하듯이 디자인 역시 자신의 일만 잘한다고 해서 모든 문제가 해결되진 않는다. 클라이언트와 소통하는 방법도 알아야 하고, 자신의 커리어를 드러내는 포트폴리오도 만들 수 있어야 한다. 그래야만 자신을 지키면서 디자이너로 계속 일할 수 있다.

            이 책은 저자가 유튜브 채널에서 ‘초보 디자이너가 알아야 하는 것들’을 주제로 이야기한 200여 편의 영상을 바탕으로 만들어졌다. ‘아이디어가 떠오르지 않을 때’, ‘면접에서 자꾸만 떨어질 때’, ‘초보 디자이너가 가지기 쉬운 편견’ 등 먼저 경험하면서 얻은 진심 어린 조언뿐만 아니라 ‘인쇄 실수를 줄이는 방법’, ‘어도비 아크로벳 프로에서 인쇄용으로 적합한지 확인하는 방법’ 등 구체적인 실무 테크닉까지 망라한다. 

            초보 디자이너라면 한 번쯤 고민할 법한 주제를 다섯 파트로 나누고 총 69가지 조언으로 해결 방법을 제시했다. 지금 자신이 처해 있는 상황을 찾아서 펼쳐 보아도 좋고, 처음부터 끝까지 가볍게 읽어도 출근하기 전 밀려오는 두려움에서 벗어날 수 있을 것이다. 



            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='review'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>출판사 리뷰 입니다.</h1>
            <p>
                <strong>자신을 지키며 ‘일 잘하는 디자이너’로 사는 방법, <br >클라이언트 설득부터 면접 준비까지 모든 것을 담았다!</strong><br><br>

                디자이너에게 필요한 능력은 어떤 것들이 있을까? 모든 일이 그러하듯이 디자인 역시 자신의 일만 잘한다고 해서 모든 문제가 해결되진 않는다. 클라이언트와 소통하는 방법도 알아야 하고, 자신의 커리어를 잘 드러내 포트폴리오를 만드는 방법도 알아야 한다. 그래야만 자신을 지키면서 디자이너로 계속 일할 수 있다.
            </p>
            <p>
                
              <strong>유튜브 200편에 달하는 조언을 책으로!<br>어디에 물어보기 애매했던 고민과 감정까지 해소된다</strong><br><br>
              이 책은 저자가 유튜브 채널에서 ‘초보 디자이너가 알아야 하는 것들’을 주제로 이야기한 200여 편의 영상을 바탕으로 만들어졌다. ‘아이디어가 떠오르지 않을 때’, ‘면접에서 자꾸만 떨어질 때’, ‘초보 디자이너가 가지기 쉬운 편견’ 등 먼저 겪은 진심 어린 조언뿐만 아니라, ‘인쇄 실수를 줄이는 방법’, ‘어도비 아크로벳 프로에서 인쇄용으로 적합한지 확인하는 방법’ 등 구체적인 실무 테크닉까지 망라한다. 
                <br>
                이 책을 본 사람이라면 누구나 든든한 선배가 생긴 기분이 들 것이다. 문제를 대하는 현실적인 실천 방법은 물론, 실무 현장에서 느꼈던 감정과 생각이 ‘나 혼자만 겪는 게 아니었구나’라고 안도하면서 위로와 용기도 조금 얻을 수 있을 것이다. 
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='order'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>목차 입니다.</h1>
            <p>
              <strong> 첫 번째 이야기<br>디자이너로 출근하기 전에 알아야 하는 것들</strong><br><br>
              

              01 • 좋은 디자인이란, 사람의 마음을 움직이는 것<br>

                02 • 디자인할 때 지켜야 할 4원칙<br>

                03 • 디자인할 때의 마음가짐<br>

                04 • 디자인에서 더하기, 빼기, 곱하기, 나누기<br>

                05 • 타깃이 어떤 디자인을 좋아하는지 모르겠어요! <br>

                06 • 색상 조합을 정하는 게 어려워요! <br>

                07 • 아이디어가 떠오르지 않아요! <br>

                08 • 1%의 변화로 감각적인 디자인을 만드는 방법 5가지<br>

                09 • 제 디자인은 왜 지루해 보일까요? <br>

                10 • 저는 왜 손이 느릴까요? <br>

                11 • 디자인 공부는 어떤 순서로 해야 하나요? <br>

                12 • 디자인 감각은 어떻게 기르나요? <br>

                13 • 또 실수를 저질렀어요! <br>

                14 • 인쇄가 생각한 대로 나오지 않아요! <br>

                읽을거리 01 | 그래픽 디자이너가 컴퓨터를 선택할 때 고려할 부분<br><br><br>
            <strong>두 번째 이야기<br>디자이너로 일하며 살아가기</strong><br><br>
              

            15 • 그래픽 디자이너는 구체적으로 무슨 일을 하나요? <br>

            16 • 저는 왜 한 가지에 집중하기 힘들까요?<br>

            17 • 그래픽과 웹, 어느 쪽을 목표로 해야 할까요? <br>

            18 • 디자인 아이디어는 어떻게 떠올리나요?<br>
            19 • 제 디자인은 어딘가 ‘아마추어’ 느낌이 나요! <br>

            20 • 디자이너로 일하면서 어려운 점은 없나요? <br>

            21 • 그럼에도 디자이너로 일하면서 느낀 보람이 있다면? <br>

            22 • 디자이너의 노동 환경은 어떤가요? <br>

            23 • 실제 디자인 회사에서의 하루는 어떤가요? <br>

            24 • 광고 대행사, 광고 제작사 중에 어디가 좋을까요? <br>

            25 • 지금 다니는 회사에서 성장할 수 있을지 불안해요! <br>

            26 • 디자이너로 일하며 가장 괴로웠던 때는?<br>

            27 • 디자인 산업의 미래는 밝을까요? <br>

            28 • 디자이너로 일해도 결국 회사에서는 ‘관리자’가 되는 것 아닌가요? <br>

            29 • 프리랜서는 일을 어떻게 따오나요? <br>

            30 • 디자인에 깊이를 더하려면 어떻게 해야 하나요? <br>

            31 • ‘좋아 보이는’ 감각에만 의존하니 불안해요! <br>

            32 • 영문 글꼴 종류가 너무 많아서 뭘 써야 할지 모르겠어요! <br>

            읽을거리 02 | 디자이너라면 꼭 갖추어야 할 주변 기기<br>



  
              
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='write'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>저자소개 입니다.</h1>
            <p>
              <strong>시부야 료이치</strong><br><br>
              광고 대행사에서 근무한 후 여러 제작 회사의 광고 디자인을 맡아 하는 등 디자인 현장에서 아트 디렉터 디자이너로 20년 넘게 경력을 쌓았다. 2019년부터 유튜브 채널 ‘428: 파치파치디자인’을 개설
            하고 그래픽을 중심으로 디자인 관련 정보를 전하고 있다. 2023년 1월 현재 동영상 200여 편, 전체 조회 수 99만 회, 채널 구독자는 1만 8000여 명에 이른다. 디자인 능력을 키우고 싶어 하는 사람들에게 도움을 주고자 온라인 커뮤니티를 운영하고, 개인 지도 활동 등도 이어가고 있다.
             
            </p>
            <p>
                <strong>역자 안동현</strong><br><br>
                연세대학교 심리학과를 졸업하고 웹 개발 프리랜서를 거쳐 IT 전문 출판사에서 기획과 편집 업무를 담당했다. 번역서로는 《Do it! 게임 10개 만들며 배우는 파이썬》, 《Do it! 첫 통계 with 베이즈》, 《인공지능은 게임을 어떻게 움직이는가?》(이상 이지스퍼블리싱), 《프로그래머, 수학으로 생각하라》, 《처음 만나는 머신러닝과 딥러닝》(이상 프리렉) 등이 있다. 
                
            </p>
          </div>
        </template>
        <template v-else-if="tapselect=='recommendation'">
          <div class="detailTapCon">
            <h1 class="tapcontit"><strong>"{{ bookName }}"</strong>추천의 글 입니다.</h1>
            <p>
              <strong>이런 분께 추천해요!</strong><br>
              • 디자이너가 꿈인 대학생, 취준생<br>

            • 초보 디자이너, 사수가 없어 막막한 실무자<br>

            • 프리랜서로 전향한 디자이너, N잡러<br>

            • 디자이너의 마음을 이해하고 싶은 협업자 
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
          {label:"저 자", content:"시부야 료이치"},
          {label:"발행일", content:"2023-02-03"},
          {label:"사 양", content:"224쪽  |  152*210mm"},
          {label:"I S B N", content:"979-11-6303-448-3 03600"},
          {label:"정 가", content:"16,000 원"},
          {label:"상 태", content:"정상 판매중"},
              ],
        tapselect:"introduce"
      }
    }
  }
  </script>