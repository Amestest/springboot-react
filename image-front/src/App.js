import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState([]);

    return (
        <div className="App">
            <form>
                <div>
                    <label>제목:</label>
                    <input type="text" 
                           value={title}
                           onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>내용:</label>
                    <textarea type="text"
                              value={content}
                              onChange={e => setContent(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='a'>이미지선택</label>
                    <input type="file"
                            value={files} 
                            onChange={e=> setFiles(e.target.value)} 
                            sytle="display:none;" id="a" multiple/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;