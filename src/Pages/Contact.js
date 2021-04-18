import React from 'react';
// import MyForm from "./Form";

export default function Contact() {
    return (
        <>
        <h1 className='contact'>Contact Me</h1>

        <div className='form-content-left'>
            <form className="form">
                {/* Name */}
                <div className='form-inputs'>
                    <label htmlFor='name'
                        className='form-label'>

                    </label>
                    <input
                        type='text'
                        name='name'
                        className='form-input'
                        placeholder='Enter your name'
                    />
                </div>
                {/* Email */}
                <div className='form-inputs'>
                    <label htmlFor='email'
                        className='form-label'>

                    </label>
                    <input
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                    />
                </div>
                {/* Message */}
                <div className='form-inputs'>
                    <label htmlFor='name'
                        className='form-label'>

                    </label>
                    <input
                        type='text'
                        name='name'
                        className='form-input'
                        placeholder='Enter your name'
                    />
                </div>
            </form>

        </div>
      </>
    );
}