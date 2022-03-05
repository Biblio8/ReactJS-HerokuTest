// import React, { useState, useEffect } from "react";
// import ExportExcel from "react-export-excel";
// import axios from "axios";
// import { makeStyles } from "@material-ui/core/styles";

// // create file and sheet
// const ExcelFile = ExportExcel.ExcelFile;
// const ExcelSheet = ExportExcel.ExcelFile.ExcelSheet;
// const ExcelColumn = ExportExcel.ExcelFile.ExcelColum;

// const styles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     minHeight: "400px",
//   },
// }));

// const Guests = () => {
//   const [guests, setGuests] = useState([]);
//   const classes = styles();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/guests")
//       .then((res) => {
//         setGuests(res.data.guests);
//       })
//       .catch((error) => {
//         alert(` Error: ${error}`);
//       });
//   });
//   return (
//     <div className={classes.root}>
//       <h1> Download Guests List </h1>
//       <ExcelFile>
//         <ExcelSheet data={guests} name="Guests">
//           <ExcelColumn label="ID" value="ID" />
//           <ExcelColumn label="First Name" value="FirstName" />
//           <ExcelColumn label="Last Name" value="LastName" />
//           <ExcelColumn label="Email" value="Email" />
//           <ExcelColumn
//             label="Professional Position"
//             value="ProfessionalPosition"
//           />
//           <ExcelColumn label="Company" value="Company" />
//           {/* <ExcelColumn
//                       label="Marital Status"
//                       value={(col) => (col.is_married ? "Married" : "Single")}
//                     /> */}
//         </ExcelSheet>
//       </ExcelFile>
//     </div>
//   );
// };

// export default Guests;
// // import React from "react";
// // import ReactExport from "react-export-excel";

// // const ExcelFile = ReactExport.ExcelFile;
// // const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// // const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

// // export default function Guests() {
// //   return (
// //     <ExcelFile>
// //       <ExcelSheet name="Guests">
// //         <ExcelColumn label="ID" value="ID" />
// //         <ExcelColumn label="First Name" value="FirstName" />
// //         <ExcelColumn label="Last Name" value="LastName" />
// //         <ExcelColumn label="Email" value="Email" />
// //         <ExcelColumn
// //           label="Professional Position"
// //           value="ProfessionalPosition"
// //         />
// //         <ExcelColumn label="Company" value="Company" />
// //         {/* <ExcelColumn
// // //                     label="Marital Status"
// // //                     value={(col) => (col.is_married ? "Married" : "Single")}
// // //                   /> */}
// //       </ExcelSheet>
// //     </ExcelFile>
// //   );
// // }
