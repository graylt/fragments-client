import {useState} from 'react'
import Modal from './Modal';

const Edit = (props) => {


  const [fragment, setFragment] = useState({...props.fragment})

   // add modal
   const [show, setShow] = useState(false)
  //--- Functions:
  //registers a change in all input fields
  const handleChange = (event) => {
    setFragment({...fragment, [event.target.name]: event.target.value})
  }

  //submit for adding new
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(fragment)
    window.location.reload(false)
  }

  const handleDeleteSubmit = (event) => {
    event.preventDefault()
    props.handleDelete(fragment)
  }

  return(
    <>
        <div className="asset-button-container">
            <button 
            className="asset-button" 
            onClick={() => setShow(true)}
            >
            Edit
            </button>
                </div>
                    <Modal 
                    title="Edit" 
                    onClose={() =>setShow(false)} 
                    show={show}
                    > 
                    <form 
                    className="add-input" 
                    onSubmit={handleSubmit}
                    >
                    <label 
                    htmlFor='date'
                    >
                    Date: 
                    </label>
                <input 
                type='text' 
                name='date' 
                value={fragment.date} 
                onChange={handleChange}
                />
                <br/>
                <br/>

                <label 
                htmlFor='movie'
                >
                    Movie: 
                    </label>
                <input 
                type='text' 
                name='movie' 
                value={fragment.movie} 
                onChange={handleChange}
                />
                <br/>
                <br/>

                <label 
                htmlFor='short'>
                    Short: 
                    </label>
                <input 
                type='text' 
                name='short' 
                value={fragment.short} 
                onChange={handleChange}/>
                <br/>
                <br/>

                <label 
                htmlFor='tv_series'>
                    TV series: 
                    </label>
                <input 
                type='text' 
                name='tv_series' 
                value={fragment.tv_series} 
                onChange={handleChange}
                />
                <br/>
                <br/>

                <label 
                htmlFor='book'
                >
                    Book: 
                    </label>
                <input 
                type='text' 
                name='book' 
                value={fragment.book} 
                onChange={handleChange}
                />
                <br/>
                <br/>

                <label 
                htmlFor='play'
                >
                    Play: 
                    </label>
                <input 
                type='text' 
                name='play' 
                value={fragment.play} 
                onChange={handleChange}
                />
                <br/>
                <br/>

                <label 
                htmlFor='short_story'
                >
                    Short story: 
                    </label>
                <input 
                type='text' 
                name='short_story' 
                value={fragment.short_story} 
                onChange={handleChange}
                />
                <br/>
                <br/>
                <div className='add-submit-btn-div'>
                <button type="button" class="btn btn-warning" onClick={e => handleSubmit(e)}>Edit</button>
                  {/* <input type='submit'/> */}
                  <br/>
                <br/>
                  <button
                  className="btn-btn-danger"
                  onClick={handleDeleteSubmit}>
                  Delete
                </button>
                </div>
              </form>
              </Modal>
    </>
  )
}

export default Edit