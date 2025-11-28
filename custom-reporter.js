import fs from 'fs';
import path from 'path';

export default class MarkdownReporter {
    constructor() {
        console.log('MarkdownReporter initialized');
    }

    onFinished(files) {
        console.log('MarkdownReporter onFinished called');
        const reportPath = path.resolve(process.cwd(), 'TEST_REPORT.md');
        const timestamp = new Date().toLocaleString();

        let passedTests = 0;
        let failedTests = 0;
        let totalTests = 0;
        let skippedTests = 0;

        const fileRows = files.map(file => {
            const fileName = path.basename(file.name);
            let fileStatus = '✅ Pass';

            // Check if any test in the file failed
            const hasFailure = file.result?.state === 'fail' || file.tasks.some(t => t.result?.state === 'fail');
            if (hasFailure) {
                fileStatus = '❌ Fail';
            }

            // Count tests
            file.tasks.forEach(task => {
                // Recursively count tests if nested (suites)
                const countTests = (t) => {
                    if (t.type === 'test') {
                        totalTests++;
                        if (t.result?.state === 'pass') passedTests++;
                        else if (t.result?.state === 'fail') failedTests++;
                        else skippedTests++;
                    } else if (t.tasks) {
                        t.tasks.forEach(countTests);
                    }
                };
                countTests(task);
            });

            return `| **${fileName}** | ${fileStatus} |`;
        });

        const overallStatus = failedTests === 0 ? '✅ **PASSED**' : '❌ **FAILED**';

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
        console.log(`\nTest report updated: ${reportPath}`);
    }
}
