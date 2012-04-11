describe('Contrived Math Module', function(){

  var math = require('math');

  it('Should add',function(){
    expect(math.add(2,2)).toEqual(4);
  });

});
