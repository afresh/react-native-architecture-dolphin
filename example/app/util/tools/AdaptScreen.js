/**
 * @file Adapt Screen
 * @author author-Afresh(danding_ge@qq.com)
 */

import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width} = Dimensions.get('window');
const basePx = Platform.OS === 'ios' ? 750 : 720;

export const Px2Dp = function px2dp(px: number): number {
    const layoutSize = (px / basePx) * width;
    return PixelRatio.roundToNearestPixel(layoutSize);
};
