/**
 * 警示弹窗
 * @param {IMyAlertOptions} options
 * @returns {Promise<boo>}
 */
export const myAlert = (options) => {
  return new Promise((resolve) => {
    my.alert({
      ...options,
      success: () => {
        resolve(true);
      }
    });
  });
};
