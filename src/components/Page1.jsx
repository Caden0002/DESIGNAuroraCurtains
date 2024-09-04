import { AuroraBackground } from "./aurora-background";

function Page1(props) {
    return (
            <AuroraBackground showRadialGradient={true}>
                <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl">
                    Page 1
                </div>
            </AuroraBackground>
    );
}

export default Page1;