import { useState } from 'react';
import classes from './NewPost.module.css'

function NewPost({onCancel, onAddPost}){
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [enteredBody, setEnteredBody] = useState('');

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value)
    }

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value)
    }

    function submitHandler(event){
        // Utk mencegah browser biar gk buat request ke http (biar gk reload page)
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };
        onAddPost(postData);
        onCancel();
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor='body'>Text</label>
                <textarea id='body'required rows={3} onChange={bodyChangeHandler} />
                                                   {/* onBodyChange itu custom function */}
                                                   {/* props dipake buat oper-operan data */}
            </p>

            <p>
                <label htmlFor='name'>Your name</label>
                <input type='text' id='name' required onChange={authorChangeHandler}/>
            </p>

            <p className={classes.actions}>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;