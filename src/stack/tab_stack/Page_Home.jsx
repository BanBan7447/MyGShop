import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator, ScrollView, LogBox } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getCategories, getProductsByCategory, getAllProdcts } from '../../helper/ApiHelper';
import FastImage from 'react-native-fast-image';
import Style_Home from '../../styles/Style_Home';
import colors from '../../styles/colors';
import DropDownPicker from 'react-native-dropdown-picker';

// Tắt cảnh báo cụ thể
LogBox.ignoreLogs([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation', // Cảnh báo cụ thể bạn muốn tắt
]);

const Page_Home = (props) => {
  const { navigation } = props;

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState(null);

  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("highlight");
  const [items, setItems] = useState([
    { label: 'Nổi bật', value: 'highlight' },
    { label: 'Giá cao nhất', value: 'high_price' },
    { label: 'Giá thấp nhất', value: 'low_price' },
  ]);

  // Hàm lấy danh mục
  const funGetCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response);

      setSelectCategory(null);
    } catch (e) {
      console.log(e);
    }
  };

  // Hàm lấy tất cả sản phẩm
  const funGetAllProducts = async () => {
    try {
      const response = await getAllProdcts();
      console.log('All Products:', response);  // In ra dữ liệu sản phẩm để kiểm tra

      setProducts(response); // // Cập nhật danh sách sản phẩm với tất cả sản phẩm
    } catch (e) {
      console.log(e);
    }
  }

  // Gọi hàm funGetCategories khi màn hình home render
  useEffect(() => {
    funGetAllProducts()
    funGetCategories();
  }, []);

  // Hàm lọc sản phẩm theo giá
  const filterProducts = (filter) => {
    let sortedProducts;
    if (filter === 'high_price') {
      sortedProducts = [...products].sort((a, b) => b.price - a.price);
    } else if (filter === 'low_price') {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (filter === 'highlight') {
      sortedProducts = [...products].sort(() => Math.random() - 0.5);
    } else {
      sortedProducts = [...products];
    }
    setProducts(sortedProducts);
  }

  // Hàm render danh sách category
  const renderCategory = ({ item }) => {
    const { _id, name } = item;

    // Xác định màu của nút dựa trên việc nó có được chọn hay không?
    const isSelected = selectCategory === _id;
    const buttonStyle = isSelected ? { backgroundColor: colors.Red } : { backgroundColor: colors.Light_Blue };
    const textStyle = isSelected ? { color: colors.White } : { color: colors.Black };

    return (
      <TouchableOpacity
        style={[Style_Home.render_category, buttonStyle]}
        onPress={() => {
          if (_id == selectCategory) {
            setSelectCategory(null);
          } else {
            setSelectCategory(_id);
          }
        }}>

        <Text style={[Style_Home.render_text_category, textStyle]}>{name}</Text>
      </TouchableOpacity>
    )
  };

  // Cập nhật màu cho nút tất cả
  const ButtonAllStyle = selectCategory === null ?
    { backgroundColor: colors.Red } :
    { backgroundColor: colors.Light_Blue };

  const TextAllStyle = selectCategory === null ?
    { color: colors.White } :
    { color: colors.Black };

  // Hàm lấy sản phẩm theo danh mục
  const funGetProducts = async () => {
    try {
      const response = await getProductsByCategory(selectCategory);
      setProducts(response);
    } catch (e) {
      console.log(e);
    }
  };

  // Gọi hàm funGetProducts khi chọn danh mục
  useEffect(() => {
    if (selectCategory) {
      funGetProducts(selectCategory);
    }
  }, [selectCategory]);

  // Hàm render Products
  const renderProduct = ({ item }) => {
    const { image, name, price, categoryID } = item;
    const ImageProduct = image[1]

    // Tìm danh mục tương ứng với sản phẩm
    const category = categories.find(cat => cat._id == categoryID);
    const categoryName = category ? category.name : "Không xác định";

    // Định dạng giá tiền
    const formatPrice = price.toLocaleString('vi-VN');

    return (
      <TouchableOpacity style={Style_Home.card_product}>
        {
          loading && <ActivityIndicator size="small" color="#0000ff" />
        }
        <FastImage
          style={Style_Home.img_product}
          source={{
            uri: ImageProduct,
            priority: FastImage.priority.high,
          }}
          onLoadEnd={() => setLoading(false)}
        />

        <Text
          style={Style_Home.name_product}
          numberOfLines={1}>
          {name}
        </Text>

        <Text style={Style_Home.type_product}>
          {categoryName}
        </Text>

        <Text
          style={Style_Home.price_product}>
          {formatPrice}đ
        </Text>
      </TouchableOpacity>
    )
  };

  return (
    <ScrollView
      style={Style_Home.container}
      showsVerticalScrollIndicator={false}>
      <View style={Style_Home.container_title}>
        <Image
          source={require('../../assets/image/logo_app_2.png')}
          style={Style_Home.img_logo} />

        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}>
          <Image
            source={require('../../assets/icon/icon_search.png')}
            style={Style_Home.img_icon} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={[{ key: 'all' }, ...categories]}
        renderItem={({ item }) => {
          if (item.key === 'all') {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectCategory(null);
                  funGetAllProducts();
                }}
                style={[Style_Home.render_category, ButtonAllStyle]}>
                <Text style={[Style_Home.render_text_category, TextAllStyle]}>Tất cả</Text>
              </TouchableOpacity>
            );
          } else {
            return renderCategory({ item }); // render danh sách danh mục
          }
        }}
        keyExtractor={item => item._id || item.key}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Style_Home.container_category}
      />

      <View style={Style_Home.container_filer}>
        <Text style={Style_Home.title}>Đề xuất cho bạn</Text>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={{
            width: 160,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          
          style={{
            borderWidth: 0,
          }}

          textStyle={{
            fontSize: 16,
            color: colors.Black,
            marginRight: 10,
            textAlign: 'left'
          }}

          labelStyle={{
            textAlign: 'right'
          }}

          dropDownContainerStyle={{
            backgroundColor: colors.White, // Màu nền của dropdown
            borderTopStartRadius: 12,
            borderTopEndRadius: 12,
            borderBottomStartRadius: 12,
            borderBottomStartRadius: 12,
            borderWidth: 1,
            borderColor: colors.Light_Grey,
            width: '100%'
          }}

          onChangeValue={(value) => {
            filterProducts(value)
          }}

          showArrowIcon={true}
          ArrowDownIconComponent={() => {
            return (
              <Image
                style={{ width: 12, height: 12 }}
                source={require('../../assets/icon/icon_arrow_down.png')} />
            )
          }}

          ArrowUpIconComponent={() => {
            return (
              <Image
                style={{ width: 12, height: 12, transform: [{ rotate: '180deg' }] }}
                source={require('../../assets/icon/icon_arrow_down.png')} />
            )
          }}

          scrollViewProps={{
            nestedScrollEnabled: false,
            keyboardShouldPersistTaps: 'handled'
          }}
        />
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item._id}
        numColumns={2}
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        windowSize={21}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        style={Style_Home.container_product} />

    </ScrollView>
  )
}

export default Page_Home