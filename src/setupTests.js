// add some helpful assertions
import "jest-dom/extend-expect";

// clean up after each test
import "react-testing-library/cleanup-after-each";

const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });
