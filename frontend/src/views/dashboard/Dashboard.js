


// // import React from 'react'
// // import classNames from 'classnames'

// // import {
// //   CButton,
// //   CCard,
// //   CCardBody,
// //   CCardFooter,
// //   CCardHeader,
// //   CCol,
// //   CProgress,
// //   CRow,
// //   CInputGroup,
// //   CFormInput,
// //   CInputGroupText
// // } from '@coreui/react'
// // import CIcon from '@coreui/icons-react'

// // import {
// //   cibGoogle,
// //   cibReddit,
// //   cibQuora,
// //   cibTwitter,
// //   cilCloudDownload
// // } from '@coreui/icons'

// // import WidgetsBrand from '../widgets/WidgetsBrand'
// // import WidgetsDropdown from '../widgets/WidgetsDropdown'
// // import MainChart from './MainChart'

// // const Dashboard = () => {
// //   const [data, setData] = React.useState(null)
// //   const [inputValue, setInputValue] = React.useState('')
// //   const [isLoading, setIsLoading] = React.useState(false)
// //   const [result, setResult] = React.useState(null)
// //   const [error, setError] = React.useState(null)

// //   const handleSearch = async () => {
// //     if (!inputValue.trim()) return; // Prevent empty searches

// //     setIsLoading(true)
// //     setError(null) // Reset error before search

// //     try {
// //       const response = await fetch(`http://127.0.0.1:5000/search?subreddit=${inputValue}`)
// //       if (!response.ok) { 
// //         throw new Error('An error occurred while fetching the data.')
// //       } 
// //       const data = await response.json()
// //       setResult(data)

// //     } catch (error) {
// //       console.error('Error:', error)
// //       setError('An error occurred while fetching the data.')
// //     } finally {
// //       setIsLoading(false)
// //     }
// //   }

// //   const handleKeyPress = (e) => {
// //     if (e.key === 'Enter') {
// //       handleSearch()
// //     }
// //   }

// //   // Extracted data from result or fallback to empty structure
// //   const exampleComments = result?.example_comments_per_topic || {}
// //   const totalMentions = result?.total_mentions || 0
// //   const overallSentiments = result?.overall_sentiments || {}

// //   // Example progress bars based on result data
// //   const progressExample = [
// //     { title: 'Flavour', value: overallSentiments['Flavor'] || 0, percent: Math.abs(overallSentiments['Flavor'] * 100), color: 'success' },
// //     { title: 'Service', value: overallSentiments['Service'] || 0, percent: Math.abs(overallSentiments['Service'] * 100), color: 'info' },
// //     { title: 'Ingredients', value: overallSentiments['Ingredients'] || 0, percent: Math.abs(overallSentiments['Ingredients'] * 100), color: 'warning' },
// //     { title: 'Price', value: overallSentiments['Price/Value'] || 0, percent: Math.abs(overallSentiments['Price/Value'] * 100), color: 'danger' },
// //     { title: 'Presentation/Appearance', value: overallSentiments['Presentation/Appearance'] || 0, percent: Math.abs(overallSentiments['Presentation/Appearance'] * 100), color: 'primary' },
// //   ]

// //   const progressGroupExample3 = [
// //     { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
// //     { title: 'Quora', icon: cibQuora, percent: 15, value: '51,223' },  
// //     { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
// //     { title: 'Reddit', icon: cibReddit, percent: 8, value: '27,319' },  
// //   ]


// //   // if (loading) {
// //   //   // Render a loading indicator if data is still being fetched
// //   //   return <div>Loading...</div>;
// //   // }

// //   // if (error) {
// //   //   // Render an error message if an error occurred during the fetch
// //   //   return <div>Error: {error.message}</div>;
// //   // }

// //   return (
// //     <>
// //       {/* Search bar */}
// //       <CInputGroup size="lg">
// //         <CFormInput
// //           aria-label="Sizing example input"
// //           aria-describedby="inputGroup-sizing-lg"
// //           type="text"
// //           placeholder="Enter company name"
// //           value={inputValue}
// //           onChange={(e) => setInputValue(e.target.value)}
// //           onKeyPress={handleKeyPress}
// //         />
// //         <CButton color="primary" onClick={handleSearch} disabled={isLoading}>
// //           {isLoading ? 'Searching...' : 'Search'}
// //         </CButton>
// //       </CInputGroup>

