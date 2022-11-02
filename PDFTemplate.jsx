import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    margin: 1,
    padding: 1,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  col: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const PDFTemplate = ({ data }) => {
  return (
    <Document>
      <Page wrap>
        {data.map(({ page }) => (
          <View key={page} style={styles.page} break>
            <Image source={"./react-pdf-logo.png"} />
            <View style={styles.section}>
              <Text>{page}</Text>
              <Text>{page}</Text>
              <Text>{page}</Text>
              <Text>{page}</Text>
            </View>
            <View style={styles.section}>
              <View style={styles.row}>
                <Text>{page}</Text>
              </View>
              <Text>{page}</Text>
              <Text>{page}</Text>
              <Text>{page}</Text>
              <Text>{page}</Text>
              <Text>{page}</Text>
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};
