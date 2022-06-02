interface IMyAlertOptions {
  /**
   * @summary 警告框的标题
   */
  title?: string;
  /**
   * @summary 警告框的内容
   */
  content?: string;
  /**
   * @summary 按钮文字
   * @default "确定"
   */
  buttonText?: string;
  /**
   * @summary "确认" 按钮颜色，HEX 格式
   */
  confirmColor?: string;
  /**
   * 接口调用成功的回调函数
   * @param data 成功返回的数据
   */
  success?(data: {}): void;
  /**
   * 接口调用失败的回调函数
   * @param err 错误信息
   */
  fail?(err: { error?: number; errorMessage?: string }): void;
  /**
   * 接口调用结束的回调函数（调用成功、失败都会执行）
   */
  complete?(arg: { error?: number; errorMessage?: string }): void;
}
