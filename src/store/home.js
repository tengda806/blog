import { observable , action } from "mobx"


class HomeStore{
    @observable num = 1 ; 
    @action
    changeHomeTitle(){
      this.num ++ 
    }
}
export default new HomeStore() ; 