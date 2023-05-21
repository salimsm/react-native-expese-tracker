import {Text, StyleSheet} from 'react-native';
interface IErrorMessage {
  message: string;
}

const ErrorText = ({message}: IErrorMessage) => {
  return <Text style={styles.error}>{message}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 10,
    marginVertical: 4,
  },
});
export default ErrorText;
