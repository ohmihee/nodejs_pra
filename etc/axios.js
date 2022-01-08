const axios = require('axios')

// axios.get('https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?numOfRows=1&pageNo=1&resultType=%27json%27&serviceKey=algml')
//     .then((result) => {
//         console.log(result)
//         console.log(result)
//     })
//     .catch((error)=> {
//         console.error(error)
//     })

const get_test = async () => {
    try {
        const result = await axios.get('https://api.odcloud.kr/api/GetStockSecuritiesInfoService/v1/getStockPriceInfo?numOfRows=1&pageNo=1&resultType=%27json%27&serviceKey=algml')
        //console.log(result)
        console.log(result.data)
    }catch(Err){
        console.log(Err)
    }
}

get_test()

const post_test = async () => {
    try {
        const result = await axios.post('https://www.zerocho.com/api/post/json', {
            name:'zerocho',
            birth:1994
        });
        console.log(result);
        console.log(result.data)
    }catch(err){
        console.error(err)
    }
}

post_test()
