import { Layout, Card, Statistic, List, Typography, Tag, Col, Row } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { capitalise } from '../../utils';
import { useContext } from 'react';
import CryptoContext from '../../context/crypto-context';

const siderStyle = {
    padding: '1rem',
    background: '#f5f5f5',
    height: '100vh',
    overflow: 'auto'
};

export default function AppSider() {
    const { assets } = useContext(CryptoContext);



    return (
        <Layout.Sider     
            width="25%"
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => console.log(broken)}
            onCollapse={(collapsed, type) => console.log(collapsed, type)}
            style={siderStyle}
        >
            {assets.map((asset) => (
                <Card key={asset.id} style={{ marginBottom: '1rem' }}>
                    <Statistic
                        title={capitalise(asset.id)}
                        value={asset.totalAmount}
                        precision={2}
                        styles={{ 
                            content: { 
                                color: asset.grow ? '#3f8600' : '#cf1322' 
                            } 
                        }}
                        prefix={asset.grow ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                        suffix="$"
                    />
                    <List
                        size='small'
                        dataSource={[
                            { title: "TotalProfit", value: asset.totalProfit, withTag: true },
                            { title: "TotalAmount", value: asset.amount, isPlain: true },
                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                <span>{item.title}</span>
                                <span> 
                                    {item.withTag && (
                                        <Tag color={asset.grow ? 'green' : 'red'}>
                                            {asset.growPercent}%
                                        </Tag>
                                    )}
                                    {item.isPlain && item.value}
                                    {!item.isPlain && (
                                        <Typography.Text type={asset.grow ? "success" : "danger"}>
                                            {item.value.toFixed(2)}$
                                        </Typography.Text>
                                    )}
                                </span>
                            </List.Item>
                        )}
                    />
                </Card>
            ))}
        </Layout.Sider>
    );
}