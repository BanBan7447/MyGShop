import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getCategories, getProductsByCategory } from '../../helper/ApiHelper';

const Page_Home = (props) => {
  const {navigation} = props;

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);

  // Hàm lấy danh mục
  const funGetCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response);

      setSelectCategory(response[1]._id);
    } catch(e) {
      console.log(e);
    }
  };

  // Gọi hàm funGetCategories khi màn hình home render
  useEffect(() => {
    funGetCategories();
  }, []);

  // Hàm render danh sách category
  const renderCategory = ({item}) => {
    const {_id, name} = item;
    return(
      <TouchableOpacity
        onPress={() => setSelectCategory(_id)}>
        <Text>{name}</Text>
      </TouchableOpacity>
    )
  };

  // Hàm lấy sản phẩm theo danh mục
  const funGetProducts = async () => {
    try {
      const response = await getProductsByCategory(selectCategory);
      setProducts(response);
    } catch(e) {
      console.log(e);
    }
  };

  // Gọi hàm funGetProducts khi chọn danh mục
  useEffect(() => {
    if(selectCategory) {
      funGetProducts(selectCategory);
    }
  }, [selectCategory]);

  // Hàm render Products
  const renderProduct = ({item}) => {
    const {image, name} = item;
    // Hiện ảnh đầu tiên trong mảng
    const firstImage = image[0];

    return(
      <TouchableOpacity>
        <Image
          style={{width: 100, height: 100}}
          source={{uri: firstImage}}/>
        <Text>{name}</Text>
      </TouchableOpacity>
    )
  }


  return (
    <View>
      <Text>Page_Home</Text>

      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={item => item._id}/>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item._id}
        numColumns={2}/>
    </View>
  )
}

export default Page_Home