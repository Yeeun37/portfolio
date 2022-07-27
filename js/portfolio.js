$(document).ready(function(){
	
	const about = $('#about').position().top;
	console.log(about);
	
	
	//이벤트 썸네일이미지 마우스오버
	$("#event> div> div").hover(
		function(){
			$(this).addClass("ho");			
		} , 
		function(){
			$(this).removeClass("ho");
		}
	);
	//이벤트 썸네일이미지 클릭
	$("#event> div> div").click(function(){
		const x = $(this).children("img").attr("src");		
		const y = x.substr(-4);// ".jpg" 또는 ".png"...	
		const z = x.slice(0,-4);//예_ "images/event-1"부분
		const zz = z + "_big" + y;
		$("#popup img").attr("src" , zz);
		const txt = $(this).children("img").attr("alt");				
		$("#popup img").attr("alt", txt);  //alt속성값 부여
		$("#popup h3").text( txt ); //h3안 콘텐츠 텍스트 부여
		$("#popup").fadeIn();
		$("body").css("overflow","hidden");		
	});
	//팝업 큰이미지 닫기
	$("#popup img").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});
	
	//상단 메뉴 부드럽게 이동
	$("nav a, #top a").click(function(){
		//큰화면에서만, 부드럽게 스크롤이동
		if( $(window).width() > 768 ){
			$("html,body").stop().animate({scrollTop : $(this.hash).offset().top });
		}
		//상단 메뉴 - 활성화 유지 (색변경)
		if( $("nav a") ){
			$(this).addClass("active").siblings().removeClass("active");
		}
	});
	

	
	//휴대폰에서는 상단 배경색 보임
	if( $(window).width()<= 600 ){
		$("nav").addClass("act");
	} else{	
	
	
//휴대폰 아닐때
		//화면 스크롤시 상단 배경색 생김
		$(window).scroll(function(){
			if( $(window).scrollTop() > 100 ){
				$("nav").addClass("act");
			} else {
				$("nav").removeClass("act");
			}
		});
	}
	
	//((모바일이 아닌 화면))스크롤을 내릴때마다 작품이 하나씩 보임
	if( $(window).width()> 600 ){
		$(window).scroll(function(){
			if( $(window).scrollTop()>1600 ){
				$("#portfolio> section").eq(0).addClass("act");
			}
			if( $(window).scrollTop()>2500 ){
				$("#portfolio> section").eq(1).addClass("act");
			}
			if( $(window).scrollTop()>3400 ){
				$("#portfolio> section").eq(2).addClass("act");
			}
			
							if( $(window).scrollTop() > 0){
				$("nav a").removeClass("active");
				$("nav a").eq(0).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop() > 920){
				$("nav a").removeClass("active");
				$("nav a").eq(1).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop() > 1840){
					$("nav a").removeClass("active");
					$("nav a").eq(2).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop() > 4580){
					$("nav a").removeClass("active");
					$("nav a").eq(3).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop() > 6000){
					$("nav a").removeClass("active");
					$("nav a").eq(4).addClass("active").siblings().removeClass("active");
				}
		});		
	}
	
	/*타이핑 애니메이션*/
			var typingBool = false; 
			var typingIdx=0; 
			var liIndex = 0;
			var liLength = $(".typing-txt>ul>li").length;

			// 타이핑될 텍스트를 가져오기 
			var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
				typingTxt = typingTxt.split(""); // 한글자씩 자름. 
			
			if(typingBool==false){ // 타이핑이 진행되지 않았다면 
				typingBool=true; 
			
			var tyInt = setInterval(typing,100); // 반복동작 
		} 
     
			function typing(){ 
			if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
			$(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
				typingIdx++; 
		
			}else{ //한문장이끝나면
					//다음문장으로.. 마지막문장이면 다시 첫번째 문장으로 
			
			if(liIndex>=liLength-1){
			liIndex=0;
			}else{
				liIndex++; 
			}
     
			//다음문장을 타이핑하기위한 셋팅
			typingIdx=0;
			typingBool = false; 
			typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
		   
			//다음문장 타이핑전 1초 쉰다
			 clearInterval(tyInt);
			 setTimeout(function(){
				$(".typing").html('');
			   tyInt = setInterval(typing,100);
			 },1000);
		} 
	} 
	
	
});//끝









