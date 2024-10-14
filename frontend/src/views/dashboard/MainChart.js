
// import React, { useEffect, useRef } from 'react'

// import { CChartBar } from '@coreui/react-chartjs'
// import { getStyle } from '@coreui/utils'

// import costa_data from '../../../../data/costa/costa_result.json'

// const MainChart = () => {
//   const chartRef = useRef(null)

//   useEffect(() => {
//     document.documentElement.addEventListener('ColorSchemeChange', () => {
//       if (chartRef.current) {
//         setTimeout(() => {
//           chartRef.current.options.scales.x.grid.borderColor = getStyle(
//             '--cui-border-color-translucent',
//           )
//           chartRef.current.options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
//           chartRef.current.options.scales.x.ticks.color = getStyle('--cui-body-color')
//           chartRef.current.options.scales.y.grid.borderColor = getStyle(
//             '--cui-border-color-translucent',
//           )
//           chartRef.current.options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
//           chartRef.current.options.scales.y.ticks.color = getStyle('--cui-body-color')
//           chartRef.current.update()
//         })
//       }
//     })
//   }, [chartRef])

//   // const keyTopics = {
//   //   "Flavor": 14,
//   //   "Service": 17,
//   //   "Ingredients": 13,
//   //   "Price/Value": 17,
//   //   "Presentation/Appearance": 13
//   // }

//   const keyTopics = costa_data["key_topics"]

//   return (
//     <>
//       <CChartBar
//         ref={chartRef}
//         style={{ height: '300px', marginTop: '40px' }}
//         data={{
//           labels: Object.keys(keyTopics), // Labels from key_topics
//           datasets: [
//             {
//               label: 'Key Topics Count',
//               backgroundColor: getStyle('--cui-info'),
//               data: Object.values(keyTopics), // Data from key_topics
//             },
//           ],
//         }}
//         options={{
//           maintainAspectRatio: false,
//           plugins: {
//             legend: {
//               display: false,
//             },

//             tooltip: {
//               backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for tooltips
//               titleColor: '#fff', // White text in tooltips
//               bodyColor: '#fff',
//               bodyFont: {
//                 size: 14,
//               },
//               padding: 10,
//               cornerRadius: 4,
//             },

//           },
//           scales: {
//             x: {
//               grid: {
//                 color: getStyle('--cui-border-color-translucent'),
//                 drawOnChartArea: false,
//               },
//               ticks: {
//                 color: getStyle('--cui-body-color'),
//               },
//             },
//             y: {
//               beginAtZero: true,
//               grid: {
//                 color: getStyle('--cui-border-color-translucent'),
//               },
//               ticks: {
//                 color: getStyle('--cui-body-color'),
//               },
//             },
//           },
//         }}
//       />
//     </>
//   )
// }

// export default MainChart
