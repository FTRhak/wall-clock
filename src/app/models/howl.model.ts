export interface HowlModel {
  duration: (e) => void;
  fade: (e, o, t, r) => void;
  init: (e) => void;
  load: () => void;
  loop: () => void;
  mute: (e, o) => void;
  off: (e, n, o) => void;
  on: (e, n, o, t) => void;
  once: (e, n, o) => void;
  pause: (e) => void;
  play: () => void;
  playing: (e) => void;
  rate: () => void;
  seek: () => void;
  state: () => void;
  stop: (e, n) => void;
  unload: () => void;
}
