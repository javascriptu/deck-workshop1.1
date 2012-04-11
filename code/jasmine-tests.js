describe('Some code', function(){

  var someCode;

  beforeEach(function() {
    someCode = new Class();
  });

  it('Should return a 4',function(){
    expect(someCode.getValue()).toEqual(4);
  });

});
