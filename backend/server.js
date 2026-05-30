const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

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
          Authorization:
            'Bearer eyJraWQiOiJXTTZDLVEiLCJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3ODAyMjgzODIsImlhdCI6MTc3OTk3NjY5NywibmJmIjoxNzc5OTc2NjQ3LCJzdWIiOiJ7XCJwbGF0Zm9ybVwiOlwid2ViXCIsXCJwbGF0Zm9ybVZlcnNpb25cIjpudWxsLFwib3NcIjpudWxsLFwib3NWZXJzaW9uXCI6bnVsbCxcImlwQWRkcmVzc1wiOlwiMjQwMTo0OTAwOjYwNjg6NmY1Yjo5OGRmOmU5Njc6ZDlhMDo4YjA2LFwiLFwibWFjQWRkcmVzc1wiOm51bGwsXCJ1c2VyQWdlbnRcIjpcIk1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xNDcuMC4wLjAgU2FmYXJpLzUzNy4zNlwiLFwiZ3Jvd3dVc2VyQWdlbnRcIjpudWxsLFwiZGV2aWNlSWRcIjpcImQxOGI4MzRiLTEzMDgtNTkyZC1iNmQzLWExOGQwYWQ0ZmE4NVwiLFwic2Vzc2lvbklkXCI6XCI2MjFkYmZjMi01OTJlLTRmMDMtODI4YS05ZjhiMGE2NjY0NGNcIixcInNlc3Npb25JZElzc3VlZEF0XCI6MTc3OTk3NjY5NzA2NixcInN1cGVyQWNjb3VudElkXCI6XCJBQ0M0OTE5NDE2NjA4MTY3XCIsXCJ1c2VyQWNjb3VudElkXCI6XCJBQ0M0OTE5NDE2NjA4MTY3XCIsXCJ0eXBlXCI6XCJBVFwiLFwidG9rZW5FeHBpcnlcIjoxNzgwMjI4MzgyOTQxLFwidG9rZW5JZFwiOlwiODYzZDNiZTItZTgzZS00ODUxLWI1MmEtMWY1ODVmN2I2NDk2XCIsXCJic2VVc2VySWRcIjpcIjY1ODQwMzA1MzhcIixcIm9uZUZhTW9kZVwiOlwiS05PV0xFREdFX0ZBQ1RPUlwifSIsImlzcyI6Imdyb3d3YmlsbGlvbm1pbGxlbm5pYWwifQ.e3NGMBFXQ1f94aHPDeZ3UaEmaQPNSgJdBfb_KhOIw9pjiiaXwjMBpx1rBj8Bv1yGEgCiQZ1srNGVGXIXVnrBmg',
          'x-request-checksum':
            'MmZ6YmluIyMjUzJMOFBpNFVUTzNnRDBXaThzczdlNU1jeVVsR05mZGhHZDZzbE9vRnpiOTVwdEFzandBaVBUQjNITlZMWjdTQzE1ZnVidzQ0MW9jU0taVHc2S2lNV3hKaGEvWGYrUU5DQWJuS1ZwTXdwdTQ9',
          'x-device-id': 'd18b834b-1308-592d-b6d3-a18d0ad4fa85',
          'x-app-id': 'growwWeb',
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
