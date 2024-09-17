
export const getImgUrl = (imgSrc) => {
  return new URL(
    `../../ui/images/${imgSrc}`,
    import.meta.url
  ).href;
}