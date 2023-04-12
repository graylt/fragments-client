import {useState} from 'react'
import Modal from './Modal';

const Add = (props) => {
  //--- State:
  let emptyFragment = {
    date: '', 
    movie: '', 
    short: '', 
    tv_series: '', 
    book: '', 
    play: '', 
    short_story: ''
  }

  const [fragment, setFragment] = useState(emptyFragment)

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
    props.handleCreate(fragment)
    setFragment(emptyFragment)
  }
  

  return(
    <>
        <div className="asset-button-container">
            <button 
            className="add-button" 
            onClick={() => setShow(true)}
            >
            Add
            </button>
                </div>
                    <Modal 
                    title="Add" 
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
                  <input type='submit'/>
                </div>
              </form>
              </Modal>
    </>
  )
}

export default Add