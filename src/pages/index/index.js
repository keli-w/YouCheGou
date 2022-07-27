import { myAlert } from '@/common/jsapi';

Page({
  data: {
    list: [
      { type: 'default' },
      { type: 'primary' },
      { type: 'warn' },
      { type: 'danger' },
      { type: 'success' },
      { type: 'light' }
    ]
  },

  onClickButton() {
    const { list = [] } = this.data;
    myAlert({ content: list[0].type });
  }
});
