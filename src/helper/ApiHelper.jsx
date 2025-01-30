import AxiosInstance from "./AxiosInstance";

// Gọi API đăng nhập
const login = async (data) => {
    try {
        const { email, phone, password } = data;
        const body = {
            email: email,
            phone: phone,
            password: password
        }

        const response = await AxiosInstance().post('/users/Login', body);

        if (response.status == true) {
            return response.user; // Trả về thông tin người dùng
        } else {
            throw new Error(response.data.message || 'Đăng nhập thất bại')
        }

    } catch (e) {
        console.log(e);
        throw e;
    }
};

// Gọi API đăng ký
const signUp = async (data) => {
    try {
        const {name, email, phone, password} = data;
        const body = {
            name: name,
            email: email,
            phone: phone,
            password: password
        }

        const response = await AxiosInstance().post('/users/SignUp', body);

        if(response.status == true) {
            return true;
        }

        return false

    } catch (e) {
        console.log(e);
        return false
    }
};

// Gọi API lấy danh sách loại sản phẩm
const getCategories = async () => {
    try{
        console.log(">>>>>>>>>>>> getCategories");
        const response = await AxiosInstance().get('/category/getCategory');

        if(response.status == true){
            console.log('Data Categories', response);
            return response.data;
        };

        
    }catch(e){
        console.log(e)
    }
};

// Gọi API lấy danh sách sản phẩm theo loại
const getProductsByCategory = async (categoryID) => {
    console.log("Calling API with categoryID:", categoryID);
    try {
        console.log('>>>>>>>>>>>>>>>>>> get Products by Categories')

        console.log("CategoryID before API call:", categoryID);
        console.log(`Calling API: ${AxiosInstance().defaults.baseURL}/getProductsByCategory?categoryID=${categoryID}`);

        const response = await AxiosInstance().get(`/product/getProductsByCategory?categoryID=${categoryID}`);
        console.log('API Response:', response.data);

        if(response.status == true) {
            return response.data;
        }

        console.log('Data Products', response);
    } catch(e) {
        console.log('Lỗi', e.message);
    }

    return [];
}

export { login, signUp, getCategories, getProductsByCategory }