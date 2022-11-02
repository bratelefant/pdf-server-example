import React from "react";
import ReactPDF from "@react-pdf/renderer";
import { PDFTemplate } from "./PDFTemplate";

const data = [];

for (let index = 0; index < 200; index++) {
  data.push({ page: "Page " + index });
}

ReactPDF.renderToFile(<PDFTemplate data={data} />, "/tmp/test.pdf");
