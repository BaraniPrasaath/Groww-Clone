export const TOP_MOVERS_CONFIG = {
  'top-gainers': {
    title: 'Top Gainers',
    moverType: 'TOP_GAINERS',
  },

  'top-losers': {
    title: 'Top Losers',
    moverType: 'TOP_LOSERS',
  },

  'volume-shockers': {
    title: 'Volume Shockers',
    moverType: 'VOLUME_SHOCKERS',
  },

  'top-volume': {
    title: 'Top Volume',
    moverType: 'TRADED_BY_VOLUME',
  },

  '52-week-high': {
    title: '52 Week High',
    moverType: 'YEARLY_HIGH',
  },

  '52-week-low': {
    title: '52 Week Low',
    moverType: 'YEARLY_LOW',
  },
} as const;