$(document).ready(function() {
  var first = $('#first-main');
  var second = $('#second-main');
  setTimeout(fadeIn(first, 1500), 900);
  setTimeout(fadeIn(second, 2000), 1800);
  attachlistener()
  buildCards();
})


function fadeIn(obj, time) {
  obj.animate({
    opacity: 1
  }, time)
}

function attachlistener() {
  $(document).on('scroll', function() {
    var dFromBottom = calculateFromBottom();
    var dFromTop = calculateFromTop();
    var thirdMain = $('#third-main');

    if (dFromBottom < dFromTop) {
      fadeIn(thirdMain, 2000);
    };
  });
}


function calculateFromBottom() {
  return Math.floor($(document).height() - $(document).scrollTop())
}

function calculateFromTop() {
  return $('#first-main').height() + $('#second-main').height() + 200
}


function renderCards() {

}

function quotify(string) {
  return '"' + string + '"';
}

var staffInfo = {
  "john": {

    info: {
      imgSrc: "images/jc.jpg",
      name: "John Carter",
      position: "EVP, Cofounder",
      frontText: "There will be two types of people in the future: those who are told by computers what to do, and those who tell computers what to do",
      backMotto: "Move fast and break things!",

      jobDescription: "Software Engineer and Startup Addict"
    },

    stats1: {
      number: "3",
      name: "Years Sober"
    },
    stats2: {
      number: "4th",
      name: "Startup"
    },
    stats3: {
      number: "35",
      name: "Projects"
    },

    social: {
      linkedIn: "https://www.linkedin.com/in/john-carter-15230245/",
      email: "jcarter@rmtechnology.io",
      github: "https://github.com/occamskatana"

    }
  },

  "charlie": {
    info: {
      imgSrc: "images/ccarter.webp",
      name: "Charlie Carter",
      position: "CEO, Cofounder",
      frontText: "I am Charlie Carter and I am the best CEO Ever",
      backMotto: "Some sort of tag line goes here",
      email: "ccarter@rmtechnology.io",
      jobDescription: "C Level executive with a history of being awesome",
    },
    stats1: {
      number: "Harvard",
      name: "Business School"
    },
    stats2: {
      number: "150",
      name: "Daily Emails"
    },
    stats3: {
      number: "5000",
      name: "Awesomeness"
    },

    social: {
      linkedIn: "https://www.linkedin.com/in/charlie-carter-7053997/",
      email: "ccarter@rmtechnology.io",
      github: "https://www.google.com"
    }
  }
}

var a = JSON.stringify(staffInfo)


function buildCards() {
  cardDiv = $('.card-row');
  for (var x in staffInfo) {
    var staff = staffInfo[x]
    cardDiv.prepend(card(staff.info, staff.stats1, staff.stats2, staff.stats3, staff.social))
  }
}


function card(info, stats1, stats2, stats3, social) {

  var cardTemplate = '   <div class="col s6 card-over">  ' +
    '                <div class="card-container">  ' +
    '                  <div class="card">  ' +
    '                    <div class="front">  ' +
    '                      <div class="cover">  ' +
    '                        <img src="images/thumb.png"/>  ' +
    '                      </div>  ' +
    '                      <div class="user">  ' +
    '                        <img class="img-circle" src=' + quotify(info.imgSrc) + '/>' +
    '                      </div>  ' +
    '                      <div class="content">  ' +
    '                        <div class="main">  ' +
    '                          <h3 class="name">' + info.name + '</h3>  ' +
    '                          <p class="profession">' + info.position + '</p>  ' +
    '                          <p class="text-center">' + quotify(info.frontText) + '</p>  ' +
    '                        </div>  ' +
    '                        <div class="footer">  ' +
    '                          <div class="rating">  ' +
    '                            <!-- <i class="fa fa-mail-forward"></i> Auto Rotation -->  ' +
    '                          </div>  ' +
    '                        </div>  ' +
    '                      </div>  ' +
    '                      </div> <!-- end front panel -->  ' +
    '                      <div class="back">  ' +
    '                        <div class="header">  ' +
    '                          <h5 class="motto">' + quotify(info.backMotto) + '</h5>  ' +
    '                        </div>  ' +
    '                        <div class="content">  ' +
    '                          <div class="main">  ' +
    '                            <h4 class="text-center">Job Description</h4>  ' +
    '                            <p class="text-center">' + info.jobDescription + '</p>  ' +
    '                            <div class="stats-container">  ' +
    '                              <div class="stats">  ' +
    '                                <h4>' + stats1.number + '</h4>  ' +
    '                                <p align="center">  ' +
    '                                  ' + stats1.name + '  ' +
    '                                </p>  ' +
    '                              </div>  ' +
    '                              <div class="stats">  ' +
    '                                <h4>' + stats2.number + '</h4>  ' +
    '                                <p>  ' +
    '                                  ' + stats2.name + ' ' +
    '                                </p>  ' +
    '                              </div>  ' +
    '                              <div class="stats">  ' +
    '                                <h4>' + stats3.number + '</h4>  ' +
    '                                <p>  ' +
    '                                  ' + stats3.name + ' ' +
    '                                </p>  ' +
    '                              </div>  ' +
    '                            </div>  ' +
    '                          </div>  ' +
    '                        </div>  ' +
    '                        <div class="footer">  ' +
    '                          <div class="social-links text-center">  ' +
    '                            <a href=' + quotify(social.linkedIn) + 'class="facebook"><i class="fa fa-linkedin fa-fw"></i></a>  ' +
    '                            <a href="mailto:' + social.email + '"><i class="fa fa-envelope-o fa-fw"></i></a>  ' +
    '                            <a href=' + quotify(social.github) + 'class="twitter"><i class="fa fa-github fa-fw"></i></a>  ' +
    '                          </div>  ' +
    '                        </div>  ' +
    '                      </div>  ' +
    '                    </div>  ' +
    '                  </div>  ' +
    '                </div>  ';

  return cardTemplate;

}