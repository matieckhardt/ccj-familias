
const setCookie = (request,token)=>{
    request.session.userToken = token;
}

module.exports = {
    setCookie
}