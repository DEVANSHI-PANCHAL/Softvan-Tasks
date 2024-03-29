import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import logo from "./logo.jpg";
// import "./App.css";

function App() {
  const pdfRef = useRef(null);

  const data = {
    payment_date: "12/07/2024",
    payment_type: "upi",
    payment_status: "active",
    payment_amount: "500",
    name: "Devanshi",
    email: "devanshi@gmail.com",
    phone: "7874164018",
    member_type: "admin",
    number_of_members: "50",
    address: "address  address   address addressaddressaddressaddress address",
  };

  const generatePDF = () => {
    const element = document.getElementById("dev");
    const options = {
      margin: [0, 0, 0, 12],
      filename: "lohana-milan-payment-details.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
  
    // Clone the element
    const clonedElement = element.cloneNode(true);
  
    // Change display of cloned element
    clonedElement.style.display = "block";
  
    // Remove the original element from the document
    element.parentNode.removeChild(element);
  
    // Generate PDF from the cloned element
    html2pdf().from(clonedElement).set(options).save();
  
    // Restore the original element
    document.body.appendChild(element);
  };

  return (
    <div className="App">
      <button onClick={generatePDF}>Generate PDF</button>
      <div ref={pdfRef} style={{ display: "none" }} id="dev">
      {/* <div ref={pdfRef}> */}
      
        <table
          style={{
            maxWidth: "670px",
            margin: "50px auto 10px",
            backgroundColor: "#fff",
            padding: "50px",
            borderRadius: "3px",
            boxShadow:
              "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
            borderTop: "solid 10px red",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                colspan="3"
              >
                <img
                  style={{ maxWidth: "60px", height: "60px" }}
                  src={logo}
                  alt="Lohana Milan"
                />
                <h4
                  style={{
                    fontSize: "xx-large",
                    margin: "0px ",
                    color: "red",
                    minWidth: "250px",
                  }}
                >
                  Lohana Milan
                </h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ height: "35px" }}></td>
            </tr>
            <tr>
              <td
                colspan="2"
                style={{ border: "solid 1px #ddd", padding: "10px 20px" }}
              >
                <h2>Payment Details</h2>
                <p style={{ fontSize: "14px", margin: "0 0 6px 0" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "inline-block",
                      minWidth: "146px",
                    }}
                  >
                    Date
                  </span>{" "}
                  {data.payment_date}
                </p>
                <p style={{ fontSize: "14px", margin: "0 0 6px 0" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "inline-block",
                      minWidth: "146px",
                    }}
                  >
                    Type
                  </span>{" "}
                  {data.payment_type}
                </p>
                <p style={{ fontSize: "14px", margin: "0 0 6px 0" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "inline-block",
                      minWidth: "150px",
                    }}
                  >
                    Status
                  </span>
                  <b
                    style={{
                      color: "green",
                      fontWeight: "normal",
                      margin: "0",
                    }}
                  >
                    {data.payment_status}
                  </b>
                </p>
                <p style={{ fontSize: "14px", margin: "0" }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      display: "inline-block",
                      minWidth: "146px",
                    }}
                  >
                    Amount
                  </span>{" "}
                  ₹ {data.payment_amount}
                </p>
              </td>
            </tr>
            <tr>
              <td
                style={{ width: "50%", padding: "20px", verticalAlign: "top" }}
              >
                <p
                  style={{
                    margin: "0 0 10px 0",
                    padding: "0",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    Name
                  </span>{" "}
                  {data.name}
                </p>
                <p
                  style={{
                    margin: "0 0 10px 0",
                    padding: "0",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    Email
                  </span>{" "}
                  {data.email}
                </p>
                <p
                  style={{
                    margin: "0 0 10px 0",
                    padding: "0",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    Phone
                  </span>{" "}
                  {data.phone}
                </p>
              </td>
              <td
                style={{ width: "50%", padding: "20px", verticalAlign: "top" }}
              >
                <p
                  style={{
                    margin: "0 0 10px 0",
                    padding: "0",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "13px",
                      marginBottom:"5px"
                    }}
                  >
                    Member Type
                  </span>
                  {/* <span style={{ fontSize: "900" }}>{data.member_type}</span> */}
                  <span style={{background: "linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%)", color:"#000",padding:"2px 10px 4px 10px",borderRadius:"3px",fontWidth:"bold",}}>{data.member_type}</span>         
                </p>
                <p
                  style={{
                    margin: "0 0 10px 0",
                    padding: "0",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    Number of Members
                  </span>{" "}
                  {data.number_of_members}
                </p>
                <p
                  style={{
                    margin: "0 0 10px 0",
                    padding: "0",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      fontSize: "13px",
                    }}
                  >
                    Address
                  </span>{" "}
                  {data.address}
                </p>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td
                colspan="2"
                style={{ fontSize: "14px", padding: "50px 15px 0 15px" }}
              >
                <strong style={{ display: "block", margin: "0 0 10px 0" }}>
                  Regards
                </strong>
                <b>Lohana Milan</b>
                <br />
                B/ 512, Titanium city center, B/h Incometax office, <br />
                100 ft Road, Anandnagar Road Satellite, Vejalpur,
                Ahmedabad-380015
                <br />
                <br />
                <b>Phone:</b> +91 9512004470
                <br />
                <b>Email:</b> lohanamilan1987@gmail.com
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default App;
