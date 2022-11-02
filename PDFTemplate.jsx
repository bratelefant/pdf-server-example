import React from "react";
import { Page, Text, View, Document } from "@react-pdf/renderer";

export const PDFTemplate = ({ data }) => {
  return (
    <Document>
      <Page wrap>
        {data.map(({ page }) => (
          <View wrap={false}>
            <Text>{page}</Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};
