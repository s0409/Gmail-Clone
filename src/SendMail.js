import { Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import "./SendMail.css";
import firebase from 'firebase';


function SendMail() {
    const { register,handleSubmit,watch, formState: {errors} } = useForm();
    const dispatch = useDispatch();
    
    const onSubmit = (formData) => {
        console.log(formData)
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),

        })
        
        dispatch(closeSendMessage); 
    };

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <IconButton>
                <CloseIcon onClick={() => dispatch(closeSendMessage())}
                className="sendMail__close" />
                </IconButton>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <input 
                  name="to"
                  placeholder="To" 
                  type="email" 
                  {...register("to" ,{ required: true })}
                
                />
                {errors.to && <p className="sendMail__error">To is Required</p>}
                <input 
                  name="subject" 
                  placeholder="Subject" 
                  type="text" 
                  {...register('subject',{ required: true })}
                />
                {errors.subject && (<p className="sendMail__error">Subject is Required</p>)}
                <input 
                  name="message"
                  placeholder="Message" 
                  type="text" 
                  className="sendMail__message" 
                  {...register("message",{ required: true })}
                /> 
                {errors.message && (<p className="sendMail__error">Message is Required</p>)}
                   <div className="sendMail__options">
                       <Button className="sendMail__send" variant="contained" color="primary" type="submit">Send</Button>
                   </div> 
            </form>  
        </div>
    );
}

export default SendMail;
