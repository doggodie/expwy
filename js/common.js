(function($){
	$.fn_menu=function(menuid,subid){
		if(menuid) {
			$(".menu a#"+menuid).addClass('selected');
			$(".menu_sub li#"+menuid).addClass('selected');
		}
		if(subid) $(".menu_sub li.selected a#"+subid).addClass('selected');

		$(".menu a.selected,.menu_sub li.selected").addClass('active');
		$(".menu a").on('mouseenter',function(e){
			var mid=$(this).attr('id');
			$(".menu a.active").removeClass('active');
			$(".menu_sub li.active").removeClass('active');
			$(this).addClass('active');
			$(".menu_sub li#"+mid).addClass('active');
		});
		$(".menu_set").on('mouseleave',function(e){
			$(".menu a.active").removeClass('active');
			$(".menu_sub li.active").removeClass('active');
			$(".menu a.selected").addClass('active');
			$(".menu_sub li.selected").addClass('active');
		});
	};
	$.fn_faq=function(faqClass){
		var em=$(faqClass);
		if($.type(em)!='object') return;
		em.find('dt').each(function(idx){
			$(this).on('click',function(){ 
				em.children('dd:visible').hide();
				$(this).next('dd').show();
			});
		});
	};
})(jQuery);
