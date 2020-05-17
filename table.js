var str = [
  "1,Lyn,Reisenberg,lreisenberg0@instagram.com,Female,$260.02",
  "2,Herculie,Barzen,hbarzen1@dot.gov,Male,$214.93",
  "3,Bear,Gilmartin,bgilmartin2@nih.gov,Male,$946.95",
  "4,Trstram,Cowhig,tcowhig3@xrea.com,Male,$59.85",
  "5,Golda,Creese,gcreese4@dailymail.co.uk,Female,$839.63",
  "6,Arnaldo,Golden of Ireland,agoldenofireland5@quantcast.com,Male,$388.44",
  "7,Rici,Casterot,rcasterot6@java.com,Female,$616.44",
  "8,Cletis,Headford,cheadford7@dedecms.com,Male,$133.38",
  "9,Mikael,Preene,mpreene8@yellowpages.com,Male,$387.66",
  "10,Ron,Twitchings,rtwitchings9@ucoz.ru,Male,$950.89",
  "11,Graig,Gaffey,ggaffeya@cnn.com,Male,$363.41",
  "12,Verine,Hallt,vhalltb@gizmodo.com,Female,$145.33",
  "13,Nadean,Jentet,njentetc@spotify.com,Female,$742.00",
  "14,Lenora,Comiam,lcomiamd@cisco.com,Female,$852.33",
  "15,Hyacinthe,Trodd,htrodde@ihg.com,Female,$745.79",
  "16,Rozalie,Thamelt,rthameltf@phoca.cz,Female,$44.14",
  "17,Vivian,Howell,vhowellg@ehow.com,Female,$973.85",
  "18,Ardith,Pires,apiresh@vinaora.com,Female,$785.17",
  "19,Walliw,Shillington,wshillingtoni@squidoo.com,Female,$572.38",
  "20,Rea,Biscomb,rbiscombj@elpais.com,Female,$13.34",
  "21,Katusha,Loxley,kloxleyk@time.com,Female,$440.26",
  "22,Zebulen,Shakshaft,zshakshaftl@51.la,Male,$695.92",
  "23,Heidi,Hevner,hhevnerm@blogger.com,Female,$934.21",
  "24,Aubrie,Prantl,aprantln@wired.com,Female,$959.36",
  "25,Vida,Tottem,vtottemo@illinois.edu,Female,$233.41",
  "26,Kelsy,Furman,kfurmanp@goodreads.com,Female,$260.71",
  "27,Remington,Rizzardo,rrizzardoq@topsy.com,Male,$972.17",
  "28,Bowie,Pitfield,bpitfieldr@columbia.edu,Male,$737.11",
  "29,Templeton,Slorance,tslorances@wunderground.com,Male,$20.94",
  "30,Marley,Ledwitch,mledwitcht@deviantart.com,Female,$53.09",
  "31,Theresa,Barehead,tbareheadu@lycos.com,Female,$632.28",
  "32,Hank,Jakoviljevic,hjakoviljevicv@techcrunch.com,Male,$215.71",
  "33,Wes,Eckersley,weckersleyw@ca.gov,Male,$165.30",
  "34,Sheilah,Blazevic,sblazevicx@blinklist.com,Female,$837.35",
  "35,Margaretha,Masserel,mmasserely@narod.ru,Female,$362.35",
  "36,Gregorius,Virgo,gvirgoz@ask.com,Male,$79.83",
  "37,Willey,Richardes,wrichardes10@nyu.edu,Male,$516.73",
  "38,Teresa,Lodden,tlodden11@bloomberg.com,Female,$675.88",
  "39,Damaris,Itzkin,ditzkin12@over-blog.com,Female,$646.47",
  "40,Colene,Abramino,cabramino13@uol.com.br,Female,$494.30",
  "41,Alexandr,Morgan,amorgan14@vinaora.com,Male,$632.05",
  "42,Albertine,Eberst,aeberst15@goo.ne.jp,Female,$43.12",
  "43,Panchito,Castilla,pcastilla16@histats.com,Male,$460.09",
  "44,Gloriane,Brennenstuhl,gbrennenstuhl17@hc360.com,Female,$708.50",
  "45,Kermy,Pottie,kpottie18@vkontakte.ru,Male,$722.82",
  "46,Curcio,Mattaus,cmattaus19@parallels.com,Male,$422.80",
  "47,Yvonne,Ovey,yovey1a@dropbox.com,Female,$820.60",
  "48,Kareem,Regnard,kregnard1b@dailymotion.com,Male,$797.16",
  "49,Raleigh,McClenan,rmcclenan1c@theglobeandmail.com,Male,$475.00",
  "50,Amelie,Schechter,aschechter1d@imageshack.us,Female,$159.46",
  "51,Leigh,Caroll,lcaroll1e@zdnet.com,Female,$737.28",
  "52,Fabien,Nardoni,fnardoni1f@a8.net,Male,$528.28",
  "53,Erda,Yitshak,eyitshak1g@phoca.cz,Female,$448.18",
  "54,Almira,Hemshall,ahemshall1h@mediafire.com,Female,$284.52",
  "55,Wallis,Cabedo,wcabedo1i@posterous.com,Male,$110.43",
  "56,Arabelle,Hemstead,ahemstead1j@naver.com,Female,$388.44",
  "57,Merwyn,Doley,mdoley1k@bigcartel.com,Male,$224.67",
  "58,Harmon,Fallen,hfallen1l@businessweek.com,Male,$971.20",
  "59,Willi,Pitcock,wpitcock1m@mapy.cz,Male,$181.94",
  "60,Pat,Matousek,pmatousek1n@ucoz.com,Male,$486.58",
  "61,Cele,Felipe,cfelipe1o@senate.gov,Female,$829.27",
  "62,Tricia,Wait,twait1p@tripadvisor.com,Female,$546.20",
  "63,Biddie,Stampe,bstampe1q@ft.com,Female,$363.98",
  "64,Agnola,Loughlin,aloughlin1r@army.mil,Female,$331.06",
  "65,Ingeborg,Fyfe,ifyfe1s@zdnet.com,Female,$839.39",
  "66,Olivette,Moorman,omoorman1t@yale.edu,Female,$671.30",
  "67,Wilmette,L'Episcopio,wlepiscopio1u@sogou.com,Female,$571.02",
  "68,Agnola,Palumbo,apalumbo1v@wired.com,Female,$230.32",
  "69,Howard,Cowan,hcowan1w@tripadvisor.com,Male,$788.46",
  "70,Lilllie,Mocquer,lmocquer1x@list-manage.com,Female,$512.24",
  "71,Elmo,Steptow,esteptow1y@hud.gov,Male,$585.78",
  "72,Lacie,Godain,lgodain1z@unesco.org,Female,$712.53",
  "73,Rae,Tunnah,rtunnah20@spiegel.de,Female,$621.07",
  "74,Ibbie,Ridsdole,iridsdole21@abc.net.au,Female,$164.39",
  "75,Ealasaid,Scuse,escuse22@wiley.com,Female,$359.34",
  "76,Freedman,Patman,fpatman23@irs.gov,Male,$169.58",
  "77,Earle,Dewick,edewick24@accuweather.com,Male,$284.96",
  "78,Port,Hembrow,phembrow25@artisteer.com,Male,$434.74",
  "79,Hewe,Carwithim,hcarwithim26@answers.com,Male,$974.91",
  "80,Ignazio,Featherstonehaugh,ifeatherstonehaugh27@virginia.edu,Male,$322.19",
  "81,Konstanze,Lilley,klilley28@upenn.edu,Female,$606.15",
  "82,Clo,Birdseye,cbirdseye29@canalblog.com,Female,$697.12",
  "83,Lynnelle,Riddich,lriddich2a@walmart.com,Female,$404.74",
  "84,Odessa,Mantrup,omantrup2b@economist.com,Female,$133.08",
  "85,Vincents,Sabie,vsabie2c@spotify.com,Male,$227.81",
  "86,Nataline,Riply,nriply2d@jiathis.com,Female,$106.04",
  "87,Merle,Luter,mluter2e@state.gov,Male,$865.05",
  "88,Hakeem,Levi,hlevi2f@slashdot.org,Male,$918.01",
  "89,Micky,Boncoeur,mboncoeur2g@bloglines.com,Female,$226.83",
  "90,Yasmeen,McIllrick,ymcillrick2h@vimeo.com,Female,$725.64",
  "91,Vinnie,Camoys,vcamoys2i@umn.edu,Male,$255.64",
  "92,Berti,Laycock,blaycock2j@reuters.com,Female,$37.82",
  "93,Hugibert,Whiteoak,hwhiteoak2k@wordpress.com,Male,$491.55",
  "94,Arliene,Guys,aguys2l@psu.edu,Female,$74.24",
  "95,Nike,Workes,nworkes2m@taobao.com,Female,$923.99",
  "96,Cherianne,Tweedle,ctweedle2n@fastcompany.com,Female,$80.26",
  "97,Cecilio,Palek,cpalek2o@thetimes.co.uk,Male,$395.88",
  "98,Shel,Brower,sbrower2p@wisc.edu,Female,$753.46",
  "99,Louise,Lidgerton,llidgerton2q@umn.edu,Female,$35.66",
  "100,Raddy,Ebhardt,rebhardt2r@uiuc.edu,Male,$357.71",
  "101,Parry,Trevena,ptrevena2s@tamu.edu,Male,$76.63",
  "102,Gillie,Hue,ghue2t@storify.com,Female,$469.47",
  "103,Betsey,Alten,balten2u@vimeo.com,Female,$631.62",
  "104,Abram,Darlison,adarlison2v@buzzfeed.com,Male,$604.88",
  "105,Bert,Franzelini,bfranzelini2w@cdc.gov,Male,$895.12",
  "106,Christos,Nix,cnix2x@google.cn,Male,$151.42",
  "107,Merrel,Sprankling,msprankling2y@un.org,Male,$55.93",
  "108,Cory,Brunsdon,cbrunsdon2z@globo.com,Male,$138.30",
  "109,Finn,Besnardeau,fbesnardeau30@nsw.gov.au,Male,$330.12",
  "110,Derk,O'Reagan,doreagan31@cisco.com,Male,$389.32",
  "111,Mortie,Dockrell,mdockrell32@exblog.jp,Male,$851.96",
  "112,Shirleen,Betancourt,sbetancourt33@aol.com,Female,$153.15",
  "113,Melicent,Amott,mamott34@un.org,Female,$338.66",
  "114,Mandy,Robillard,mrobillard35@virginia.edu,Female,$179.74",
  "115,Tommy,Colville,tcolville36@indiatimes.com,Female,$600.28",
  "116,Dorey,Petrasch,dpetrasch37@ebay.co.uk,Female,$216.11",
  "117,Zacharia,Milliken,zmilliken38@storify.com,Male,$101.73",
  "118,Shara,Meany,smeany39@zimbio.com,Female,$377.15",
  "119,Christoph,Trevarthen,ctrevarthen3a@theguardian.com,Male,$582.29",
  "120,Fraser,Fearenside,ffearenside3b@blogger.com,Male,$556.03",
  "121,Winonah,D'Angeli,wdangeli3c@php.net,Female,$833.90",
  "122,Arlinda,Scupham,ascupham3d@springer.com,Female,$41.28",
  "123,Becka,Crowe,bcrowe3e@hp.com,Female,$459.19",
  "124,Shermy,Lortzing,slortzing3f@dion.ne.jp,Male,$335.48",
  "125,Clarke,Wakelin,cwakelin3g@netlog.com,Male,$686.89",
  "126,Ewell,Larkings,elarkings3h@themeforest.net,Male,$511.95",
  "127,Lock,Gisby,lgisby3i@is.gd,Male,$89.59",
  "128,Phylys,Harmeston,pharmeston3j@zimbio.com,Female,$643.71",
  "129,Clevie,Lindermann,clindermann3k@java.com,Male,$569.30",
  "130,Abdul,McGinnell,amcginnell3l@shutterfly.com,Male,$823.73",
  "131,Jeralee,Fillis,jfillis3m@flavors.me,Female,$394.51",
  "132,Goraud,Dacre,gdacre3n@issuu.com,Male,$122.51",
  "133,Thorvald,Offell,toffell3o@hexun.com,Male,$1.57",
  "134,Nataniel,Torri,ntorri3p@ox.ac.uk,Male,$24.61",
  "135,Jourdain,Calbaithe,jcalbaithe3q@yandex.ru,Male,$556.51",
  "136,Lazare,Gudyer,lgudyer3r@mac.com,Male,$248.12",
  "137,Yankee,Wharrier,ywharrier3s@sohu.com,Male,$980.12",
  "138,Rosalyn,Waycott,rwaycott3t@nyu.edu,Female,$805.03",
  "139,Rich,Quincey,rquincey3u@gov.uk,Male,$758.60",
  "140,Kiley,Regus,kregus3v@intel.com,Male,$511.15",
  "141,Merill,Dibbe,mdibbe3w@blogtalkradio.com,Male,$996.46",
  "142,Pauletta,Newall,pnewall3x@nih.gov,Female,$327.09",
  "143,Mariya,Roscher,mroscher3y@bluehost.com,Female,$639.76",
  "144,Feodor,Drust,fdrust3z@slashdot.org,Male,$977.20",
  "145,Gennie,Willers,gwillers40@europa.eu,Female,$396.81",
  "146,Giorgi,Lilywhite,glilywhite41@purevolume.com,Male,$840.88",
  "147,Giacopo,Kinig,gkinig42@forbes.com,Male,$286.66",
  "148,Evan,Iddons,eiddons43@delicious.com,Male,$780.49",
  "149,Hillard,Redhouse,hredhouse44@mapquest.com,Male,$575.86"
];
//for conversion of data to 2d array.
let employees = [];
str.forEach(function(i) {
  employees.push(i.split(","));
});
console.log(employees);

