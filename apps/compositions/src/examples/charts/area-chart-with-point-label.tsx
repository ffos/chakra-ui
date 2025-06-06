"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
} from "recharts"

export const AreaChartWithPointLabel = () => {
  const chart = useChart({
    data: [
      { sales: 186, month: "January" },
      { sales: 40, month: "February" },
      { sales: 190, month: "March" },
      { sales: 195, month: "May" },
      { sales: 240, month: "June" },
      { sales: 175, month: "August" },
      { sales: 180, month: "October" },
      { sales: 185, month: "November" },
      { sales: 300, month: "December" },
    ],
    series: [{ name: "sales", color: "teal.solid" }],
  })

  return (
    <Chart.Root maxH="sm" chart={chart}>
      <AreaChart data={chart.data}>
        <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip />}
        />
        <Legend content={<Chart.Legend />} />
        {chart.series.map((item) => (
          <Area
            key={item.name}
            isAnimationActive={false}
            dataKey={chart.key(item.name)}
            fill={chart.color(item.color)}
            fillOpacity={0.2}
            stroke={chart.color(item.color)}
            stackId="a"
          />
        ))}
        {chart.series.map((item) => (
          <Area
            isAnimationActive={false}
            stackId="b"
            legendType="none"
            tooltipType="none"
            label={{
              position: "top",
              fill: "currentColor",
              style: { fontWeight: "600" },
            }}
            key={item.name}
            dataKey={chart.key(item.name)}
            dot={{ fill: chart.color(item.color), fillOpacity: 1 }}
            activeDot={false}
            fill="none"
            stroke="none"
          />
        ))}
      </AreaChart>
    </Chart.Root>
  )
}
