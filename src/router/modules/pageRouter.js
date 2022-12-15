const pageRouter = 	{ 
	path:"/",
	name:"layout",
	component:()=>import("@/layout/main/index.vue"),
	children: [
		{
			path: "/",
			redirect: "/main",
		},
		{
			path: "/main",
			name:"main",
			component:()=>import("@/layout/main/index.vue"),
		},
		
		
	],
}

export default pageRouter;