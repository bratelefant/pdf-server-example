import React from "react";
import ReactPDF from "@react-pdf/renderer";
import { PDFTemplate } from "./PDFTemplate";

console.log("This is PID " + process.pid);

const data = [];

for (let index = 0; index < 1000; index++) {
  data.push({ page: "Page " + index });
}

const renderPdf = () =>
  ReactPDF.renderToFile(<PDFTemplate data={data} />, "/tmp/test.pdf", (res) => {
    console.log("finished");
  });

renderPdf();
