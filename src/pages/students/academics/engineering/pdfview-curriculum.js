import { useEffect, useRef, useState } from "react";
import { GlobalWorkerOptions, getDocument } from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.entry";
import { useParams } from "react-router-dom";
import Loading from '../images/loading.gif';

const backendUrl = process.env.REACT_APP_DATABASEURL;

GlobalWorkerOptions.workerSrc = pdfWorker;

function SecurePdfViewer() {
    const { parameterId } = useParams();
    const [loading, setLoading] = useState(false);
    const pdfUrl = `${backendUrl}department_syllabus/${parameterId}`;
    const [numPages, setNumPages] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const loadPdf = async () => {
            setLoading(false)
            const loadingTask = getDocument(pdfUrl);
            const pdf = await loadingTask.promise;
            setNumPages(pdf.numPages);

            if (containerRef.current) containerRef.current.innerHTML = "";

            const pagesArray = [];

            const scale = window.innerWidth < 768 ? 0.8 : 1.5; // Responsive scale

            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale });

                const canvas = document.createElement("canvas");
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                const context = canvas.getContext("2d");
                await page.render({ canvasContext: context, viewport }).promise;

                // Responsive canvas styling
                canvas.style.maxWidth = "100%";
                canvas.style.height = "auto";
                canvas.style.display = "block";
                canvas.style.marginBottom = "1rem";

                pagesArray.push(canvas);
            }

            pagesArray.forEach((canvas) => {
                containerRef.current.appendChild(canvas);
            });
        };

        loadPdf();

        // Disable right-click and certain key combinations
        const disableRightClick = (e) => e.preventDefault();
        const disableKeys = (e) => {
            if (
                (e.ctrlKey && ["p", "s"].includes(e.key.toLowerCase())) ||
                (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
                e.key === "F12"
            ) {
                e.preventDefault();
                alert("Printing and saving are disabled!");
            }
        };

        document.addEventListener("contextmenu", disableRightClick);
        document.addEventListener("keydown", disableKeys);

        return () => {
            document.removeEventListener("contextmenu", disableRightClick);
            document.removeEventListener("keydown", disableKeys);
        };
    }, [pdfUrl]);

    return (
        <div style={{ padding: "1rem" ,backgroundColor:"#dce9f2",height:"auto" }}>
            {loading ? <center><img src={Loading} /> </center> :
                <div
                    className="container"
                    ref={containerRef}
                    style={{
                        maxWidth: "100%",
                        overflowX: "auto",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                />
            }
        </div>
    );
}

export default SecurePdfViewer;
