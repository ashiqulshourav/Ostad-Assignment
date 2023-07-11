export default function Footer(){
    function getFooter(){
        return (
            <>
                <p className="text-center">copyright &copy; by <a  href="https://www.linkedin.com/in/ashiqulshourav/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">ashiqulshourav</a></p>
            </>
        );
    }
    return (
        <div className="container-fluid fixed bottom-0 w-full">
            <div className="container mx-auto">
                <footer className="p-3">
                    {getFooter()}
                </footer>
            </div>
        </div>
    )
}