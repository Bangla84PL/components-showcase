"use client";

import { TrendingUp, TrendingDown, Activity, BarChart3, PieChart } from "lucide-react";
import { motion } from "framer-motion";

// Simple Bar Chart
export function ChartBar() {
  const data = [40, 70, 55, 85, 65];

  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg p-6">
      <h3 className="font-bold text-gray-900 mb-4">Monthly Revenue</h3>
      <div className="flex items-end justify-between gap-2 h-48">
        {data.map((value, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${value}%` }}
              transition={{ delay: i * 0.1 }}
              className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t"
            />
            <span className="text-xs text-gray-500">M{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Line Chart
export function ChartLine() {
  const points = [30, 50, 45, 70, 65, 85];

  return (
    <div className="max-w-lg bg-white rounded-xl shadow-lg p-6">
      <h3 className="font-bold text-gray-900 mb-4">Growth Trend</h3>
      <div className="relative h-40">
        <svg className="w-full h-full" viewBox="0 0 300 100">
          <motion.polyline
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
            points={points.map((p, i) => `${i * 60},${100 - p}`).join(" ")}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="3"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// Donut Chart
export function ChartDonut() {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg p-6">
      <h3 className="font-bold text-gray-900 mb-4 text-center">Market Share</h3>
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="96" cy="96" r="80" fill="none" stroke="#e5e7eb" strokeWidth="32" />
          <motion.circle
            initial={{ strokeDashoffset: 502 }}
            animate={{ strokeDashoffset: 150 }}
            transition={{ duration: 1 }}
            cx="96"
            cy="96"
            r="80"
            fill="none"
            stroke="#6366f1"
            strokeWidth="32"
            strokeDasharray="502"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">70%</p>
            <p className="text-sm text-gray-500">Complete</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stats Dashboard
export function DashboardStats() {
  const stats = [
    { label: "Users", value: "12.5K", change: "+12%", up: true },
    { label: "Revenue", value: "$48K", change: "+8%", up: true },
    { label: "Bounce", value: "32%", change: "-5%", up: false },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 max-w-3xl">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white rounded-xl shadow-md p-6">
          <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
          <div className={`flex items-center gap-1 text-sm font-semibold ${stat.up ? "text-green-600" : "text-red-600"}`}>
            {stat.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span>{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// Progress Bars
export function ProgressBars() {
  const data = [
    { label: "Design", value: 85, color: "bg-purple-500" },
    { label: "Development", value: 70, color: "bg-blue-500" },
    { label: "Testing", value: 45, color: "bg-green-500" },
  ];

  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg p-6 space-y-4">
      <h3 className="font-bold text-gray-900">Project Progress</h3>
      {data.map((item, i) => (
        <div key={i}>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-700">{item.label}</span>
            <span className="font-semibold text-gray-900">{item.value}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className={`h-full ${item.color}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Heatmap
export function Heatmap() {
  const grid = [
    [1, 3, 2, 4],
    [2, 4, 3, 5],
    [1, 2, 4, 3],
    [3, 5, 2, 4],
  ];

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg p-6">
      <h3 className="font-bold text-gray-900 mb-4">Activity Heatmap</h3>
      <div className="grid grid-cols-4 gap-2">
        {grid.flat().map((value, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="aspect-square rounded"
            style={{
              backgroundColor: `rgba(99, 102, 241, ${value * 0.2})`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Area Chart
export function ChartArea() {
  return (
    <div className="max-w-lg bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
      <h3 className="font-bold text-gray-900 mb-4">Sales Overview</h3>
      <div className="relative h-40">
        <svg className="w-full h-full" viewBox="0 0 300 100">
          <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5 }}
            d="M0,80 L50,60 L100,70 L150,40 L200,50 L250,20 L300,30 L300,100 L0,100 Z"
            fill="url(#areaGradient)"
            stroke="#8b5cf6"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

// Metric Cards
export function MetricCards() {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-md">
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
        <Activity className="w-8 h-8 mb-2 opacity-80" />
        <p className="text-3xl font-bold">94%</p>
        <p className="text-sm opacity-90">Uptime</p>
      </div>
      <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-white">
        <BarChart3 className="w-8 h-8 mb-2 opacity-80" />
        <p className="text-3xl font-bold">2.4K</p>
        <p className="text-sm opacity-90">Active Users</p>
      </div>
    </div>
  );
}

// Sparkline
export function Sparkline() {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md p-4 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">Revenue</p>
        <p className="text-2xl font-bold text-gray-900">$24,500</p>
        <p className="text-xs text-green-600 font-semibold">+15.3%</p>
      </div>
      <svg width="80" height="40" className="text-green-500">
        <polyline
          points="0,30 20,25 40,20 60,15 80,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

// Gauge Chart
export function ChartGauge() {
  const percentage = 75;

  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg p-6">
      <h3 className="font-bold text-gray-900 mb-4 text-center">Performance Score</h3>
      <div className="relative w-48 h-24 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 200 100">
          <path
            d="M 20 80 A 80 80 0 0 1 180 80"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="20"
            strokeLinecap="round"
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: percentage / 100 }}
            transition={{ duration: 1.5 }}
            d="M 20 80 A 80 80 0 0 1 180 80"
            fill="none"
            stroke="#10b981"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray="251.2"
          />
        </svg>
        <div className="absolute inset-0 flex items-end justify-center pb-2">
          <span className="text-3xl font-bold text-gray-900">{percentage}%</span>
        </div>
      </div>
    </div>
  );
}

// Comparison Chart
export function ChartComparison() {
  const data = [
    { label: "Product A", value1: 65, value2: 45 },
    { label: "Product B", value1: 80, value2: 70 },
    { label: "Product C", value1: 55, value2: 75 },
  ];

  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg p-6">
      <h3 className="font-bold text-gray-900 mb-4">Sales Comparison</h3>
      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={i}>
            <p className="text-sm text-gray-700 mb-2">{item.label}</p>
            <div className="flex gap-2">
              <div className="flex-1 h-8 bg-blue-500 rounded" style={{ width: `${item.value1}%` }} />
              <div className="flex-1 h-8 bg-purple-500 rounded" style={{ width: `${item.value2}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded" />
          <span className="text-gray-600">2023</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded" />
          <span className="text-gray-600">2024</span>
        </div>
      </div>
    </div>
  );
}

// Radial Progress
export function ProgressRadial() {
  const tasks = [
    { label: "Completed", value: 85, color: "#10b981" },
    { label: "In Progress", value: 60, color: "#3b82f6" },
    { label: "Pending", value: 30, color: "#f59e0b" },
  ];

  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg p-6">
      <h3 className="font-bold text-gray-900 mb-6 text-center">Task Status</h3>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task, i) => (
          <div key={i} className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-2">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="40" cy="40" r="36" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                <motion.circle
                  initial={{ strokeDashoffset: 226 }}
                  animate={{ strokeDashoffset: 226 - (226 * task.value) / 100 }}
                  transition={{ delay: i * 0.2, duration: 1 }}
                  cx="40"
                  cy="40"
                  r="36"
                  fill="none"
                  stroke={task.color}
                  strokeWidth="8"
                  strokeDasharray="226"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">{task.value}%</span>
              </div>
            </div>
            <p className="text-xs text-gray-600">{task.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Stacked Bar Chart
export function ChartStackedBar() {
  const data = [
    { month: "Jan", value1: 30, value2: 20 },
    { month: "Feb", value1: 40, value2: 30 },
    { month: "Mar", value1: 35, value2: 25 },
    { month: "Apr", value1: 50, value2: 35 },
  ];

  return (
    <div className="max-w-lg bg-white rounded-xl shadow-lg p-6">
      <h3 className="font-bold text-gray-900 mb-4">Revenue Breakdown</h3>
      <div className="flex items-end justify-between gap-3 h-48">
        {data.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex flex-col-reverse gap-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${item.value1}%` }}
                transition={{ delay: i * 0.1 }}
                className="w-full bg-indigo-500 rounded-t"
              />
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${item.value2}%` }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="w-full bg-purple-500 rounded-t"
              />
            </div>
            <span className="text-xs text-gray-500">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// KPI Dashboard
export function DashboardKPI() {
  return (
    <div className="max-w-2xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">Key Metrics</h3>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
          <PieChart className="w-8 h-8 mb-2 text-blue-400" />
          <p className="text-3xl font-bold mb-1">$128K</p>
          <p className="text-sm text-white/70">Total Revenue</p>
        </div>
        <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
          <BarChart3 className="w-8 h-8 mb-2 text-green-400" />
          <p className="text-3xl font-bold mb-1">8,549</p>
          <p className="text-sm text-white/70">Conversions</p>
        </div>
      </div>
    </div>
  );
}

// Timeline Chart
export function ChartTimeline() {
  const events = [
    { time: "Q1", status: "complete" },
    { time: "Q2", status: "complete" },
    { time: "Q3", status: "current" },
    { time: "Q4", status: "upcoming" },
  ];

  return (
    <div className="max-w-md bg-white rounded-xl shadow-lg p-6">
      <h3 className="font-bold text-gray-900 mb-6">Project Timeline</h3>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
        <div className="space-y-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative flex items-center gap-4"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                  event.status === "complete"
                    ? "bg-green-500"
                    : event.status === "current"
                    ? "bg-blue-500"
                    : "bg-gray-300"
                }`}
              >
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{event.time}</p>
                <p className="text-sm text-gray-500 capitalize">{event.status}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
