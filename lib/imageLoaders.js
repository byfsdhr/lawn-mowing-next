export function unsplashLoader({src,width,quality}){
  return `https://images.unsplash.com/photo-${src}?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&q=${quality || 80}`
}

export function pexelsLoader({src,width}){
  return `https://images.pexels.com/photos/${src}?auto=compress&cs=tinysrgb&dpr=2&h=750&w=${width}`
}
