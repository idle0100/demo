import './css/style.scss';
/**
 * js数据结构
 */
// import './js-struct/tree.ts';
// import './js-struct/queue.ts';
// import './js-struct/heap.ts';

/**
 * 算法练习
 */

import './algorithm/divideConquer.ts'


// web APIs: IntersectionObserver使用
function interSectionFn(): void {
  const node = document.getElementById('demo')
  
  const io: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    const radio = entries[0].intersectionRatio;
    if (radio > 0) {
      console.log('元素开始进入视野');
    }
  }, {
    // threshold: [0, 0.25, 0.5, 0.75, 1]
  })
  
  io.observe(node)
  
  // io.unobserve()
  // io.disconnect();
}









