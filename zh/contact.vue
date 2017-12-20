<template>
<div v-html="">
<!-- Content
================================================== -->

<!-- 960 Container -->
<div class="container">

	<div class="sixteen columns">
	
		<!-- Page Title -->
		<div id="page-title">
			<h2>Contact us</h2>
			<div id="bolded-line"></div>
		</div>
		<!-- Page Title / End -->

	</div>
</div>
<!-- 960 Container / End -->


<!--  960 Container Start -->
<div class="container">

	<!-- Text -->
	<div class="sixteen columns">
		<p>蓝色(蓝色)是提供生命根源的水,是可提供可靠技术的企业的象征。</p>
		<p>以创新技术创造人类与自然共存的绿色环境的全球水处理企业福禄艳的使命。</p>
		<br />
	</div>

	<!-- Contact Form -->
	<div class="twelve columns">
		<div class="headline no-margin"><h4>Contact Form</h4></div>
		
		<div class="form-spacer"></div>
		
		<!-- Success Message -->
		<div class="success-message">
			<div class="notification success closeable">
				<p><span>Success!</span> 블루앤 프로젝트에 관심을 보내주셔서 감사합니다. Thank you for your interest bout BLUE N project.</p>
			</div>
		</div>

		<!-- Form -->
		<div id="contact-form">
			<form method="post" action="contact.php">
				
				<div class="field">
					<label>Name:</label>
					<input type="text" name="name" class="text" />
				</div>
				
				<div class="field">
					<label>Email: <span>*</span></label>
					<input type="text" name="email" class="text" />
				</div>
				
				<div class="field">
					<label>Message: <span>*</span></label>
					<textarea name="message" class="text textarea" ></textarea>
				</div>
				
				<div class="field">
					<input type="button" id="send" value="Send Message"/>
					<div class="loading"></div>
				</div>
				
			</form>
		</div>

</div>
	
	<!-- Contact Details -->
	<div class="four columns google-map">

		<div class="headline no-margin"><h4>Company Location</h4>
			<!-- Text -->
	    			<p>H.Q. Office :</p> <p>전라남도환경산업진흥원 전라남도 강진군 성전면 강진산단로 1길 1, 216호(송학리)</p>
			<p>Seoul R&D Centre Branch :</p> <p>601호(e-TechValley) 서울 용산구 원효로 128</p>
			<br />
		</div>
			
		<!-- Google Maps -->
		<div id="googlemaps" class="google-map google-map-full" style="height:250px"></div>

		<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
		<script src="js/jquery.gmap.min.js"></script>
		
		<script type="text/javascript">
		jQuery('#googlemaps').gMap({
			maptype: 'ROADMAP',
			scrollwheel: false,
			zoom: 13,
			markers: [
				{
					address: '(재단)전라남도환경산업진흥원 전라남도 강진군 성전면 송학리', // 본점주소 전라남도 강진군 성전면 강진산단로 1길 1, 216호
					html: '',
					popup: false,
				}


			],
			
		});
		</script>
		
	</div>
	
	<!-- Contact Details -->
	<div class="four columns">
		<br>
		<div class="headline low-margin"><h4>Social</h4></div>

			<!-- Social Icons -->
			<ul class="social-icons">
				<li><a class="twitter" href="#"><i class="icon-twitter"></i></a></li>
				<li><a class="dribbble" href="#"><i class="icon-dribbble"></i></a></li>
				<li><a class="facebook" href="#"><i class="icon-facebook"></i></a></li>
				<li><a class="linkedin" href="#"><i class="icon-linkedin"></i></a></li>
				<li><a class="pinterest" href="#"><i class="icon-pinterest"></i></a></li>
			</ul>
		
	</div>

</div>
<!-- End 960 Container -->

</div>
<!-- Wrapper / End -->
</div>
</template>