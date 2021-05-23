class Formatter {
  //add static methods here
  static capitalize(s){
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  static sanitize(s){
    return s.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(s){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let arrayOWords = s.split(' ')
    for (let i = 0; i < arrayOWords.length; i++){
      if (i === 0){
        result.push(this.capitalize(arrayOWords[i]))
      } else {
        if (exceptions.includes(arrayOWords[i])) {
          result.push(arrayOWords[i])
        } else {
          result.push(this.capitalize(arrayOWords[i]))
        }
      }
    }
    return result.join(' ');
  }

}