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
}

export { login, signUp }