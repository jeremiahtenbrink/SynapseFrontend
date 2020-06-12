import React from "react";
import withSvgContainer from "./withSvgContainer.js";

/**
 * Synaps Logo Text Svg
 * @param {SvgComponentProps} props
 * @type SvgComponent
 */
function SvgSynapsLogoText( props ){
  
  return ( <svg
      viewBox="0 0 120 34"
      width={ props.width }
      height={ props.height }
      fill={ props.fill }
      { ...props }
    >
      <path
        d="M11.426 23.395c-2.278 0-4.508-.654-6.422-1.884a1.303 1.303 0 01-.641-1.176c0-.65.427-1.572 1.283-2.767a1.265 1.265 0 011.158-.572c.587 0 1.272.231 2.062.706 1.103.627 2.038.94 2.806.94 1.373 0 2.06-.268 2.062-.806 0-.23-.216-.413-.642-.572a7.996 7.996 0 00-1.622-.37 9.997 9.997 0 01-2.112-.555 11.751 11.751 0 01-2.111-1.026 4.511 4.511 0 01-1.622-1.9 6.89 6.89 0 01-.642-3.078c0-3.536 2.445-5.304 7.335-5.304 1.71.029 3.392.422 4.935 1.153.788.36 1.182.853 1.182 1.48 0 .462-.232 1.054-.71 1.818-.518.807-1.035 1.21-1.554 1.21a3.047 3.047 0 01-1.158-.337 6.556 6.556 0 00-2.734-.684c-1.33 0-1.992.249-1.992.74 0 .36.217.646.657.858a5.18 5.18 0 001.657.438c.727.094 1.444.248 2.145.46a13.46 13.46 0 012.148.824c.701.37 1.273.942 1.64 1.642.465.875.692 1.854.66 2.843a6.368 6.368 0 01-.66 3.046 4.141 4.141 0 01-1.853 1.817 9.592 9.592 0 01-2.433.823c-.931.166-1.876.244-2.822.233zM36.605 5.569c1.33.584 1.995 1.29 1.995 2.119 0 .357-.17.897-.507 1.614v.034a.093.093 0 00-.035.067l-8.855 19.71a10.63 10.63 0 01-.463.976c-.149.254-.35.472-.591.641a1.548 1.548 0 01-.948.302c-.45 0-1.07-.168-1.853-.505-1.33-.582-1.995-1.274-1.995-2.075 0-.36.18-.943.542-1.75a221.436 221.436 0 012.704-5.954L19.88 9.479c-.45-.74-.676-1.29-.676-1.648 0-.718.608-1.436 1.825-2.154.765-.447 1.418-.671 1.96-.671.31-.002.615.088.874.258.232.144.433.333.59.556.126.192.312.49.559.892 1.983 3.382 3.481 5.893 4.495 7.534.112-.359 1.194-2.77 3.243-7.232.158-.36.276-.615.355-.774.105-.197.23-.382.373-.554.143-.197.334-.356.556-.461.235-.096.489-.143.743-.136.636.036 1.257.2 1.828.48zM50.022 5.365a7.176 7.176 0 013.108.649 7.143 7.143 0 012.52 1.925c1.497 1.715 2.247 3.807 2.247 6.274v5.92c.005.384-.011.77-.05 1.152a2.728 2.728 0 01-.305.874 1.425 1.425 0 01-.894.692 5.964 5.964 0 01-1.724.203c-.49.01-.98-.046-1.455-.169a3.003 3.003 0 01-.878-.38 1.322 1.322 0 01-.463-.692 3.218 3.218 0 01-.17-.775c-.011-.2-.016-.514-.016-.94v-5.92c0-.922-.266-1.637-.794-2.15-.529-.515-1.244-.776-2.146-.776a2.957 2.957 0 00-2.147.807 2.838 2.838 0 00-.827 2.12v5.953c.006.385-.011.77-.051 1.153-.05.307-.152.603-.304.874a1.427 1.427 0 01-.896.692 5.964 5.964 0 01-1.724.203 5.804 5.804 0 01-1.69-.203 1.417 1.417 0 01-.896-.706c-.149-.279-.251-.58-.303-.892a9.486 9.486 0 01-.051-1.153V8.192c-.006-.376.01-.753.05-1.127.051-.304.16-.595.32-.858a1.463 1.463 0 01.913-.657 6.342 6.342 0 011.692-.185 5.584 5.584 0 011.656.203c.362.08.68.29.897.588.132.2.23.422.287.655.039.234.056.471.051.708.057-.08.119-.158.185-.23.08-.091.248-.26.508-.505.253-.245.529-.467.822-.662a5.215 5.215 0 011.133-.521 4.33 4.33 0 011.395-.236zM75.1 5.366c.57-.017 1.14.051 1.69.203a1.416 1.416 0 01.896.705c.15.28.252.58.304.893.04.383.057.768.05 1.153V20.1c.007.385-.01.77-.05 1.153-.05.31-.152.608-.304.883a1.426 1.426 0 01-.896.692 5.887 5.887 0 01-1.724.203c-1.015 0-1.728-.152-2.145-.461a1.815 1.815 0 01-.728-1.328c-.834 1.188-2.186 1.782-4.056 1.782-2.027 0-3.874-.886-5.542-2.659a8.78 8.78 0 01-2.5-6.225c0-2.306.839-4.342 2.516-6.106 1.677-1.765 3.52-2.643 5.526-2.634a5.276 5.276 0 012.085.404c.478.178.923.433 1.318.756.225.21.428.442.607.692a1.94 1.94 0 01.727-1.414c.429-.304 1.166-.472 2.227-.472zM69.04 17.14a2.66 2.66 0 002.046-.909 2.924 2.924 0 00.827-2.018 3.08 3.08 0 00-.788-2.017 2.658 2.658 0 00-2.147-.943 2.725 2.725 0 00-2.146.943 3.038 3.038 0 00-.83 2.05 2.78 2.78 0 00.881 2.001 2.906 2.906 0 002.157.893zM80.744 27.901V8.26a9.06 9.06 0 01.051-1.153 2.68 2.68 0 01.304-.858 1.418 1.418 0 01.862-.691 5.385 5.385 0 011.656-.203c1.013 0 1.728.153 2.145.46a1.82 1.82 0 01.728 1.334c.856-1.166 2.14-1.748 3.853-1.748 1.96 0 3.762.863 5.407 2.59 1.645 1.726 2.468 3.71 2.468 5.953a8.575 8.575 0 01-2.452 6.09c-1.632 1.728-3.436 2.59-5.412 2.59-1.71 0-2.984-.516-3.82-1.548v6.795c.007.385-.01.77-.049 1.153-.053.301-.157.59-.305.858a1.423 1.423 0 01-.862.692 5.467 5.467 0 01-1.657.2 5.649 5.649 0 01-1.672-.2 1.45 1.45 0 01-.879-.673 2.527 2.527 0 01-.303-.842 9.045 9.045 0 01-.063-1.158zm6.691-15.84a2.99 2.99 0 00-.776 1.984c.005.732.29 1.435.795 1.967a2.562 2.562 0 002.01.893 2.854 2.854 0 002.111-.874 2.767 2.767 0 00.864-1.986 2.894 2.894 0 00-.81-2.001 2.694 2.694 0 00-2.086-.892 2.626 2.626 0 00-2.108.908zM106.97 23.395c-2.278 0-4.508-.654-6.422-1.884a1.302 1.302 0 01-.642-1.176c0-.65.428-1.572 1.284-2.767a1.268 1.268 0 011.158-.572c.586 0 1.273.236 2.062.706 1.105.627 2.04.94 2.806.94 1.373 0 2.06-.268 2.062-.806 0-.23-.216-.413-.642-.572a7.97 7.97 0 00-1.622-.37 9.982 9.982 0 01-2.113-.555 11.764 11.764 0 01-2.112-1.026 4.484 4.484 0 01-1.622-1.9 6.845 6.845 0 01-.642-3.078c0-3.536 2.444-5.304 7.333-5.304 1.709.028 3.392.421 4.934 1.153.788.36 1.184.853 1.184 1.48 0 .462-.231 1.054-.711 1.818-.517.807-1.036 1.21-1.555 1.21a3.062 3.062 0 01-1.158-.337 6.555 6.555 0 00-2.736-.673c-1.33 0-1.995.25-1.995.74 0 .36.22.646.658.858a5.186 5.186 0 001.657.438 13.24 13.24 0 012.147.461c.738.213 1.455.489 2.146.824a3.907 3.907 0 011.656 1.648c.463.876.689 1.855.658 2.843a6.39 6.39 0 01-.658 3.028 4.144 4.144 0 01-1.853 1.817 9.586 9.586 0 01-2.433.823c-.933.166-1.88.244-2.829.233z"
        fill={ props.fill }
      />
    </svg>
  
  );
}

export default SvgSynapsLogoText;
