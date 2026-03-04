import Card from "../components/Card"
import Header from "../components/Header"
import SideBar from "../components/SideBar"

function Vista(){

    return(
        <main>
            <SideBar/>
            <Header/>
            <section>
                <Card/>
                <Card/>
            </section>
        </main>
    )
}
export default Vista