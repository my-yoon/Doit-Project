const groupRouter = 	{
	/*
		1. path
			그룹 접근시 사용할 path이름 입니다.
			예) http://mysite.com/AA
			만약 예와 같이 AA로 접근하고 싶다면 path이름을 AA로 작성하세요. 
		2. name
			name은 프로그래밍적으로 페이지를 이동할 때  사용됩니다.
			name은 유일해야 합니다.
			name 작성은 옵션입니다.

		3. component
			그룹 path와 연결되는 컴포넌트를 연결하세요.
			일반적으로 이때 연결되는 컴포넌트는 레이아웃을 담고 있는 컴포넌트가 됩니다.
			여기서 레이아웃이란?
			- 왼쪽에 사이드 메뉴 또는 서브메뉴 
			-오른쪽에는 컨텐츠 출력 영역 
			식으로 특정 모양을 표현하는 컴포넌트를 의미합니다.

			실제 페이지는 children 영역에 위치하게 됩니다.			
			이와 같은 경우 레이아웃 내부에는 router-view ></router-view>
			가 위치하게 됩니다. 즉, 중첩 라우터를 사용하게 됩니다.

		4. children
			실제 화면에 출력할 컴포넌트를 작성하는 속성입니다.
			그룹 라우터 정보와 동일하게 path와 name, component를 작성해줍니다.

		일반적으로 특정 그룹의 경우 동일한 레이아웃에 컨텐츠 내용만 변경되는
		구조를 갖게 됩니다. 
		즉, 라우터 + 레이아웃 + 페이지로 특정 그룹이 구성됩니다.		
		
	*/
	path: "/AA",
	name:"AA",
	component:()=>import("@/layout/CC/index.vue"),
	children: [
		{
			path: "/",
			redirect: "BB"
		},
		{
			path: "BB", 
			component: () => import("@/views/CC/DD")
		}
	]
}

export default groupRouter;