// //       <div className="mb-4"></div>

// //       {/* Error message */}
// //       {error && <p className="text-danger">{error}</p>}

// //       {/* Loading state */}
// //       {isLoading && <p> Computing Metrics for {result ? result.query : ''}</p>}

// //       <div>
// //       <h1>Customer Sentiment Analysis for {result ? result.query : ''}</h1>
// //       {/* Display the JSON data in a formatted way */}

// //     </div>

// //       {/* Widgets Dropdown */} 
// //       <WidgetsDropdown className="mb-4" result={result} />

// //       {/* Overall sentiments card */}
// //       <CCard className="mb-4">
// //         <CCardBody>
// //           <CRow>
// //             <CCol sm={5}>
// //               <h4 id="traffic" className="card-title mb-0">
// //                 Top Trending Categories for {result ? result.query : ''}
// //               </h4>
// //               <div className="small text-body-secondary">Category Frequency</div>
// //             </CCol>
// //             <CCol sm={7} className="d-none d-md-block">
// //               <CButton color="primary" className="float-end">
// //                 <CIcon icon={cilCloudDownload} />
// //               </CButton>
// //             </CCol>
// //           </CRow>
// //           <MainChart />
// //         </CCardBody>

// //         <CCardFooter>
// //           <CRow
// //             xs={{ cols: 1, gutter: 4 }}
// //             sm={{ cols: 2 }}
// //             lg={{ cols: 4 }}
// //             xl={{ cols: 5 }}
// //             className="mb-2 text-center"
// //           >
// //             {progressExample.map((item, index) => (
// //               <CCol
// //                 className={classNames({
// //                   'd-none d-xl-block': index + 1 === progressExample.length,
// //                 })}
// //                 key={index}
// //               >
// //                 <div className="text-body-secondary">{item.title}</div>
// //                 <div className="fw-semibold text-truncate">
// //                   {item.value} ({item.percent}%)
// //                 </div>
// //                 <CProgress thin className="mt-2" color={item.color} value={item.percent} />
// //               </CCol>
// //             ))}
// //           </CRow>
// //         </CCardFooter>
// //       </CCard>

// //       <WidgetsBrand className="mb-4" withCharts />

// //       {/* Trending topics and comments */}
// //       <CRow>
// //         <CCol xs>
// //           <CCard className="mb-4">
// //             <CCardHeader>Trending Topics for {result ? result.query : ''} ({totalMentions} mentions)</CCardHeader>
// //             <CCardBody>
// //               <CRow>
// //                 {progressGroupExample3.map((item, index) => (
// //                   <div className="progress-group" key={index}>
// //                     <div className="progress-group-header">
// //                       <CIcon className="me-2" icon={item.icon} size="lg" />
// //                       <span>{item.title}</span>
// //                       <span className="ms-auto fw-semibold">
// //                         {item.value}{' '}
// //                         <span className="text-body-secondary small">({item.percent}%)</span>
// //                       </span>
// //                     </div>
// //                     <div className="progress-group-bars">
// //                       <CProgress thin color="success" value={item.percent} />
// //                     </div>
// //                   </div>
// //                 ))}

// //                 {/* Comments section */}
// //                 <h5 className="mt-4">Top discussion</h5>
// //                 <div style={{ maxHeight: '700px', overflowY: 'auto' }}>
// //                   {Object.entries(exampleComments).map(([topic, comments]) => (
// //                     <div key={topic} className="mb-4">
// //                       <h6 className="fw-semibold">{topic} Comments:</h6>
// //                       {comments.map((comment, index) => (
// //                         <div key={index} className="border p-2 mb-2 rounded">
// //                           <p className="small text-body-secondary">{comment}</p>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </CRow>
// //             </CCardBody>
// //           </CCard>
// //         </CCol>
// //       </CRow>
// //     </>
// //   )
// // }

// // export default Dashboard

