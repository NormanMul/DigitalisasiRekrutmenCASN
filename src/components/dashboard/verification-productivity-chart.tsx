"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { date: "2024-07-15", verified: 2500 },
  { date: "2024-07-16", verified: 2800 },
  { date: "2024-07-17", verified: 3100 },
  { date: "2024-07-18", verified: 2900 },
  { date: "2024-07-19", verified: 3500 },
  { date: "2024-07-20", verified: 3800 },
  { date: "2024-07-21", verified: 4100 },
]

const chartConfig = {
  verified: {
    label: "Berkas Diverifikasi",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function VerificationProductivityChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[150px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => new Date(value).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Bar dataKey="verified" fill="var(--color-verified)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
