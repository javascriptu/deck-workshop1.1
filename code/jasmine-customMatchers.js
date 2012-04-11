beforeEach(function() {
  this.addMatchers({
    toGoToHeaven: function() {
      return this.actual.hasSoul || this.actual.isDog;
    }
  });
});
