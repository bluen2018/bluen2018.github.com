<template>
	<div v-html>


<!-- Content
================================================== -->

<!-- 960 Container -->
<div class="container">

	<div class="sixteen columns">
	
		<!-- Page Title -->
		<div id="page-title">
			<h2>BLUE N Projects<span>/ Water Solutions
				</span></h2>
			
			<!-- Filters -->
			<div id="filters">
				<ul class="option-set" data-option-key="filter">
					<li><a href="#filter" class="selected" data-option-value="*">All</a></li>
					<li><a href="#filter" data-option-value=".interior-design">Water Solution</a></li>
					<li><a href="#filter" data-option-value=".architecture">COD Analyzer</a></li>
					<li><a href="#filter" data-option-value=".scenery">REDOX filter</a></li>
					<li><a href="#filter" data-option-value=".real-estate">BLUE EYE</a></li>
				</ul>
			</div>
			<div class="clear"></div>
			
			<div id="bolded-line"></div>
		</div>
		<!-- Page Title / End -->

	</div>
</div>
<!-- 960 Container / End -->

<!-- 960 Container -->
<div class="container">
	
	<!-- Portfolio Content -->
	<div id="portfolio-wrapper">
			
		<!-- 1/2 Column -->
		<div class="eight columns portfolio-item interior-design architecture">
			<div class="picture"><a href="#/project_1"><img src="images/portfolio/BLUEN_Project-01.png" alt=""/><div class="image-overlay-link"></div></a></div>
			<div class="item-description alt">
				<h5><a href="#/project_1">수 처리 시스템 Convergent Water Treatment&Control System</a></h5>
				<p>생명의 근원인 물의 적정처리를 위한 시스템에 핵심 기술인 촉매 합금 필터를 적용하여 저 에너지 무약품 처리 공정을 제공합니다.</p>
			</div>
		</div>

		<!-- 1/2 Column -->
		<div class="eight columns portfolio-item architecture">
			<div class="picture"><a href="#/project_2"><img src="images/portfolio/BLUEN_Project-02.png" alt=""/><div class="image-overlay-link"></div></a></div>
				<div class="item-description alt">
				<h5><a href="#/project_2">수질 자동분석기 CODcr+NH3 Smart Water Analyzer</a></h5>
				<p>배출수의 화학적산소요구량(COD)을 암모니아와 함께 분석하고, 그 데이터를 수집-전송하는 수질(COD) 자동분석기를 수출합니다.</p>
			</div>
		</div>
		
		<!-- 1/2 Column -->
		<div class="eight columns portfolio-item interior-design architecture real-estate">
			<div class="picture"><a href="#/project_3"><img src="images/portfolio/BLUEN_Project-03.png" alt=""/><div class="image-overlay-link"></div></a></div>
				<div class="item-description alt">
				<h5><a href="#/project_3">레독스 촉매 필터 REDOX Filter Technology</a></h5>
				<p>REDOX 필터에서 생성된 OH Radical (OH 라디칼)의 산화 환원 반응을 이용하여 전기와 약품 등을 사용하지 않고 중금속을 분해하고 세균을 살균하는 경제적 모델입니다.</p>
			</div>
		</div>
		
		<!-- 1/2 Column -->
		<div class="eight columns portfolio-item scenery real-estate">
			<div class="picture"><a href="#/project_4"><img src="images/portfolio/BLUEN_Project-04.png" alt=""/><div class="image-overlay-link"></div></a></div>
				<div class="item-description alt">
				<h5><a href="#/project_4">상수관망 밸브정보 기술 Wireless Valve Monitoring System</a></h5>
				<p>상수도 밸브와 연동하여 개폐 정도를 계량화하여 제공하고 통과 유량 측정하여 광역 상수도 관리에 최적 데이터를 제공하는 System을 제공합니다.</p>
			</div>
		</div>
			
	</div>
	<!-- End Portfolio Content -->
		
</div>
<!-- End 960 Container -->


</div>
</template>
