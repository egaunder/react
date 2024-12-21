export const formatPhoneNumber = (number) => {
  const nums = number.replace(/[^0-9]/g, "");
  if (nums.length < 4) {
    return nums;
  }

  if (nums.length > 3 && nums.length <= 6) {
    return `(${nums.slice(0, 3)}) ${nums.slice(3)}`;
  }

  return `(${nums.slice(0, 3)}) ${nums.slice(3, 6)}-${nums.slice(6, 10)}`;
};
