import axios from 'axios'

// const instance = axios.create({
// 	baseURL: API_URL,
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// })
//
// export default instance

export const axiosClassic = axios.create({
	baseURL: 'https://api-casesix.xamex.ru/api',
	headers: {
		'Content-Type': 'application/json',
	},
})
