import { Button, Text, View } from 'react-native'
import style from '../styles/HomeScreenStyle'

export default function HomeScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Profile')
  }
  return (
    <View style={style.container}>
      <Text>HOME SCREEN</Text>
      <Button title='Go to Profile' onPress={handlePress} />
    </View>
  )
}
