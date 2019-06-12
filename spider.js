const getWeb = async function() {
    await requestSomething()
    setData()
    return console.log('3.程序结束!')
}

const requestSomething = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1.网页数据抓取完毕！')
            resolve()
        }, 2000)
    })
}

const setData = function() {
    console.log('2.开始处理数据！')
}

getWeb()