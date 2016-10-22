$(window).bind("load", function() {

	//Insert better browse into navigation bar
	function appendMenu() {
		var bbList = "";
		for (var i = 0; i <= hiddenCategories.length - 1; i++) {
			bbList += '<li><a href="' + hiddenCategories[i].link + '">' + hiddenCategories[i].name + '</a></li>';
		};
		$("ul[role='navigation']").append(
			'<li id="better-browse"><span>Browse all</span><span class="caret" role="presentation"></span>'+
			'<div class="triangle"></div>'+
			'<ul>'+
			'<form id="bb-form">'+
			'<input type="textbox" id="bb-search" autocomplete="off" placeholder="Search..." />'+
			'</form>'+
			bbList +
			'</ul>'+
			'</li>'
		);

		// Search box
		var $rows = $("#better-browse li");
		
		$("#bb-search").keyup(function() {
		    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
		    
		    $rows.show().filter(function() {
		        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
		        return !~text.indexOf(val);
		    }).hide();
		});

		// Easter eggs
		$("#bb-form").submit(function(event){
			event.preventDefault();
			
			goToUrl("my list", "https://www.netflix.com/browse/my-list");
			goToUrl("mylist", "https://www.netflix.com/browse/my-list");
			goToUrl("me", "https://www.netflix.com/browse/my-list");
			goToUrl("originals", "https://www.netflix.com/browse/originals");
			goToUrl("new", "https://www.netflix.com/browse/new-arrivals");

			goToUrl("tv", "/browse/genre/83");
			goToUrl("action", "/browse/genre/1365");
			goToUrl("adventure", "/browse/genre/1365");
			goToUrl("anime", "/browse/genre/7424");
			goToUrl("british", "/browse/genre/10757");
			goToUrl("comedies", "/browse/genre/6548");
			goToUrl("comedy", "/browse/genre/6548");
			goToUrl("crime", "/browse/genre/5824");
			goToUrl("cult", "/browse/genre/7627");
			goToUrl("documentaries", "/browse/genre/6839");
			goToUrl("docs", "/browse/genre/6839");
			goToUrl("dramas", "/browse/genre/5763");
			goToUrl("drama", "/browse/genre/5763");
			goToUrl("gay and lesbian", "/browse/genre/5977");
			goToUrl("gay", "/browse/genre/5977");
			goToUrl("lesbian", "/browse/genre/5977");
			goToUrl("halloween", "/browse/genre/108663");
			goToUrl("horror", "/browse/genre/8711");
			goToUrl("independent", "/browse/genre/7077");
			goToUrl("indie", "/browse/genre/7077");
			goToUrl("international", "/browse/genre/78367");
			goToUrl("foreign", "/browse/genre/78367");
			goToUrl("kids and family", "/browse/genre/783");
			goToUrl("kids", "/browse/genre/783");
			goToUrl("family", "/browse/genre/783");
			goToUrl("musicals", "/browse/genre/13335");
			goToUrl("musical", "/browse/genre/13335");
			goToUrl("romance", "/browse/genre/8883");
			goToUrl("sci-fi", "/browse/genre/1492");
			goToUrl("sci fi", "/browse/genre/1492");
			goToUrl("scifi", "/browse/genre/1492");
			goToUrl("special interest", "/browse/genre/6814");
			goToUrl("sports", "/browse/genre/4370");
			goToUrl("sport", "/browse/genre/4370");
			goToUrl("talk shows and stand-up", "/browse/genre/1516534");
			goToUrl("talk shows", "/browse/genre/1516534");
			goToUrl("stand-up", "/browse/genre/1516534");
			goToUrl("standup", "/browse/genre/1516534");
			goToUrl("thrillers", "/browse/genre/8933");
			goToUrl("thriller", "/browse/genre/8933");

			goToUrl("iasip", "https://www.netflix.com/title/70136141");
			goToUrl("brba", "https://www.netflix.com/title/70143836");
			goToUrl("ffly", "https://www.netflix.com/title/70202753");
			goToUrl("king of spades", "https://www.netflix.com/title/70125231");
			goToUrl("ram", "https://www.netflix.com/title/80014749");

			messageAlert("jambon", "Oooh hello");
		})

	}

	// Check if menu exists, if not, menu appears after clicking .profile-link
	if( $("ul[role='navigation']").length ) {
		appendMenu();
	 }
	else {
		$(".profile-link").click(function(){
			appendMenu();
			setTimeout(appendMenu, 10);
		});
	}
	$(document).on("click", ".player-back-to-browsing", function(){
		appendMenu();
		setTimeout(appendMenu, 100);
	})

	// Easter Egg functions
	function goToUrl(code, url) {
		if ( $( "#bb-search" ).val().toLowerCase() === code ) {
			$(function(){
				$(location).attr('href', url);
			}); 
		}
	}
	function messageAlert(code, message) {
		if ( $( "#bb-search" ).val().toLowerCase() === code ) {
			alert(message); 
		}
	}

});