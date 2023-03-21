import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Signup() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.cont_child}>
          <Text style={styles.onboard_text}>Welcome onboard, Foodie!</Text>
        </View>
        <View style={styles.cont_child}>
          <TextInput placeholder="Name" style={styles.input_box} />
          <TextInput placeholder="Course" style={styles.input_box} />
          <TextInput placeholder="Phone Number" style={styles.input_box} />
          <TextInput placeholder="Email Address" style={styles.input_box} />
          <TextInput placeholder="Password" style={styles.input_box} />
          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cont_child}>
          <Text style={styles.signup_text}>Have an account? Login</Text>
          <Text style={styles.terms_text}>
            By signing or logging int an account, you accept our{" "}
            <Text style={styles.terms_policy}>Terms of User</Text> and
            <Text style={styles.terms_policy}> Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    padding: 50,
  },

  cont_child: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input_box: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#A6E3E9",
    marginBottom: 20,
    borderRadius: 4,
    width: 280,
    fontSize: 16,
    elevation: 10,
  },

  onboard_text: {
    fontSize: 30,
    fontWeight: 500,
    color: "#6C00FF",
  },

  appButtonContainer: {
    elevation: 2,
    backgroundColor: "#228B22",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 120,
    marginTop: 20,
  },

  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },

  signup_text: {
    fontSize: 16,
    fontWeight: 500,
    color: "#3C79F5",
    marginBottom: 10,
  },

  terms_text: {
    textAlign: "center",
  },

  terms_policy: {
    color: "#3C79F5",
    textDecorationLine: "underline",
  },
});
