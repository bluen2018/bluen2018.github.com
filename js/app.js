// 0. 모듈 시스템을 사용하는 경우 (예: vue-cli를 이용해서), Vue 및 VueRouter를 가져온 다음 `Vue.use(VueRouter)`를 호출하십시오.

// 1. 라우트 컴포넌트를 정의하십시오.
// 다른 파일에서 가져올 수 있습니다.

// const Main = function (resolve) {
// 	  $.get('main.vue', function (template) {
//     //resolve({ template: template });
//     resolve(template);
// 	  })
//  };


// 2. 라우트를 정의합니다.
// 일부 라우트 정의 각 라우트는 컴포넌트에 맵핑되어야합니다.
// "컴포넌트"는 `Vue.extend()`를 통해 생성된
// 실제 컴포넌트 생성자이거나 컴포넌트 옵션 객체 일 수 있습니다.
// 나중에 중첩 된 라우트에 대해 이야기하겠습니다.
var routes = [
  { path: '/', component: httpVueLoader('main.vue') },
  { path: '/ko', component: httpVueLoader('main.vue') },
  { path: '/ko/about', component: httpVueLoader('about.vue') },
  { path: '/ko/business', component: httpVueLoader('business.vue') },
  { path: '/ko/contact', component: httpVueLoader('contact.vue') },
  { path: '/ko/project', component: httpVueLoader('project.vue') },
  { path: '/ko/history', component: httpVueLoader('history.vue') },
  { path: '/ko/history_detail/:idx', component: httpVueLoader('history_detail.vue') },
  { path: '/ko/project', component: httpVueLoader('project.vue') },
  { path: '/ko/project_1', component: httpVueLoader('project_1.vue') },
  { path: '/ko/project_2', component: httpVueLoader('project_2.vue') },
  { path: '/ko/project_3', component: httpVueLoader('project_3.vue') },
  { path: '/ko/project_4', component: httpVueLoader('project_4.vue') },

  { path: '/en', component: httpVueLoader('/en/main.vue') },
  { path: '/en/about', component: httpVueLoader('/en/about.vue') },
  { path: '/en/business', component: httpVueLoader('/en/business.vue') },
  { path: '/en/contact', component: httpVueLoader('/en/contact.vue') },
  { path: '/en/project', component: httpVueLoader('/en/project.vue') },
  { path: '/en/history', component: httpVueLoader('history.vue') },
  { path: '/en/history_detail/:idx', component: httpVueLoader('history_detail.vue') },
  { path: '/en/project', component: httpVueLoader('/en/project.vue') },
  { path: '/en/project_1', component: httpVueLoader('/en/project_1.vue') },
  { path: '/en/project_2', component: httpVueLoader('/en/project_2.vue') },
  { path: '/en/project_3', component: httpVueLoader('/en/project_3.vue') },
  { path: '/en/project_4', component: httpVueLoader('/en/project_4.vue') },
  
  { path: '/zh', component: httpVueLoader('/zh/main.vue') },
  { path: '/zh/about', component: httpVueLoader('/zh/about.vue') },
  { path: '/zh/business', component: httpVueLoader('/zh/business.vue') },
  { path: '/zh/contact', component: httpVueLoader('/zh/contact.vue') },
  { path: '/zh/project', component: httpVueLoader('/zh/project.vue') },
  { path: '/zh/history', component: httpVueLoader('history.vue') },
  { path: '/zh/history_detail/:idx', component: httpVueLoader('history_detail.vue') },
  { path: '/zh/project', component: httpVueLoader('/zh/project.vue') },
  { path: '/zh/project_1', component: httpVueLoader('/zh/project_1.vue') },
  { path: '/zh/project_2', component: httpVueLoader('/zh/project_2.vue') },
  { path: '/zh/project_3', component: httpVueLoader('/zh/project_3.vue') },
  { path: '/zh/project_4', component: httpVueLoader('/zh/project_4.vue') },

];
 function changeLang(lang)
 {
   $cookies.set("bluen-lang",lang); 
    location.reload(true);
 }
// 3. 라우터 인스턴스를 생성하고 `routes` 옵션을 전달하십시오.
// 여기에 추가 옵션을 전달할 수 있지만, 지금은 간단하게 하겠습니다.
const router = new VueRouter({
  routes:routes, // routes: routes 의 약어
  scrollBehavior : function(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }    
  }
});
router.onReady(function(){
  console.log("router.onReady");
  console.log("router.onReady");
  console.log("router.onReady");
});
router.beforeEach(function(to, from, next){
  var lang = this.$cookies.get("bluen-lang"); 
  console.log("라우터 :"+to.path + " : "+lang);
  if(lang==null)
  {
    lang="/ko";
    this.$cookies.set("bluen-lang",lang); 
  }
  if(to.path.indexOf('/ko')==0 ||to.path.indexOf('/en')==0 || to.path.indexOf('/zh')==0)
  {
    next();    
    return;
  }
  else
  {
    next(lang+to.path);
  }
});

//Vue.use( Script2);
// 4. 루트 인스턴스를 만들고 마운트하십시오.
// 라우터 옵션을 라우터에 삽입하여
// 전체 응용 프로그램을 라우터가 인식하도록 하십시오.
const app = new Vue({router:router}).$mount('#app');
// 이제 앱을 시작 해보세요!