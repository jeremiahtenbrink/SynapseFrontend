import React, { useRef, useState } from "react";
import { Avatar, Popover } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";
import { signOut } from "../../actions";
import { APP_PATHS } from "../../utilities/constants.js";
import { useAppHooks } from "../../customHooks/useAppHooks.js";
import { APP_VIEW_DESKTOP } from "../../utilities/constants";

/**
 * Nav Bar Avatar
 * @component
 * @example
 * return (
 *  <NavBarAvatar />
 *  )
 */
export const NavBarAvatar = ( { avatarUrl, ...props } ) => {
  
  const [ open, setOpen ] = useState( false );
  const { dispatch, usersState, changePath, appView } = useAppHooks();
  const openRef = useRef();
  
  const handleClick = ( path ) => {
    setOpen( false );
    if( path === "logout" ){
      dispatch( signOut() );
    }else if( path === "signin" ){
      changePath( APP_PATHS.SIGN_IN_PATH );
    }
  };
  
  const getContent = () => {
    return ( <AvatarMenu>
      { <p onClick={ () => handleClick( "logout" ) }>Edit Profile</p> }
      <p style={ { background: "#D7EDE8" } }
         onClick={ () => handleClick( "logout" ) }>Logout</p>
    </AvatarMenu> );
  };
  
  const setOpenNotOpen = () => {
  
    if( openRef.current ){
      setOpen( !open );
      openRef.current = false;
      window.removeEventListener( "click", setOpenNotOpen );
    }else{
      setOpen( !open );
    }
    
  };
  
  const handleAvatarClick = () => {
  
    if( openRef.current ){
      setOpenNotOpen();
      openRef.current = false;
      
    }else{
      setOpenNotOpen();
      openRef.current = true;
      window.addEventListener( "click", setOpenNotOpen );
    }
  };
  
  return ( <Popover placement="bottomRight"
                    title={ "Hi " + usersState.user.displayName }
                    content={ getContent() }
                    visible={ open }
                    trigger="click">
    { avatarUrl ? <StyledAntAvatar src={ avatarUrl } { ...props }
                                   size={ appView === APP_VIEW_DESKTOP ? 50 :
                                     40 }
                                   onClick={ handleAvatarClick }
    /> : <StyledAntAvatar { ...props }
                          size={ appView === APP_VIEW_DESKTOP ? 50 : 40 }
                          onClick={ handleAvatarClick }
    /> }
  </Popover> );
};

const StyledAntAvatar = styled( Avatar )`
  && {
    position: absolute;
    background-color: #585858;
    right: 13%;
    top: 60%;
    filter: contrast(0.5);
    transform: translate(0, -50%);
  }
`;

const AvatarMenu = styled.div`
background: #A8D6CC;
width: 100%;
p {
  padding: 10px;
  font-weight: bold;
  color: #00352A;
}
`;

NavBarAvatar.propTypes = {
  getHooks: PropTypes.func, avatarUrl: PropTypes.string,
};
