import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import AllFragments from './components/AllFragments';

function App() {

  // ------------------------------
  // Database API URL Switch Heroku/Local
  // ------------------------------
  // const apiUrl = 'https://fragmented.herokuapp.com'
  // const apiUrl = 'localhost:3000/fragments'

const [fragments, setFragments] = useState([]) 

// add modal
const [show, setShow] = useState(false)

const [showSearch, setShowSearch] = useState(false)
const [query, setQuery] = useState("")

  //hides/shows searchbar
  const searchToggle = () => {
    if (showSearch === false) {
      setShowSearch(true)
    } else {
      setShowSearch(false)
    }
  }

//route to get CMS
const getFragment = () => {
  axios.get(`https://fragmented.herokuapp.com/fragments`)
    //axios.get("http://localhost:3000/fragments")
    .then(response => setFragments(response.data),
        err => console.log(err)
    ).catch(error => console.error(error))
}

//create route for CMS
const handleCreate = (addFragment) => {
 axios.post(`https://fragmented.herokuapp.com/fragments/`, addFragment)
 .then((response) => {
  //  setFragments([...fragments, response.data])
  getFragment()
 })
}

//update CMS
const handleUpdate = (editFragment) => {
 axios.put(`https://fragmented.herokuapp.com/fragments/` + editFragment.id, editFragment)
 .then((response) => {
   setFragments(fragments.map((fragment) => {
     return fragment.id !== response.data.id ? fragment : response.data
   }))
 })
}

// const handleUpdate = (editFragment) => {
//   console.log(editFragment)
//   axios.put(`${apiUrl}/fragments` + editFragment.id, editFragment)
//   .then((response) => {
//     setFragments(fragments.map((fragment) => {
//       return fragment.id !== response.data.id ? fragment :
//       response.data
//     }))
//   })
// }

//delete CMS
const handleDelete = (deletedFragment) => {
 axios.delete(`https://fragmented.herokuapp.com/fragments/` + deletedFragment.id)
 // axios.delete('http://localhost:3000/:id' + deletedFragment.id)
 .then((response) => {
   setFragments(fragments.filter(fragment => fragment.id !== deletedFragment.id))
 })
}



//Gets all data then loads page
  // useEffect(() => {
  //   getFragment()
  //   axios
  //   .get(' https://fragmented.herokuapp.com/fragments')
  //       .then((response)=>{
  //           console.log(response)
  //       })
  // }, [])

  useEffect(() => {
    getFragment()
    axios.get(`https://fragmented.herokuapp.com/fragments`).then((response) => {
      getPost(response.data)
    })
  }, [])

  return (
    <div className="wrapper">
      <header className="App-header">
        <h1>FRAGMENTS</h1>
        <h4>Movies, short-films, tv series, books, plays & short stories 2022</h4>
        <div>

    <div className="button-nav">
    <AddForm
    handleCreate={handleCreate}
    />
    <br/>
 
    
{/* SEARCH FRAGMENTS */}

            <button
      onClick={searchToggle}
      className="search-btn">
         &#x1F50D;
          {/* Search */}
        </button>
      {showSearch ?
        <>
          <div className="modal-wrapper"  onClick={searchToggle}>
            <div className="search-bar-modal" onClick={e => e.stopPropagation()}>
              <div className='search-bar-x-btn-div'>
                <button className='search-bar-x-btn' onClick={searchToggle}>
                &#x2715;
                </button>
              </div>
              <div className="search-bar-div">
                <input className="search-bar" placeholder="Search" onChange={event => setQuery(event.target.value)}/>
              </div>
              {query === "" ? null:
                <div className="search-flexbox">
                  {fragments.filter((fragment) => {
                    if (query === '') {
                      return fragment
                    } else if (fragment.date?.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.movie?.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.short?.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.tv_series?.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.book?.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.play?.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    } else if (fragment.short_story?.toLowerCase().includes(query.toLowerCase())) {
                      return fragment
                    }
                  }).map((fragment) => {
                    return(
                      <div key={fragment.id}>
                       <li>{fragment.date}</li>
                        <li>{fragment.movie}</li>
                          <li>{fragment.short}</li>
                            <li>{fragment.tv_series}</li>
                              <li>{fragment.book}</li>
                                <li>{fragment.play}</li>
                                  <li>{fragment.short_story}</li>
                      </div>
                    )
                  })}
              </div>}
            </div>
          </div>
        </>
      : null}
      </div>


   {/* <EditForm
    handleUpdate={handleUpdate}
    /> */}

{/* DISPLAY FRAGMENTS */}
    {/* <div className="content-containter-x">
      <div>
          {fragments.map(fragment => (
            <div key={fragment.id}>
              <ul>
                <li>{fragment.date}</li>
                  <li>{fragment.movie}</li>
                    <li>{fragment.short}</li>
                      <li>{fragment.tv_series}</li>
                        <li>{fragment.book}</li>
                          <li>{fragment.play}</li>
                            <li>{fragment.short_story}</li>
                        </ul>
                      <div>
                <EditForm 
                fragment={fragment}
                handleUpdate={handleUpdate} />
                  </div>
                <div> */}
                {/* <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(fragment)}
                >
                  Delete
                </button> */}
              {/* </div>
            </div>
          ))}
        </div>
  </div> */}

{fragments.map((fragment) => {
            return (
                <>
                    <div className="card" key = {fragment.id}>
                        <div className="read">
                            <AllFragments getFragment={getFragment} fragment={fragment}/>

                        </div>
                        <br/>
                        {/* <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(fragment)}
                >
                  Delete
                </button> */}
                        {/* <EditForm 
                fragment={fragment}
                handleUpdate={handleUpdate} />
                  </div>
                <div> */}
                        {/* <button className="btn" onClick={toggleUpdate}>
                            Edit
                        </button> */}
                        {/* {showUpdate === true ?  */}
                        <EditForm handleUpdate={handleUpdate} handleDelete={handleDelete} fragment={fragment}/>
                        {/* : null} */}
                    </div>
                </>
            )
            })}

        {/* </> */}


        </div>
      </header>
    </div>
  );
}

export default App;