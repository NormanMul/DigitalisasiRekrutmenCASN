"use client"

import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Januari", administrasi: 5, skd: 10, skb: 7 },
  { month: "Februari", administrasi: 4.5, skd: 9, skb: 6.5 },
  { month: "Maret", administrasi: 4, skd: 8.5, skb: 6 },
  { month: "April", administrasi: 3.8, skd: 8, skb: 5.5 },
  { month: "Mei", administrasi: 3.5, skd: 7.5, skb: 5 },
  { month: "Juni", administrasi: 3, skd: 7, skb: 5 },
]

const chartConfig = {
  administrasi: {
    label: "Administrasi",
    color: "hsl(var(--chart-1))",
  },
  skd: {
    label: "SKD",
    color: "hsl(var(--chart-2))",
  },
  skb: {
    label: "SKB",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function RecruitmentCycleChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 10,
          right: 10,
          left: 10,
          bottom: 10,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="administrasi"
          type="monotone"
          stroke="var(--color-administrasi)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="skd"
          type="monotone"
          stroke="var(--color-skd)"
          strokeWidth={2}
          dot={false}
        />
        <Line
          dataKey="skb"
          type="monotone"
          stroke="var(--color-skb)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}
