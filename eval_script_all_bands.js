function setup() {
  return {
    input: [
      "B01","B02","B03","B04","B05","B06","B07","B08","B8A","B09","B11","B12","dataMask"
    ],
    output: { bands: 13, sampleType: "FLOAT32" }
  };
}

function evaluatePixel(s) {
  return [
    s.B01, s.B02, s.B03, s.B04, s.B05, s.B06, s.B07, s.B08, s.B8A, s.B09, s.B11, s.B12, s.dataMask
  ];
}
