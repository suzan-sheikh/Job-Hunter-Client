import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const MyDocument = ({ jobs }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>You Applied Total Jobs is: {jobs.length}</Text>
        <Text>Applied Job Title is:</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellHeader}>Title</Text>
            <Text style={styles.tableCellHeader}>Company</Text>
            <Text style={styles.tableCellHeader}>Location</Text>
            {/* Add more columns as needed */}
          </View>
          {jobs.map(job => (
            <View key={job._id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{job.job_title}</Text>
              <Text style={styles.tableCell}>{job.company}</Text>
              <Text style={styles.tableCell}>{job.location}</Text>
              {/* Add more cells for additional job information */}
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    border: "1px solid #000",
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #000",
  },
  tableCellHeader: {
    flex: 1,
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
    padding: 5,
  },
});

export default MyDocument;
