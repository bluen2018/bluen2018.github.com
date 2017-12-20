<template>
<div v-html="">



<!-- Content
================================================== -->

<!-- 960 Container -->
<div class="container">

	<div class="sixteen columns">
	
		<!-- Page Title -->
		<div id="page-title">
			<h2>Company History <span>/ 블루앤 소식</span></h2>
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
	<div class="post post-page">
		<div class="post-img picture"><a href="images/history/BLUEN_HISTORY-02.png" rel="image" title="블루앤 지재권 및 수료증 Intellectual Properties & Certifications of BLUE N Inc."><img src="images/history/BLUEN_HISTORY-02.png" alt="" /><div class="image-overlay-zoom"></div></a></div>
		<a href="#" class="post-icon"><i class="fa fa-file"></i></a>
		<div class="post-content">
			<div class="post-title"><h2><a href="HISTORY_POST(2).html">블루앤 지재권 및 수료증 Intellectual Properties & Certifications of BLUE N Inc.</a></h2></div>
			<div class="post-meta"><span><i class="fa fa-calendar"></i>On 24 December, 2017</span> <span><i class="fa fa-user"></i>By <a href="#">admin</a></span> <span><i class="fa fa-comment"></i>With <a href="#">12 Comments</a></span></div>
			<div class="post-description">
				<p>□ 기업 보유 특허 및 인증서</p>
				<p>  등록 제 10-1788122 레독스 연수기</p>
				<p>  등록 제 10-1799958호 밸브 개폐율과 연동하는 유량측정 시스템</p>
				<p>□ 임직원 등록 특허</p>
				<p>  등록 제 10-1266091 제수밸브 분리장치 및 분리방법</p>
				<p>  등록 제 10-1022074 생 이매패류 장 제조방법</p>
				<p>  등록 제 10-0938823 낚시 집어용 봉돌</p>
				
			</div>
		</div>
	</div>

	<!-- Add Comment -->
	<div class="headline no-margin"><h4>Leave a Comment</h4></div>
		<div class="form-spacer"></div>
		<!-- Form -->
		<div id="contact-form">
			<form method="post">
				
				<div class="field">
					<label>Name:</label>
					<input type="text" class="text" />
				</div>
				
				<div class="field">
					<label>Email: <span>*</span></label>
					<input type="text" class="text" />
				</div>
				
				<div class="field">
					<label>Message: <span>*</span></label>
					<textarea class="text textarea" ></textarea>
				</div>
				
				<div class="field">
					<input type="button" id="send" value="Add Comment"/>
				</div>
				
			</form>
		</div>
		
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
<template>