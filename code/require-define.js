define(function(){
  var i = 0;

  function resetCount() { i = 0;    }
  function getCount()   { return i; }

  function increment() {
    i++;
    if (i >= 5) resetCount();
  }

  return {
    increment : increment,
    getCount  : getCount
  };
})
