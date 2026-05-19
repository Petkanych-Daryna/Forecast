import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from "./ChartForecast.module.css";



export function ChartForecast({ forecast }) {
  const chartData = forecast?.list?.slice(0, 8).map(item => ({
    name: item.dt_txt.split(" ")[1].substring(0, 5),
    temp: Math.round(item.main.temp),
  })) || [];

  return (
    <div className={`${styles.chartWrapper} `}>
      <h3 className={styles.chartTitle}>Hourly forecast</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={chartData} margin={{ top: 10, right: 30, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#ccc" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#666' }} axisLine={false} tickLine={false} />
          <YAxis hide domain={['auto', 'auto']} />
          <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
          <Line 
            type="monotone" 
            dataKey="temp" 
            stroke="#ffb07c" 
            strokeWidth={3} 
            dot={{ r: 4, fill: "#ffb07c", stroke: "#fff", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}