import { Suspense } from "react";

export default function ModalLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9999,
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                overflow: "hidden",
                backgroundColor: "rgba(0, 0, 0, .8)",
                color: "#fff",
            }}>
                Loading...
            </div>
        }>
            {children}
        </Suspense>
    );
}