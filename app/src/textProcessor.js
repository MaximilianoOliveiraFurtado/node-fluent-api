class TextProcess {

  #content

  constructor(content){
    this.content = content
  }

  extractPeopleData(){

    return this
  }

  build(){
    return this.#content
  }

}

module.exports = TextProcess