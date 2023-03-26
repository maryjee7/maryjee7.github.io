
function greet(event) {
    if (event.key == "Enter") {
  var username=request.args.get('username','')
  var favfood=request.args.get('favfood','')
  if username=='':
    var username='World'
  if favfood=='':
    var msg='You did not tell me your favorite food.'
  else:
    var msg='I like '+favfood+', too.'

  return (username, msg)
    }
}