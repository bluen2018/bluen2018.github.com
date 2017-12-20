<template>
<div v-html="">

<!-- Content
================================================== -->

<!-- 960 Container -->
<div class="container">

	<div class="sixteen columns">
	
		<!-- Page Title -->
		<div id="page-title">
			<h2>The Hitory of BLUE N <span>/ We walk together with you to a better future!</span></h2>
			<div id="bolded-line"></div>
		</div>
		<!-- Page Title / End -->

	</div>
</div>
<!-- 960 Container / End -->


<!-- Blog Posts
================================================== -->
<!-- 960 Container -->
<div class="container">

<div class="twelve columns">
<div class="padding-right">
	<!-- Post -->
	<div class="post" v-for="(history, index) in historyData">
		<div class="post-img picture">
			<!-- <a href="#/historyDetail"> -->
			<router-link :to="{ path: 'history_detail/'+(index+1)}"><img :src="history.img" alt="" /><div class="image-overlay-link"></div>
			</router-link>
			<!-- </a> -->
		</div>
		<a href="#" class="post-icon"><i class="fa fa-file"></i></a>
		<div class="post-content">
			<div class="post-title"><h2><router-link :to="{ path: 'history_detail/'+(index+1)}">{{history.title}}</router-link></h2></div>
			<div class="post-meta"><span><i class="fa fa-calendar"></i>On 10 August, 2017</span> <span><i class="fa fa-user"></i>By <a href="#">admin</a></span> <span><i class="fa fa-comment"></i>With <a href="#">12 Comments</a></span></div>
			<div class="post-description ellipsis-multi " v-html="history.desc"></div>
			<router-link :to="{ path: 'history_detail/'+(index+1)}"><a class="button color post-entry" >Continue Reading</a></router-link>
		</div>
	</div>
	
<!--
	<ul class="pagination">
		<a href="#"><li>1</li></a>
		<a href="#"><li class="current">2</li></a>
		<a href="#"><li>3</li></a>
		<a href="#"><li>4</li></a>
		<a href="#"><li>5</li></a>
	</ul>
-->

</div>
</div>


<!-- Widget
================================================== -->
<div class="four columns">

	<!-- Search -->
	<div class="widget first">
		<div class="headline no-margin"><h4>Search</h4></div>
		<div class="search">
			<input type="text" onblur="if(this.value=='')this.value='';" onfocus="if(this.value=='')this.value='';" value="" class="text"/>
		</div>
	</div>
	
	<!-- Categories -->
	<div class="widget">
		<div class="headline no-margin"><h4>Categories</h4></div>
			<ul class="links-list-alt">
				<li><a href="#">기업 뉴스</a></li>
				<li><a href="#">환경정책 보도</a></li>
				<li><a href="#">회원갤러리</a></li>
				<li><a href="#">중국 여행</a></li>
				<li><a href="#">Technology Photography</a></li>
			</ul>
	</div>
	
	<!-- Tags -->
	<div class="widget">
		<div class="headline no-margin"><h4>Tags</h4></div>
		<div class="tags">
			<a href="#">COD 계측기</a>
			<a href="#">COD 분석기</a>
			<a href="#">COD</a>
			<a href="#">수질분석기</a>
			<a href="#">수질계측기</a>
			<a href="#">TOC</a>
			<a href="#">수 처리</a>
			<a href="#">비점오염</a>
			<a href="#">비점오염 저감</a>
			<a href="#">유수분리기</a>
			<a href="#">중국 서안 삼성 NAND생산공장</a>
			<a href="#">유산염</a>
			<a href="#">폐수처리</a>
			<a href="#">정수</a>
			<a href="#">REDOX</a>
			<a href="#">레독스 필터</a>
			<a href="#">산화-환원 반응</a>
			<a href="#">레독스 촉매 필터</a>
			<a href="#">상수관망 모니터링</a>
			<a href="#">밸브 모니터링</a>
			<a href="#">밸브 무선 모니터링</a>
			<a href="#">밸브 개폐율</a>
			<a href="#">유량측정</a>
			<a href="#">상수관망 관제 시스템</a>
			<a href="#">환경 강소기업</a>


		</div>
	</div>
	
	<!-- Popular Posts -->
	<div class="widget">
		<div class="headline no-margin"><h4>Popular Posts</h4></div>
		
		<div class="latest-post-blog">
			<a href="#"><img src="images/popular-post-01.png" alt="" /></a>
			<p><a href="#">Maecenas metus lorem nulla, pretium lipsum.</a> <span>12 August 2012</span></p>
		</div>
	
		<div class="latest-post-blog">
			<a href="#"><img src="images/popular-post-02.png" alt="" /></a>
			<p><a href="#">Tetus lorem maecenas facili lipsum pretium.</a> <span>26 July 2012</span></p>
		</div>
			
		<div class="latest-post-blog">
			<a href="#"><img src="images/popular-post-03.png" alt="" /></a>
			<p><a href="#">Lorem pretium metusnula lorem ipsum dolor.</a> <span>16 June 2012</span></p>
		</div>

	</div>
	
	<!-- Twitter -->
	<div class="widget">
		<div class="headline no-margin"><h4>Latest Tweets</h4></div>
		<ul id="twitter-blog"></ul>
			<script type="text/javascript">
				jQuery(document).ready(function($){
				$.getJSON('twitter.php?url='+encodeURIComponent('statuses/user_timeline.json?screen_name=Vasterad&count=2'), function(tweets){
					$("#twitter-blog").html(tz_format_twitter(tweets));
				}); });
			</script>
		<div class="clear"></div>
	</div>
		
	<!-- Flickr -->
	<div class="widget">
		<div class="headline no-margin"><h4>Photo Stream</h4></div>
		<div class="flickr-widget-blog">
			<script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=6&amp;display=latest&amp;size=s&amp;layout=x&amp;source=user&amp;user=36587311@N08"></script>
			<div class="clear"></div>
		</div>
	</div>
	
</div>

</div>
<!-- 960 Container / End -->
</div>
</template>

<script>
module.exports = {
	data: function() {
		return {
			historyData: null,
			fetchError: false
		}
	},

created: function () {
    this.fetchHistory()
  },

  // --------------
  // SCOPED METHODS
  // --------------
  methods: {
    fetchHistory: function () {
      var vm = this
      vm.historyData = []
      vm.fetchError = false
      fetch('history.json')
        .then(function (response) { return response.json() })
        .then(function (historyData) { vm.historyData = historyData.reverse() })
        .catch(function () { vm.fetchError = true })
    },
    getField: function (object, field) {
    	return _.at(object, field)[0]
    } 
  }	
};
</script>
<<style scoped>

.ellipsis-multi {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  line-clamp: 3; /* 라인수 */
  box-orient: vertical;
  word-wrap:break-word; 
  line-height: 1.2em;
  height: 4.6em; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
}
</style>
