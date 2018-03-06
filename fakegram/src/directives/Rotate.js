import Vue from 'vue';

export default {
  bind(el, binding, vnode) {
    let current = 0;
    el.addEventListener('click', () => {
      const settings = Object.merge({
          deg: 90,
          time: '0.5s'
        },
        binding.value
      );
      el.style.transform = `rotate(${current+=settings.deg}deg)`;

      if (binding.arg === 'zoom-out') {
        let scale = 0.5
        if (current % 180 === 0) scale = 1;
        el.style.transform += ` scale(${scale})`;
      }

      if (binding.modifiers.animate) {
        el.style.transition = `transform ${settings.time}`;
      }
    });
  }
}
