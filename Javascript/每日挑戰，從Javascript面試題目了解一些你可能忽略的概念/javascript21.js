//請你簡單解釋什麼是promise
//非同步 成功 失敗
//3種狀態 pending fulfilled  rejected
const p = new Promise((resolve, reject) => {
    resolve('某個A值');
    reject('某個C值')
    
})

p.then(value=>{
    console.log(value)
})
