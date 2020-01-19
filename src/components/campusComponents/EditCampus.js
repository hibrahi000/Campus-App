import React, { PureComponent } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

export default class FormPage extends PureComponent {
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Edit Campus</p>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Campus Name
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
                placeholder={this.props.name}
              />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Campus Location
              </label>
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactSubjectEx"
                className="grey-text"
              >
                Campus Image URL
              </label>
              <input
                type="text"
                id="defaultFormContactSubjectEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactMessageEx"
                className="grey-text"
              >
                Campus Description
              </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="3"
              />
              <div className="text-center mt-4">
                <MDBBtn color="primary" type="submit">
                  Save Changes
                </MDBBtn>
              </div>
              <div className="text-center mt-4">
                <MDBBtn color="danger" type="submit">
                  Delete Campus
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

// const FormPage = () => {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <form>
//             <p className="h4 text-center mb-4">Edit Campus</p>
//             <label htmlFor="defaultFormContactNameEx" className="grey-text">
//               Campus Name
//             </label>
//             <input
//               type="text"
//               id="defaultFormContactNameEx"
//               className="form-control"
//             />
//             <br />
//             <label htmlFor="defaultFormContactEmailEx" className="grey-text">
//               Campus Location
//             </label>
//             <input
//               type="email"
//               id="defaultFormContactEmailEx"
//               className="form-control"
//             />
//             <br />
//             <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
//               Campus Image URL
//             </label>
//             <input
//               type="text"
//               id="defaultFormContactSubjectEx"
//               className="form-control"
//             />
//             <br />
//             <label htmlFor="defaultFormContactMessageEx" className="grey-text">
//               Campus Description
//             </label>
//             <textarea
//               type="text"
//               id="defaultFormContactMessageEx"
//               className="form-control"
//               rows="3"
//             />
//             <div className="text-center mt-4">
//               <MDBBtn color="primary" type="submit">
//                 Save Changes
//               </MDBBtn>
//             </div>
//           </form>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default FormPage;
