
export function debounce(func,delay=100) {
  let timer = null
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      console.log('我是节流次数');
      func.apply(this)
    }, delay);
  }
}