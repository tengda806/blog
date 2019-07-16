import React , { Component } from "react"

class Detail extends Component{

    state = {
        detail:{}
    }

    componentDidMount(){
        // this.getDetail()
    }
    getDetail(){
        // let _id = this.props.match.params.id ; 

    }

    render(){
        return ( <div className={'detail-wrap'}>
                detail
        </div> )
    }
}

export default Detail ; 