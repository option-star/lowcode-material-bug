import { Slider } from 'antd';
import { ConfigContext } from 'antd/es/config-provider';
import { SliderRangeProps, SliderSingleProps } from 'antd/lib/slider';
import classNames from 'classnames';
import React, { createElement } from 'react';
import { useStyles } from './style/index';

interface IQSSliderCustom {
  type?: 'color' | 'normal';
}

export type QSSliderProps = (SliderSingleProps | SliderRangeProps) & IQSSliderCustom;

// 二封 Slider滑动输入条 组件
const QSSlider = (props: QSSliderProps) => {
  const { type = 'normal' } = props;
  const controllerClass = 'qs-slider';

  const { getPrefixCls } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls();

  const { styles, cx } = useStyles(prefixCls);

  return (
    <Slider
      min={0}
      max={100}
      {...props}
      className={classNames(cx(styles, controllerClass), type, props.className)}
    />
  );
};

export default QSSlider;
