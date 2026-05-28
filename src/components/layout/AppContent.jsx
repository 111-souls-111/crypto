import { Layout } from 'antd';

export default function AppContent() {
    
    
    const contentStyle = {
        textAlign: 'center',
        minHeight: 'calc(100vh - 60px)',
        lineHeight: '120px',
        color: '#fff',
        backgroundColor: '#001529',
    };
    
    

   return (
        <Layout.Content style={contentStyle}>Content</Layout.Content>
   )
}