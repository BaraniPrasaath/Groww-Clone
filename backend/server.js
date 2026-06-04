const express = require('express');
const axios = require('axios');
const cors = require('cors');
const qs = require('querystring');
const { accessToken, checkSum, deviceId, appId } = require('./config');
require('dotenv').config();

const app = express();

app.use(
  cors({
    origin: 'https://nhvtkx2d-4200.inc1.devtunnels.ms',
    credentials: true,
  }),
);

app.get('/', (req, res) => {
  res.send('Hello from my Groww server');
});

app.get('/market-data', async (req, res) => {
  try {
    const response = await axios.post(
      'https://groww.in/v1/api/stocks_data/v1/tr_live_delayed/segment/CASH/latest_aggregated',
      {
        exchangeAggReqMap: {
          NSE: {
            priceSymbolList: [
              'HDFCBANK',
              'ITC',
              'RELIANCE',
              'NETWEB',
              'HINDCOPPER',
              'RVNL',
              'MCX',
              'ATGL',
              'JPPOWER',
              'MON100',
              'NIFTYBEES',
              'ASHOKLEY',
              'BEL',
              'ADANIPOWER',
              'BHARATCOAL',
              'IRFC',
              'IRCTC',
              'NATCOPHARM',
              'BSE',
              'TATASTEEL',
            ],
            indexSymbolList: [],
          },
          BSE: {
            priceSymbolList: [
              '500180',
              '500875',
              '500325',
              '543945',
              '513599',
              '542649',
              '534091',
              '542066',
              '532627',
              '533385',
              '590103',
              '500477',
              '500049',
              '533096',
              '544678',
              '543257',
              '542830',
              '524816',
              '500470',
            ],
            indexSymbolList: [],
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'x-request-checksum': checkSum,
          'x-device-id': deviceId,
          'x-app-id': appId,
        },
      },
    );

    res.json(response.data);
  } catch (err) {
    console.log(err.response?.data);
    res.status(500).json(err.response?.data);
  }
});

app.get('/etfSeeMore', async (req, res) => {
  try {
    const payload = {
      filterCriteria: {
        expenseRatio: [
          {
            value: 'NONE',
            key: 'expenseRatio',
            operator: 'LESS_THAN_EQUALS',
            label: 'All',
          },
        ],
        category: [
          {
            value: 'NONE',
            key: 'assetClass',
            operator: 'EQUALS',
            label: 'ALL',
          },
        ],
      },
      sortCriteria: {
        key: 'turnover',
        order: 'DESCENDING',
      },
    };

    const response = await axios.post(
      'https://groww.in/bff/web/stocks/screener/web-pages/screener_stocks?screenerId=etf',
      qs.stringify({
        data: JSON.stringify(payload),
      }),
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/x-www-form-urlencoded',

          'x-app-id': 'growwWeb',
          'x-device-id': '8cb807a4-b911-58b0-b718-2189243a7865',
          'x-device-id-v2': '8cb807a4-b911-58b0-b718-2189243a7865',
          'x-device-type': 'desktop',
          'x-platform': 'web',

          'x-request-checksum':
            'bnhtNjVwIyMjZDBnM3JreUhIa0ZESm1pT0FUVVUzZ0lwNHJHK2JoektRTWFmME9GUDJzVEM5bmk4Q0h6ODlBSjZhQ2YvczVwd1I1OXRTZmtabmZVUk80OGM3R2J1Y2VqRWFoMmZ4NUZBR2ZKMXBqdkRtWTA9',
        },
      },
    );

    res.json(response.data);
  } catch (err) {
    console.log(err.response?.status);
    console.log(err.response?.data);
    res.status(500).json(err.response?.data);
  }
});

app.get('/volume-shokers', async (req, res) => {
  try {
    const response = await axios.get(
      'https://groww.in/bff/web/stocks/explore/web-pages/top_movers?indice=GIDXNIFTY100&moverType=VOLUME_SHOCKERS&pageSize=100',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'x-request-checksum': checkSum,
          'x-device-id': deviceId,
          'x-app-id': appId,
        },
      },
    );

    res.json(response.data);
  } catch (err) {
    console.log(err.response?.data);
    res.status(500).json(err.response?.data);
  }
});

app.listen(3000);
