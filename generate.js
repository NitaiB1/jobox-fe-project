
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
                    bold: true,
                    size: 12,
                    children: [
                        new docx.TextRun({
                            text: "FIXED TERM AGREEMENT",
                            break: 3,
                        }),
                    ]
                }),
                new docx.Paragraph({
                    bold: true,
                    size: 12,
                    children: [
                        new docx.TextRun({
                            text: "between",
                            break: 3,
                        }),
                    ]
                }),
                new docx.Paragraph({
                    bold: true,
                    size: 12,
                    alignment: docx.AlignmentType.CENTER,
                    children: [
                        new docx.TextRun({
                            text: "BMF ATTORNEYS",
                            break: 3,
                        }),
                    ]
                }),
                new docx.Paragraph({
                    bold: true,
                    size: 12,
                    alignment: docx.AlignmentType.CENTER,
                    children: [
                        new docx.TextRun({
                            text: "with company registration number 2022/123456/07",
                            break: 3,
                        }),
                    ]
                }),
                new docx.Paragraph({
                    bold: true,
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: "and",
                            break: 3,
                        }),
                    ]
                }),
                new docx.Paragraph({
                    bold: true,
                    size: 12,
                    alignment: docx.AlignmentType.CENTER,
                    children: [
                        new docx.TextRun({
                            text: "client name",
                            break: 3,
                        }),
                    ]
                }),
                new docx.Paragraph({
                    bold: true,
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: 'Collectively referred herein as the parties',
                            break: 3,
                        }),
                        new docx.PageBreak()
                    ]
                }),
                
                //page 2
                new docx.Paragraph({
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: '1. Payment terms: ',
                        }),
                    ]
                }),
                new docx.Paragraph({
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: 'BMF Attorney’s fee [Insert Payment Amount] (excluding VAT). The retainer fee can be paid upfront, or month-to-month and the payment terms can be payable as follows:',
                            bullet:{level:0}
                        }),
                    ]
                }),
                new docx.Paragraph({
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: 'Upfront:',
                            bullet:{level:1}
                        }),
                    ]
                }),
                new docx.Paragraph({
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: 'Three-twelfths of the fee during the probation period in 3 equal instalments by the 7th day of each month',
                            bullet:{level:2}
                        }),
                    ]
                }),
                new docx.Paragraph({
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: 'Nine-twelfths of the fee upon conclusion of the probation period of employment payable on the 7th day of the 4th month.',
                            bullet:{level:2}
                        }),
                    ]
                }),
                new docx.Paragraph({
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: 'Month-to-month:',
                            bullet:{level:1}
                        }),
                    ]
                }),
                new docx.Paragraph({
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: 'The month-to-month fee shall be paid by the 7th day of each month',
                            bullet:{level:2}
                        }),
                    ]
                }),
                new docx.Paragraph({
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: 'No variation or amendment to this Agreement shall be of any effect unless such amendment is put in writing and signed by all parties',
                            bullet:{level:0}
                        }),
                    ]
                }),
                new docx.Paragraph({
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: 'Any documentation prepared by BMF Attorneys remains its property',
                            bullet:{level:0},
                            break:2,
                        }),
                    ]
                }),
                new docx.Paragraph({
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: '2.  Appointment',
                        }),
                    ]
                }),
                new docx.Paragraph({
                    size: 12,
                    alignment: docx.AlignmentType.LEFT,
                    children: [
                        new docx.TextRun({
                            text: '2.1.	The Client has procured the services of BMF Attorneys and hereby accepts the appointment as an independent contractor of the Client for a fixed period of time.',
                            bullet:{level:1}
                        }),
                    ]
                }),
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

