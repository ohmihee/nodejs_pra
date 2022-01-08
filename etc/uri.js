// AJAX 요청시 주소에 한글이 들어가면 서버가 한글을 인식하지 못하는 경우 존재

const axios = require("axios")

// encodeURIComponent
// decodeURIComponent

const encode = async () => {
    try{
        const result = await axios.get(`https://www.zerocho.com/api/search/${encodeURIComponent('노드')}`);
        //console.log(result);
        console.log(result.data)
    }catch(Err){
        console.error(Err)
    }
}

encode()