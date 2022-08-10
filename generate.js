
function generate() {
    const doc = new docx.Document({
        sections: [{
            headers: {
                default: new docx.Header({
                    children: [new docx.Paragraph({
                        children: [new docx.TextRun({
                            text: "RECRUITMENT RATES AND TERMS AGREEMENT",
                            bold: true,
                            size: 9,
                        })]
                    })]
                })
            },
            properties: {},
            children: [
                new docx.Paragraph({
                    children: [
                        new docx.TextRun({
                            pageBreakBefore: true,
                            text: "FFIXED TERM AGREEMENT",
                            bold: true,
                            size: 12,
                            
                        }),
                    ]
                })
            ],
        }]
    });
    
    docx.Packer.toBlob(doc).then(blob => {
        console.log(blob);
        saveAs(blob, "example.docx");
        console.log("Document created successfully");
    });
    var header = ''
}

