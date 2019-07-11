import React , { Component } from "react"
import { detail } from "../api/article"

class Detail extends Component{

    state = {
        detail:{}
    }

    componentDidMount(){
        this.getDetail()
    }
    getDetail(){
        let _id = this.props.match.params.id ; 
        detail({_id}).then(data=>{
            this.setState({
                detail : data.data 
            })
        })
    }

    render(){
        return ( <div className={'detail-wrap'}>
                detail
        </div> )
    }
}

export default Detail ; 