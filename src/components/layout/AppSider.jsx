import { Layout, Card, Statistic } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

export default function AppSider() {

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