import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const resultsPath = path.resolve(__dirname, '../test-results.json');
const reportPath = path.resolve(__dirname, '../TEST_REPORT.md');

try {
    const data = fs.readFileSync(resultsPath, 'utf8');
    const results = JSON.parse(data);

    const timestamp = new Date().toLocaleString();
    const totalTests = results.numTotalTests;
    const passedTests = results.numPassedTests;
    const failedTests = results.numFailedTests;
    const skippedTests = results.numPendingTests;
    const overallStatus = failedTests === 0 ? '✅ **PASSED**' : '❌ **FAILED**';

    const fileRows = results.testResults.map(file => {
        const fileName = path.basename(file.name);
        const fileStatus = file.status === 'passed' ? '✅ Pass' : '❌ Fail';
        return `| **${fileName}** | ${fileStatus} |`;
    });

    const content = `# Al Goni Tours and Travels - Test Report

**Last Updated:** ${timestamp}

## 1. Executive Summary
**Overall Status:** ${overallStatus}
**Total Tests:** ${totalTests}
**Passed:** ${passedTests}
**Failed:** ${failedTests}
**Skipped:** ${skippedTests}

## 2. Test Suite Breakdown

| File | Status |
|------|--------|
${fileRows.join('\n')}

## 3. How to Run Tests
- **Run All Tests:** \`npm test\`
- **Generate Coverage:** \`npm run coverage\`
`;

    fs.writeFileSync(reportPath, content);
    console.log(`Test report generated at: ${reportPath}`);

} catch (error) {
    console.error('Error generating test report:', error);
    process.exit(1);
}
