const isBrowser = typeof window !== `undefined`;

function getScrollPosition({element, useWindow}) {
  if(!isBrowser) return {y: 0}

  const target = element ? element.current : document.body;
  const position = target.getBoundingClientRect().y
}
