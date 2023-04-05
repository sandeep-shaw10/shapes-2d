import Clipboard from '@react-native-clipboard/clipboard';
import { Alert, Text } from 'react-native';

const CopyToClipboard = (text: string) => {
  Clipboard.setString(text);
  Alert.alert(`Copied to clipboard: ${text}`);
}

export default CopyToClipboard;