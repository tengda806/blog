import { observable , action } from "mobx"


class EditorStore{
    @observable content = "" ; 
    @observable title = "" ; 
    @action
    changeContent(content){
      this.content = content ;  
    }
    @action
    changeTitle(title){
        this.title = title ; 
    }
}
export default new EditorStore() ; 