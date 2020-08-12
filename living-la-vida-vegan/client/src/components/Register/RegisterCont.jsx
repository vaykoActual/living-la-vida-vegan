// import React, { useState } from 'react';
// import './Register.css';

// export default function RegisterCont(props) {
//   const [formData, setFormData] = useState({
//     email: '',
//     username: '',
//     password: '',
//     confirm_password: '',
//     upload_photo: '',
//     about_me: '',
//     likes_interests: '',
//   });

//   return (
//     <div>
//       <form className='d-flex flex-column' onSubmit={handleSubmit}>
//         <input
//           type='text'
//           name='upload-photo'
//           value={formData.upload_photo}
//           onChange={handleChange}
//           placeholder='Image URL'
//         />
//         <input
//           type='text'
//           name='about-me'
//           value={formData.about_me}
//           onChange={handleChange}
//           placeholder='share a few words about yourself'
//         />
//         <input
//           type='text'
//           name='likes-interests'
//           value={formData.likes_interests}
//           onChange={handleChange}
//           placeholder='any likes or interests?'
//         />
//       </form>
//     </div>
//   );
// }
