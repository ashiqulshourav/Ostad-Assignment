export default function Header(){
    function getTitle(title){
        return title;
    }
    return (
        <div className="container-fluid">
            <div className="container mx-auto">
                <header className="p-3">
                    <h1 className="text-center text-4xl font-bold">{getTitle(`Simple react application`)}</h1>
                </header>
            </div>
        </div>
    )
}
