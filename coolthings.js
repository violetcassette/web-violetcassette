var cat1 = [
    "https://tppt.neocities.org",
    "https://cdn.discordapp.com/attachments/1013135200609386648/1089048042705002506/image.png",
    "https://en.wikipedia.org/wiki/Nichijou",
    "https://archive.org/embed/tpxmas2022",
    "https://archive.org/embed/vc-23-0001",
    "https://archive.org/details/OREGON_CGA",
    "https://archive.org/details/msdos_Wheel_of_Fortune_2nd_Edition_1987",
    "https://infinitemac.org/2000/Mac%20OS%209.0.4",
    "https://copy.sh/v86/?profile=windows98",
    "https://archive.org/details/Family_Feud_USA.md",
    "https://archive.org/details/2ktan",
    "https://archive.org/details/amber-sakaki",
    "https://archive.org/details/NanamiMadobeCD",
    "https://archive.org/details/chirumiru-eng",
    "https://archive.org/details/iosys-cirno-eng",
    "https://archive.org/details/precious_thing",
    "https://archive.org/details/futari-no-xenopittan",
    "https://web.archive.org/web/20040814075704/http://www.microsoft.com/",
    "https://winworldpc.com/product/plus/1998",
    "https://archive.org/details/azumanga-daioh-subbed-dubbed",
    "https://archive.org/details/bitemyshinymetala--/",
    "https://archive.org/details/Adobe_Dreamweaver_CS5.5_for_Windows_91035544_2-11_Adobe_2011",
    "https://bluemaxima.org/flashpoint/",
    "https://web.archive.org/web/20030401081820/http://www.nintendo.com/index.jsp",
    "https://archive.org/details/apple-computer-quicktime-4.1.2-windows",
    "https://web.archive.org/web/20040610060019/http://www.target.com/gp/homepage.html",
    "https://web.archive.org/web/20080706000206/http://www.zune.net/en-US/",
    "https://animatearchive.neocities.org/?home",
    
    ];

var myFrame = document.getElementById("frame");

function getRandomUrl(myFrame) {
   var index = Math.floor(Math.random()*cat1.length);
   var url = cat1[index];
   myFrame.src = url;
}

btn.addEventListener("click", function() {
    
   getRandomUrl(myFrame); 
    
});