/* eslint-disable @typescript-eslint/ban-ts-ignore */
export const getScrollbarWidth = (): number => {
  //@ts-ignore
  let width = getScrollbarWidth.width;
  if (width === undefined) {
    let div = document.createElement('div');
    div.innerHTML =
      '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
    document.body.appendChild(div);
    //@ts-ignore
    div = div.firstChild;
    document.body.appendChild(div);
    //@ts-ignore
    width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }
  return width;
};