// import React, { useEffect, useRef, useState } from 'react'
// import classNames from 'classnames'
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardHeader,
//   CCol,
//   CProgress,
//   CRow,
//   CInputGroup,
//   CFormInput,
//   CDropdown,
//   CDropdownMenu,
//   CDropdownItem,
//   CDropdownToggle,
//   CWidgetStatsA,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import {
//   cibGoogle,
//   cibReddit,
//   cibQuora,
//   cibTwitter,
//   cilCloudDownload,
//   cilArrowBottom,
//   cilArrowTop,
//   cilOptions,
// } from '@coreui/icons'
// import { getStyle } from '@coreui/utils'
// import { CChartBar, CChartLine } from '@coreui/react-chartjs'
// import WidgetsBrand from '../widgets/WidgetsBrand'
// import MainChart from './MainChart'

// const Dashboard = () => {
//   const [data, setData] = useState(null)
//   const [inputValue, setInputValue] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
//   const [result, setResult] = useState(null)
//   const [error, setError] = useState(null)

//   const widgetChartRef1 = useRef(null)
//   const widgetChartRef2 = useRef(null)

//   useEffect(() => {
//     document.documentElement.addEventListener('ColorSchemeChange', () => {
//       if (widgetChartRef1.current) {
//         setTimeout(() => {
//           widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
//           widgetChartRef1.current.update()
//         })
//       }

//       if (widgetChartRef2.current) {
//         setTimeout(() => {
//           widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
//           widgetChartRef2.current.update()
//         })
//       }
//     })
//   }, [])

//   const handleSearch = async () => {
//     if (!inputValue.trim()) return

//     setIsLoading(true)
//     setError(null)

//     try {
//       const response = await fetch(`http://127.0.0.1:5000/search?subreddit=${inputValue}`)
//       if (!response.ok) {
//         throw new Error('An error occurred while fetching the data.')
//       }
//       const data = await response.json()
//       setResult(data)
//     } catch (error) {
//       console.error('Error:', error)
//       setError('An error occurred while fetching the data.')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch()
//     }
//   }

//   // Extracted data from result or fallback to empty structure
//   const exampleComments = result?.example_comments_per_topic || {}
//   const totalMentions = result?.total_mentions || 0
//   const overallSentiments = result?.overall_sentiments || {}

//   // Example progress bars based on result data
//   const progressExample = [
//     { title: 'Flavour', value: overallSentiments['Flavor'] || 0, percent: Math.abs(overallSentiments['Flavor'] * 100), color: 'success' },
//     { title: 'Service', value: overallSentiments['Service'] || 0, percent: Math.abs(overallSentiments['Service'] * 100), color: 'info' },
//     { title: 'Ingredients', value: overallSentiments['Ingredients'] || 0, percent: Math.abs(overallSentiments['Ingredients'] * 100), color: 'warning' },
//     { title: 'Price', value: overallSentiments['Price/Value'] || 0, percent: Math.abs(overallSentiments['Price/Value'] * 100), color: 'danger' },
//     { title: 'Presentation/Appearance', value: overallSentiments['Presentation/Appearance'] || 0, percent: Math.abs(overallSentiments['Presentation/Appearance'] * 100), color: 'primary' },
//   ]

//   const progressGroupExample3 = [
//     { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
//     { title: 'Quora', icon: cibQuora, percent: 15, value: '51,223' },
//     { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
//     { title: 'Reddit', icon: cibReddit, percent: 8, value: '27,319' },
//   ]

//   return (
//     <>
//       {/* Search bar */}
//       <CInputGroup size="lg">
//       <CFormInput
//       aria-label="Sizing example input"
//       aria-describedby="inputGroup-sizing-lg"
//       type="text"
//       placeholder="Enter company name"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//       onKeyPress={handleKeyPress}
//       />
//       <CButton color="primary" onClick={handleSearch} disabled={isLoading}>
//       {isLoading ? 'Searching...' : 'Search'}
//       </CButton>
//       </CInputGroup>

//       <div className="mb-4"></div>

//       {/* Error message */}
//       {error && <p className="text-danger">{error}</p>}

//       {/* Loading state */}
//       {isLoading && <p> Computing Metrics for {result ? result.query : ''}</p>}

//       <div>
//       <h1>Customer Sentiment Analysis for {result ? result.query : ''}</h1>
//       </div>

