const DATE_FORMATS = {
  LT: "h:mm A", //	8:02 PM
  LTS: "h:mm:ss A", //8:02:18 PM,
  L: "MM/DD/YYYY", //	08/16/2018
  LL: "MMMM D, YYYY", //	August 16, 2018
  "LLL:	MMMM D": "YYYY h:mm A", //	August 16, 2018 8:02 PM
  LLLL: "dddd, MMMM D, YYYY h:mm A", //	Thursday, August 16, 2018 8:02 PM
  l: "M/D/YYYY", //	8/16/2018
  ll: "MMM D, YYYY", //	Aug 16, 2018
  lll: "MMM D, YYYY h:mm A", //	Aug 16, 2018 8:02 PM
  llll: "ddd, MMM D, YYYY h:mm A", //	Thu, Aug 16, 2018 8:02 PM
};

export default DATE_FORMATS;
