import React,{ Component } from "react" 
// import { articleList , deleteArticle} from '../api/article'
import "./home.less"
import {WOW} from "wowjs"
import "animate.css"

class Home extends Component{

    state = {
        list:[]
    }
    componentDidMount(){
        new WOW().init()
    }

   
    render(){
        // let { list  } = this.state ; 
        return (
            <div className="homeContainer">
                <ul className={'list'}>
                           {
                               [1,2,3,4,5].map((item,index)=>(
                                <li 
                                    className={ index % 2 === 0 ? 'item clearfix wow slideInRight' : 'item clearfix wow slideInLeft'} 
                                    data-wow-duration="2s" 
                                    data-wow-delay="0"
                                    key={index}
                                >
                              <a className={'cover j-cp'}>
                                <img src={`https://annie-header-bg-1253939655.cos.ap-beijing.myqcloud.com/${Math.floor(Math.random() * 100)}.jpg`} alt=""/>
                              </a>
                                <div className={'text'}>
                                    <p className={'ctime'}>四月 30日, 2019</p>
                                    <h3 className={'title j-oh j-cp'}>webpack网站开发入门webpack网站开发入门</h3>
                                    <p className={'content'}>预先准备安装node.js：项目开始之前，确保安装了nodejs工具。原则上，你应使用最新的稳定版本（LTS），点击LTS的下载按钮即可。
开发工具：</p>
                                    <p className={'meta'}></p>
                                </div>
                            </li>
                               ))
                           }
                          
                </ul>
            </div>
        )
    }
}
export default Home ; 