// React Native imports
import { SafeAreaProvider } from 'react-native-safe-area-context'

// Components imports
import Main from './src/Main'

export default function App() {
  return (
    <SafeAreaProvider>
      <Main/>
    </SafeAreaProvider>
  )
}