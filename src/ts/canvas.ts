const canvas = document.getElementById('chart') as HTMLCanvasElement

// 判断浏览器对canvas标签的支持性
if (canvas.getContext) {
  const ctx = canvas.getContext('2d')
  
  ctx.fillStyle = 'rgb(200, 0, 0)'
  ctx.fillRect(10, 10, 55, 50)
  
  // ctx.fillStyle = 'rgb(0, 0, 200, 0.5)'
  // ctx.fillRect(30, 30, 55, 50)
  //
  // ctx.fillStyle = 'rgb(200, 0, 200, 0.5)'
  // ctx.fillRect(50, 50, 55, 50)
  
  // 绘制一个矩形边框
  ctx.strokeRect(50, 50, 50, 50)
  
}





