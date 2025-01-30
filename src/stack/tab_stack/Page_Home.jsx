import { View, Text } from 'react-native'
import React, {useState} from 'react'

const Page_Home = (props) => {
  const {navigation} = props;

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);

  return (
    <View>
      <Text>Page_Home</Text>
    </View>
  )
}

export default Page_Home