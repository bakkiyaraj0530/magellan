
const brandingColors = [{
  magellanblack: '#000000',
  magellanwhite: '#FFFFFF',
  magellanblue: '#0077C8',
  magellandarkblue: '#004B98',
  magellanskyblue: '#00A9E0',
  magellanlightblue: '#E5F6FC',
  magellanpurple: '#5C068C',
  magellanrubine: '#BB0E83',
  magellanpink: '#E68699',
  magellanlightpink: '#FCEDF0',
  magellandeepgreen: '#00653C',
  magellanbrightgreen: '#509E2F',
  magellanlimegreen: '#B5BD00',
  magellanlightgreen: '#F6F7E0',
  magellandeeporange: '#D04927',
  magellanbrightorange: '#ED8B00',
  magellanyellow: '#F3D03E',
  magellanlightyellow: '#FDF7DC',
  magellanred: '#C8102A',
  magellan90black: '#121C1F',
  magellan80black: '#2B3336',
  magellan60black: '#535B5E',
  magellan50black: '#6A737B',
  magellan30black: '#ACB0B4',
  magellan20black: '#C0C4C7',
  magellan10black: '#D5D8DA',
  magellan5black: '#E1E5E8',
  magellan3black: '#F1F1F1',
  magellan1black: '#F7F8F8',
  magellanreturnblue: '#00a8e2',
  magellanheaderblue: '#005398',
}];

const colors = brandingColors.reduce((prev, curr) => [...prev, ...curr]);

export default colors;