//       {/* Widgets Dropdown merged into Dashboard */}
//       <CRow className="mb-4" xs={{ gutter: 2 }}>
//       <CCol sm={6} xl={4} xxl={6}>
//       <CWidgetStatsA
//       color="primary"
//       value={
//         <>
//         {result ? result['total_mentions'] : 0} Reviews
//         <span className="fs-6 fw-normal">
//         {/* ({parseFloat(result['total_product_sentiment']).toFixed(3)}<CIcon icon={cilArrowBottom} />) */}
//         </span>
//         </>
//       }
//       title={`Public discussions on ${result ? result.query : ''}`}
//       action={
//         <CDropdown alignment="end">
//         <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
//         <CIcon icon={cilOptions} />
//         </CDropdownToggle>
//         <CDropdownMenu>
//         <CDropdownItem>Action</CDropdownItem>
//         <CDropdownItem>Another action</CDropdownItem>
//         <CDropdownItem>Something else here...</CDropdownItem>
//         <CDropdownItem disabled>Disabled action</CDropdownItem>
//         </CDropdownMenu>
//         </CDropdown>
//       }
//       chart={
//         <CChartLine
//         ref={widgetChartRef1}
//         className="mt-3 mx-3"
//         style={{ height: '70px' }}
//         data={{
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//         {
//           label: 'My First dataset',
//           backgroundColor: 'transparent',
//           borderColor: 'rgba(255,255,255,.55)',
//           pointBackgroundColor: getStyle('--cui-primary'),
//           data: [65, 59, 84, 84, 51, 55, 40],
//         },
//         ],
//         }}
//         options={{
//         plugins: {
//         legend: {
//           display: false,
//         },
//         },
//         maintainAspectRatio: false,
//         scales: {
//         x: {
//           border: {
//           display: false,
//           },
//           grid: {
//           display: false,
//           drawBorder: false,
//           },
//           ticks: {
//           display: false,
//           },
//         },
//         y: {
//           min: 30,
//           max: 89,
//           display: false,
//           grid: {
//           display: false,
//           },
//           ticks: {
//           display: false,
//           },
//         },
//         },
//         elements: {
//         line: {
//           borderWidth: 1,
//           tension: 0.4,
//         },
//         point: {
//           radius: 4,
//           hitRadius: 10,
//           hoverRadius: 4,
//         },
//         },
//         }}
//         />
//       }
//       />
//       </CCol>
//       <CCol sm={6} xl={4} xxl={6}>
//       <CWidgetStatsA
//       color="danger"
//       value={
//         <>
//         Market Sentiment
//         <span className="fs-6 fw-normal">
//         {/* (40.9% <CIcon icon={cilArrowBottom} />) */}
//         </span>
//         </>
//       }
//       title={`Negative ${result ? result['total_product_sentiment'] : 0}`}
//       action={
//         <CDropdown alignment="end">
//         <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
//         <CIcon icon={cilOptions} />
//         </CDropdownToggle>
//         <CDropdownMenu>
//         <CDropdownItem>Action</CDropdownItem>
//         <CDropdownItem>Another action</CDropdownItem>
//         <CDropdownItem>Something else here...</CDropdownItem>
//         <CDropdownItem disabled>Disabled action</CDropdownItem>
//         </CDropdownMenu>
//         </CDropdown>
//       }
//       chart={
//         <CChartLine
//         ref={widgetChartRef2}
//         className="mt-3 mx-3"
//         style={{ height: '70px' }}
//         data={{
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//         {
//           label: 'My First dataset',
//           backgroundColor: 'transparent',
//           borderColor: 'rgba(255,255,255,.55)',
//           pointBackgroundColor: getStyle('--cui-danger'),
//           data: [1, 18, 9, 17, 34, 22, 11],
//         },
//         ],
//         }}
//         options={{
//         plugins: {
//         legend: {
//           display: false,
//         },
//         },
//         maintainAspectRatio: false,
//         scales: {
//         x: {
//           border: {
//           display: false,
//           },
//           grid: {
//           display: false,
//           drawBorder: false,
//           },
//           ticks: {
//           display: false,
//           },
//         },
//         y: {
//           min: -9,
//           max: 39,
//           display: false,
//           grid: {
//           display: false,
//           },
//           ticks: {
//           display: false,
//           },
//         },
//         },
//         elements: {
//         line: {
//           borderWidth: 1,
//         },
//         point: {
//           radius: 4,
//           hitRadius: 10,
//           hoverRadius: 4,
//         },
//         },
//         }}
//         />
//       }
//       />
//       </CCol>
//       {/* Add other widgets here if needed */}
//       </CRow>

