import { Layout, Card, Statistic, List,Typography } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useEffect } from 'react';

export default function AppSider() {

    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];


    const siderStyle = {
        padding: '1rem'
    };

   return (
        <Layout.Sider width="25%" style={siderStyle}>
            <Card style = {{marginBottom: '1rem'}}>
                <Statistic
                    title="Active"
                    value={11.28}
                    precision={2}
                    styles={{ content: { color: '#3f8600' } }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                />
                <List

                    size='small'
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />

            </Card>
    
            <Card>
                <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    styles={{ content: { color: '#cf1322' } }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                />
            </Card>
        </Layout.Sider>
   )
}