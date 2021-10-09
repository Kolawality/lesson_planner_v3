window.onload = function () {
    document.getElementById("download").addEventListener("click", () => {
        const lesson_plan = this.document.getElementById("lesson_plan");
        console.log(lesson_plan);
        console.log(window);
        var opt = {
            margin: 1,
            filename: "myfile.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        html2pdf().from(lesson_plan).set(opt).save();
    });
};
