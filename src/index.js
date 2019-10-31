import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Form, Field, Textarea, validators as v } from '@xo-union/tk-component-smart-form';
import { FormRow, FormColumn, FormBlockColumn } from '@xo-union/tk-component-form-grid';
import ImgUpload from './img-upload/img-upload.js'

  class Game extends React.Component {
    constructor(){
      super()
      this.state={
        array:[
          's','a','d'
        ],
        imgFile:"",
        imgSrc:""
      }
    }

    imgChange(event){
      this.setState({ imgFile: event.target.files[0]}, () => {
        this.previewImg()
      })
    }

    previewImg(){
      const that = this;
      const file = this.state.imgFile;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        that.setState({ imgSrc: this.result })
      }
    }

    render() {
      return (
        <div className="game">
          {/* <ImgUpload></ImgUpload> */}
          <FormRow>
            <FormColumn xs>
              <Field name="required" validations={[v.required()]} />
            </FormColumn>
            <FormColumn xs>
              <Field name="email" type="email" validations={[v.email()]} />
            </FormColumn>
          </FormRow>
          <div className="modal" >
            <input className="file" type="file" onChange={this.imgChange.bind(this)} accept="image/*" />
            <div className="btn">
              <div className="localimg">
                <img className="photo" src={this.state.imgSrc} alt=""/>
                <span className="icon">creame</span>
              </div>
              <div className="add">
                <span>upload</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  