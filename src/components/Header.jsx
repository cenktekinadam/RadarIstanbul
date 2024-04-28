import { useSelector } from "react-redux"
import store from "../redux/store"


const Header = () => {
    const { isLoading, isError, flights } = useSelector((store) => store.flight)
    return (
        <header>
            <div>
                <img src="/logo.svg" alt="" />
                <h3>Cnk Radar</h3>
            </div>
            <h2 className="text-warning">İstanbul Semaları</h2>

            <p className="text-danger">
                {isLoading ? 'Uçuşlar Yükleniyor' :
                    isError ? 'ÜZgünüz bir hata oluştu' :
                        'Şuan da semada olan ' + flights.length + ' adet uçak bulundu'}
            </p>
        </header>
    )
}

export default Header