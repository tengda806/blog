import React , { Component } from "react"
import { getPost } from "../api/post"
import ReactMarkdown from "react-markdown"
class Detail extends Component{

    state = {
        detail:{}
    }

    componentDidMount(){
        this.getDetail()
    }
    getDetail(){
        let _id = this.props.match.params.id ; 
        getPost({id:_id}).then(res=>{
            this.setState({detail:res.data})
        })
    }

    render(){
        let {  content } = this.state.detail ; 
        return ( <div className={'detail-wrap'} >
              <ReactMarkdown
                source={content}
              />
        </div> )
    }
}

export default Detail ; 