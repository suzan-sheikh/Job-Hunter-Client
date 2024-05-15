
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const MyDocument = ({ jobs }) => {
  let serialNumber = 0; // Initialize serial number variable
  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.center}>
            <Text>APPLIED JOB DETAILS</Text>
            <Text>You Applied Total Jobs is: {jobs.length}</Text>
          </View>
          <Text>Applied Job Summary:</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCellHeader}>Serial No.</Text>
              <Text style={styles.tableCellHeader}>Title</Text>
              <Text style={styles.tableCellHeader}>Job Category</Text>
              <Text style={styles.tableCellHeader}>Salary Range</Text>
              <Text style={styles.tableCellHeader}>Post Date</Text>
              <Text style={styles.tableCellHeader}>Deadline</Text>
              {/* Add more columns as needed */}
            </View>
            {jobs.map(job => (
              <View key={job._id} style={styles.tableRow}>
                <Text style={styles.tableCell}>{++serialNumber}</Text>
                <Text style={styles.tableCell}>{job.job_title}</Text>
                <Text style={styles.tableCell}>{job.category}</Text>
                <Text style={styles.tableCell}>${`${job.min_salary} - ${job.max_salary}`}</Text>
                <Text style={styles.tableCell}>{formatDate(job.postDate)}</Text>
                <Text style={styles.tableCell}>{formatDate(job.dedLine)}</Text>
                {/* Add more cells for additional job information */}
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}

// Function to format date string
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(); // Adjust the format according to your needs
};

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
  center: {
    alignItems: "center",
    marginBottom: 10,
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
    borderBottom: "1px solid #000", // Add border to bottom of each row
  },
  tableCellHeader: {
    flex: 1,
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
    borderRight: "1px solid #000", // Add border to right of each cell
    textAlign: "center", // Center text horizontally
  },
  tableCell: {
    flex: 1,
    fontSize: 10,
    padding: 5,
    borderRight: "1px solid #000", // Add border to right of each cell
    textAlign: "center", // Center text horizontally
  },
});

export default MyDocument;
