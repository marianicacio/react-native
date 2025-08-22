import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, SafeAreaView, Pressable, TouchableOpacity, Linking } from 'react-native';

function Login() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#29042D', '#5F076A', '#192f6a']}
        style={styles.background}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0, 0.5, 1]}
      >
        <View style={styles.main}>
          <Image style={styles.img} source={require('../assets/images/avatar.png')} />
          <View style={styles.mainSection}>
            <Text style={styles.title} >Mar<Text style={{
              color: '#FF00EE'
            }}>IA</Text></Text>
            <View style={styles.btnWrapper}>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.bntText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} activeOpacity={0.3}>
                <Text style={styles.bntText}>Cadastro</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.label}></View>
          <View style={styles.lineWrapper}>
            <View style={styles.line}></View>
            <Text style={styles.bntText}>Ou</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.navBar}>
            <TouchableOpacity onPress={handlePress}><Image source={require('../assets/images/google.png')}></Image></TouchableOpacity>
            <TouchableOpacity onPress={handlePress}><Image source={require('../assets/images/facebook.png')}></Image></TouchableOpacity>
            <TouchableOpacity onPress={handlePress}><Image source={require('../assets/images/x.png')}></Image></TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

const handlePress = () => {
  Linking.openURL('https://github.com/marianicacio')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6d4e1'
  },

  main: {
    flex: 1,

  },

  img: {
    width: 66,
    height: 66,
    borderRadius: 500,
    margin: 30,
  },

  background: {
    flex: 1
  },

  btn: {
    width: '60%',
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#B249AB'
  },

  bntText: {
    color: 'white'
  },

  pressed: {
    backgroundColor: 'purple'
  },

  mainSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start'
  },

  btnWrapper: {
    display: 'flex',
    width: '100%',
    gap: 17,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 400
  },

  title: {
    color: 'white',
    fontSize: 64,
  },

  label: {
    position: 'absolute',
    top: -40,
    right: -80,
    width: 201,
    height: 96,
    backgroundColor: '#B249AB',
    transform: [{ rotate: '35deg' }]
  },

  lineWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 70
  },

  line: {
    width: 115,
    height: 1,
    backgroundColor: 'white',
  },

  navBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 40
  }
})

export default Login