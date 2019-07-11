import React, { Component } from "react" 
import "./editor.less"
import { saveArticle } from "../api/article"
import { toast } from "react-toastify" 
// 引入编辑器组件
import BraftEditor from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css'

class Editor extends Component{

    state = {
        title:'',
        // 创建一个空的editorState作为初始值
        editorState: BraftEditor.createEditorState(null)
    }
   async componentDidMount(){

    }
    submitContent = async () => {
        const title = this.state.title 
        const htmlContent = this.state.editorState.toHTML()
        if(title === '' ){
            toast.error('请填写标题')
        }
        saveArticle({
            title : title , 
            content : htmlContent 
        })
    }
    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }
    render(){
        let { editorState } = this.state ; 
        return (
            <div className={"editor-wrap clearfix"}>
                 标题：  <input></input> <button className={'btn'}>完成</button>
                <BraftEditor
                    value={editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />
            </div>
        )
    }

}


export default Editor ; 
