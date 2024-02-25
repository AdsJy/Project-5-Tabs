import React, {useEffect, useState} from 'react'
import { LuChevronsRight } from "react-icons/lu";

const url = 'https://course-api.com/react-tabs-project'

const Tabs = () => {

    const [tabs, setTabs] = useState([]);
    const [error, setError] = useState()
    const [selectedCompany, setSelectedCompany] = useState("");
    const [hoveredItem, setHoveredItem] = useState(null);
    


    // for Fetching and  Try and Catch Error
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error('Failed to fetch tours');
            }
            const data = await response.json();
            console.log(data);
            setTabs(data);
          } catch (error) {
            setError(error.message);
          }
        };
    
        fetchData();

      }, []);
    
    const filterNavBar = (company) => {
        console.log("Selected company:", company);
        setSelectedCompany(company);
        };


      if (error) {
        return <div>Error: {error}</div>;
      }


  return (
    <div className='container'>
        <header className='header'>
            <h1>Experiences</h1>
            <hr className='hr-line'/>
        </header>
        <div className='btn-container'>
            {tabs.map((item) => (
                <div className='btn-and-hr' key={item.company}>
                    <button
                        style={{
                            color: selectedCompany === item.company || hoveredItem === item.company ? '#1fe5a3' : null,
                            backgroundColor: 'white',
                            borderRadius: 10
                        }}
                        onMouseEnter={() => setHoveredItem(item.company)}
                        onMouseLeave={() => setHoveredItem(null)}
                        onClick={() => filterNavBar(item.company)}
                        className="btn"
                    >
                        {item.company}
                    </button>
                    <hr
                        style={{
                            borderColor: selectedCompany === item.company || hoveredItem === item.company ? '#1fe5a3' : null
                        }}
                        className="horizontal-line vertical-line"
                    />
                </div>
                )
            )}
        </div>
        <div className="main">
        {tabs
            .filter((item) => selectedCompany === "" || item.company === selectedCompany)
            .map((item) => {
                const {id, company, title, dates} = item
                return(
                    <article key={id} className='container'>
                        <div className='sub-container'>
                            <header className='headers'>
                                <h1>{title}</h1>
                                <h4 className='heading-of-company'>{company}</h4>
                                <h5>{dates}</h5>
                            </header>
                            <div className='duties'>
                                {item.duties.map((duty, index) => (
                                    <div className='icon-with-duty' key={index}>
                                    <LuChevronsRight className='icon'/>
                                    <p>{duty}</p>
                                    </div>
                                    )
                                )}
                            </div>
                        </div>
                        <button className='footer'>More Info?</button>
                    </article>
                )
            }
        )}
        </div>
    </div>
  )
}
export default Tabs























// import React, {useEffect, useState} from 'react'
// import { LuChevronsRight } from "react-icons/lu";

// const url = 'https://course-api.com/react-tabs-project'

// const Tabs = () => {
    
//     const [tabs, setTabs] = useState([]);
//     const [error, setError] = useState()
//     const [selectedCompany, setSelectedCompany] = useState("");
//     const [hoveredItem, setHoveredItem] = useState(null);
      


//     // for Fetching and  Try and Catch Error
//       useEffect(() => {
//         const fetchData = async () => {
//           try {
//             const response = await fetch(url);
//             if (!response.ok) {
//               throw new Error('Failed to fetch tours');
//             }
//             const data = await response.json();
//             console.log(data);
//             setTabs(data);
//           } catch (error) {
//             setError(error.message);
//           }
//         };
    
//         fetchData();
      
//       }, []);
    
//     const filterNavBar = (company) => {
//         console.log("Selected company:", company);
//         setSelectedCompany(company);
//         };


//       if (error) {
//         return <div>Error: {error}</div>;
//       }


//   return (
//     <div className='container'>
//         <header className='header'>
//              <h1>Experiences</h1>
//              <hr className='hr-line'/>
//         </header>
//         <div className='btn-container'>
//             <div className='btn-and-hr'>
//                 <button
//                     style={{
//                         color: selectedCompany === 'TOMMY' || hoveredItem === 'TOMMY' ? '#1fe5a3' : null,
//                         backgroundColor: 'white',
//                         borderRadius: 10,
//                     }}
//                     onMouseEnter={() => setHoveredItem('TOMMY')}
//                     onMouseLeave={() => setHoveredItem(null)}
//                     onClick={() => filterNavBar('TOMMY')}
//                     className="btn"
//                 >
//                     TOMMY
//                 </button>
//                 <hr
//                     style={{
//                         borderColor: selectedCompany === 'TOMMY' || hoveredItem === 'TOMMY' ? '#1fe5a3' : null
//                     }}
//                     className="horizontal-line vertical-line"
//                 />
//             </div>
//             <div className='btn-and-hr'>
//                 <button
//                     style={{
//                         color: selectedCompany === 'BIGDROP' || hoveredItem === 'BIGDROP' ? '#1fe5a3' : null,
//                         backgroundColor: 'white',
//                         borderRadius: 10,
//                     }}
//                     onMouseEnter={() => setHoveredItem('BIGDROP')}
//                     onMouseLeave={() => setHoveredItem(null)}
//                     onClick={() => filterNavBar('BIGDROP')}
//                     className="btn"
//                 >
//                     BIGDROP
//                 </button>
//                 <hr
//                     style={{
//                         borderColor: selectedCompany === 'BIGDROP' || hoveredItem === 'BIGDROP' ? '#1fe5a3' : null
//                     }}
//                     className="horizontal-line vertical-line"
//                 />
//             </div>
//             <div className='btn-and-hr'>
//                 <button
//                     style={{
//                         color: selectedCompany === 'CUKER' || hoveredItem === 'CUKER' ? '#1fe5a3' : null,
//                         backgroundColor: 'white',
//                         borderRadius: 10,
//                     }}
//                     onMouseEnter={() => setHoveredItem('CUKER')}
//                     onMouseLeave={() => setHoveredItem(null)}
//                     onClick={() => filterNavBar('CUKER')}
//                     className="btn"
//                 >
//                     CUKER
//                 </button>
//                 <hr
//                     style={{
//                         borderColor: selectedCompany === 'CUKER' || hoveredItem === 'CUKER' ? '#1fe5a3' : null
//                     }}
//                     className="horizontal-line vertical-line"
//                 />
//             </div>
//         </div>
//         <div className="container-2">
//         {tabs
//             .filter((item) => selectedCompany === "" || item.company === selectedCompany)
//             .map((item) => {
//                 const {id, company, title, dates, duties} = item
//                 return(
//                     <article key={id} className='container'>
//                         <div className='sub-container'>
//                             <header className='headers'>
//                                 <h1>{title}</h1>
//                                 <h4 className='heading-of-company'>{company}</h4>
//                                 <h5>{dates}</h5>
//                             </header>
//                             <div className='duties'>
//                                 <div className='icon-with-duty'>
//                                     <LuChevronsRight className='icon'/>
//                                     <p>{duties[0]}</p>
//                                 </div>
//                                 <div className='icon-with-duty'>
//                                     <LuChevronsRight className='icon'/>
//                                     <p>{duties[1]}</p>
//                                 </div>
//                                 <div className='icon-with-duty'>
//                                     <LuChevronsRight className='icon'/>
//                                     <p>{duties[2]}</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <button className='footer'>More Info?</button>
//                     </article>
//                 )
//             }
//         )}
//         </div>
//     </div>
//   )
// }

// export default Tabs

