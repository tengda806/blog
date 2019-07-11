import React , { Component } from "react"
import "./goTop.less"
import { ScrollTo  } from "react-scroll-to" 
class GoTop extends Component{
    state = {
        show:false 
    }
    goTop(){
        window.scrollTo(0,0)
    }
    componentDidMount(){
        window.addEventListener('scroll',()=>{
            let winH = document.documentElement.clientHeight ; 
            let scrollH = document.documentElement.scrollTop ; 
            if(scrollH >= winH){
                this.setState({show:true})
            }else{
                this.setState({show:false})
            }
        })
    }
    render(){
        let { show } = this.state ; 
        return ( 
            <ScrollTo >
                {       
                    ({scrollTo}) => (
                    <div 
                    className={ show ?'goTop-wrap j-cp show' : 'goTop-wrap j-cp' } 
                    onClick={
                        ()=> scrollTo({ x: 0, y: 0 ,smooth:true})
                        }>
                        <i
                        className={'iconfont icon-gotop gotop'}
                        ></i>
                    </div>
                    )
                }
            </ScrollTo >
            
         ) 
    }

}


export default GoTop