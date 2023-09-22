import * as React from 'react';
const SvgAmodelIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={80}
    height={80}
    fill="none"
    {...props}
  >
    <path fill="url(#amodel_icon_svg__a)" d="M0 .418h80v80H0z" />
    <defs>
      <pattern id="amodel_icon_svg__a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#amodel_icon_svg__b" transform="scale(.00195)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="amodel_icon_svg__b"
        width={512}
        height={512}
      />
    </defs>
  </svg>
);
export default SvgAmodelIcon;