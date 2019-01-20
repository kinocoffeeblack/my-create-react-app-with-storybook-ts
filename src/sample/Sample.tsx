import React from 'react';

// style by normal css
import './Sample.css';
// style by sass
import './Sample.scss';
// style by CSSModules(with sass style)
import style from './Sample.module.scss';
// define variable with type.
const sampleStr: string = 'CSS-Modules and SASS-Style';
// enum of Typescript
enum SampleEnum {ENUM1, ENUM2};

const Sample = () => (
  <div>
    {/* Sampleコンポーネントに閉じた".sample"CSSクラスの定義 */}
    <div className="sampleStyle">Normal-CSS</div>
    <div className="sass sassSampleStyle">SASS-Style</div>
    <div className={style.sassSampleStyle}>{sampleStr} : {SampleEnum[0]}</div>
  </div>
);

export default Sample;