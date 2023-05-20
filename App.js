import {TouchableOpacity,TextInput,View,StyleSheet,Text} from "react-native"
import {useState} from "react"

export default function App() {
    const [text, setText] = useState('');
    const [value, setValue] = useState('');
    function reverseString(){
    let tmp=''
    for (let i=text.length-1;i>=0;i--){
      tmp+=text[i]
    }
      setValue(tmp)
    }
    return (
      <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                onChangeText={setText}
                value={text}
                placeholder="input" placeholderTextColor={"white"}
            />
            <TouchableOpacity style={styles.reverse} onPress={reverseString}><Text>Reverse Text</Text></TouchableOpacity>
            <TextInput
                style={styles.textinput}
                value={value}
                placeholder="reversed" placeholderTextColor={"white"}
            />
      </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"flex-start",
    gap:100,
    alignItems:"center"
  },
  textinput:{
    backgroundColor:"black",
    padding:20,
    margin:50,
    width:300,
    color:"white"
  },
  reverse:{
    backgroundColor:"red",
    padding:10
  }
})