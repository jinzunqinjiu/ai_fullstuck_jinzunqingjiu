//red 3s
//yellow 2s
//green 1s


function red() {
    console.log('红灯亮')
}
function yellow() {
    console.log('黄灯亮')
}
function green() {
    console.log('绿灯亮')
}
function light(cb, wait) {
    return new Promise((resolve) => {
        setTimeout(() => {
            cb()
            resolve()
        }, wait)
    })
}

function lightSteps() {
    Promise.resolve().then(() => {
        return light(red, 3000)
    }).then(() => {
        return light(yellow, 2000)
    }).then(() => {
        return light(green, 1000)
    }).finally(() => {
        return lightSteps()
    })
}
// light(red, 3000)
// light(yellow, 2000)
// light(green, 1000)
//这是异步执行的，所以是绿，黄，红
lightSteps()