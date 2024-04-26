
import '../styles/main.css';
import '../App.css';


function Contacts() {
    return (
        <>

            <main className="section">
                <div className="container">
                    <h1 className="title-1">Contacts</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Ingushetia, Russia</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+79051234567">+7 (964) 000-00-00</a></p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="z4ng1ew@gmail.com">zmuslimuser@gmail.com</a></p>
                        </li>
                    </ul>

                </div>
            </main>


        </>
    );
}

export default Contacts;
