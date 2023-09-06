import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }, prefixCls: string) => {
  return css`
    &:where(.qs-slider) {
      padding: 0;
      height: 10px;
      .${prefixCls}-slider-rail {
        border-radius: 10px;
        background-color: #f6f8fa;
        height: 10px;
      }
      .${prefixCls}-slider-track {
        border-radius: 10px;
        background-color: #3680ff;
        height: 10px;
      }
      .${prefixCls}-slider-step {
        border-radius: 10px;
        height: 10px;
      }

      &.${prefixCls}-slider:hover .${prefixCls}-slider-rail {
        background-color: #f6f8fa;
      }
      &.${prefixCls}-slider:hover .${prefixCls}-slider-track {
        background-color: #3680ff;
      }

      &.${prefixCls}-slider .${prefixCls}-slider-handle::after {
        width: 10px;
        height: 16px;
        top: 0px;
        border-radius: 5px;
        background-color: #3680ff;
        box-shadow: none;
        visibility: hidden;
      }

      &.color {
        .${prefixCls}-slider-track {
          background: linear-gradient(90deg, #ffa100 0%, #2434fd 99%);
        }
      }
      + .slider-number-readonly,
      + .slider-number-input {
        width: 75px;
        margin-left: 4px;
        text-align: center;
        > div > input {
          text-align: center;
        }
      }
    }
    &:where(.qs-number-slider) {
      display: flex;
      align-items: center;
      .qs-slider {
        flex: 1;
      }
    }
  `;
});
