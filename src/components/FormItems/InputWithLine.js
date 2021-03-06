import React, { useState } from "react";
import styled from "styled-components";
import { Form, Input } from "antd";

/**
 *   InputWithLine
 *
 *  @component
 *
 */
export const InputWithLine = ( props ) => {
  
  const [ userName, setUserName ] = useState( "username" );
  const [ password, setPassword ] = useState( "password" );
  
  return ( <FormItem data-testid={ "form-item" } { ...props }>
    { props.password ? <FormPassword  { ...props }
                                      style={ { background: "transparent!important" } }
                                      onChange={ e => setPassword( e.target.value ) }
                                      id={ "password-" + props.elId }
                                      value={ password }/> :
      <FormInput id={ "input-" + props.elId }
                 data-testid={ "form-input" }
                 onChange={ e => setUserName( e.target.value ) }
                 value={ userName }
                 placeholder={ props.for }{ ...props }/> }


  </FormItem> );
};

const FormItem = styled( Form.Item )`
      &&{
      & ::placeholder {
      color: white;
      background: transparent!important;
      font-size: 20px;
      padding-bottom: 0;
      margin-bottom: 0;
      }
      
      & .ant-form-item-controlWrapper .ant-form-item-control {
      line-height: 12px;
      }
      }
      
      `;

const FormInput = styled( Input )`
display: flex;

`;

const FormPassword = styled( Input.Password )`
display: flex;
`;

InputWithLine.propTypes = {};