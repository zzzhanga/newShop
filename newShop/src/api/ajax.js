import axios from "axios";
export default function ajax(url, data = {}, type = "get") {
  return new Promise(function(resolve, reject) {
    let myPromise;
    if (type == "get") {
      var dataStr = "";
      Object.keys(data).forEach(key => {
        dataStr += key + "=" + data[key] + "&";
      });
      if (dataStr !== "") {
        var index = dataStr.lastIndexOf("&");
        dataStr = dataStr.substring(0, index);
        url = url + "?" + dataStr;
        myPromise = axios.get(url);
      }else {
      myPromise = axios.get(url);
    }
    } else{
        myPromise=axios.get(yrl,data)
    }
    myPromise.then(res=>{
        resolve(res.data)
    }).catch(err=>{
        reject(err)
    })

  });
}
