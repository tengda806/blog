import React,{ Component } from "react" 
import "./header.less"
import randomText from './random'
import { ScrollTo  } from "react-scroll-to" 
class Header extends Component{

    state = {
        tags:[
            {
                text:'首页',
                url:'/',
                active:location.pathname === '/' || location.pathname === '/home'
            },
            {
                text:'标签',
                url:'/tags',
                active:location.pathname.indexOf('/tags') > -1 
            },
            {
                text:'关于',
                url:'/about',
                active:location.pathname.indexOf('/about') > -1
            }
        ],
        randomText 
    }

    render(){
        let { tags ,randomText } = this.state ; 
        let randomItem = randomText[Math.floor(Math.random() * randomText.length)] ; 
        return (
            <div className="header-wrap"
            style={{
                backgroundImage: `url("https://annie-header-bg-1253939655.cos.ap-beijing.myqcloud.com/${Math.floor(Math.random() * 100)}.jpg")`
            }}
            >
               <ul className="clearfix nav">
                    {
                        (tags).map((item,index) => (
                            <li key={index} className={item.active?'fl j-cp active':'fl j-cp'} onClick={()=>location.href = item.url}>
                            {item.text}
                            </li>
                        ))
                    }
               </ul>
               <div className={'quotations'}>
                   <p> 
                   { new Date().getFullYear() + ' 年 ' + (new Date().getMonth() + 1) + ' 月 ' + new Date().getDate() + ' 日' } 
                   </p>
                   <p>{randomItem.content}</p>
                   <p>  —— {randomItem.quote}</p>
               </div>
               <ScrollTo>
                   {
                       ({scrollTo}) => (
                        <div 
                        className={'slide-down j-cp'}
                        onClick={
                            ()=> scrollTo({ x: 0, y: document.documentElement.clientHeight ,smooth:true})
                        }
                       >
                            <i className={'iconfont icon-arrow_slide_down'}></i>
                       </div>
                       )
                   }
               </ScrollTo>
            </div>
        )
    }
}
export default Header ; 