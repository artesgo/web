export function light() {
  return Math.floor(Math.random() * 128) + 127;
}

export function dark() {
  return Math.floor(Math.random() * 128);
}

export function randomLight() {
  return `rgba(${light()}, ${light()}, ${light()}, 1)`;
}

export function randomDark() {
  return `rgba(${dark()}, ${dark()}, ${dark()}, 1)`;
}
