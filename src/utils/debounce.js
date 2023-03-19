let timer
export const debounce = (fn, delay) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        fn()
    }, delay)
}