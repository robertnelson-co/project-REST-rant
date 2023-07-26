const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div>
                    <img src="/images/food-spread.jpg" alt='A spread of food!'></img>
                    Foto de <a href="https://unsplash.com/es/@lvnatikk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lily Banse</a> en <a href="https://unsplash.com/es/fotos/-YHSwy6uqvk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home