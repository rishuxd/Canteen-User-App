import Icon from "react-native-vector-icons/MaterialIcons";
import { useState, useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";

const TopBar = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onInputChange = (e) => {
    setText(e);
  };
  return (
    <View style={{ margin: 20, marginTop: 10 }}>
      <View style={styles.profileContainer}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 25 }}>Hello,</Text>
            <Text style={{ fontSize: 25, fontWeight: "bold", marginLeft: 10 }}>
              Rishu
            </Text>
          </View>
          <Text style={{ fontSize: 18, marginTop: 0, color: "#666666" }}>
            What do you want to have today?
          </Text>
        </View>
        <Image
          source={{
            uri: "https://media.licdn.com/dms/image/C4D03AQGif0MHAdPSxw/profile-displayphoto-shrink_100_100/0/1657876349127?e=1684972800&v=beta&t=3gM10yNzAveBS9U2nHW0BoGpolPpYx6jafJss71ZIyI",
          }}
          style={styles.profile_photo}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={{
            flex: 1,
            fontSize: 18,
          }}
          placeholder="Thali, Burger, Sandwich ..."
          onChangeText={(e) => onInputChange(e)}
        />
        <Icon name="search" size={28} />
      </View>
      {text && (
        <View style={styles.after_search}>
          <FlatList
            nestedScrollEnabled={true}
            data={products.filter((item) =>
              item.name.toLowerCase().includes(text.toLowerCase())
            )}
            renderItem={({ item }) => <Item title={item.name} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
};

const Item = ({ title }) => (
  <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 12 }}>
    <Text style={{ fontSize: 18 }}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  inputContainer: {
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#A6E3E9",
    alignItems: "center",
    paddingHorizontal: 20,
    elevation: 10,
  },

  after_search: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 10,
    maxHeight: 200,
  },

  profile_photo: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});

export default TopBar;