//for pagination & dynamic table formation

function Pagination() {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  let currentPage = 1;
  let recordsPerPage = 17;

  this.init = function() {
    changePage(1);
    pageNumbers();
    clickPage();
    addEventListeners();
  };

  let addEventListeners = function() {
    prevButton.addEventListener("click", prevPage);
    nextButton.addEventListener("click", nextPage);
  };

  let changePage = function(page) {
    const listingTable = document.querySelector("#data-table > tbody");

    if (page < 1) {
      page = 1;
    }
    if (page > numPages() - 1) {
      page = numPages();
    }

    listingTable.innerHTML = "";

    for (
      var i = (page - 1) * recordsPerPage;
      i < page * recordsPerPage && i < employees.length;
      i++
    ) {
      listingTable.innerHTML +=
        "<tr> <td>" +
        employees[i][0] +
        "</td> <td>" +
        employees[i][1] +
        " </td> <td>" +
        employees[i][2] +
        " </td> <td>" +
        employees[i][3] +
        " </td> <td>" +
        employees[i][4] +
        " </td> <td>" +
        employees[i][5] +
        " </td> ";
    }
  };

  let prevPage = function() {
    if (currentPage > 1) {
      currentPage--;
      changePage(currentPage);
    }
  };

  let nextPage = function() {
    if (currentPage < numPages()) {
      currentPage++;
      changePage(currentPage);
    }
  };

  let clickPage = function() {
    document.addEventListener("click", function(e) {
      if (
        e.target.nodeName == "BUTTON" &&
        e.target.classList.contains("page-number-container")
      ) {
        currentPage = e.target.textContent;
        changePage(currentPage);
      }
    });
  };

  let pageNumbers = function() {
    let pageNumber = document.getElementById("page-number");
    pageNumber.innerHTML = "";

    for (let i = 1; i < numPages() + 1; i++) {
      pageNumber.innerHTML +=
        "<button class='page-number-container'>" + i + "</button>";
    }
  };

  let numPages = function() {
    return Math.ceil(employees.length / recordsPerPage);
  };
}
let pagination = new Pagination();
pagination.init();

