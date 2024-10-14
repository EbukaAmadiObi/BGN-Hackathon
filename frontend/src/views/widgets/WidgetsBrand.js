// import React from 'react'
// import PropTypes from 'prop-types'
// import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cibFacebook, cibLinkedin, cibTwitter, cilCalendar } from '@coreui/icons'
// import { CChart } from '@coreui/react-chartjs'

// const WidgetsBrand = (props) => {
//   const chartOptions = {
//     elements: {
//       line: {
//         tension: 0.4,
//       },
//       point: {
//         radius: 0,
//         hitRadius: 10,
//         hoverRadius: 4,
//         hoverBorderWidth: 3,
//       },
//     },
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         display: false,
//       },
//       y: {
//         display: false,
//       },
//     },
//   }

//   return (
//     <CRow className={props.className} xs={{ gutter: 4 }}>

      
//       <CCol sm={6} xl={4} xxl={3}>
//         <CWidgetStatsD
//           {...(props.withCharts && {
//             chart: (
//               <CChart
//                 className="position-absolute w-100 h-100"
//                 type="line"
//                 data={{
//                   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//                   datasets: [
//                     {
//                       backgroundColor: 'rgba(255,255,255,.1)',
//                       borderColor: 'rgba(255,255,255,.55)',
//                       pointHoverBackgroundColor: '#fff',
//                       borderWidth: 2,
//                       data: [65, 59, 84, 84, 51, 55, 40],
//                       fill: true,
//                     },
//                   ],
//                 }}
//                 options={chartOptions}
//               />
//             ),
//           })}
//           icon={<CIcon icon={cibFacebook} height={52} className="my-4 text-white" />}
//           values={[
            
//             { title: 'PAGES', value: '1.2k' },
//             { title: 'DISCUSSIONS', value: '74k' },
//           ]}
//           style={{
//             '--cui-card-cap-bg': '#3b5998',
//           }}
//         />
//       </CCol>
//       <CCol sm={6} xl={4} xxl={3}>
//         <CWidgetStatsD
//           {...(props.withCharts && {
//             chart: (
//               <CChart
//                 className="position-absolute w-100 h-100"
//                 type="line"
//                 data={{
//                   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//                   datasets: [
//                     {
//                       backgroundColor: 'rgba(255,255,255,.1)',
//                       borderColor: 'rgba(255,255,255,.55)',
//                       pointHoverBackgroundColor: '#fff',
//                       borderWidth: 2,
//                       data: [1, 13, 9, 17, 34, 41, 38],
//                       fill: true,
//                     },
//                   ],
//                 }}
//                 options={chartOptions}
//               />
//             ),
//           })}
//           icon={<CIcon icon={cibTwitter} height={52} className="my-4 text-white" />}
//           values={[
//             { title: 'tweets', value: '93.4k' },
//             { title: 'discussions', value: '2.3k' },
//           ]}
//           style={{
//             '--cui-card-cap-bg': '#00aced',
//           }}
//         />
//       </CCol>
//       <CCol sm={6} xl={4} xxl={3}>
//         <CWidgetStatsD
//           {...(props.withCharts && {
//             chart: (
//               <CChart
//                 className="position-absolute w-100 h-100"
//                 type="line"
//                 data={{
//                   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//                   datasets: [
//                     {
//                       backgroundColor: 'rgba(255,255,255,.1)',
//                       borderColor: 'rgba(255,255,255,.55)',
//                       pointHoverBackgroundColor: '#fff',
//                       borderWidth: 2,
//                       data: [78, 81, 80, 45, 34, 12, 40],
//                       fill: true,
//                     },
//                   ],
//                 }}
//                 options={chartOptions}
//               />
//             ),
//           })}
//           icon={<CIcon icon={cibLinkedin} height={52} className="my-4 text-white" />}
//           values={[
//             { title: 'contacts', value: '500' },
//             { title: 'feeds', value: '1.292' },
//           ]}
//           style={{
//             '--cui-card-cap-bg': '#4875b4',
//           }}
//         />
//       </CCol>
//       <CCol sm={6} xl={4} xxl={3}>
        
        
//         <CWidgetStatsD
//           {...(props.withCharts && {
//             chart: (
//               <CChart
//                 className="position-absolute w-100 h-100"
//                 type="line"
//                 data={{
//                   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//                   datasets: [
//                     {
//                       backgroundColor: 'rgba(255,255,255,.1)',
//                       borderColor: 'rgba(255,255,255,.55)',
//                       pointHoverBackgroundColor: '#fff',
//                       borderWidth: 2,
//                       data: [65, 59, 84, 84, 51, 55, 40],
//                       fill: true,
//                     },
//                   ],
//                 }}
//                 options={chartOptions}
//               />
//             ),
//           })}
//           icon={<CIcon icon={cibFacebook} height={52} className="my-4 text-white" />}
//           values={[
//             { title: 'friends', value: '89K' },
//             { title: 'feeds', value: '459' },
//           ]}
//           style={{
//             '--cui-card-cap-bg': '#3b5998',
//           }}
//         />
//       </CCol>
//     </CRow>
//   )
// }

// WidgetsBrand.propTypes = {
//   className: PropTypes.string,
//   withCharts: PropTypes.bool,
// }

// export default WidgetsBrand

import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cibFacebook, cibReddit, cibTwitter, cibQuora } from '@coreui/icons'
import { CChart } from '@coreui/react-chartjs'

const WidgetsBrand = (props) => {
  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow className={props.className} xs={{ gutter: 4 }}>
            <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [78, 81, 80, 45, 34, 12, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibReddit} height={52} className="my-4 text-white" />}
          values={[
            { title: 'subscribers', value: '89K' },
            { title: 'posts', value: '459' },
          ]}
          style={{
            '--cui-card-cap-bg': '#FF4500',
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [65, 59, 84, 84, 51, 55, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibFacebook} height={52} className="my-4 text-white" />}
          values={[
            { title: 'PAGES', value: '1.2k' },
            { title: 'DISCUSSIONS', value: '74k' },
          ]}
          style={{
            '--cui-card-cap-bg': '#3b5998',
          }}
        />
      </CCol>
      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [1, 13, 9, 17, 34, 41, 38],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibTwitter} height={52} className="my-4 text-white" />}
          values={[
            { title: 'tweets', value: '93.4k' },
            { title: 'discussions', value: '2.3k' },
          ]}
          style={{
            '--cui-card-cap-bg': '#00aced',
          }}
        />
      </CCol>

      <CCol sm={6} xl={4} xxl={3}>
        <CWidgetStatsD
          {...(props.withCharts && {
            chart: (
              <CChart
                className="position-absolute w-100 h-100"
                type="line"
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      backgroundColor: 'rgba(255,255,255,.1)',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointHoverBackgroundColor: '#fff',
                      borderWidth: 2,
                      data: [65, 59, 84, 84, 51, 55, 40],
                      fill: true,
                    },
                  ],
                }}
                options={chartOptions}
              />
            ),
          })}
          icon={<CIcon icon={cibQuora} height={52} className="my-4 text-white" />}
          values={[
            { title: 'followers', value: '89K' },
            { title: 'answers', value: '459' },
          ]}
          style={{
            '--cui-card-cap-bg': '#A82400',
          }}
        />
      </CCol>
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
}

export default WidgetsBrand