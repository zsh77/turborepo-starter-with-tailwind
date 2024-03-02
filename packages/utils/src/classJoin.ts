export const classJoin = (classNames: (string | undefined | false)[]) => {
  return classNames
    .filter((el) => el)
    .join(" ")
    .trim();
};
