import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
  return (
    <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName="x"
        yName="y"
        // type={type} // I commented this out. It's causing a error. The line sparkline chart is not displaying though.
        tooltipSettings={{
          visible: true,
          format: '${x} : data ${y}',
          trackLineSettings: {
            visible: true,
          },
        }}
    >
     <Inject services={[SparklineTooltip]} /> 
    </SparklineComponent>
  )
}

export default SparkLine