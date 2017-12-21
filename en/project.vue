<template>
<div v-html="">
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
				<h5><a href="#/project_1">Convergent Water Treatment&Control System</a></h5>
				<p>Water treatment is any process that makes water more acceptable for a specific end-use. The end use may be drinking, industrial water supply, irrigation, river flow maintenance, water recreation or many other uses, including being safely returned to the environment. Water treatment removes contaminants and undesirable components, or reduces their concentration so that the water becomes fit for its desired end-use.</p>
			</div>
		</div>

		<!-- 1/2 Column -->
		<div class="eight columns portfolio-item architecture">
			<div class="picture"><a href="#/project_2"><img src="images/portfolio/BLUEN_Project-02.png" alt=""/><div class="image-overlay-link"></div></a></div>
				<div class="item-description alt">
				<h5><a href="#/project_2">CODcr+NH3 Smart Water Analyzer</a></h5>
				<p>In environmental chemistry, the chemical oxygen demand (COD) is an indicative measure of the amount of oxygen that can be consumed by reactions in a measured solution. It is commonly expressed in mass of oxygen consumed over volume of solution which in SI units is milligrams per litre (mg/L). A COD test can be used to easily quantify the amount of organics in water.</p>
			</div>
		</div>
		
		<!-- 1/2 Column -->
		<div class="eight columns portfolio-item interior-design architecture real-estate">
			<div class="picture"><a href="#/project_3"><img src="images/portfolio/BLUEN_Project-03.png" alt=""/><div class="image-overlay-link"></div></a></div>
				<div class="item-description alt">
				<h5><a href="#/project_3">REDOX Filter Technology</a></h5>
				<p>REDOX Filter : This is an economical model for removing heavy metals and sterilization without using electricity and chemicals produced by OH radical (OH radical) produced by OH radical produced in REDOX filters.</p>
			</div>
		</div>
		
		<!-- 1/2 Column -->
		<div class="eight columns portfolio-item scenery real-estate">
			<div class="picture"><a href="#/project_4"><img src="images/portfolio/BLUEN_Project-04.png" alt=""/><div class="image-overlay-link"></div></a></div>
				<div class="item-description alt">
				<h5><a href="#/project_4">BLUE EYE : Wireless Valve Monitoring System</a></h5>
				<p>It is a system that measures the flow rate of the flow rate in conjunction with the switching of the butterfly valve, making it easier to install and manage than installing it in the middle of the pipeline.</p>
			</div>
		</div>
			
	</div>
	<!-- End Portfolio Content -->
		
</div>
<!-- End 960 Container -->

</div>
</template>
<script src="/js/project_init.js"/>