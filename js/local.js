






$(document).ready(function() {




	var options = {
		autoPlay: false,
		nextButton: true,
		prevButton: true,
		reverseAnimationsWhenNavigatingBackwards: false,
		startingFrameID: 1,

		afterLoaded: function(){
			$("#timelineNav ul li:nth-child("+(sequence.settings.startingFrameID)+") img").addClass("active");
			$("#timelineNav ul li:nth-child("+(sequence.settings.startingFrameID)+") div.tooltip2").fadeIn("500");
		},

		beforeNextFrameAnimatesIn: function(){
			$("#timelineNav ul li:not(:nth-child("+(sequence.nextFrameID)+")) img").removeClass("active");
			$("#timelineNav ul li:nth-child("+(sequence.nextFrameID)+") img").addClass("active");
			$("#timelineNav ul li:not(:nth-child("+(sequence.nextFrameID)+")) div.tooltip2").fadeOut("500");
			$("#timelineNav ul li:nth-child("+(sequence.nextFrameID)+") div.tooltip2").fadeIn("500");
		}
	};

	var sequence = $("#sequence").sequence(options).data("sequence");

	$("#timelineNav li").click(function(){
		if(!sequence.active){
			$(this).children("img").removeClass("active").children("img").addClass("active");
			sequence.nextFrameID = $(this).index()+1;
			sequence.goTo(sequence.nextFrameID);
		}
	});

	$('a[rel=tooltip]').mouseover(function(e) {
		var tip = $(this).attr('title');
		$(this).attr('title','');
		$(this).append('<div id="tooltip">' + tip + '</div>');

		var halfWidth = (0 - ($("#tooltip").width())/2) + 17;

		$("#tooltip").css("marginLeft", (halfWidth));

		$('#tooltip').fadeTo("500", 0.9);

	}).mouseout(function() {
		$(this).attr('title',$('#tooltip').html());
		$(this).children('#tooltip').remove();
	});










		var quoteSource=[
		{quote:"Chad won the Nobel Peace prize when he was 5 years old."},
{quote:"Katie frequently sends ideas to Crayola for new crayon colors."},
{quote:"Katie is an avid ham radio user."},
{quote:"Chad still checks his closet for monsters each night."},
{quote:"Katie learned how to weld when she was in the Navy."},
{quote:"Chad’s favorite superhero as a child was Joe DeNardo."},
{quote:"Katie worked as a sideline reporter for ABC’s coverage of the 1991 Rose Bowl."},
{quote:"Chad once accidentally swallowed his spoon when eating a hot fudge sundae. It’s still in his stomach to this day."},
{quote:"Chad was roommates with LeBron James in college."},
{quote:"Katie starred as ‘Dead Girl on Tree’ in Freddy vs Jason."},
{quote:"The character ‘Dotty’ in A League of Their Own is based on Katie’s grandmother."},
{quote:"Chad was an alternate on the USA’s equestrian team at the 1992 Olympics in Barcelona, Spain."},
{quote:"Chad designed the wedding cake after taking a 20-minute class at Michael’s."},
{quote:"Katie was trampled at Toys-R-Us when she tried to buy a Tickle-Me-Elmo on Black Friday."},
{quote:"Chad won $350 by betting on a turtle race."},
{quote:"Katie finished in seventh place at Nathan’s annual Fourth of July hot dog eating contest."},
{quote:"Chad is the Pirate Parrot."},
{quote:"Katie owns every Goosebumps book except for ‘Attack of the Jack-O'-Lanterns’."},
{quote:"Chad is afraid of the color beige."},
{quote:"Katie once starred in an infomercial as the ‘frustrated customer’."},
{quote:"Chad required surgery to fix a torn ligament he suffered while trying to solve a Rubik’s cube."},
{quote:"Katie is friends with Princess Kate on Facebook.  "},
{quote:"Chad was once kicked out of Ponderosa for eating too much potato salad."},
{quote:"Katie was knighted by the Queen of England."},
{quote:"Chad is convinced that Harry Potter is real."},
{quote:"Katie’s favorite candy bar is Zagnut."},
{quote:"Chad’s hero is Ruth from the Golden Girls."},
{quote:"Katie had to have knee surgery to repair an injury she suffered while doing Parkour."},
{quote:"Every morning, Chad recites the motivational speech from Braveheart to get pumped up for the day."},
{quote:"Katie has a glass eye and loves when people try to guess which one is fake."},
{quote:"In college, Katie made extra money as a member of the Jeopardy Clue Crew."},
{quote:"Chad is the Dugger’s 20th child. They refuse to acknowledge his existence."},
{quote:"Chad tried out to be the new singer of Journey."},
{quote:"Katie was featured on the show ‘Finding Bigfoot’."},
{quote:"Chad wrote an episode of Law & Order: SVU that will air in 2014."},
{quote:"The character ‘Veronica Vaughn’ from Billy Madison inspired Katie to become a school teacher."},
{quote:"Katie’s favorite actor is Reginald VelJohnson"},
{quote:"Katie finished in third place when she was on Global Guts. She lost to a much younger boy from Ukraine."},
{quote:"Chad had a small role in the movie ‘The Sandlot’ as the character ‘Yeah Yeah’."},
{quote:"Chad and Katie’s cat Eva is on the Fancy Feast can."},
{quote:"Chad is a ghost whisperer."},
{quote:"Katie once had an out-of-body experience at a Sugar Ray concert."},
{quote:"Katie is the record holder for most suicide wings eaten at Quaker Steak and Lube."},
{quote:"Chad is a founding member of the Boyz II Men fan club."},
{quote:"Katie says ‘Sorry!’ everytime Mario jumps on a goomba."},
{quote:"Chad writes all of the jokes that end up on Popsicle sticks."},
{quote:"Katie can play any song on the harmonica. She loves requests!"},
{quote:"Chad once competed in an arm wrestling tournament. He lost every match."},
{quote:"Katie wore her hair in a side pony tail until 9th grade."},
{quote:"Katie is an unsuccessful dub-step artist."},
{quote:"Chad lost a toe during the Running of the Bulls."},
{quote:"Katie has to buy her clothes from the American Girl catalog for dolls."},
{quote:"Katie lost all of her savings when she bet against the Harlem Globetrotters."},
{quote:"Chad refuses to go on small boats after watching Gilligan’s Island as a child."},
{quote:"Katie’s name is on the Stanley Cup."},
{quote:"Chad once accidentally got his gum stuck in Troy Polamalu’s hair."},
{quote:"Katie was briefly ranked #1 in the world in Call of Duty multiplayer."},
{quote:"Katie is an above average kick boxer."},
{quote:"Chad has to ask Katie to open new pickle jars."},
{quote:"Katie once set the kitchen on fire trying to make a bowl of cereal."},
{quote:"Chad once shot his eye out with an Official Red Ryder Carbine-Action Two-Hundred-Shot Range Model Air Rifle."},
{quote:"Katie has a lifetime ban from the Rock and Roll Hall of Fame."},
{quote:"To this day, Katie wishes she was married to Joey from New Kids on the Block."},
{quote:"Chad is a world-champion banjo player."},
{quote:"Katie can lift more than three times her own body weight."},
{quote:"Chad has never lost a game of tic-tac-toe."},
{quote:"Katie doesn’t use the Contacts app in her phone. Instead, she has memorized everyone’s phone number."},
{quote:"Chad was accidentally pocket-dialed by Justin Timblerlake last summer."},
{quote:"Katie has never been on a boat."},
{quote:"Chad was once arrested for flying a kite illegally."},
{quote:"Katie has spent every summer since becoming a teacher trying to find the island from Lost."},
{quote:"Chad thinks PENN-DOT does a fine job."},
{quote:"Katie was professionally trained as a sniper in the Marines."},
{quote:"Chad collects chainsaws."},
{quote:"Katie hit the mega-millions jackpot in 2011 but didn’t realize it until after the ticket had expired."},
{quote:"Chad voted for Honey Boo Boo for president."},
{quote:"Katie was born in the Indiana Burger King parking lot because Bill thought he had time to stop for a Whopper."},
{quote:"Chad was on ‘Who Wants to be a Millionaire’ but got the first question wrong."},
{quote:"Katie was the voice of one of the minions in ‘Despicable Me’."},
{quote:"Chad was in the marching band in high school even though he couldn’t play an instrument. He marched empty-handed."},
{quote:"Katie tried to start a fight club in Indiana."},
{quote:"Chad was kicked out of Old Navy for harassing the mannequins."},
{quote:"Chad’s wedding suit is actually made out of denim."},
{quote:"Katie bought her car with the winnings from an illegal Mexican cockfight."},
{quote:"Katie can see four colors that no one else can."},
{quote:"Chad lost 200 pounds by eating only baby food."},
{quote:"Chad’s middle name is also Chad."},
{quote:"Katie donates 95% of her salary to various charities that support alligators."},
{quote:"Chad once lived off of only Sheetz MTOs for two years."},
{quote:"Katie once finished in 3rd place in a David Bowie lookalike contest."},
{quote:"Katie fell for Chad because he plays bass in a Bon Jovi tribute band called ‘Givin’ Love a Good Name’."},
{quote:"Chad was once mistaken for Fabio."},
{quote:"Katie makes great turtle soup. Her secret ingredient is extra turtle."},
{quote:"Chad has had jury duty 27 times."},
{quote:"Katie wrote her own comic book about a robot and an effeminate cat."},
{quote:"Katie invented a new style of dancing for today. Ask her to see it!"},
{quote:"Chad’s voice does not echo."},
{quote:"Katie makes her own cigars."},
{quote:"Katie can run 1 mile in 26 minutes."},
{quote:"Chad is either 27 or 28 years old. His parents can’t remember what year he was born in."},
{quote:"Katie is convinced that she is the star of a hidden camera reality show similar to The Truman Show."},
{quote:"Chad still throws tantrums when Katie won’t buy him a candy bar at the grocery store."},
{quote:"Katie carries a slide rule with her to help calculate gratuity."},
{quote:"Chad is a foot model."},
{quote:"Katie has a paper route in the summers to make extra money. Her customers commend her for her accurate paper throws."},
{quote:"Chad leaves every door open because he was literally born in a barn."},
{quote:"Katie’s car has 7 ‘OBX’ stickers on it even though she’s never been there."},
{quote:"Chad convinced Snoop Dog to change his name to Snoop Lion."},
{quote:"Katie doesn’t think Internet Explorer is that bad."},
{quote:"Katie has a Purple Heart award from Operation Desert Storm."},
{quote:"Chad was a faith healer while in college."},
{quote:"Katie prefers Hunts brand ketchup."},
{quote:"Chad was born with a full set of teeth and a faint moustache."},
{quote:"Chad was once pulled from the audience to serve as the conductor for the Pittsburgh Symphony Orchestra when the real conductor became miserably ill."},
{quote:"Katie’s hair is actually an elaborate weave."},
{quote:"Chad knows a word that rhymes with ‘orange’ but won’t tell anyone what it is."},
{quote:"Katie was planning to become a taxidermist until she was hired at Benjamin Franklin elementary school."},
{quote:"Katie’s favorite movie is the original Tron. She thinks the remake is too commercialized."},
{quote:"Chad is a well-accomplished eagle handler."},
{quote:"Katie knows how to Dougie. She doesn’t need to be taught how."},
{quote:"Katie has three lungs."},
{quote:"Chad’s favorite clothing brand is Osh Kosh B’gosh."},
{quote:"Katie thinks Britney Spears is probably a good mother."},
{quote:"Chad spent the first seven years of his life in an iron lung."},
{quote:"Chad was almost named Hildebrand, after his great grandfather."},
{quote:"Katie went as Barbara Streisand for Halloween 8 years in a row."},
{quote:"Katie lived in Antarctica for seven months."},
{quote:"Chad tried raccoon meat once. He didn’t mind the flavor."},
{quote:"Chad earned a degree from Clarion University by participating in a 1-hour Amway sales pitch."},
{quote:"Katie still thinks that thunder is just God bowling."},
{quote:"Katie believes that the south won the Civil War and Ray Lewis should be the modern president of the Confederacy."},
{quote:"Chad loves Katie."},
{quote:"Katie loves Chad."},
{quote:"Chad won an Oscar for his work on the production of a low-budget movie based on the book ‘Animal Farm’."},
{quote:"Chad is the founder of the ‘Rick Springfield fans of Beaver County’ fan club."},
{quote:"Katie wishes that one day she will live in West Consin."},
{quote:"Chad has never been on a shrimpin’ boat before but he has been on a real big boat."},
{quote:"Katie’s ringtone for the past decade has been ‘The Thong Song’ by Sisqo."}
	];


		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
		var timeAnimation = 500;
		var quoteContainer = $('#quoteContainer');
		//fade out animation with callback
		quoteContainer.fadeOut(timeAnimation, function(){
		quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>');

		//fadein animation.
		quoteContainer.fadeIn(timeAnimation);
		});

			break;
		};//end for loop

	});//end quoteButton function
});
