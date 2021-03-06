import React, { useState } from "react";
import axios from "axios";

export default () => {
    const [title, setTitle] = useState('');
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://posts.com/posts/create', { title });
        setTitle('');
    };
    return (<div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="TitleInput">Title</label>
                <input className="form-control" value={title} onChange={e => setTitle(e.target.value)}></input>
            </div>
            <button className="btn btn-primary">submit</button>
        </form>
    </div>);
}