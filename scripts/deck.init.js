$(function() {
  $.deck('.slide');
  $('code[src]').each(function(i,el){
    el = $(el);
    $.ajax({
      url : el.attr('src'),
      dataType: 'text'
    }).then(function(text) {
      text = text.replace(/</g,'&lt;').replace(/>/g, '&gt;');
      if (el.data('highlight')) {
        var spec = getHighlightSpec(el.data('highlight'));
        var lines = text.split("\n");
        for (var i = 0; i < lines.length; i++) {
          if (!spec[i]) continue;
          for (var j = 0; j < spec[i].length; j++) {
            var re = new RegExp('');
            if (spec[i][j] === '*') {
              re = new RegExp('(.*)$');
            } else {
              re = new RegExp('(' + spec[i][j] + ')','g');
            }
            lines[i-1] = lines[i-1].replace(re,'<span class="highlight">$1</span>')
          }
        }
        text = lines.join("\n");
        for (i = 0; i < spec.global.length; i++) {
          var re = new RegExp('(' + spec.global[i] + ')','g');
          text = text.replace(re,"<span class='highlight'>$1</span>")
        }
      }
      // Blatant copy paste. Shame on me.
      if (el.data('focus')) {
        var spec = getHighlightSpec(el.data('focus'));
        var lines = text.split("\n");
        for (var i = 0; i < lines.length; i++) {
          if (!spec[i]) continue;
          for (var j = 0; j < spec[i].length; j++) {
            var re = new RegExp('');
            if (spec[i][j] === '*') {
              re = new RegExp('(.*)$');
            } else {
              re = new RegExp('(' + spec[i][j] + ')','g');
            }
            lines[i-1] = lines[i-1].replace(re,'<span class="focus">$1</span>')
          }
        }
        text = lines.join("\n");
        for (i = 0; i < spec.global.length; i++) {
          var re = new RegExp('(' + spec.global[i] + ')','g');
          text = text.replace(re,"<span class='focus'>$1</span>")
        }
      }
      el.html(text)
    }).fail(function(){
      el.html("There was an error loading:" + el.attr('src'))
    });
  })
});

function getHighlightSpec(string) {
  var spec = {global : []},
      pieces = string.split(',');

  for (var i = 0; i < pieces.length; i++) {
    var specPiece = pieces[i],
      piecesSpec = specPiece.split(':'),
      toHighlight = piecesSpec.pop(),
      lines = piecesSpec.pop();

    if (lines) {
      lines = lines.split('.');
      for (var j = 0; j < lines.length; j++) {
        var line = lines[j];
        spec[line] ? spec[line].push(toHighlight) : spec[line] = [toHighlight];
      }
    } else {
      spec.global.push(toHighlight);
    }
  }
  return spec;
}
