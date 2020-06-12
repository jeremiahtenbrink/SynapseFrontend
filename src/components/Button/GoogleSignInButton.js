import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 *   GoogleSignInButton
 *
 *  @component
 *
 */
const GoogleSignInButton = ( props ) => {
  
  return (
    <GoogleButton width="100%" height="100%" viewBox="0 0 358 76" fill="none"
                  xmlns="http://www.w3.org/2000/svg" { ...props }>
      <g id="googleButton">
        <rect id="Rectangle 73" opacity="0.17" x="4.56348" y="2.98218"
              width="348" height="68" rx="31" fill="#36405C" stroke="white"
              strokeWidth="4" strokeLinecap="round"/>
        <rect id="Rectangle 74" opacity="0.17" x="5.53906" y="3.73291"
              width="348" height="68" rx="31" fill="#36405C" stroke="white"
              strokeWidth="4" strokeLinecap="round"/>
        <rect id="Rectangle 75" opacity="0.17" x="6.51465" y="4.48364"
              width="348" height="68" rx="31" fill="#36405C" stroke="white"
              strokeWidth="4" strokeLinecap="round"/>
        <rect id="Rectangle 77" opacity="0.17" x="7.49023" y="5.23438"
              width="348" height="68" rx="31" fill="#36405C" stroke="white"
              strokeWidth="4" strokeLinecap="round"/>
        <rect id="Rectangle 76" x="3.58789" y="2.23145" width="348" height="68"
              rx="31" fill="#36405C" stroke="white" strokeWidth="4"
              strokeLinecap="round"/>
        <g id="text">
          <text id=" {props.text}" opacity="0.17" fill="white"
                space="preserve" style={ { whiteSpace: "pre" } }
                fontFamily="Source Sans Pro" fontSize="24" fontWeight="bold"
                letterSpacing="0em">
            <tspan x="83.2269" y="46.6613">
              { props.text }
            </tspan>
          </text>
          <text id=" Google_2" opacity="0.17" fill="white"
                space="preserve" style={ { whiteSpace: "pre" } }
                fontFamily="Source Sans Pro" fontSize="24" fontWeight="bold"
                letterSpacing="0em">
            <tspan x="82.2044" y="45.8999">
              { props.text }
            </tspan>
          </text>
          <text id=" Google_3" opacity="0.17" fill="white"
                space="preserve" style={ { whiteSpace: "pre" } }
                fontFamily="Source Sans Pro" fontSize="24" fontWeight="bold"
                letterSpacing="0em">
            <tspan x="82.7151" y="46.2806">
              { props.text }
            </tspan>
          </text>
          <text id=" Google_4" opacity="0.17" fill="white"
                space="preserve" style={ { whiteSpace: "pre" } }
                fontFamily="Source Sans Pro" fontSize="24" fontWeight="bold"
                letterSpacing="0em">
            <tspan x="82.4593" y="46.0902">
              { props.text }
            </tspan>
          </text>
          <text id=" Google_5" opacity="0.17" fill="white"
                space="preserve" style={ { whiteSpace: "pre" } }
                fontFamily="Source Sans Pro" fontSize="24" fontWeight="bold"
                letterSpacing="0em">
            <tspan x="82.971" y="46.471">
              { props.text }
            </tspan>
          </text>
          <text id=" Google_6" fill="white" stroke="black"
                strokeWidth="0.2" space="preserve"
                style={ { whiteSpace: "pre" } }
                fontFamily="Source Sans Pro" fontSize="24" fontWeight="bold"
                letterSpacing="0em">
            <tspan x="81.9505" y="45.7094">
              { props.text }
            </tspan>
          </text>
        </g>
        <g id="icon">
          <g id="Google__G__Logo 5" opacity="0.17" clipPath="url(#clip0)">
            <path id="Vector"
                  d="M62.9446 37.3598C62.9446 36.3402 62.8619 35.315 62.6855 34.3119H48.5371V40.0881H56.6392C56.303 41.9511 55.2227 43.599 53.6409 44.6463V48.3942H58.4746C61.3131 45.7817 62.9446 41.9235 62.9446 37.3598Z"
                  fill="#4285F4"/>
            <path id="Vector_2"
                  d="M48.5362 52.0153C52.5818 52.0153 55.9935 50.687 58.4793 48.3942L53.6455 44.6462C52.3007 45.5612 50.5645 46.0793 48.5417 46.0793C44.6284 46.0793 41.3104 43.4392 40.1199 39.8896H35.1318V43.7533C37.6782 48.8185 42.8647 52.0153 48.5362 52.0153V52.0153Z"
                  fill="#34A853"/>
            <path id="Vector_3"
                  d="M40.1143 39.8897C39.486 38.0267 39.486 36.0095 40.1143 34.1465V30.2828H35.1318C33.0043 34.5213 33.0043 39.5149 35.1318 43.7533L40.1143 39.8897V39.8897Z"
                  fill="#FBBC04"/>
            <path id="Vector_4"
                  d="M48.5362 27.9514C50.6747 27.9183 52.7416 28.723 54.2904 30.2001L58.573 25.9176C55.8612 23.3712 52.2621 21.9712 48.5362 22.0153C42.8647 22.0153 37.6782 25.2121 35.1318 30.2828L40.1144 34.1465C41.2994 30.5914 44.6229 27.9514 48.5362 27.9514V27.9514Z"
                  fill="#EA4335"/>
          </g>
          <g id="Google__G__Logo 4" opacity="0.17" clipPath="url(#clip1)">
            <path id="Vector_5"
                  d="M61.9456 35.7921C61.9456 34.7724 61.8629 33.7473 61.6865 32.7441H47.5381V38.5204H55.6402C55.304 40.3833 54.2237 42.0313 52.6419 43.0785V46.8264H57.4756C60.3141 44.2139 61.9456 40.3558 61.9456 35.7921Z"
                  fill="#4285F4"/>
            <path id="Vector_6"
                  d="M47.5372 50.4476C51.5827 50.4476 54.9945 49.1193 57.4802 46.8264L52.6465 43.0785C51.3017 43.9934 49.5655 44.5115 47.5427 44.5115C43.6294 44.5115 40.3114 41.8714 39.1209 38.3219H34.1328V42.1856C36.6792 47.2508 41.8657 50.4476 47.5372 50.4476V50.4476Z"
                  fill="#34A853"/>
            <path id="Vector_7"
                  d="M39.1153 38.3219C38.487 36.459 38.487 34.4417 39.1153 32.5788V28.7151H34.1327C32.0052 32.9536 32.0052 37.9471 34.1327 42.1856L39.1153 38.3219V38.3219Z"
                  fill="#FBBC04"/>
            <path id="Vector_8"
                  d="M47.5372 26.3836C49.6757 26.3505 51.7426 27.1552 53.2914 28.6324L57.5739 24.3498C54.8622 21.8034 51.2631 20.4035 47.5372 20.4475C41.8657 20.4475 36.6792 23.6443 34.1328 28.715L39.1154 32.5787C40.3004 29.0237 43.6239 26.3836 47.5372 26.3836V26.3836Z"
                  fill="#EA4335"/>
          </g>
          <g id="Google__G__Logo 3" opacity="0.17" clipPath="url(#clip2)">
            <path id="Vector_9"
                  d="M62.2786 36.3147C62.2786 35.295 62.1959 34.2698 62.0195 33.2667H47.8711V39.0429H55.9732C55.637 40.9059 54.5567 42.5539 52.9749 43.6011V47.349H57.8086C60.6471 44.7365 62.2786 40.8783 62.2786 36.3147Z"
                  fill="#4285F4"/>
            <path id="Vector_10"
                  d="M47.8702 50.9701C51.9158 50.9701 55.3275 49.6418 57.8132 47.349L52.9795 43.6011C51.6347 44.516 49.8985 45.0341 47.8757 45.0341C43.9624 45.0341 40.6444 42.394 39.4539 38.8445H34.4658V42.7082C37.0122 47.7734 42.1987 50.9701 47.8702 50.9701V50.9701Z"
                  fill="#34A853"/>
            <path id="Vector_11"
                  d="M39.4483 38.8445C38.82 36.9816 38.82 34.9643 39.4483 33.1013V29.2377H34.4657C32.3382 33.4761 32.3382 38.4697 34.4657 42.7082L39.4483 38.8445V38.8445Z"
                  fill="#FBBC04"/>
            <path id="Vector_12"
                  d="M47.8702 26.9062C50.0087 26.8731 52.0756 27.6778 53.6244 29.155L57.9069 24.8724C55.1952 22.326 51.5961 20.926 47.8702 20.9701C42.1987 20.9701 37.0122 24.1669 34.4658 29.2376L39.4484 33.1013C40.6334 29.5463 43.9569 26.9062 47.8702 26.9062V26.9062Z"
                  fill="#EA4335"/>
          </g>
          <g id="Google__G__Logo 2" opacity="0.17" clipPath="url(#clip3)">
            <path id="Vector_13"
                  d="M62.6116 36.8373C62.6116 35.8176 62.5289 34.7924 62.3525 33.7893H48.2041V39.5655H56.3062C55.97 41.4285 54.8897 43.0765 53.3079 44.1237V47.8716H58.1416C60.9801 45.2591 62.6116 41.4009 62.6116 36.8373Z"
                  fill="#4285F4"/>
            <path id="Vector_14"
                  d="M48.2032 51.4927C52.2488 51.4927 55.6605 50.1644 58.1462 47.8716L53.3125 44.1236C51.9677 45.0386 50.2315 45.5567 48.2087 45.5567C44.2954 45.5567 40.9774 42.9166 39.7869 39.3671H34.7988V43.2307C37.3452 48.296 42.5317 51.4927 48.2032 51.4927V51.4927Z"
                  fill="#34A853"/>
            <path id="Vector_15"
                  d="M39.7813 39.3671C39.153 37.5041 39.153 35.4869 39.7813 33.6239V29.7603H34.7988C32.6712 33.9987 32.6712 38.9923 34.7988 43.2308L39.7813 39.3671V39.3671Z"
                  fill="#FBBC04"/>
            <path id="Vector_16"
                  d="M48.2032 27.4288C50.3417 27.3957 52.4086 28.2004 53.9574 29.6775L58.2399 25.395C55.5282 22.8486 51.9291 21.4486 48.2032 21.4927C42.5317 21.4927 37.3452 24.6895 34.7988 29.7602L39.7814 33.6239C40.9664 30.0689 44.2899 27.4288 48.2032 27.4288V27.4288Z"
                  fill="#EA4335"/>
          </g>
          <g id="Google__G__Logo 1" clipPath="url(#clip4)">
            <path id="Vector_17"
                  d="M61.9456 35.7921C61.9456 34.7724 61.8629 33.7473 61.6865 32.7441H47.5381V38.5204H55.6402C55.304 40.3833 54.2237 42.0313 52.6419 43.0785V46.8264H57.4756C60.3141 44.2139 61.9456 40.3558 61.9456 35.7921Z"
                  fill="#4285F4"/>
            <path id="Vector_18"
                  d="M47.5372 50.4476C51.5827 50.4476 54.9945 49.1193 57.4802 46.8264L52.6465 43.0785C51.3017 43.9934 49.5655 44.5115 47.5427 44.5115C43.6294 44.5115 40.3114 41.8714 39.1209 38.3219H34.1328V42.1856C36.6792 47.2508 41.8657 50.4476 47.5372 50.4476V50.4476Z"
                  fill="#34A853"/>
            <path id="Vector_19"
                  d="M39.1153 38.3219C38.487 36.459 38.487 34.4417 39.1153 32.5788V28.7151H34.1327C32.0052 32.9536 32.0052 37.9471 34.1327 42.1856L39.1153 38.3219V38.3219Z"
                  fill="#FBBC04"/>
            <path id="Vector_20"
                  d="M47.5372 26.3836C49.6757 26.3505 51.7426 27.1552 53.2914 28.6324L57.5739 24.3498C54.8622 21.8034 51.2631 20.4035 47.5372 20.4475C41.8657 20.4475 36.6792 23.6443 34.1328 28.715L39.1154 32.5787C40.3004 29.0237 43.6239 26.3836 47.5372 26.3836V26.3836Z"
                  fill="#EA4335"/>
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="29.4047" height="30" fill="white"
                transform="translate(33.5391 22.0154)"/>
        </clipPath>
        <clipPath id="clip1">
          <rect width="29.4047" height="30" fill="white"
                transform="translate(32.54 20.4476)"/>
        </clipPath>
        <clipPath id="clip2">
          <rect width="29.4047" height="30" fill="white"
                transform="translate(32.873 20.9702)"/>
        </clipPath>
        <clipPath id="clip3">
          <rect width="29.4047" height="30" fill="white"
                transform="translate(33.2061 21.4928)"/>
        </clipPath>
        <clipPath id="clip4">
          <rect width="29.4047" height="30" fill="white"
                transform="translate(32.54 20.4476)"/>
        </clipPath>
      </defs>
    
    </GoogleButton> );
};

const GoogleButton = styled.svg`
cursor: pointer;
#text {
position: absolute;
transform-box: fill-box;
left: 50%;
top:50%;
transform: translate(-50%, -50%);
}
`;

GoogleSignInButton.propTypes = {};

export default GoogleSignInButton;