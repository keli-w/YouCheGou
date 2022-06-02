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

  onClickButton: () => {
    myAlert({ content: '111111' });
  }
});
