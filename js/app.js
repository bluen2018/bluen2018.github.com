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
  { path: '/about', component: httpVueLoader('about.vue') },
  { path: '/business', component: httpVueLoader('business.vue') },
  { path: '/contact', component: httpVueLoader('contact.vue') },
  { path: '/project', component: httpVueLoader('project.vue') },
  { path: '/history', component: httpVueLoader('history.vue') },
  { path: '/history_detail/:idx', component: httpVueLoader('history_detail.vue') },
];

// 3. 라우터 인스턴스를 생성하고 `routes` 옵션을 전달하십시오.
// 여기에 추가 옵션을 전달할 수 있지만, 지금은 간단하게 하겠습니다.
const router = new VueRouter({
  routes // routes: routes 의 약어
});

//Vue.use( Script2);
// 4. 루트 인스턴스를 만들고 마운트하십시오.
// 라우터 옵션을 라우터에 삽입하여
// 전체 응용 프로그램을 라우터가 인식하도록 하십시오.
const app = new Vue({
  router
}).$mount('#app');
// 이제 앱을 시작 해보세요!