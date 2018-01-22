import {
	darkBlack,
	fullBlack,
	grey300,
	grey50,
	grey500,
	grey600,
	grey700,
	grey900,
	pink500,
	white
} from "material-ui/styles/colors";
import {fade} from "material-ui/utils/colorManipulator";
const point3=0.3;
const point7=0.07;
const pont87=0.87;
const point77=0.57;
const point46=0.46;

export default {
  spacing: {
    iconSize: 24,
    desktopGutter: 24,
    desktopGutterMore: 32,
    desktopGutterLess: 16,
    desktopGutterMini: 8,
    desktopKeylineIncrement: 64,
    desktopDropDownMenuItemHeight: 32,
    desktopDropDownMenuFontSize: 15,
    desktopDrawerMenuItemHeight: 48,
    desktopSubheaderHeight: 48,
    desktopToolbarHeight: 56,
  },
  fontFamily: "Roboto, sans-serif",
  palette: {
    primary1Color: pink500,
    primary2Color: pink500,
    primary3Color: grey300,
    accent1Color: grey900,
    accent2Color: grey500,
    accent3Color: grey300,
    accent4Color: grey50,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(grey700, point3),
    pickerHeaderColor: pink500,
    clockCircleColor: fade(darkBlack, point7),
    shadowColor: fullBlack
  },
  raisedButton: {
    secondaryColor: grey50,
    secondaryTextColor: grey900
  },
  tabs: {
    backgroundColor: "#EFEFEF",
    textColor: fade(grey700, point77),
    selectedTextColor: fullBlack
  },
  inkBar: {
    backgroundColor: pink500
  },
  snackbar: {
    textColor: white,
    backgroundColor: pink500,
    actionColor: grey900
  },
  chip: {
    deleteIconColor: fade(white, point46),
    textColor: fade(white, pont87)
  },
  listItem: {
    nestedLevelDepth: 18,
    secondaryTextColor: "#c0bbb7",
    leftIconColor: "#c0bbb7",
  },
  drawer: {
    color: "#474544",
  },
  appBar: {
    color: "#2C3742",
  },
  tooltip: {
    color: "#fff",
    rippleBackgroundColor: "black"
  },
  textField: {
    floatingLabelColor: grey600
  }
};
