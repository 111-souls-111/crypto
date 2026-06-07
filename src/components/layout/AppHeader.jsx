import { Layout,Select, Space, Button } from 'antd';
import { useCrypto } from '../../context/crypto-context';



// const options = [
//   {
//     label: 'Happy',
//     value: 'happy',
//     emoji: '😄',
//     desc: 'Feeling Good',
//   },
//   {
//     label: 'Sad',
//     value: 'sad',
//     emoji: '😢',
//     desc: 'Feeling Blue',
//   },
//   {
//     label: 'Angry',
//     value: 'angry',
//     emoji: '😡',
//     desc: 'Furious',
//   },
//   {
//     label: 'Cool',
//     value: 'cool',
//     emoji: '😎',
//     desc: 'Chilling',
//   },
//   {
//     label: 'Sleepy',
//     value: 'sleepy',
//     emoji: '😴',
//     desc: 'Need Sleep',
//   },
// ];

export default function AppHeader() {
    const {crypto } = useCrypto()
 
    const headerStyle = {
        textAlign: 'center',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
    
    };
    function OnChange(){

    }

   return (
        <Layout.Header style={headerStyle}> 
        <Select
            // mode="multiple"
            labelInValue
            style={{ width: 250 }}
            

            options={crypto.map(coin => ({
                label : coin.name,
                value: coin.id,
                icon: coin.icon,
                desc: coin.symbol

            }))}
            placeholder = 'press /'
            optionRender={(option) => (
            <Space>
                <img style = {{width:30}}src={option.data.icon} alt={option.data.label}/>{option.data.label}
            </Space>
            )}
        />
        <Button type="primary">add asset</Button>
  </Layout.Header>
   )
}