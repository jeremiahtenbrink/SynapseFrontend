import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ReactComponent as DeckCardSvg } from "../svgs/DeckCard.svg";
import { APP_PATHS } from "../utilities/constants.js";
import { callEveryNode } from "../utilities/callEveryNode.js";
import { useAppHooks } from "../customHooks/useAppHooks.js";
import DeckContainer from "../components/Container/DeckContainer.js";

/**
 *   DeckCard
 *
 *  @component
 * @param {Object} props
 * @property {GetHooksReturn} getHooks
 */
const DeckCard = ( { deck } ) => {
  
  const deckCardRef = useRef();
  const { changePath } = useAppHooks();
  const [ heartCenter, setHeartCenter ] = useState( null );
  const [ addButton, setAddButton ] = useState( null );
  const [ textEl, setTextEl ] = useState( null );
  
  useEffect( () => {
    if( deckCardRef.current ){
      callEveryNode( deckCardRef.current, setDeckCardElements );
    }
  }, [ deck ] );
  
  const deckClicked = ( e ) => {
    if( !deck ){
      changePath( APP_PATHS.CREATE_DECK_PATH );
    }else{
      changePath( APP_PATHS.PREVIEW_DECK_PATH + "/" + deck.deck_name );
    }
    
  };
  
  const favoriteClicked = ( e ) => {
    e.stopPropagation();
  };
  
  /**
   * @property {HTMLElement} el
   */
  const setDeckCardElements = ( el ) => {
    
    if( el.id === "heart" ){
      if( !deck ){
        el.setAttribute( "opacity", 0 );
      }else{
        el.addEventListener( "click", favoriteClicked );
      }
    }else if( el.id === "heartCenter" ){
      if( !deck || !deck.favorite ){
        el.setAttribute( "opacity", 0 );
      }
      setHeartCenter( el );
    }else if( el.id === "addButton" ){
      if( deck ){
        el.setAttribute( "opacity", 0 );
      }
      setAddButton( addButton );
    }else if( el.id === "text" ){
      el.childNodes[ 0 ].childNodes[ 0 ].childNodes.forEach( ( child, i ) => {
        if( i === 0 ){
          child.textContent = "";
        }else{
          child.textContent = "";
        }
      } );
    }
  };
  
  return ( <Container onClick={ deckClicked }>
    <DeckCardSvg ref={ deckCardRef }/>
    { deck && <p className={ "deck-name" }>{ deck.deck_name }</p> }
    { !deck && <p className={ "deck-name" }>Create Deck</p> }
  </Container> );
};

const Container = styled( DeckContainer )`

`;

DeckCard.propTypes = {};

export default DeckCard;