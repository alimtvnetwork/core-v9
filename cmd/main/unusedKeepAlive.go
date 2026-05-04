// MIT License
// Keep-alive references for playground entry points so golangci-lint `unused` does not flag them.
package main

var (
	_ = readWriteTest01
	_ = testMakerTesting
	_ = errTypePrintTest01
	_ = infoCreateExample01
	_ = jsonResultPrettyTest01
	_ = jsonResultUnmarshallingTest01
	_ = jsonResultUnmarshallingTest02
	_ = lazyRegExTester01
	_ = pathStatTest01
)