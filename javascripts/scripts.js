
var websites = ['http://caption-this.herokuapp.com/', 'http://trailmap.herokuapp.com/']

function websiteViews(){
  _.each(websites, function(websiteUrl){
    $('.projects-list').hide().append($('<p>').append($('<a>').attr('href', websiteUrl).text(websiteUrl)))
  })
}

function resumeMessage(){
  $('.resume-message').hide().append($('<p>').html('Email me at jdwmurph (at) gmail for more info.'))
}

$(function(){
  websiteViews()
  resumeMessage()
  $('.resume').hover(
    function(){
      $('.resume-message').fadeIn()
    },
    function(){
      $('.resume-message').fadeOut()
    }
  )

  $('.projects').hover(
    function(){
      $('.projects-list').fadeIn()
    },
    function(){
      $('.projects-list').fadeOut()
    }
  )
})

