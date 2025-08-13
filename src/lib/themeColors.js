export function getChartColors() {
  if (typeof window === 'undefined' || !window.getComputedStyle) {
    // Return defaults on server or if getComputedStyle is unavailable
    return {
      chart1: '#6366F1',
      chart2: '#22C55E',
      chart3: '#F59E0B',
      chart4: '#EF4444',
      chart5: '#3B82F6',
    };
  }

  const style = getComputedStyle(document.documentElement);

  return {
    chart1: style.getPropertyValue('--chart-1').trim() || '#6366F1',
    chart2: style.getPropertyValue('--chart-2').trim() || '#22C55E',
    chart3: style.getPropertyValue('--chart-3').trim() || '#F59E0B',
    chart4: style.getPropertyValue('--chart-4').trim() || '#EF4444',
    chart5: style.getPropertyValue('--chart-5').trim() || '#3B82F6',
  };
}
