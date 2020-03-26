
import {createRule} from "./useStyledThemingRules.js";
import {
  APP_PATHS, APP_VIEW_DESKTOP, APP_VIEW_MOBILE,
} from "../utilities/constants.js";

/**
 * @typedef {object.<THEME_VARIABLE, {string}>} THEMING_VARIABLES
 */
export const THEMING_VARIABLES = {
  BACKGROUND: "BACKGROUND",
  NAV_STYLE: "NAV_STYLE",
  BRAIN_SVG: "BRAIN_SVG",
  FOOTER: "FOOTER",
};

/**
 * @typedef {string }THEME_VARIABLE
 */

/**
 * @typedef {object.<THEMING_VALUE, {string}>} THEMING_VALUES
 */
export const THEMING_VALUES = {
  HIDDEN: "HIDDEN",
  DARK: "DARK",
  LIGHT: "LIGHT",
  BOTTOM: "BOTTOM",
  TOP: "TOP",
  MOBILE: 'MOBILE'
};

/**
 * @typedef {Object} ThemeRuleValues
 * @property {string} NAV_STYLE
 * @property {string} BACKGROUND
 */
export const DEFAULT_THEME_RULE_VALUES = {
  [THEMING_VARIABLES.NAV_STYLE]: THEMING_VALUES.DARK,
  [THEMING_VARIABLES.BACKGROUND]: THEMING_VALUES.DARK,
  [THEMING_VARIABLES.BRAIN_SVG]: THEMING_VALUES.TOP,
};

/**
 * @typedef {string} THEMING_VALUE
 */

/**
 * @typedef {ThemeRule[]} themingRules
 */
export const getThemingRules = () => [
  createRule(
    THEMING_VARIABLES.NAV_STYLE,
    THEMING_VALUES.DARK,
    [
      APP_PATHS.PREVIEW_DECK_PATH, APP_PATHS.GAME_PATH, APP_PATHS.SIGN_IN_PATH,
      APP_PATHS.DASHBOARD_PATH, APP_PATHS.TESTING,
    ],
    APP_VIEW_DESKTOP,
  ),
  createRule(
    THEMING_VARIABLES.NAV_STYLE,
    THEMING_VALUES.LIGHT,
    [
      APP_PATHS.SIGN_UP_PATH,
      APP_PATHS.CREATE_DECK_PATH,
      APP_PATHS.LANDING_PAGE,
    ],
    APP_VIEW_DESKTOP,
  ),
  createRule(
    THEMING_VARIABLES.NAV_STYLE,
    THEMING_VALUES.DARK,
    [
      APP_PATHS.CREATE_DECK_PATH,
      APP_PATHS.DASHBOARD_PATH,
      APP_PATHS.GAME_PATH,
      APP_PATHS.PREVIEW_DECK_PATH,
    ],
    APP_VIEW_MOBILE,
  ),
  createRule(
    THEMING_VARIABLES.NAV_STYLE,
    THEMING_VALUES.HIDDEN,
    [APP_PATHS.SIGN_UP_PATH, APP_PATHS.SIGN_IN_PATH, APP_PATHS.LANDING_PAGE],
    APP_VIEW_MOBILE,
  ),
  createRule(THEMING_VARIABLES.BACKGROUND, THEMING_VALUES.DARK,
    [APP_PATHS.SIGN_IN_PATH, APP_PATHS.DASHBOARD_PATH, APP_PATHS.GAME_PATH],
    APP_VIEW_DESKTOP,
  ), createRule(THEMING_VARIABLES.BACKGROUND, THEMING_VALUES.LIGHT,
    [
      APP_PATHS.SIGN_UP_PATH,
      APP_PATHS.CREATE_DECK_PATH,
      APP_PATHS.LANDING_PAGE,
    ],
    APP_VIEW_DESKTOP,
  ),
  createRule(THEMING_VARIABLES.BACKGROUND, THEMING_VALUES.DARK,
    [APP_PATHS.SIGN_IN_PATH, APP_PATHS.LANDING_PAGE, APP_PATHS.GAME_PATH],
    APP_VIEW_MOBILE,
  ), createRule(THEMING_VARIABLES.BACKGROUND, THEMING_VALUES.LIGHT,
    [
      APP_PATHS.SIGN_UP_PATH,
      APP_PATHS.CREATE_DECK_PATH,
      APP_PATHS.DASHBOARD_PATH, APP_PATHS.TESTING, APP_PATHS.PREVIEW_DECK_PATH,
      APP_PATHS.CREATE_DECK_PATH,
    ],
    APP_VIEW_MOBILE,
  ), createRule(THEMING_VARIABLES.BRAIN_SVG, THEMING_VALUES.TOP,
    [
      APP_PATHS.DASHBOARD_PATH,
      APP_PATHS.CREATE_DECK_PATH,
      APP_PATHS.LANDING_PAGE,
      APP_PATHS.GAME_PATH,
      APP_PATHS.PREVIEW_DECK_PATH,
    ],
    APP_VIEW_DESKTOP,
  ), createRule(THEMING_VARIABLES.BRAIN_SVG, THEMING_VALUES.BOTTOM,
    [
      APP_PATHS.SIGN_UP_PATH, APP_PATHS.SIGN_IN_PATH,
    ],
    APP_VIEW_DESKTOP,
  ), createRule(THEMING_VARIABLES.BRAIN_SVG, THEMING_VALUES.HIDDEN,
    [
      APP_PATHS.TESTING,
    ],
    APP_VIEW_DESKTOP,
  ), createRule(THEMING_VARIABLES.BRAIN_SVG, THEMING_VALUES.MOBILE,
    [
      APP_PATHS.SIGN_UP_PATH, APP_PATHS.SIGN_IN_PATH,
    ],
    APP_VIEW_MOBILE,
  ), createRule(THEMING_VARIABLES.BRAIN_SVG, THEMING_VALUES.HIDDEN,
    [
      APP_PATHS.DASHBOARD_PATH,
      APP_PATHS.CREATE_DECK_PATH,
      APP_PATHS.LANDING_PAGE,
      APP_PATHS.GAME_PATH,
      APP_PATHS.TESTING,
      APP_PATHS.PREVIEW_DECK_PATH,
    ],
    APP_VIEW_MOBILE,
  ), createRule(THEMING_VARIABLES.FOOTER, THEMING_VALUES.HIDDEN,
    [],
    APP_VIEW_MOBILE,
  ),
];
