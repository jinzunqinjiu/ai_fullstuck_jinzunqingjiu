export function myNextTick(fn) {
    //让fn()的调用在dom更新完成之后

    fn()
}