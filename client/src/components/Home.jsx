import React, { useEffect, useState } from 'react'

function Home() {

    const [user, setUser] = useState('');
    const [show, setShow] = useState(false);

    const callHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });
            const data = await res.json();
            // console.log(data)

            if (!data.error) {
                setUser(data);
                setShow(true);
            }

            if (!res.status === 200) {
                throw new Error(res.error);
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callHomePage();
    }, [])

    return (
        <>
            <section>
                <div className="container">
                    <div className="congrats">
                        <h1>HELLO {user.name}</h1>
                        <p>{show ? 'HAPPY TO SEE YOU' : 'WELCOME TO MY WEBSIGHT'}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