//       {/* Overall sentiments card */}
//       <CCard className="mb-4">
//       <CCardBody>
//       <CRow>
//       <CCol sm={5}>
//         <h4 id="traffic" className="card-title mb-0">
//         Top Trending Categories for {result ? result.query : ''}
//         </h4>
//         <div className="small text-body-secondary">Category Frequency</div>
//       </CCol>
//       <CCol sm={7} className="d-none d-md-block">
//         <CButton 
//           color="primary" 
//           className="float-end"
//           onClick={() => {
//             const streamlitUrl = `http://localhost:8501/?query=${encodeURIComponent(result ? result.query : '')}`
//             window.open(streamlitUrl, '_blank')
//           }}
//         >
//           <CIcon icon={cilCloudDownload} />
//         </CButton>
//       </CCol>
//       </CRow>
//       <MainChart />
//       </CCardBody>

//       <CCardFooter>
//       <CRow
//       xs={{ cols: 1, gutter: 4 }}
//       sm={{ cols: 2 }}
//       lg={{ cols: 4 }}
//       xl={{ cols: 5 }}
//       className="mb-2 text-center"
//       >
//       {progressExample.map((item, index) => (
//         <CCol
//         className={classNames({
//         'd-none d-xl-block': index + 1 === progressExample.length,
//         })}
//         key={index}
//         >
//         <div className="text-body-secondary">{item.title}</div>
//         <div className="fw-semibold text-truncate">
//         {item.value} ({item.percent}%)
//         </div>
//         <CProgress thin className="mt-2" color={item.color} value={item.percent} />
//         </CCol>
//       ))}
//       </CRow>
//       </CCardFooter>
//       </CCard>

//       <WidgetsBrand className="mb-4" withCharts />

//       {/* Trending topics and comments */}
//       <CRow>
//       <CCol xs>
//       <CCard className="mb-4">
//       <CCardHeader>
//         Trending Topics for {result ? result.query : ''} ({totalMentions} mentions)
//       </CCardHeader>
//       <CCardBody>
//         <CRow>
//         {progressGroupExample3.map((item, index) => (
//         <div className="progress-group" key={index}>
//         <div className="progress-group-header">
//           <CIcon className="me-2" icon={item.icon} size="lg" />
//           <span>{item.title}</span>
//           <span className="ms-auto fw-semibold">
//           {item.value}{' '}
//           <span className="text-body-secondary small">({item.percent}%)</span>
//           </span>
//         </div>
//         <div className="progress-group-bars">
//           <CProgress thin color="success" value={item.percent} />
//         </div>
//         </div>
//         ))}

//         {/* Comments section */}
//         <h5 className="mt-4">Top discussion</h5>
//         <div style={{ maxHeight: '700px', overflowY: 'auto' }}>
//         {Object.entries(exampleComments).map(([topic, comments]) => (
//         <div key={topic} className="mb-4">
//           <h6 className="fw-semibold">{topic} Comments:</h6>
//           {comments.map((comment, index) => (
//           <div key={index} className="border p-2 mb-2 rounded">
//           <p className="small text-body-secondary">{comment}</p>
//           </div>
//           ))}
//         </div>
//         ))}
//         </div>
//         </CRow>
//       </CCardBody>
//       </CCard>
//       </CCol>
//       </CRow>
//     </>
//     )
// }

// export default Dashboard

import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CInputGroup,
  CFormInput,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibGoogle,
  cibReddit,
  cibQuora,
  cibTwitter,
  cilCloudDownload,
  cilArrowBottom,
  cilArrowTop,
  cilOptions,
} from '@coreui/icons'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import WidgetsBrand from '../widgets/WidgetsBrand'

