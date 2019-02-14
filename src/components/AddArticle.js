// import React, { Component } from 'react'


// class AddArticle extends Component {

//     state = {

//     }

//     handleChange = e => {
//         let {name, value} = e.target 
//         this.setState ({
//             [name]: value
//         })
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         let addItem = {
            
//         }
//     }

    

//     render() {
//         console.log(this.props.articles);
       
//        return (
//             <>
//                 <div className="container-fluid">

//                     <h1>Add An Article</h1>
//                     <form>
//                         <div className="formgroup">
//                             <label>Article Title</label>
//                             <input type="text" className="form-control" onChange={this.handleChange} ></input>
//                         </div>
//                         <div className="formgroup">
//                             <label>Image</label>
//                             <input type="text" className="form-control" onChange={this.handleChange} placeholder="Img Link..."></input>
//                         </div>
//                         <button type="submit" className="btn btn-primary mb-2">Submit</button>
//                     </form>
//                 </div>

//             </>
//         )
//     }
// }

// export default AddArticle;