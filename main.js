$('#Home').click(function () {
	return location.reload(true);
})

$('#countries').click(function() {
	
})

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
var  January = 'January :- \n The right way to start the new year is with a celebration! Let yourself loose in the ( Philippines ) at the authentic Ati-Atihan festival honouring Santo Niño (Infant Jesus) that includes tribal dancing and games. Or if you wish to challenge yourself, dive into freezing water with 10,000 Dutch on the beach of Scheveningen. Celebrate with ice skating on Lake Louise in Banff National Park. As an alternative, relax on New Years Eve at Bayfront Park, Miami, and hop on a cruise afterwards. To see fantastic nature, go to Iceland where glacier caves will remind you of giant frozen waves. Marvel tens of thousands of flamingos in the Yucatan peninsula of Mexico, millions of starlings in Rome, or hundreds of migrating reindeer in Finland. Warm up in New Zealand and Australia and smell the lavender fields of Tasmania! Or head to South Africa and find out how ducks help produce its famous wine.';
var February = 'February :- \n Fight the February gloom with light and sparkles! In Taiwan, this month marks some of the biggest celebrations like The Beehive Festival in the Yanshui District when thousands of soaring firecrackers are launched into the crowd. Will you be able to last all night? Or choose the peaceful Pingxi Sky festival, the second biggest New Year celebration in the world with millions of lanterns carrying the prayers and vows of Taiwanese people across the starry night sky. Visit the Chinese New Year celebration in Hong Kong with amazing dances, music, and food. When you get tired of parties, go to Laos to meditate and watch the stunning sunset at Mount Phou Si in Luang Prabang. To feel the competition spirit, visit amazing world reindeer races or Kicksled World Championship in Norway — a serious winter sport in mock costumes. For more cheers and excitement take part in the Empire State Building Run-Up in New York City. Afterwards, be lucky to see the first signs of spring in Europe — blooming mimosa route in Provence. As tourism slows down a bit, take advantage of Paris museums without lines.';
var March = 'March :- \n It is time to party! Carnival in Rio de Janeiro and Mardi Gras in New Orleans encourage you to lift your boundaries and let yourself be happy, silly, and slightly intoxicated with the atmosphere of joy! You can party on any continent in any part of the world! Check out Santa Cruz on Tenerife, Fasching in the Swiss city of Basel, and Ivrea Battle of the Oranges in Italy. At the end of the month, it is Irelands turn to indulge in St. Patricks Day celebrations. Or go across the pond to witness how Irish Americans celebrate their heritage in Chicago. When you have had enough of street parties, relax during Sauna Day in Finland. Appreciate the natural beauty of Loktak Lake, the largest freshwater basin in Northeast India and the worlds only floating national park famous for its unique floating vegetation called phumdis. Hike to volcanoes in Costa Rica or marvel cherry blossoms with the Japanese.';
var	April = 'April :- \n Spring is here so you can soak up the rain and get wet in Bangkok celebrating Thai New Year — Songkran. Or participate in a water battle in West Ukrainian City of Lviv on Easter Monday. Spring is the best time to go to the Netherlands to see millions of flowers blooming in Keukenhof, the largest garden of Europe, or witness how the whole country turns orange on Kings Day. If you happen to be in London, do not be surprised to hear cannons, as it’s time for Royal Gun Salutes. Go to Scotland to spot blooming bluebells or to California to see some of the most beautiful poppy valleys and do not forget to stop by the Coachella Festival. More blossoms await you in Nepal, Cappadocia, and Tokyo. In Honduras, you can see beautiful Easter carpets made with millions of flowers for just a few days.';
var	May = 'May :- \n It is time to pack your hiking boots and head for new adventures. Climb the worlds highest mountain (measured from its oceanic base) Mauna Kea in Hawaii and see the magnificent lantern floating ceremony in Honolulu. Also, the lucky ones can witness how shadows disappear during Lahaina Noon. Conquer Mt Everest and take part in the famous Saga Dawa Festival in Tibet. Late spring is a great time to visit roaring waterfalls, Yellowstone has almost 300 of them to marvel. Or go north and see the powerful Niagara Falls with the highest flow rate in North America. May is also the high time to be in France: visit hidden beaches of Provence or witness a unique sunset at the Arc de Triomphe. Something similar happens in North America — do not miss Manhattanhenge!';
var	June = 'June :- \n With temperatures warming up, it is finally time to explore the North! Go hiking in the Faroe Islands or enjoy paddling and timber rafting in Sweden. Experience the blue hours and the midnight sun in Iceland and Denmark. In Copenhagen, nights are filled with light and parties as the Distortion Festival unveils on the island of Refshaleøen. In Svalbard, it is finally a bear-watching season and time for camping and hiking. Also, do not miss Sankt Hans or Jonsok in Norway, a midsummer night with huge bonfires and parties. The Solstice celebration is no less exciting across the world in Machu Picchu and Cusco areas. The Inti Raymi or the Festival of the Sun was the most significant holiday for ancient Incas. Continue celebrating in Spain where fiestas go on nonstop. Massive and colourful Corpus Christi processions are followed by St. Peters day marked by a malicious wine fight and festival in the town of Haro of the Rioja region in Spain.';
var	July = 'July :- \n Too hot and crowded at sea resorts? So head inland! It never feels too crowded in Mongolia where July is an excellent time for nomadic ger camping, and you can also witness authentic Naadam Festival where men show off their best skills in archery, wrestling, and horse racing. Or travel to the vast fields of Greenland covered with blooming cottongrass. Check out blooming lupins in Iceland or smell divine lavender valleys of Provence. If you feel adventurous, Andes welcome the daredevil cyclists willing to go down the Death Road or Camino a Los Yungas in Bolivia. The steep and muddy path runs from the freezing mountain summit right down to the steaming Yungas jungle. July is a great time to go hiking and bear watching in Alaska or see cute Atlantic puffins in Quebec. Meanwhile, in South Korea, there is Boryeong Mud Festival where grown-ups behave like kids indulging in mud wrestling, mudslides, and mud swimming.';
var	August = 'August :- \n Summer nights in Vancouver are full of life and parties. Visit the Celebration of Light festival to add amazing fireworks to the picture. Edinburgh also shines with fireworks and more during its International Festival and the Edinburgh Military Tattoo. For a more relaxing experience, Romania has mesmerizing mountains, lakes, and winding Transfagarasan Road, both terrifying and beautiful. The exotic nature at this time of the year can be spotted in Madagascar — chameleons and Stone Forest Tsingy de Bemaraha with razor-sharp limestone summits. It is also a great time to explore Indonesia, meet giant Komodo dragons, and swim with stingless jellyfish in Kakaban Lake. Summer in Europe is all about partying! Go to Sicily to experience San Sebastiano celebrations with fascinating confetti. Alternatively, engage in the vivid Tomatina in Valencia Town of Buñol, a yearly battlefield where 140 tonnes of tomatoes are thrown at the crowd.';
var	September = 'September :- \n Early fall brings beautiful weather and wine season to the Mediterranean. Mallorca, one of the oldest wine-making regions in Europe, celebrates Festa des Vermar, the creation of new wines in the small village of Binissalem. Sicily celebrates Archangel Michaels feast, while Corsica stuns with its unique polyphonic singing. An epic Wildebeest migration takes place in Kenya and Tanzania with millions of animals crossing the rivers and fields to get to the new pastures. While in China, you can witness the worlds biggest tidal wave — Qiantang River Tidal Bore. The phenomenon called Silver dragon crushes 50 meters high in the air.';
var	October = 'October :- \n October is not only about Oktoberfest and Halloween parades. Go off the beaten track and discover the Ludwigsburg Pumpkin Festival (Kürbisausstellung Ludwigsburg) in Germany where over 450,000 pumpkins are on display or wander in the famous Cool Patch Pumpkin corn maze in California. South Korea holds Jinju Namgang Yudeung Festival where you’ll be amazed by the amount and diversity of lanterns. In Australia, it is time to see quokka, the worlds happiest animal living on Rottnest Island, or you can surf a big wave in Victoria. To completely get lost, explore Wisconsins cranberry fields or visit the Island in the Sky in Canyonlands, Utah.';
var	November = 'November :- \n When it gets gloomy in the north, it is time to move south. The celebration of death in Mexico is a must see due to its fantastic music and dances. No less impressive are Geisha dances in Kyoto. Admire more Asian culture during the Loi Krathong lantern festival in Thailand or go trekking in Bhutan where edelweiss and gentian are in full bloom. Vietnam has its own wonders — blooming buckwheat fields and great trekking on Ma Pi Leng Pass and rice terraces of Sa Pa district. To give yourself an early Christmas present, witness a unique natural phenomenon — the Coral spawn at Great Barrier Reef.';
var	December = 'December :- \n Holidays are approaching in Europe, and there is so much to see! Check out Illuminated gravestones in Iceland or the giant talking Christmas Lamp in Malmo. Visit Bavaria to hear shooting guns before Christmas Eve or join a pub crawl in the ruin pubs of Budapest. Then see a Winter Wonderland at the Fishermans Bastion in the Hungarian capital. For a different perspective, visit Guatemalas Fiesta de Santo Tomásto and see traditional indigenous dances. Cancun attracts with Christmas piñata dolls during Las Posadas. You can also literally go to the End of the World at Tierra del Fuego in Argentina and enjoy the pristine beauty of Perito Moreno Glacier.';
var months = {
	January : January,
	February : February,
	March : March,
	April : April,
	May : May,
	June : June,
	July : July,
	August : August,
	September : September,
	October : October,
	November : November,
	December : December,
}

$('.button').click(function () {
	var month = $('input').val();
	var paragraph = months[month];
	$('#bottomDiv').hide(1000);
	$('#searchResult').hide(1000);
	$('#searchResult').show(1000);
	$('#searchResult').text(paragraph).css({'color': 'white', 'font-family': 'Arial', 'font-size': '22px', 'text-align': 'center', 'position': 'absolute', 'top': '50%', 'left': '50%', 'transform': 'translate(-50%, -50%)', 'line-height': '2.5'});
});
// color: #57E6EA	;
// 	font-weight: bold;
// 	font-size: 70px ; 
// 	text-align: center;
// 	font-family: Times;
// 	position: absolute;
//     top: 40%;
//     left: 50%;
//     transform: translate(-50%, -50%);
// 		line-height: 1.8;		