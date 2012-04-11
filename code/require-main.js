require.config({
  paths : {
    jquery : 'vendor/jquery-1.7.1.min'
  }
});

require(['jquery'],function($){
  $('body').append('<h1>Hello World</h1>');
});
