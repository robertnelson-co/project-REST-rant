const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <img src="/images/404-cat.jpg" alt='confused cat looking at the camera longingly'></img>
                Foto de <a href="https://unsplash.com/es/@bogdanf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Bogdan Farca</a> en <a href="https://unsplash.com/es/fotos/CEx86maLUSc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404