import Vue from 'vue';

export default {
  bind(el, binding, vnode) {
    const opts = Object.merge({
      time: '0.6s',
      scale: 1.5
    }, binding.value);

    const elDefaultStyle = {
      cursor: 'zoom-in',
      position: el.style.position,
      'align-self': el.style['align-self'],
      width: el.style.width,
      overflow: el.style.overflow,
      transform: el.style.transform,
      transition: el.style.transition,
      'box-shadow': el.style['box-shadow']
    }

    const zoomStyle = {
      cursor: "zoom-out",
      position: 'absolute',
      'align-self': "center",
      width: "220px",
      overflow: "hidden",
      transform: `scale(${opts.scale})`,
      transition: `transform ${opts.time}`,
      'box-shadow': "0px 0px 5px 5px rgb(0,0,0,0.6)"
    };

    const setStyle = (el, style) => {
      for (const key in style) {
        if (style.hasOwnProperty(key)) {
          el.style[key] = style[key];
        }
      }
    }

    let active = false;

    el.addEventListener('click', () => {
      if (active) {
        active = false;
        setStyle(el, elDefaultStyle);
      } else {
        active = true;
        setStyle(el, zoomStyle);
      }
    });
  }
}