const Dashboard = () => {
  const [data, setData] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const widgetChartRef1 = useRef(null)
  const widgetChartRef2 = useRef(null)
  const chartRef = useRef(null)

  useEffect(() => {
    document.documentElement.addEventListener('ColorSchemeChange', () => {
      if (widgetChartRef1.current) {
        setTimeout(() => {
          widgetChartRef1.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-primary')
          widgetChartRef1.current.update()
        })
      }

      if (widgetChartRef2.current) {
        setTimeout(() => {
          widgetChartRef2.current.data.datasets[0].pointBackgroundColor = getStyle('--cui-info')
          widgetChartRef2.current.update()
        })
      }

      if (chartRef.current) {
        setTimeout(() => {
          chartRef.current.options.scales.x.grid.borderColor = getStyle(
            '--cui-border-color-translucent',
          )
          chartRef.current.options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
          chartRef.current.options.scales.x.ticks.color = getStyle('--cui-body-color')
          chartRef.current.options.scales.y.grid.borderColor = getStyle(
            '--cui-border-color-translucent',
          )
          chartRef.current.options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
          chartRef.current.options.scales.y.ticks.color = getStyle('--cui-body-color')
          chartRef.current.update()
        })
      }
    })
  }, [])

  const handleSearch = async () => {
    if (!inputValue.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`http://127.0.0.1:5000/search?subreddit=${inputValue}`)
      if (!response.ok) {
        throw new Error('An error occurred while fetching the data.')
      }
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error:', error)
      setError('An error occurred while fetching the data.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  // Extracted data from result or fallback to empty structure
  const exampleComments = result?.example_comments_per_topic || {}
  const totalMentions = result?.total_mentions || 0
  const overallSentiments = result?.overall_sentiments || {}
  const keyTopics = result?.key_topics || {}

  // Example progress bars based on result data
  const progressExample = [
    {
      title: 'Flavour',
      value: overallSentiments['Flavor'] || 0,
      percent: Math.abs((overallSentiments['Flavor'] || 0) * 100),
      color: 'success',
    },
    {
      title: 'Service',
      value: overallSentiments['Service'] || 0,
      percent: Math.abs((overallSentiments['Service'] || 0) * 100),
      color: 'info',
    },
    {
      title: 'Ingredients',
      value: overallSentiments['Ingredients'] || 0,
      percent: Math.abs((overallSentiments['Ingredients'] || 0) * 100),
      color: 'warning',
    },
    {
      title: 'Price',
      value: overallSentiments['Price/Value'] || 0,
      percent: Math.abs((overallSentiments['Price/Value'] || 0) * 100),
      color: 'danger',
    },
    {
      title: 'Presentation/Appearance',
      value: overallSentiments['Presentation/Appearance'] || 0,
      percent: Math.abs((overallSentiments['Presentation/Appearance'] || 0) * 100),
      color: 'primary',
    },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Quora', icon: cibQuora, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'Reddit', icon: cibReddit, percent: 8, value: '27,319' },
  ]

  return (
    <>
      {/* Search bar */}
      <CInputGroup size="lg">
        <CFormInput
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          type="text"
          placeholder="Enter company name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <CButton color="primary" onClick={handleSearch} disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </CButton>
      </CInputGroup>

      <div className="mb-4"></div>

      {/* Error message */}
      {error && <p className="text-danger">{error}</p>}

      {/* Loading state */}
      {isLoading && <p> Computing Metrics for {result ? result.query : ''}</p>}

      <div>
        <h1>Customer Sentiment Analysis for {result ? result.query : ''}</h1>
      </div>

      {/* Widgets Dropdown merged into Dashboard */}
      <CRow className="mb-4" xs={{ gutter: 2 }}>
        <CCol sm={6} xl={4} xxl={6}>
          <CWidgetStatsA
            color="primary"
            value={
              <>
                {result ? result['total_mentions'] : 0} Reviews
                <span className="fs-6 fw-normal">
                  {/* ({parseFloat(result['total_product_sentiment']).toFixed(3)}<CIcon icon={cilArrowBottom} />) */}
                </span>
              </>
            }
            title={`Public discussions on ${result ? result.query : ''}`}
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                  <CIcon icon={cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                ref={widgetChartRef1}
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: getStyle('--cui-primary'),
                      data: [65, 59, 84, 84, 51, 55, 40],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      border: {
                        display: false,
                      },
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: 30,
                      max: 89,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                      tension: 0.4,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>
        <CCol sm={6} xl={4} xxl={6}>
          <CWidgetStatsA
            color="danger"
            value={
              <>
                Market Sentiment
                <span className="fs-6 fw-normal">
                  {/* (40.9% <CIcon icon={cilArrowBottom} />) */}
                </span>
              </>
            }
            title={`Negative ${result ? result['total_product_sentiment'] : 0}`}
            action={
              <CDropdown alignment="end">
                <CDropdownToggle color="transparent" caret={false} className="text-white p-0">
                  <CIcon icon={cilOptions} />
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            }
            chart={
              <CChartLine
                ref={widgetChartRef2}
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: getStyle('--cui-danger'),
                      data: [1, 18, 9, 17, 34, 22, 11],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      border: {
                        display: false,
                      },
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: -9,
                      max: 39,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
        </CCol>
        {/* Add other widgets here if needed */}
      </CRow>

      {/* Overall sentiments card */}
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Top Trending Categories for {result ? result.query : ''}
              </h4>
              <div className="small text-body-secondary">Category Frequency</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton
                color="primary"
                className="float-end"
                onClick={() => {
                  const streamlitUrl = `http://localhost:8501/?query=${encodeURIComponent(
                    result ? result.query : '',
                  )}`
                  window.open(streamlitUrl, '_blank')
                }}
              >
                <CIcon icon={cilCloudDownload} />
              </CButton>
            </CCol>
          </CRow>
          {/* MainChart integrated here */}
          <CChartBar
            ref={chartRef}
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: Object.keys(keyTopics), // Labels from key_topics
              datasets: [
                {
                  label: 'Key Topics Count',
                  backgroundColor: getStyle('--cui-info'),
                  data: Object.values(keyTopics), // Data from key_topics
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
                tooltip: {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for tooltips
                  titleColor: '#fff', // White text in tooltips
                  bodyColor: '#fff',
                  bodyFont: {
                    size: 14,
                  },
                  padding: 10,
                  cornerRadius: 4,
                },
              },
              scales: {
                x: {
                  grid: {
                    color: getStyle('--cui-border-color-translucent'),
                    drawOnChartArea: false,
                  },
                  ticks: {
                    color: getStyle('--cui-body-color'),
                  },
                },
                y: {
                  beginAtZero: true,
                  grid: {
                    color: getStyle('--cui-border-color-translucent'),
                  },
                  ticks: {
                    color: getStyle('--cui-body-color'),
                  },
                },
              },
            }}
          />
        </CCardBody>

        <CCardFooter>
          <CRow
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            lg={{ cols: 4 }}
            xl={{ cols: 5 }}
            className="mb-2 text-center"
          >
            {progressExample.map((item, index) => (
              <CCol
                className={classNames({
                  'd-none d-xl-block': index + 1 === progressExample.length,
                })}
                key={index}
              >
                <div className="text-body-secondary">{item.title}</div>
                <div className="fw-semibold text-truncate">
                  {item.value} ({item.percent}%)
                </div>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      <WidgetsBrand className="mb-4" withCharts />

      {/* Trending topics and comments */}
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>
              Trending Topics for {result ? result.query : ''} ({totalMentions} mentions)
            </CCardHeader>
            <CCardBody>
              <CRow>
                {progressGroupExample3.map((item, index) => (
                  <div className="progress-group" key={index}>
                    <div className="progress-group-header">
                      <CIcon className="me-2" icon={item.icon} size="lg" />
                      <span>{item.title}</span>
                      <span className="ms-auto fw-semibold">
                        {item.value}{' '}
                        <span className="text-body-secondary small">({item.percent}%)</span>
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress thin color="success" value={item.percent} />
                    </div>
                  </div>
                ))}

                {/* Comments section */}
                <h5 className="mt-4">Top discussion</h5>
                <div style={{ maxHeight: '700px', overflowY: 'auto' }}>
                  {Object.entries(exampleComments).map(([topic, comments]) => (
                    <div key={topic} className="mb-4">
                      <h6 className="fw-semibold">{topic} Comments:</h6>
                      {comments.map((comment, index) => (
                        <div key={index} className="border p-2 mb-2 rounded">
                          <p className="small text-body-secondary">{comment}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
