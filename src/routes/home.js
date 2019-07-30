import React,{ Component } from "react" 
import { getPost } from '../api/post'
import "./home.less"
import {WOW} from "wowjs"
import "animate.css"


class Home extends Component{

    state = {
        list:[],
        pageSize:5,
        page:1,
        showMore:true
    }
    componentDidMount(){
        this.getData().then(() => new WOW().init())
    }

    getData(flag){
        let { page , pageSize } = this.state ; 
        return getPost({ page, pageSize }).then( res => {
            let  showMore  = res.data.length >= pageSize
            if(flag){
                this.setState({
                    list:this.state.list.concat(res.data),
                    showMore
                })
            }else{
                this.setState({
                    list:res.data,
                    showMore
                })
            }
        })
    }
    goDetail(index){
        this.props.history.push('/detail/' + this.state.list[index]._id)
    }
    getMore(){
        this.setState({page:this.state.page+1},()=>{
            this.getData(true)
        })
    }
   
    render(){
        let {  list , showMore } = this.state ; 
        return (
            <div className="homeContainer">
                <ul className={'list'}>
                           {
                               list.map((item,index)=>(
                                <li 
                                    className={ index % 2 === 0 ? 'item clearfix wow slideInRight' : 'item clearfix wow slideInLeft'} 
                                    data-wow-duration="2s" 
                                    data-wow-delay="0"
                                    key={index}
                                    onClick={this.goDetail.bind(this,index)}
                                >
                              <a className={'cover j-cp'}>
                                <img src={`https://annie-header-bg-1253939655.cos.ap-beijing.myqcloud.com/${Math.floor(Math.random() * 100)}.jpg`} alt=""/>
                              </a> 
                                <div className={'text'}>
                                    <p className={'ctime'}>四月 30日, 2019</p>
                                    <h3 className={'title j-oh j-cp'}>{item.title}</h3>
                                    <p className={'content'}>{item.content.length>120?item.content.slice(0,100) + '...':item.content}</p>
                                    <p className={'meta'}></p>
                                </div>
                            </li>
                               ))
                           }
                          
                </ul>
                {
                    showMore?
                    <span className={"j-cp more"} onClick={this.getMore.bind(this)} >加载更多</span> :
                    ''
                }
            </div>
        )
    }
}
export default Home ; 