// for sorting
function sort(n) {
  let employeeTable, records, swap, shouldSwap, i, firstElement, secondElement;
  employeeTable = document.getElementById("data-table");
  swap = true;
  while (swap) {
    swap = false;
    records = employeeTable.rows;

    for (i = 1; i < records.length - 1; i++) {
      shouldSwap = false;
      switch (n) {
        case 0:
          firstElement = records[i].getElementsByTagName("TD")[0].innerHTML;
          firstElement = parseInt(firstElement);
          secondElement = records[i + 1].getElementsByTagName("TD")[0]
            .innerHTML;
          secondElement = parseInt(secondElement);
          break;

        case 5:
          firstElement = records[i]
            .getElementsByTagName("TD")[5]
            .innerHTML.slice(1);
          firstElement = parseFloat(firstElement);
          secondElement = records[i + 1]
            .getElementsByTagName("TD")[5]
            .innerHTML.slice(1);
          secondElement = parseFloat(secondElement);
          break;

        default:
          firstElement = records[i].getElementsByTagName("TD")[n];
          secondElement = records[i + 1].getElementsByTagName("TD")[n];
          break;
      }

      if (n == 5 || n == 0) {
        if (firstElement > secondElement) {
          shouldSwap = true;
          break;
        }
      } else {
        if (
          firstElement.innerHTML.toUpperCase() >
          secondElement.innerHTML.toUpperCase()
        ) {
          shouldSwap = true;
          break;
        }
      }
    }
    if (shouldSwap) {
      records[i].parentNode.insertBefore(records[i + 1], records[i]);
      swap = true;
    }
  }
}
let header = document.getElementsByTagName("TH");
for (let z = 0; z < header.length; z++) {
  header[z].addEventListener("click", sorting(z));
}
function sorting(z) {
  return function() {
    sort(z);
  };
}

//for searching

function search() {
  let searchForm = document.getElementById("search-form"),
    searchInput = searchForm.value.toUpperCase(),
    employeeTable = document.getElementById("data-table"),
    records = employeeTable.getElementsByTagName("TR"),
    firstNameRecord,
    lastNameRecord,
    emailRecord,
    firstNameData,
    lastNameData,
    emailData;
  for (let i = 0; i < records.length; i++) {
    firstNameRecord = records[i].getElementsByTagName("TD")[1];
    lastNameRecord = records[i].getElementsByTagName("TD")[2];
    emailRecord = records[i].getElementsByTagName("TD")[3];

    if (firstNameRecord || lastNameRecord || emailRecord) {
      firstNameData = firstNameRecord.textContent;
      lastNameData = lastNameRecord.textContent;
      emailData = emailRecord.textContent;
      if (
        firstNameData.toUpperCase().indexOf(searchInput) != -1 ||
        emailData.toUpperCase().indexOf(searchInput) != -1 ||
        lastNameData.toUpperCase().indexOf(searchInput) != -1
      ) {
        records[i].style.display = "";
      } else {
        records[i].style.display = "none";
      }
    }
  }
}
