// apikey = 6946c7e33b384dc39472f5ba2fc57f4a
// https://newsapi.org/v2/everything?q=Apple&from=2022-12-10&sortBy=popularity&apiKey=API_KEY

const API_KEY ="6946c7e33b384dc39472f5ba2fc57f4a"
const NEWS_API = "https://newsapi.org/v2/everything/"

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch (`${NEWS_API}?q=${criterioBusqueda}&apikey=${API_KEY}&page=${paginaActual}&language=es&pageSize=10`)
    const noticias = await respuesta.json()
    return noticias
}

