import React, {useState, useEffect} from 'react'
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser'
import millify from 'millify';
import { useGetCryptoDetailsQuery, useGetCryptosQuery  } from '../services/cryptoApi'
const { Panel } = Collapse;
const {Title, Text} = Typography;
const Exchanges = () => {
  const count = 100;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([])
  const [searchTerm,setSearchTerm] = useState('');
  useEffect(()=>{
    const filteredData = cryptosList?.data?.coins
    setCryptos(filteredData)
  }, [cryptosList, searchTerm])
  if(isFetching) return 'Loading...';

  console.log(cryptos)
  return (
    <Row gutter={[32,32]}>
      <Col xs={24} sm={12} lg={6}>
        <Title level={5}>Exchanges</Title>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Title level={5}>24h Trade Volume</Title>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Title level={5}>Markets</Title>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Title level={5}>Change</Title>
      </Col>
      {cryptos?.map((currency)=>(
           <Col span={24}>
            <Collapse accordion>
       
            <Panel
                key={currency.uuid}
                showArrow={false}
                header={(
                  <Row key={currency.uuid}>
                    <Col span={6}>
                    <Avatar className="exchange-image" src={currency.iconUrl} />
                      <Text><strong>{currency.rank}.</strong></Text>
                      <Text><strong>{currency.name}</strong></Text>
                    </Col>
                    <Col span={6}>{millify(currency.marketCap)}</Col>
                    <Col span={6}>${millify(currency.price)}</Col>
                    <Col span={6}>{millify(currency.change)}%</Col>
                  </Row>
                  )}
              >
               <a href={currency.coinrankingUrl}> See more of the coin Ranking</a>
              </Panel>
      
     </Collapse>
           </Col>
        
      ))}
    </Row>
  )
}

export default Exchanges